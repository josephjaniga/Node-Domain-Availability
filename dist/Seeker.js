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

        var records = [
                {type:'A',      results:null, deferred:q.defer(), err:null},
                {type:'AAAA',   results:null, deferred:q.defer(), err:null},
                {type:'MX',     results:null, deferred:q.defer(), err:null},
                {type:'TXT',    results:null, deferred:q.defer(), err:null},
                {type:'SRV',    results:null, deferred:q.defer(), err:null},
                //{type:'PTR',  results:null, deferred:q.defer(), err:null},
                {type:'NS',     results:null, deferred:q.defer(), err:null},
                {type:'CNAME',  results:null, deferred:q.defer(), err:null},
                //{type:'SOA',  results:null, deferred:q.defer(), err:null},
            ],
            vows = [];

        responseObject.domain = string_LowerCaseDomainName;

        records.forEach(function(element, index, array){

            dns.resolve(string_LowerCaseDomainName, element.type, function(err, addresses){

                element.results = addresses;
                element.err = err;

                if ( err != null && err.code != "ENOTFOUND" ){
                    // TODO: HANDLE THESE ERRORS
                    //console.log({"name": string_LowerCaseDomainName, "error": err});
                }

                // if theres an error - no ips mapped = AVAILABLE
                if ( element.err === dns.NOTFOUND || ( element.results != null && element.results.length == 0 ) ){
                    element.deferred.resolve();
                } else {

                    if ( element.results ){

                        if ( element.type == "MX" ){
                            var tempMXResults = [];
                            for ( var el in element.results ){
                                tempMXResults.push(element.results[el].priority + " - " + element.results[el].exchange);
                            }
                            responseObject.errors.push("[DNS] " + element.type + " Records Found: " + tempMXResults);
                        } else {
                            responseObject.errors.push("[DNS] " + element.type + " Records Found: " + element.results);
                        }

                        element.deferred.reject(new Error("WARNING: DNS Records Found."));
                    } else {
                        element.deferred.resolve();
                    }
                }
            });

            // process this promise and add it to the list
            vows.push(element.deferred.promise.then(available, taken));

        });

        var available   = function(){return true;},
            taken       = function(e){
                return false;
            };

        // if all the promises resolve were good, if one fails we reject
        return q.all(vows).then(
            function(){
                responseObject.completedSteps.push("Hostname Resolution Check");
                responseObject.completedSteps.push("No DNS Records Found.");
                responseObject.hostnameResolution = false;
                return true;
            },
            function(e){
                responseObject.errors.push(e.message);
                responseObject.completedSteps.push("Hostname Resolution Check");
                //responseObject.completedSteps.push("WARNING: DNS Records Found.");
                responseObject.hostnameResolution = true;
                return false;
            }
        );

        // THE OLD WAY
        //return deferred.promise.then(available, taken);
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
