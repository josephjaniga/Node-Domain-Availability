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

module.exports = function Seeker() {
    "use strict";

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

        var deferred = q.defer();

        //dns.lookup(string_LowerCaseDomainName, 4, function(err, address, family){
        dns.resolve4(string_LowerCaseDomainName, function(err, address){

            lookup.err = err;
            //lookup.address = address;
            // lookup.family = family;

            //console.log("error: " + lookup.err);
            // console.log("address: " + lookup.address);

            // if theres an error - no ips mapped = AVAILABLE
            if ( lookup.err === dns.NOTFOUND ){
                //console.log(string_LowerCaseDomainName + " resolved - available");
                deferred.resolve();
            } else {
                //console.log(string_LowerCaseDomainName + " rejected - taken");
                deferred.reject();
            }
        });

        var available   = function(){ return true; },
            taken       = function(){ return false; };

        return deferred.promise.then(available, taken);

    };

    this.getTLD = function( string_LowerCaseDomainName ){
        var split = string_LowerCaseDomainName.split(".");
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
                var whoIsServer = whoIsData.registrars[tld][0],
                    notFoundString = whoIsData.registrars[tld][1]; // NOT FOUND IS GOOD :D
            } else {
                throw "TLD WHOIS Server not found";
            }

            socket.connect(43, whoIsServer);
            socket.write(out);
            socket.on('data', function (d) {
                whoIsTextResponse += d.toString();
            });
            socket.on('close', function(){
                // resolve a promise
                deferred.resolve([whoIsTextResponse, notFoundString]);
            });

        } else {
            // hostname maps to an IP address
            setTimeout(function(){
                deferred.reject("hostname mapped to ip address");
            }, 100);
        }

        // either way return the promise
        return deferred.promise.then(this.resolve, this.reject);
    };

    this.resolve = function(responseArray){
        var response = responseArray[0],
            notFoundString = responseArray[1];
        if ( !response.includes(notFoundString) ){
            return false;
        } else {
            /* NOT FOUND MEANS: _ _       _     _      _
             ...../\            (_) |     | |   | |    | |
             ..../  \__   ____ _ _| | __ _| |__ | | ___| |
             .../ /\ \ \ / / _` | | |/ _` | '_ \| |/ _ \ |
             ../ ____ \ V / (_| | | | (_| | |_) | |  __/_|
             ./_/    \_\_/ \__,_|_|_|\__,_|_.__/|_|\___(*/
            return true;
        }
    };

    this.reject = function(error){
        return false;
    };

};
