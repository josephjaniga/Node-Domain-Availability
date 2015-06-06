var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

describe("Seeker - Unit Testing: ", function(){

    var s;

    beforeEach(function(){
        s = new Seeker();
    });

    // TODO: whoisdata

    // FIXME: checkHostNameResolution
    //it("checkHostNameResolution (Force Failure) - with injected method override", function(){
    //    // replace Seeker method call
    //    s.checkHostnameResolution = function( string_LowerCaseDomain ){
    //        return false;
    //    };
    //    return s.isAvailable("RedHotLizardCaltrops.com").should.eventually.equal(false);
    //});

    // TODO: getTLD

    // TODO: isAvailable

    // FIXME: reject
    //it("reject method - should always return false", function(){
    //    return s.reject(null).should.equal(false);
    //});

    // resolve
    it("resolve method - substring found / expect true", function(){
        return s.resolve(['hello', 'hell']).available.should.equal(true);
    });

    it("resolve method - substring not found / expect false", function(){
        return s.resolve(['hell', 'new mexico']).available.should.equal(false);
    });

});