var Seeker = require('./../../dist/DNSSeeker.js'),
    should = require('should');

describe("DNSSeeker - Unit Testing: ", function(){

    var ds;

    beforeEach(function(){
        ds = new DNSSeeker();
    });

    it("Available Domain with node v0.12.x DNS - expect true", function(){
        return ds.isAvailable("RedHotLizardCaltrops.com").should.eventually.equal(true);
    });
	
	it("Unavailable Domain with node v0.12.x DNS - expect false", function(){
        return ds.isAvailable("google.com").should.eventually.equal(false);
    });

});