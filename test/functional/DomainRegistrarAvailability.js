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

    it('dating',        function(){ s.isAvailable('google.dating').should.eventually.match(/(true|false)/); });
    it('de',            function(){ s.isAvailable('google.de').should.eventually.match(/(true|false)/); });
    it('democrat',      function(){ s.isAvailable('google.democrat').should.eventually.match(/(true|false)/); });
    it('desi',          function(){ s.isAvailable('google.desi').should.eventually.match(/(true|false)/); });
    it('diamonds',      function(){ s.isAvailable('google.diamonds').should.eventually.match(/(true|false)/); });
    it('directory',     function(){ s.isAvailable('google.directory').should.eventually.match(/(true|false)/); });
    it('dk',            function(){ s.isAvailable('google.dk').should.eventually.match(/(true|false)/); });
    it('dm',            function(){ s.isAvailable('google.dm').should.eventually.match(/(true|false)/); });
    it('domains',       function(){ s.isAvailable('google.domains').should.eventually.match(/(true|false)/); });
    it('dz',            function(){ s.isAvailable('google.dz').should.eventually.match(/(true|false)/); });

    it('ec',            function(){ s.isAvailable('google.ec').should.eventually.match(/(true|false)/); });
    it('edu',           function(){ s.isAvailable('google.edu').should.eventually.match(/(true|false)/); });
    it('education',            function(){ s.isAvailable('google.education').should.eventually.match(/(true|false)/); });
    it('ee',            function(){ s.isAvailable('google.ee').should.eventually.match(/(true|false)/); });
    it('email',            function(){ s.isAvailable('google.email').should.eventually.match(/(true|false)/); });
    it('engineering',            function(){ s.isAvailable('google.engineering').should.eventually.match(/(true|false)/); });
    it('enterprises',            function(){ s.isAvailable('google.enterprises').should.eventually.match(/(true|false)/); });
    it('equipment',            function(){ s.isAvailable('google.equipment').should.eventually.match(/(true|false)/); });
    it('es',            function(){ s.isAvailable('google.es').should.eventually.match(/(true|false)/); });
    it('estate',            function(){ s.isAvailable('google.estate').should.eventually.match(/(true|false)/); });
    it('eu',            function(){ s.isAvailable('google.eu').should.eventually.match(/(true|false)/); });
    it('eus',            function(){ s.isAvailable('google.eus').should.eventually.match(/(true|false)/); });
    it('events',            function(){ s.isAvailable('google.events').should.eventually.match(/(true|false)/); });
    it('expert',            function(){ s.isAvailable('google.expert').should.eventually.match(/(true|false)/); });
    it('exposed',            function(){ s.isAvailable('google.exposed').should.eventually.match(/(true|false)/); });

    it('farm',            function(){ s.isAvailable('google.farm').should.eventually.match(/(true|false)/); });
    it('feedback',            function(){ s.isAvailable('google.feedback').should.eventually.match(/(true|false)/); });
    it('fi',            function(){ s.isAvailable('google.fi').should.eventually.match(/(true|false)/); });
    it('fish',            function(){ s.isAvailable('google.fish').should.eventually.match(/(true|false)/); });
    it('fishing',            function(){ s.isAvailable('google.fishing').should.eventually.match(/(true|false)/); });
    it('flights',            function(){ s.isAvailable('google.flights').should.eventually.match(/(true|false)/); });
    it('florist',            function(){ s.isAvailable('google.florist').should.eventually.match(/(true|false)/); });
    it('fo',            function(){ s.isAvailable('google.fo').should.eventually.match(/(true|false)/); });
    it('foo',            function(){ s.isAvailable('google.foo').should.eventually.match(/(true|false)/); });
    it('foundation',            function(){ s.isAvailable('google.foundation').should.eventually.match(/(true|false)/); });
    it('fr',            function(){ s.isAvailable('google.fr').should.eventually.match(/(true|false)/); });
    it('frogans',            function(){ s.isAvailable('google.frogans').should.eventually.match(/(true|false)/); });
    it('futbol',            function(){ s.isAvailable('google.futbol').should.eventually.match(/(true|false)/); });

    it('ga',            function(){ s.isAvailable('google.ga').should.eventually.match(/(true|false)/); });
    it('gal',            function(){ s.isAvailable('google.gal').should.eventually.match(/(true|false)/); });
    it('gd',            function(){ s.isAvailable('google.gd').should.eventually.match(/(true|false)/); });
    it('gg',            function(){ s.isAvailable('google.gg').should.eventually.match(/(true|false)/); });
    it('gi',            function(){ s.isAvailable('google.gi').should.eventually.match(/(true|false)/); });
    it('gift',            function(){ s.isAvailable('google.gift').should.eventually.match(/(true|false)/); });
    it('gl',            function(){ s.isAvailable('google.gl').should.eventually.match(/(true|false)/); });
    it('glass',            function(){ s.isAvailable('google.glass').should.eventually.match(/(true|false)/); });
    it('gop',            function(){ s.isAvailable('google.gop').should.eventually.match(/(true|false)/); });
    it('gov',            function(){ s.isAvailable('google.gov').should.eventually.match(/(true|false)/); });
    it('graphics',            function(){ s.isAvailable('google.graphics').should.eventually.match(/(true|false)/); });
    it('gripe',            function(){ s.isAvailable('google.gripe').should.eventually.match(/(true|false)/); });
    it('gs',            function(){ s.isAvailable('google.gs').should.eventually.match(/(true|false)/); });
    it('guitars',            function(){ s.isAvailable('google.guitars').should.eventually.match(/(true|false)/); });
    it('guru',            function(){ s.isAvailable('google.guru').should.eventually.match(/(true|false)/); });
    it('gy',            function(){ s.isAvailable('google.gy').should.eventually.match(/(true|false)/); });

    it('haus',            function(){ s.isAvailable('google.haus').should.eventually.match(/(true|false)/); });
    it('hk',            function(){ s.isAvailable('google.hk').should.eventually.match(/(true|false)/); });
    it('hn',            function(){ s.isAvailable('google.hn').should.eventually.match(/(true|false)/); });
    it('holiday',            function(){ s.isAvailable('google.holiday').should.eventually.match(/(true|false)/); });
    it('horse',            function(){ s.isAvailable('google.horse').should.eventually.match(/(true|false)/); });
    it('house',            function(){ s.isAvailable('google.house').should.eventually.match(/(true|false)/); });
    it('hr',            function(){ s.isAvailable('google.hr').should.eventually.match(/(true|false)/); });
    it('ht',            function(){ s.isAvailable('google.ht').should.eventually.match(/(true|false)/); });
    it('hu',            function(){ s.isAvailable('google.hu').should.eventually.match(/(true|false)/); });

    it('id',            function(){ s.isAvailable('google.id').should.eventually.match(/(true|false)/); });
    it('ie',            function(){ s.isAvailable('google.ie').should.eventually.match(/(true|false)/); });
    it('il',            function(){ s.isAvailable('google.il').should.eventually.match(/(true|false)/); });
    it('im',            function(){ s.isAvailable('google.im').should.eventually.match(/(true|false)/); });
    it('immobilien',            function(){ s.isAvailable('google.immobilien').should.eventually.match(/(true|false)/); });
    it('in',            function(){ s.isAvailable('google.in').should.eventually.match(/(true|false)/); });
    it('industries',            function(){ s.isAvailable('google.industries').should.eventually.match(/(true|false)/); });
    it('institute',            function(){ s.isAvailable('google.institute').should.eventually.match(/(true|false)/); });
    it('int',            function(){ s.isAvailable('google.int').should.eventually.match(/(true|false)/); });
    it('international',            function(){ s.isAvailable('google.international').should.eventually.match(/(true|false)/); });
    it('iq',            function(){ s.isAvailable('google.iq').should.eventually.match(/(true|false)/); });
    it('ir',            function(){ s.isAvailable('google.ir').should.eventually.match(/(true|false)/); });
    it('is',            function(){ s.isAvailable('google.is').should.eventually.match(/(true|false)/); });
    it('it',            function(){ s.isAvailable('google.it').should.eventually.match(/(true|false)/); });

    it('je',            function(){ s.isAvailable('google.je').should.eventually.match(/(true|false)/); });
    it('jobs',            function(){ s.isAvailable('google.jobs').should.eventually.match(/(true|false)/); });
    it('jp',            function(){ s.isAvailable('google.jp').should.eventually.match(/(true|false)/); });

    it('kaufen',            function(){ s.isAvailable('google.kaufen').should.eventually.match(/(true|false)/); });
    it('ke',            function(){ s.isAvailable('google.ke').should.eventually.match(/(true|false)/); });
    it('kg',            function(){ s.isAvailable('google.kg').should.eventually.match(/(true|false)/); });
    it('ki',            function(){ s.isAvailable('google.ki').should.eventually.match(/(true|false)/); });
    it('kitchen',            function(){ s.isAvailable('google.kitchen').should.eventually.match(/(true|false)/); });
    it('kiwi',            function(){ s.isAvailable('google.kiwi').should.eventually.match(/(true|false)/); });
    it('koeln',            function(){ s.isAvailable('google.koeln').should.eventually.match(/(true|false)/); });
    it('kr',            function(){ s.isAvailable('google.kr').should.eventually.match(/(true|false)/); });
    it('kz',            function(){ s.isAvailable('google.kz').should.eventually.match(/(true|false)/); });

    it('la',            function(){ s.isAvailable('google.la').should.eventually.match(/(true|false)/); });
    it('land',            function(){ s.isAvailable('google.land').should.eventually.match(/(true|false)/); });
    it('lease',            function(){ s.isAvailable('google.lease').should.eventually.match(/(true|false)/); });
    it('li',            function(){ s.isAvailable('google.li').should.eventually.match(/(true|false)/); });
    it('lighting',            function(){ s.isAvailable('google.lighting').should.eventually.match(/(true|false)/); });
    it('limo',            function(){ s.isAvailable('google.limo').should.eventually.match(/(true|false)/); });
    it('link',            function(){ s.isAvailable('google.link').should.eventually.match(/(true|false)/); });
    it('london',            function(){ s.isAvailable('google.london').should.eventually.match(/(true|false)/); });
    it('lt',            function(){ s.isAvailable('google.lt').should.eventually.match(/(true|false)/); });
    it('lu',            function(){ s.isAvailable('google.lu').should.eventually.match(/(true|false)/); });
    it('luxury',            function(){ s.isAvailable('google.luxury').should.eventually.match(/(true|false)/); });
    it('lv',            function(){ s.isAvailable('google.lv').should.eventually.match(/(true|false)/); });
    it('ly',            function(){ s.isAvailable('google.ly').should.eventually.match(/(true|false)/); });

    it('ma',            function(){ s.isAvailable('google.ma').should.eventually.match(/(true|false)/); });
    it('management',            function(){ s.isAvailable('google.management').should.eventually.match(/(true|false)/); });
    it('mango',            function(){ s.isAvailable('google.mango').should.eventually.match(/(true|false)/); });
    it('marketing',            function(){ s.isAvailable('google.marketing').should.eventually.match(/(true|false)/); });
    it('md',            function(){ s.isAvailable('google.md').should.eventually.match(/(true|false)/); });
    it('me',            function(){ s.isAvailable('google.me').should.eventually.match(/(true|false)/); });
    it('media',            function(){ s.isAvailable('google.media').should.eventually.match(/(true|false)/); });
    it('menu',            function(){ s.isAvailable('google.menu').should.eventually.match(/(true|false)/); });
    it('mg',            function(){ s.isAvailable('google.mg').should.eventually.match(/(true|false)/); });
    it('miami',            function(){ s.isAvailable('google.miami').should.eventually.match(/(true|false)/); });
    it('mk',            function(){ s.isAvailable('google.mk').should.eventually.match(/(true|false)/); });
    it('ml',            function(){ s.isAvailable('google.ml').should.eventually.match(/(true|false)/); });
    it('mn',            function(){ s.isAvailable('google.mn').should.eventually.match(/(true|false)/); });
    it('mo',            function(){ s.isAvailable('google.mo').should.eventually.match(/(true|false)/); });
    it('mobi',            function(){ s.isAvailable('google.mobi').should.eventually.match(/(true|false)/); });
    it('moda',            function(){ s.isAvailable('google.moda').should.eventually.match(/(true|false)/); });
    it('monash',            function(){ s.isAvailable('google.monash').should.eventually.match(/(true|false)/); });
    it('mp',            function(){ s.isAvailable('google.mp').should.eventually.match(/(true|false)/); });
    it('ms',            function(){ s.isAvailable('google.ms').should.eventually.match(/(true|false)/); });
    it('mu',            function(){ s.isAvailable('google.mu').should.eventually.match(/(true|false)/); });
    it('museum',            function(){ s.isAvailable('google.museum').should.eventually.match(/(true|false)/); });
    it('mx',            function(){ s.isAvailable('google.mx').should.eventually.match(/(true|false)/); });
    it('my',            function(){ s.isAvailable('google.my').should.eventually.match(/(true|false)/); });

    it('na',            function(){ s.isAvailable('google.na').should.eventually.match(/(true|false)/); });
    it('name',            function(){ s.isAvailable('google.name').should.eventually.match(/(true|false)/); });
    it('nc',            function(){ s.isAvailable('google.nc').should.eventually.match(/(true|false)/); });
    it('nf',            function(){ s.isAvailable('google.nf').should.eventually.match(/(true|false)/); });
    it('ng',            function(){ s.isAvailable('google.ng').should.eventually.match(/(true|false)/); });
    it('ninja',            function(){ s.isAvailable('google.ninja').should.eventually.match(/(true|false)/); });
    it('nl',            function(){ s.isAvailable('google.nl').should.eventually.match(/(true|false)/); });
    it('no',            function(){ s.isAvailable('google.no').should.eventually.match(/(true|false)/); });
    it('nu',            function(){ s.isAvailable('google.nu').should.eventually.match(/(true|false)/); });
    it('nz',            function(){ s.isAvailable('google.nz').should.eventually.match(/(true|false)/); });

    it('om',            function(){ s.isAvailable('google.om').should.eventually.match(/(true|false)/); });
    it('onl',            function(){ s.isAvailable('google.onl').should.eventually.match(/(true|false)/); });

    it('paris',            function(){ s.isAvailable('google.paris').should.eventually.match(/(true|false)/); });
    it('partners',            function(){ s.isAvailable('google.partners').should.eventually.match(/(true|false)/); });
    it('parts',            function(){ s.isAvailable('google.parts').should.eventually.match(/(true|false)/); });
    it('pe',            function(){ s.isAvailable('google.pe').should.eventually.match(/(true|false)/); });
    it('pf',            function(){ s.isAvailable('google.pf').should.eventually.match(/(true|false)/); });
    it('photo',            function(){ s.isAvailable('google.photo').should.eventually.match(/(true|false)/); });
    it('photography',            function(){ s.isAvailable('google.photography').should.eventually.match(/(true|false)/); });
    it('photos',            function(){ s.isAvailable('google.photos').should.eventually.match(/(true|false)/); });
    it('pics',            function(){ s.isAvailable('google.pics').should.eventually.match(/(true|false)/); });
    it('pictures',            function(){ s.isAvailable('google.pictures').should.eventually.match(/(true|false)/); });
    it('pl',            function(){ s.isAvailable('google.pl').should.eventually.match(/(true|false)/); });
    it('plumbing',            function(){ s.isAvailable('google.plumbing').should.eventually.match(/(true|false)/); });
    it('pm',            function(){ s.isAvailable('google.pm').should.eventually.match(/(true|false)/); });
    it('post',            function(){ s.isAvailable('google.post').should.eventually.match(/(true|false)/); });
    it('pr',            function(){ s.isAvailable('google.pr').should.eventually.match(/(true|false)/); });
    it('pro',            function(){ s.isAvailable('google.pro').should.eventually.match(/(true|false)/); });
    it('productions',            function(){ s.isAvailable('google.productions').should.eventually.match(/(true|false)/); });
    it('properties',            function(){ s.isAvailable('google.properties').should.eventually.match(/(true|false)/); });
    it('pt',            function(){ s.isAvailable('google.pt').should.eventually.match(/(true|false)/); });
    it('pub',            function(){ s.isAvailable('google.pub').should.eventually.match(/(true|false)/); });
    it('pw',            function(){ s.isAvailable('google.pw').should.eventually.match(/(true|false)/); });

    it('qa',            function(){ s.isAvailable('google.qa').should.eventually.match(/(true|false)/); });
    it('quebec',            function(){ s.isAvailable('google.quebec').should.eventually.match(/(true|false)/); });

    it('re',            function(){ s.isAvailable('google.re').should.eventually.match(/(true|false)/); });
    it('recipes',            function(){ s.isAvailable('google.recipes').should.eventually.match(/(true|false)/); });
    it('reisen',            function(){ s.isAvailable('google.reisen').should.eventually.match(/(true|false)/); });
    it('rentals',            function(){ s.isAvailable('google.rentals').should.eventually.match(/(true|false)/); });
    it('repair',            function(){ s.isAvailable('google.repair').should.eventually.match(/(true|false)/); });
    it('report',            function(){ s.isAvailable('google.report').should.eventually.match(/(true|false)/); });
    it('rest',            function(){ s.isAvailable('google.rest').should.eventually.match(/(true|false)/); });
    it('reviews',            function(){ s.isAvailable('google.reviews').should.eventually.match(/(true|false)/); });
    it('rich',            function(){ s.isAvailable('google.rich').should.eventually.match(/(true|false)/); });
    it('ro',            function(){ s.isAvailable('google.ro').should.eventually.match(/(true|false)/); });
    it('rocks',            function(){ s.isAvailable('google.rocks').should.eventually.match(/(true|false)/); });
    it('rodeo',            function(){ s.isAvailable('google.rodeo').should.eventually.match(/(true|false)/); });
    it('rs',            function(){ s.isAvailable('google.rs').should.eventually.match(/(true|false)/); });
    it('ru',            function(){ s.isAvailable('google.ru').should.eventually.match(/(true|false)/); });
    it('ruhr',            function(){ s.isAvailable('google.ruhr').should.eventually.match(/(true|false)/); });

    it('sa',            function(){ s.isAvailable('google.sa').should.eventually.match(/(true|false)/); });
    it('saarland',            function(){ s.isAvailable('google.saarland').should.eventually.match(/(true|false)/); });
    it('sb',            function(){ s.isAvailable('google.sb').should.eventually.match(/(true|false)/); });
    it('sc',            function(){ s.isAvailable('google.sc').should.eventually.match(/(true|false)/); });
    it('se',            function(){ s.isAvailable('google.se').should.eventually.match(/(true|false)/); });
    it('services',            function(){ s.isAvailable('google.services').should.eventually.match(/(true|false)/); });
    it('sexy',            function(){ s.isAvailable('google.sexy').should.eventually.match(/(true|false)/); });
    it('sg',            function(){ s.isAvailable('google.sg').should.eventually.match(/(true|false)/); });
    it('sh',            function(){ s.isAvailable('google.sh').should.eventually.match(/(true|false)/); });
    it('shoes',            function(){ s.isAvailable('google.shoes').should.eventually.match(/(true|false)/); });
    it('si',            function(){ s.isAvailable('google.si').should.eventually.match(/(true|false)/); });
    it('singles',            function(){ s.isAvailable('google.singles').should.eventually.match(/(true|false)/); });
    it('sk',            function(){ s.isAvailable('google.sk').should.eventually.match(/(true|false)/); });
    it('sm',            function(){ s.isAvailable('google.sm').should.eventually.match(/(true|false)/); });
    it('sn',            function(){ s.isAvailable('google.sn').should.eventually.match(/(true|false)/); });
    it('so',            function(){ s.isAvailable('google.so').should.eventually.match(/(true|false)/); });
    it('social',            function(){ s.isAvailable('google.social').should.eventually.match(/(true|false)/); });
    it('solar',            function(){ s.isAvailable('google.solar').should.eventually.match(/(true|false)/); });
    it('solutions',            function(){ s.isAvailable('google.solutions').should.eventually.match(/(true|false)/); });
    it('soy',            function(){ s.isAvailable('google.soy').should.eventually.match(/(true|false)/); });
    it('st',            function(){ s.isAvailable('google.st').should.eventually.match(/(true|false)/); });
    it('su',            function(){ s.isAvailable('google.su').should.eventually.match(/(true|false)/); });
    it('supplies',            function(){ s.isAvailable('google.supplies').should.eventually.match(/(true|false)/); });
    it('supply',            function(){ s.isAvailable('google.supply').should.eventually.match(/(true|false)/); });
    it('support',            function(){ s.isAvailable('google.support').should.eventually.match(/(true|false)/); });
    it('sx',            function(){ s.isAvailable('google.sx').should.eventually.match(/(true|false)/); });
    it('sy',            function(){ s.isAvailable('google.sy').should.eventually.match(/(true|false)/); });
    it('systems',            function(){ s.isAvailable('google.systems').should.eventually.match(/(true|false)/); });

    it('tattoo',            function(){ s.isAvailable('google.tattoo').should.eventually.match(/(true|false)/); });
    it('tc',            function(){ s.isAvailable('google.tc').should.eventually.match(/(true|false)/); });
    it('technology',            function(){ s.isAvailable('google.technology').should.eventually.match(/(true|false)/); });
    it('tel',            function(){ s.isAvailable('google.tel').should.eventually.match(/(true|false)/); });
    it('tf',            function(){ s.isAvailable('google.tf').should.eventually.match(/(true|false)/); });
    it('th',            function(){ s.isAvailable('google.th').should.eventually.match(/(true|false)/); });
    it('tienda',            function(){ s.isAvailable('google.tienda').should.eventually.match(/(true|false)/); });
    it('tips',            function(){ s.isAvailable('google.tips').should.eventually.match(/(true|false)/); });
    it('tk',            function(){ s.isAvailable('google.tk').should.eventually.match(/(true|false)/); });
    it('tl',            function(){ s.isAvailable('google.tl').should.eventually.match(/(true|false)/); });
    it('tm',            function(){ s.isAvailable('google.tm').should.eventually.match(/(true|false)/); });
    it('tn',            function(){ s.isAvailable('google.tn').should.eventually.match(/(true|false)/); });
    it('to',            function(){ s.isAvailable('google.to').should.eventually.match(/(true|false)/); });
    it('today',            function(){ s.isAvailable('google.today').should.eventually.match(/(true|false)/); });
    it('tools',            function(){ s.isAvailable('google.tools').should.eventually.match(/(true|false)/); });
    it('town',            function(){ s.isAvailable('google.town').should.eventually.match(/(true|false)/); });
    it('toys',            function(){ s.isAvailable('google.toys').should.eventually.match(/(true|false)/); });
    it('tr',            function(){ s.isAvailable('google.tr').should.eventually.match(/(true|false)/); });
    it('training',            function(){ s.isAvailable('google.training').should.eventually.match(/(true|false)/); });
    it('travel',            function(){ s.isAvailable('google.travel').should.eventually.match(/(true|false)/); });
    it('tv',            function(){ s.isAvailable('google.tv').should.eventually.match(/(true|false)/); });
    it('tw',            function(){ s.isAvailable('google.tw').should.eventually.match(/(true|false)/); });
    it('tz',            function(){ s.isAvailable('google.tz').should.eventually.match(/(true|false)/); });

    it('ua',            function(){ s.isAvailable('google.ua').should.eventually.match(/(true|false)/); });
    it('ug',            function(){ s.isAvailable('google.ug').should.eventually.match(/(true|false)/); });
    it('university',            function(){ s.isAvailable('google.university').should.eventually.match(/(true|false)/); });
    it('us',            function(){ s.isAvailable('google.us').should.eventually.match(/(true|false)/); });
    it('uk',            function(){ s.isAvailable('google.uk').should.eventually.match(/(true|false)/); });
    it('uy',            function(){ s.isAvailable('google.uy').should.eventually.match(/(true|false)/); });

    it('black',            function(){ s.isAvailable('google.black').should.eventually.match(/(true|false)/); });
    it('blue',            function(){ s.isAvailable('google.blue').should.eventually.match(/(true|false)/); });
    it('info',            function(){ s.isAvailable('google.info').should.eventually.match(/(true|false)/); });
    it('kim',            function(){ s.isAvailable('google.kim').should.eventually.match(/(true|false)/); });
    it('pink',            function(){ s.isAvailable('google.pink').should.eventually.match(/(true|false)/); });
    it('red',            function(){ s.isAvailable('google.red').should.eventually.match(/(true|false)/); });
    it('shiksha',            function(){ s.isAvailable('google.shiksha').should.eventually.match(/(true|false)/); });
    it('uz',            function(){ s.isAvailable('google.uz').should.eventually.match(/(true|false)/); });
    it('vacations',            function(){ s.isAvailable('google.vacations').should.eventually.match(/(true|false)/); });
    it('vc',            function(){ s.isAvailable('google.vc').should.eventually.match(/(true|false)/); });
    it('ve',            function(){ s.isAvailable('google.ve').should.eventually.match(/(true|false)/); });
    it('vegas',            function(){ s.isAvailable('google.vegas').should.eventually.match(/(true|false)/); });
    it('ventures',            function(){ s.isAvailable('google.ventures').should.eventually.match(/(true|false)/); });
    it('vg',            function(){ s.isAvailable('google.vg').should.eventually.match(/(true|false)/); });
    it('viajes',            function(){ s.isAvailable('google.viajes').should.eventually.match(/(true|false)/); });
    it('villas',            function(){ s.isAvailable('google.villas').should.eventually.match(/(true|false)/); });
    it('vision',            function(){ s.isAvailable('google.vision').should.eventually.match(/(true|false)/); });
    it('vodka',            function(){ s.isAvailable('google.vodka').should.eventually.match(/(true|false)/); });
    it('voting',            function(){ s.isAvailable('google.voting').should.eventually.match(/(true|false)/); });
    it('voyage',            function(){ s.isAvailable('google.voyage').should.eventually.match(/(true|false)/); });
    it('vu',            function(){ s.isAvailable('google.vu').should.eventually.match(/(true|false)/); });
    it('wang',            function(){ s.isAvailable('google.wang').should.eventually.match(/(true|false)/); });
    it('watch',            function(){ s.isAvailable('google.watch').should.eventually.match(/(true|false)/); });
    it('wed',            function(){ s.isAvailable('google.wed').should.eventually.match(/(true|false)/); });
    it('wf',            function(){ s.isAvailable('google.wf').should.eventually.match(/(true|false)/); });
    it('wien',            function(){ s.isAvailable('google.wien').should.eventually.match(/(true|false)/); });
    it('wiki',            function(){ s.isAvailable('google.wiki').should.eventually.match(/(true|false)/); });
    it('works',            function(){ s.isAvailable('google.works').should.eventually.match(/(true|false)/); });
    it('ws',            function(){ s.isAvailable('google.ws').should.eventually.match(/(true|false)/); });
    it('xxx',            function(){ s.isAvailable('google.xxx').should.eventually.match(/(true|false)/); });
    it('xyz',            function(){ s.isAvailable('google.xyz').should.eventually.match(/(true|false)/); });
    it('yt',            function(){ s.isAvailable('google.yt').should.eventually.match(/(true|false)/); });
    it('ryukyu',            function(){ s.isAvailable('google.ryukyu').should.eventually.match(/(true|false)/); });
    it('zm',            function(){ s.isAvailable('google.zm').should.eventually.match(/(true|false)/); });
    it('zone',            function(){ s.isAvailable('google.zone').should.eventually.match(/(true|false)/); });

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