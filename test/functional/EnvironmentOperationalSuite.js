var should      = require('should'),
    promised    = require('should-promised'),
    q           = require('q');

describe("Environment Operational Suite: ", function(){

    it("true should equal true always", function(){
        true.should.equal(true);
    });

    it("1 should be less than 2 always", function(){
        (1).should.be.lessThan(2);
    });

    it("Promise testing operational", function(){
        var deferred = q.defer();
        deferred.promise.should.be.Promise;
    });

});