var should = require('should'),
    promised = require('should-promised'),
    Seeker = require('./../../dist/Seeker.js');

describe("Seeker - Single Domain Tests: ", function(){

    var s = new Seeker();

    var google_com  = s.isAvailable("google.com"),
        yahoo_com   = s.isAvailable("yahoo.com"),
        redhotlizardcaltrops_com  = s.isAvailable("RedHotLizardCaltrops.com");

    it("Google.com availability promise should return false", function(){
        google_com.should.be.Promise;
        google_com.should.be.eventually.equal(false);
    });

    it("Yahoo.com availability promise should return false", function(){
        yahoo_com.should.be.Promise;
        yahoo_com.should.be.eventually.equal(false);
    });

    it("RedHotLizardCaltrops.com availability promise should return false", function(){
        redhotlizardcaltrops_com.should.be.Promise;
        redhotlizardcaltrops_com.should.be.eventually.equal(true);
    });
    
});
