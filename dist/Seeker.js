// TLDS text file on the web updated daily
// http://data.iana.org/TLD/tlds-alpha-by-domain.txt

// registry list
// https://www.icann.org/resources/pages/listing-2012-02-25-en

// Who Is Spec
// http://tools.ietf.org/html/rfc3912

"use strict";

// ECMAScript 6 Polyfill Includes
if (!String.prototype.includes) {
    String.prototype.includes = function() {'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

var socket      = require('net').Socket(),  // build in node
    q           = require('q'),             // npm q
    whoIsData   = require('./WhoIsData.js'),// domain registrars information
    dns         = require('dns');           // node v0.12.x+ dns library - https://nodejs.org/api/dns.html

// cheesy hack to remove the warning from running too many node tests    
socket._maxListeners = 0;

module.exports = function Seeker() {
    "use strict";

    var responseObject = {
        completedSteps: [],
        errors: []
    };

    this.whoIsData = whoIsData.registrars;

    this.checkHostnameResolution = function( string_LowerCaseDomainName ){

        /**
         * is this domain available?    - available = return true = YES
         *                              - taken = return false = NO
         */

        var lookup = {
            "err": null,
            "address": null,
            "family": null
        };

        responseObject.domain = string_LowerCaseDomainName;

        var deferred = q.defer();

        dns.resolve4(string_LowerCaseDomainName, function(err, address){

            lookup.err = err;
            //lookup.address = address;
            // lookup.family = family;

            if ( err != null && err.code != "ENOTFOUND" ){
                console.log({"name": string_LowerCaseDomainName, "error": err});
            }

            // if theres an error - no ips mapped = AVAILABLE
            if ( lookup.err === dns.NOTFOUND ){
                //console.log(string_LowerCaseDomainName + " resolved - available");
                responseObject.hostnameResolution = false;
                deferred.resolve();
            } else {
                //console.log(string_LowerCaseDomainName + " rejected - taken");
                responseObject.hostnameResolution = true;
                deferred.reject(new Error("Hostname Resolved to IP Address"));
            }
        });

        var available   = function(){
                responseObject.completedSteps.push("Hostname Resolution Check");
                return true;
            },
            taken       = function(e){
                responseObject.completedSteps.push("Hostname Resolution Check");
                responseObject.errors.push(e.message);
                return false;
            };

        return deferred.promise.then(available, taken);

    };

    this.getTLD = function( string_LowerCaseDomainName ){
        var split = string_LowerCaseDomainName.split(".");
        responseObject.completedSteps.push("Ascertain TLD");
        return split[split.length-1];
    };

    // TODO: Split out into testable methods
    this.isAvailable = function( string_DomainName ){
        var lowercaseDomainName = string_DomainName.toLowerCase(),
            tld = '',
            out = lowercaseDomainName + '\r\n',
            whoIsTextResponse = "",
            deferred = q.defer();

        // check the actual domain for an ip address mapping
        if ( this.checkHostnameResolution(lowercaseDomainName) ){
            tld = this.getTLD(lowercaseDomainName);

            if (tld in this.whoIsData) {

                responseObject.completedSteps.push("TLD Validated");

                var whoIsServer = whoIsData.registrars[tld][0],
                    notFoundString = whoIsData.registrars[tld][1]; // NOT FOUND IS GOOD :D

                socket.connect(43, whoIsServer);
                socket.write(out);
                //socket.write("?\r\n");
                socket.on('data', function (d) {
                    whoIsTextResponse += d.toString();
                });
                socket.on('close', function(){
                    // resolve a promise
                    responseObject.whoIsTestResponse = whoIsTextResponse;
                    responseObject.notFoundString = notFoundString;
                    responseObject.completedSteps.push("WHOIS Lookup Performed");
                    deferred.resolve([whoIsTextResponse, notFoundString]);
                });

            } else {
                //TODO: FIX ME!?!
                responseObject.errors.push("Unable to check domain availability.");
                deferred.reject(new Error("INVALID TLD - WHOIS Server for: '"+ tld +"' not found"));
            }


        } else {
            // hostname maps to an IP address
            deferred.reject(new Error("Hostname mapped to existing ip address"));
        }

        // either way return the promise
        return deferred.promise.then(this.resolve, this.reject);
    };

    /**
     * TODO:
     * Where do these fit in?
     */

    this.resolve = function(responseArray){
        var response = responseArray[0],
            notFoundString = responseArray[1];
        if ( !response.includes(notFoundString) ){
            responseObject.whoIsAvailability = false;
            responseObject.available = false;
        } else {

            responseObject.whoIsAvailability = true;

            if ( responseObject.hostnameResolution ){
                responseObject.errors.push("Hostname Resolved when WhoIs could not find domain.");
                responseObject.errors.push("WARNING - This domain may be locked or in a limbo state.");
                responseObject.available = false;
            } else {
                /* NOT FOUND MEANS:  _ _       _     _      _
                 ...../\            (_) |     | |   | |    | |
                 ..../  \__   ____ _ _| | __ _| |__ | | ___| |
                 .../ /\ \ \ / / _` | | |/ _` | '_ \| |/ _ \ |
                 ../ ____ \ V / (_| | | | (_| | |_) | |  __/_|
                 ./_/    \_\_/ \__,_|_|_|\__,_|_.__/|_|\___(*/
                responseObject.available = true;
            }
        }
        return responseObject;
    };

    this.reject = function(e){

        try {
            throw e;
        }
        catch(e) {
            console.log(e);
            responseObject.errors.push(e.message);
        }

        return responseObject;
    };



};
