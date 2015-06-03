var DNSSeeker = require('./../../dist/DNSSeeker.js'),
    should = require('should');

describe("Seeker - Single Domain Tests: ", function(done){

    var s = new DNSSeeker();

    // negative tests... these domains should not be available
    it("Travis-CI.org availability promise should return false", function(){
        return s.isAvailable("travis-ci.org").should.eventually.equal(false);
    });
    
    it("USA.gov availability promise should return false", function(){
        return s.isAvailable("usa.gov").should.eventually.equal(false);
    });
    
    it("Google.com availability promise should return false", function(){
        this.timeout(5000);
        return s.isAvailable("google.com").should.eventually.equal(false);
    });

    it("Comcast.net availability promise should return false", function(){
        this.timeout(5000);
        return s.isAvailable("comcast.net").should.eventually.equal(false);
    });

    // positive tests... these domains should be available
    it("RedHotLizardCaltrops.ninja availability promise should return true", function(){
        return s.isAvailable("RedHotLizardCaltrops.ninja").should.eventually.equal(true);
    });

    it("SomeKindOfLazerChicken.travel availability promise should return true", function(){
        return s.isAvailable("SomeKindOfLazerChicken.travel").should.eventually.equal(true);
    });

    it("AnAppleADayIsLikeAlotOfFruit.agency availability promise should return true", function(){
        return s.isAvailable("AnAppleADayIsLikeAlotOfFruit.agency").should.eventually.equal(true);
    });
    
});

describe("Seeker - Registrar Tests: ", function(){

    var s = new DNSSeeker();

    it("WhoIsData Registrar Validity Tests", function(){
        /**
         * RUN EACH registrar for a sample hit
         */

        for( tld in s.whoIsData.registrars ){
            // open socket connection on 43?
        }
    })

});