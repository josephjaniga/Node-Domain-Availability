var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

process.setMaxListeners(0);

describe("Seeker - Single Domain Tests: ", function(done){

    var s = new Seeker();

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