var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

describe("WhoIsData - Registrar Accuracy Tests: ", function(){

    /**
     * RUN EACH registrar for a sample hit
     */

    var s = new Seeker();

    it("COM", function(){
        s.isAvailable("google.com").should.eventually.match(/(true|false)/);
    });

    it("NET", function(){
        s.isAvailable("google.net").should.eventually.match(/(true|false)/);
    });

    it("ORG", function(){
        s.isAvailable("google.org").should.eventually.match(/(true|false)/);
    });

    it("CO.UK", function(){
        s.isAvailable("google.co.uk").should.eventually.match(/(true|false)/);
    });

    it("IO", function(){
        s.isAvailable("google.io").should.eventually.match(/(true|false)/);
    });

    it("COMPUTER", function(){
        s.isAvailable("google.computer").should.eventually.match(/(true|false)/);
    });

    it("AC", function(){
        s.isAvailable("google.ac").should.eventually.match(/(true|false)/);
    });

    it("ACADEMY", function(){
        s.isAvailable("google.academy").should.eventually.match(/(true|false)/);
    });

    it("ACTOR", function(){
        s.isAvailable("google.actor").should.eventually.match(/(true|false)/);
    });

    it("AE", function(){
        s.isAvailable("google.ae").should.eventually.match(/(true|false)/);
    });

    it("AERO", function(){
        s.isAvailable("google.aero").should.eventually.match(/(true|false)/);
    });

    it("AF", function(){
        s.isAvailable("google.af").should.eventually.match(/(true|false)/);
    });

    it("AG", function(){
        s.isAvailable("google.ag").should.eventually.match(/(true|false)/);
    });

    it("AGENCY", function(){
        s.isAvailable("google.agency").should.eventually.match(/(true|false)/);
    });

    it("AI", function(){
        s.isAvailable("google.ai").should.eventually.match(/(true|false)/);
    });

    it("AM", function(){
        s.isAvailable("google.am").should.eventually.match(/(true|false)/);
    });

    it("ARCHI", function(){
        s.isAvailable("google.archi").should.eventually.match(/(true|false)/);
    });

    it("ARPA", function(){
        s.isAvailable("google.arpa").should.eventually.match(/(true|false)/);
    });

    it("AS", function(){
        s.isAvailable("google.as").should.eventually.match(/(true|false)/);
    });

    it("ASIA", function(){
        s.isAvailable("google.asia").should.eventually.match(/(true|false)/);
    });

    it("ASSOCIATES", function(){
        s.isAvailable("google.associates").should.eventually.match(/(true|false)/);
    });

    it("AT", function(){
        s.isAvailable("google.at").should.eventually.match(/(true|false)/);
    });

    it("AU", function(){
        s.isAvailable("google.au").should.eventually.match(/(true|false)/);
    });

    it("AW", function(){
        s.isAvailable("google.aw").should.eventually.match(/(true|false)/);
    });

    it("AX", function(){
        s.isAvailable("google.ax").should.eventually.match(/(true|false)/);
    });

    it("AZ", function(){
        s.isAvailable("google.az").should.eventually.match(/(true|false)/);
    });
});