var should = require('should');

describe("a basic suite", function(){

    it("true should equal true always", function(){
        true.should.equal(true);
    });

    it("1 should be less than 2 always", function(){
        (1).should.be.lessThan(2);
    });

});