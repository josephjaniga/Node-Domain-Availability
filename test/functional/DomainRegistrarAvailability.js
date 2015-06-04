var Seeker = require('./../../dist/Seeker.js'),
    should = require('should');

process.setMaxListeners(0);

describe("WhoIsData - Registrar Accuracy Tests: ", function(){

    /**
     * RUN EACH registrar for a sample hit
     */
    var s = new Seeker();

    /**
     * BIG 6
     */
    it("COM",           function(){ s.isAvailable("google.com").should.eventually.match(/(true|false)/); });
    it("NET",           function(){ s.isAvailable("google.net").should.eventually.match(/(true|false)/); });
    it("ORG",           function(){ s.isAvailable("google.org").should.eventually.match(/(true|false)/); });
    it("CO.UK",         function(){ s.isAvailable("google.co.uk").should.eventually.match(/(true|false)/); });
    it("IO",            function(){ s.isAvailable("google.io").should.eventually.match(/(true|false)/); });
    it("COMPUTER",      function(){ s.isAvailable("google.computer").should.eventually.match(/(true|false)/); });

    /**
     * A
     */
    it("AC",            function(){ s.isAvailable("google.ac").should.eventually.match(/(true|false)/); });
    it("ACADEMY",       function(){ s.isAvailable("google.academy").should.eventually.match(/(true|false)/); });
    it("ACTOR",         function(){ s.isAvailable("google.actor").should.eventually.match(/(true|false)/); });
    it("AE",            function(){ s.isAvailable("google.ae").should.eventually.match(/(true|false)/); });
    it("AERO",          function(){ s.isAvailable("google.aero").should.eventually.match(/(true|false)/); });
    it("AF",            function(){ s.isAvailable("google.af").should.eventually.match(/(true|false)/); });
    it("AG",            function(){ s.isAvailable("google.ag").should.eventually.match(/(true|false)/); });
    it("AGENCY",        function(){ s.isAvailable("google.agency").should.eventually.match(/(true|false)/); });
    it("AI",            function(){ s.isAvailable("google.ai").should.eventually.match(/(true|false)/); });
    it("AM",            function(){ s.isAvailable("google.am").should.eventually.match(/(true|false)/); });
    it("ARCHI",         function(){ s.isAvailable("google.archi").should.eventually.match(/(true|false)/); });
    it("ARPA",          function(){ s.isAvailable("google.arpa").should.eventually.match(/(true|false)/); });
    it("AS",            function(){ s.isAvailable("google.as").should.eventually.match(/(true|false)/); });
    it("ASIA",          function(){ s.isAvailable("google.asia").should.eventually.match(/(true|false)/); });
    it("ASSOCIATES",    function(){ s.isAvailable("google.associates").should.eventually.match(/(true|false)/); });
    it("AT",            function(){ s.isAvailable("google.at").should.eventually.match(/(true|false)/); });
    it("AU",            function(){ s.isAvailable("google.au").should.eventually.match(/(true|false)/); });
    it("AW",            function(){ s.isAvailable("google.aw").should.eventually.match(/(true|false)/); });
    it("AX",            function(){ s.isAvailable("google.ax").should.eventually.match(/(true|false)/); });
    it("AZ",            function(){ s.isAvailable("google.az").should.eventually.match(/(true|false)/); });

    /**
     * B
     */
    it("BAR",           function(){ s.isAvailable("google.bar").should.eventually.match(/(true|false)/); });
    it("BARGAINS",      function(){ s.isAvailable("google.bargains").should.eventually.match(/(true|false)/); });
    it("BE",            function(){ s.isAvailable("google.be").should.eventually.match(/(true|false)/); });
    it("BERLIN",        function(){ s.isAvailable("google.berlin").should.eventually.match(/(true|false)/); });
    it("BG",            function(){ s.isAvailable("google.bg").should.eventually.match(/(true|false)/); });
    it("BI",            function(){ s.isAvailable("google.bi").should.eventually.match(/(true|false)/); });
    it("BIKE",          function(){ s.isAvailable("google.bike").should.eventually.match(/(true|false)/); });
    it("BIZ",           function(){ s.isAvailable("google.biz").should.eventually.match(/(true|false)/); });
    it("BJ",            function(){ s.isAvailable("google.bj").should.eventually.match(/(true|false)/); });
    it("BLACKFRIDAY",   function(){ s.isAvailable("google.blackfriday").should.eventually.match(/(true|false)/); });
    it("BN",            function(){ s.isAvailable("google.bn").should.eventually.match(/(true|false)/); });
    it("BOUTIQUE",      function(){ s.isAvailable("google.boutique").should.eventually.match(/(true|false)/); });
    it("BUILD",         function(){ s.isAvailable("google.build").should.eventually.match(/(true|false)/); });
    it("BUILDERS",      function(){ s.isAvailable("google.builders").should.eventually.match(/(true|false)/); });
    it("BW",            function(){ s.isAvailable("google.bw").should.eventually.match(/(true|false)/); });
    it("BY",            function(){ s.isAvailable("google.by").should.eventually.match(/(true|false)/); });

    /**
     * C
     */
    it("CA",            function(){ s.isAvailable("google.ca").should.eventually.match(/(true|false)/); });
    it("CAB",           function(){ s.isAvailable("google.cab").should.eventually.match(/(true|false)/); });
    it("CAMERA",        function(){ s.isAvailable("google.camera").should.eventually.match(/(true|false)/); });
    it("CAMP",          function(){ s.isAvailable("google.camp").should.eventually.match(/(true|false)/); });
    it("CAPITAL",       function(){ s.isAvailable("google.capital").should.eventually.match(/(true|false)/); });
    it("CARDS",         function(){ s.isAvailable("google.cards").should.eventually.match(/(true|false)/); });
    it("CAREERS",       function(){ s.isAvailable("google.careers").should.eventually.match(/(true|false)/); });
    it("CAT",           function(){ s.isAvailable("google.cat").should.eventually.match(/(true|false)/); });
    it("CATERING",      function(){ s.isAvailable("google.catering").should.eventually.match(/(true|false)/); });
    it("CC",            function(){ s.isAvailable("google.cc").should.eventually.match(/(true|false)/); });
    it("CENTER",        function(){ s.isAvailable("google.center").should.eventually.match(/(true|false)/); });
    it("CEO",           function(){ s.isAvailable("google.ceo").should.eventually.match(/(true|false)/); });
    it("CF",            function(){ s.isAvailable("google.cf").should.eventually.match(/(true|false)/); });
    it("CH",            function(){ s.isAvailable("google.ch").should.eventually.match(/(true|false)/); });
    it("CHEAP",         function(){ s.isAvailable("google.cheap").should.eventually.match(/(true|false)/); });
    it("CHRISTMAS",     function(){ s.isAvailable("google.christmas").should.eventually.match(/(true|false)/); });
    it("CI",            function(){ s.isAvailable("google.ci").should.eventually.match(/(true|false)/); });
    it("CL",            function(){ s.isAvailable("google.cl").should.eventually.match(/(true|false)/); });
    it("CLEANING",      function(){ s.isAvailable("google.cleaning").should.eventually.match(/(true|false)/); });
    it("CLOTHING",      function(){ s.isAvailable("google.clothing").should.eventually.match(/(true|false)/); });
    it("CLUB",          function(){ s.isAvailable("google.club").should.eventually.match(/(true|false)/); });
    it("CN",            function(){ s.isAvailable("google.cn").should.eventually.match(/(true|false)/); });
    it("CO",            function(){ s.isAvailable("google.co").should.eventually.match(/(true|false)/); });
    it("CODES",         function(){ s.isAvailable("google.codes").should.eventually.match(/(true|false)/); });
    it("COFFEE",        function(){ s.isAvailable("google.coffee").should.eventually.match(/(true|false)/); });
    it("COLLEGE",       function(){ s.isAvailable("google.college").should.eventually.match(/(true|false)/); });
    it("COLOGNE",       function(){ s.isAvailable("google.cologne").should.eventually.match(/(true|false)/); });
    it("COMMUNITY",     function(){ s.isAvailable("google.community").should.eventually.match(/(true|false)/); });
    it("COMPANY",       function(){ s.isAvailable("google.company").should.eventually.match(/(true|false)/); });
    it("CONSTRUCTION",  function(){ s.isAvailable("google.contractors").should.eventually.match(/(true|false)/); });
    it("COOKING",       function(){ s.isAvailable("google.cooking").should.eventually.match(/(true|false)/); });
    it("COOL",          function(){ s.isAvailable("google.cool").should.eventually.match(/(true|false)/); });
    it("COOP",          function(){ s.isAvailable("google.coop").should.eventually.match(/(true|false)/); });
    it("COUNTRY",       function(){ s.isAvailable("google.country").should.eventually.match(/(true|false)/); });
    it("CRUISES",       function(){ s.isAvailable("google.cruises").should.eventually.match(/(true|false)/); });
    it("CX",            function(){ s.isAvailable("google.cx").should.eventually.match(/(true|false)/); });
    it("CZ",            function(){ s.isAvailable("google.cz").should.eventually.match(/(true|false)/); });

});

describe("WhoIsData - Bad Registrar Negative Tests: ",function(){
   
    var s = new Seeker();
    
    /**
     * THIS IS A BAD WHOIS SERVER - it should throw
     */
     
    // MOCK / INJECT bad whois data for testing
    s.whoIsData = {
        "SomeFakeWHOIS" : ["whois.1234.abc", "Domain not found."] // INTENTIONAL FAKE BROKEN FOR TESTING
    };

     
    it("SomeFakeWHOIS", function(){ s.isAvailable("google.SomeFakeWHOIS").should.eventually.throw("TLD WHOIS Server not found"); });
 
});