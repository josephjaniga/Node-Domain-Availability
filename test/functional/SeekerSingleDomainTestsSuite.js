var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

describe("Seeker - Single Domain Tests: ", function(done){

    var s = new Seeker();

    // negative tests... these domains should not be available
    it("Google.com availability promise should return false", function(){
        return s.isAvailable("google.com").should.eventually.equal(false);
    });

    it("Yahoo.com availability promise should return false", function(){
        return s.isAvailable("yahoo.com").should.eventually.equal(false);
    });

    it("AOL.com availability promise should return false", function(){
        return s.isAvailable("aol.com").should.eventually.equal(false);
    });

    // positive tests... these domains should be available
    it("RedHotLizardCaltrops.com availability promise should return false", function(){
        return s.isAvailable("RedHotLizardCaltrops.com").should.eventually.equal(true);
    });

    it("SomeKindOfLazerChicken.com availability promise should return false", function(){
        return s.isAvailable("SomeKindOfLazerChicken.com").should.eventually.equal(true);
    });

    it("AnAppleADayIsLikeAlotOfFruit.com availability promise should return false", function(){
        return s.isAvailable("AnAppleADayIsLikeAlotOfFruit.com").should.eventually.equal(true);
    });
    
});

describe("Seeker - Registrar Tests: ", function(){

    var s = new Seeker();

    it("WhoIsData Registrar Validity Tests", function(){
        /**
         * RUN EACH registrar for a sample hit
         */

        for( tld in s.whoIsData.registrars ){
            // open socket connection on 43?
        }
    })

});