var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

describe("Seeker - Unit Testing: ", function(){

    var s;

    beforeEach(function(){
        s = new Seeker();
    });

    // TODO: whoisdata

    // checkHostNameResolution
    it("checkHostNameResolution (Force Failure) - with injected method override", function(){
        // replace Seeker method call
        s.checkHostnameResolution = function( string_LowerCaseDomain ){
            return false;
        };
        return s.isAvailable("RedHotLizardCaltrops.com").should.eventually.equal(false);
    });

    // TODO: getTLD

    // TODO: isAvailable

    // reject
    it("reject method - should always return false", function(){
        return s.reject(null).should.equal(false);
    });

    // resolve
    it("resolve method - should return false if doesnt find string[1] in string[0]", function(){
        return s.resolve(['hello', 'hell']).should.equal(true);
    });

    it("resolve method - should return true if does find string[1] in string[0]", function(){
        return s.resolve(['hell', 'new mexico']).should.equal(false);
    });

});