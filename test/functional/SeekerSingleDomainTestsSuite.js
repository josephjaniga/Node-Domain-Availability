var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

process.setMaxListeners(0);

describe("Seeker - Single Domain Tests: ", function(){

    var s = new Seeker();

    // Negative tests... these domains should not be available
    it("Travis-CI.org availability promise should return false", function(){
        s.isAvailable("travis-ci.org").should.eventually.equal(false);
    });
    
    it("USA.gov availability promise should return false", function(){
        s.isAvailable("usa.gov").should.eventually.equal(false);
    });
    
    it("Google.com availability promise should return false", function(){
        s.isAvailable("google.com").should.eventually.equal(false);
    });

    it("Comcast.net availability promise should return false", function(){
        s.isAvailable("comcast.net").should.eventually.equal(false);
    });

    // Positive tests... these domains should be available
    it("RedHotLizardCaltrops.ninja availability promise should return true", function(){
        s.isAvailable("RedHotLizardCaltrops.ninja").should.eventually.equal(true);
    });

    it("SomeKindOfLazerChicken.travel availability promise should return true", function(){
        s.isAvailable("SomeKindOfLazerChicken.travel").should.eventually.equal(true);
    });

    it("AnAppleADayIsLikeAlotOfFruit.agency availability promise should return true", function(){
        s.isAvailable("AnAppleADayIsLikeAlotOfFruit.agency").should.eventually.equal(true);
    });
    
});