"use strict";

// ECMAScript 6 Polyfill Includes
if (!String.prototype.includes) {
    String.prototype.includes = function() {'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

// TLDS text file on the web updated daily
// http://data.iana.org/TLD/tlds-alpha-by-domain.txt

// registry list
// https://www.icann.org/resources/pages/listing-2012-02-25-en

var hostbyname  = require("hostbyname"),    // npm hostbyname
    socket      = require('net').Socket(),  // build in node
    q           = require('q');             // npm q

var cb = function(err, results){
    //if ( err ) {
    //    console.log(err);
    //} else {
    //    console.log(results);
    //}
};

function DomainAvailability() {

    this.whoIsData = {
        "com"           : ["whois.verisign-grs.com", "No match for "],
        "net"           : ["whois.verisign-grs.com", "No match for "],
        "org"           : ["whois.pir.org", "NOT FOUND"],
        "co.uk"         : ["whois.nic.uk", "No match for "],
        "io"            : ["whois.nic.io", "is available for purchase"],
        "computer"      : ["whois.donuts.co", "Domain not found."],
        "ac"            : ["whois.nic.ac", "is available for purchase"],
        "academy"       : ["whois.donuts.co", "Domain not found."],
        "actor"         : ["whois.unitedtld.com", "Domain not found."],
        "ae"            : ["whois.aeda.net.ae", "No Data Found"],
        "aero"          : ["whois.aero", "NOT FOUND"],
        "af"            : ["whois.nic.af", "Domain Status: No Object Found"],
        "ag"            : ["whois.nic.ag", "NOT FOUND"],
        "agency"        : ["whois.donuts.co", "Domain not found."],
        "ai"            : ["whois.ai", "If you would like to register this, or any .ai domain"],
        "am"            : ["whois.amnic.net", "No match"],
        "archi"         : ["whois.ksregistry.net", "not found..."],
        "arpa"          : ["whois.iana.org", "% This query returned 0 objects."],
        "as"            : ["whois.nic.as", "Domain Status: Available"],
        "asia"          : ["whois.nic.asia", "NOT FOUND"],
        "associates"    : ["whois.donuts.co", "Domain not found."],
        "at"            : ["whois.nic.at", "% nothing found"],
        "au"            : ["whois.audns.net.au", "No Data Found"],
        "aw"            : ["whois.nic.aw", " is free"],
        "ax"            : ["whois.ax", "No records matching "],
        "az"            : ["whois.az", "MATCH"], // not responding
        "bar"           : ["whois.nic.bar", "DOMAIN NOT FOUND"],
        "bargains"      : ["whois.donuts.co", "Domain not found."],
        "be"            : ["whois.dns.be", "Status:	AVAILABLE"],
        "berlin"        : ["whois.nic.berlin", "% No match"],
        "bg"            : ["whois.register.bg", "does not exist in database!"],
        "bi"            : ["whois1.nic.bi", "Domain Status: No Object Found"],
        "bike"          : ["whois.donuts.co", "Domain not found."],
        "biz"           : ["whois.biz", "Not found: "],
        "bj"            : ["whois.nic.bj", "No records matching"],
        "blackfriday"   : ["whois.uniregistry.net", "is available for"],
        "bn"            : ["whois.bn", "No records matching"],
        "boutique"      : ["whois.donuts.co", "Domain not found."],
        "build"         : ["whois.nic.build", "No Data Found"],
        "builders"      : ["whois.donuts.co", "Domain not found."],
        "bw"            : ["whois.nic.net.bw", "Domain Status: No Object Found"],
        "by"            : ["whois.cctld.by", "Object does not exist"],
        "ca"            : ["whois.cira.ca", "Domain status:         available"],
        "cab"           : ["whois.donuts.co", "Domain not found."],
        "camera"        : ["whois.donuts.co", "Domain not found."],
        "camp"          : ["whois.donuts.co", "Domain not found."],
        "captial"       : ["whois.donuts.co", "Domain not found."],
        "cards"         : ["whois.donuts.co", "Domain not found."],
        "careers"       : ["whois.donuts.co", "Domain not found."],
        "cat"           : ["whois.cat", "NOT FOUND."],
        "catering"      : ["whois.donuts.co", "Domain not found."],
        "cc"            : ["ccwhois.verisign-grs.com", "No match for"],
        "center"        : ["whois.donuts.co", "Domain not found."],
        "ceo"           : ["whois.nic.ceo", "Not found:"],
        "cf"            : ["whois.dot.cf", "Invalid query or domain name not known in Dot CF Domain Registry"],
        "ch"            : ["whois.nic.ch", "We do not have an entry in our database matching your query."],
        "cheap"         : ["whois.donuts.co", "Domain not found."],
        "christmas"     : ["whois.uniregistry.net", "is available for registration"],
        "ci"            : ["whois.nic.ci", "not found"],
        "cl"            : ["whois.nic.cl", ": no existe"],
        "cleaning"      : ["whois.donuts.co", "Domain not found."],
        "clothing"      : ["whois.donuts.co", "Domain not found."],
        "club"          : ["whois.nic.club", "Not found:"],
        "cn"            : ["whois.cnnic.cn", "no matching record."],
        "co"            : ["whois.nic.co", "Not found:"],
        "codes"         : ["whois.donuts.co", "Domain not found."],
        "coffee"        : ["whois.donuts.co", "Domain not found."],
        "college"       : ["whois.centralnic.com", "DOMAIN NOT FOUND"],
        "cologne"       : ["whois-fe1.pdt.cologne.tango.knipp.de", "no matching objects found"],
        "community"     : ["whois.donuts.co", "Domain not found."],
        "company"       : ["whois.donuts.co", "Domain not found."],
        "construction"  : ["whois.donuts.co", "Domain not found."],
        "contractors"   : ["whois.donuts.co", "Domain not found."],
        "cooking"       : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "cool"          : ["whois.donuts.co", "Domain not found."],
        "coop"          : ["whois.nic.coop", "No domain records were found to match"],
        "country"       : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "cruises"       : ["whois.donuts.co", "Domain not found."],
        "cx"            : ["whois.nic.cx", "Domain Status: No Object Found"],
        "cz"            : ["whois.nic.cz", "No entries found."],
        "dating"        : ["whois.donuts.co", "Domain not found."],
        "de"            : ["whois.denic.de", "Status: free"],
        "democrat"      : ["whois.unitedtld.com", "Domain not found."],
        "desi"          : ["whois.ksregistry.net", "not found..."],
        "diamonds"      : ["whois.donuts.co", "Domain not found."],
        "directory"     : ["whois.donuts.co", "Domain not found."],
        "dk"            : ["whois.dk-hostmaster.dk", "No entries found for the selected source."],
        "dm"            : ["whois.nic.dm", "not found..."],
        "domains"       : ["whois.donuts.co", "Domain not found."],
        "dz"            : ["whois.nic.dz", "NO OBJECT FOUND!"],
        "ec"            : ["whois.nic.ec", "Status: Not Registered"],
        "edu"           : ["whois.educause.edu", "No Match"],
        "education"     : ["whois.donuts.co", "Domain not found."],
        "ee"            : ["whois.tld.ee", "No entries found."],
        "email"         : ["whois.donuts.co", "Domain not found."],
        "engineering"   : ["whois.donuts.co", "Domain not found."],
        "enterprises"   : ["whois.donuts.co", "Domain not found."],
        "equipment"     : ["whois.donuts.co", "Domain not found."],
        "es"            : ["whois.nic.es", "MATCH"], //  You need your IP to be whitelisted, read more: https://sede.red.gob.es/eRegistro/inicio.action
        "estate"        : ["whois.donuts.co", "Domain not found."],
        "eu"            : ["whois.eu", "Status: AVAILABLE"],
        "eus"           : ["whois.eus.coreregistry.net", "no matching objects found"],
        "events"        : ["whois.donuts.co", "Domain not found."],
        "expert"        : ["whois.donuts.co", "Domain not found."],
        "exposed"       : ["whois.donuts.co", "Domain not found."],
        "farm"          : ["whois.donuts.co", "Domain not found."],
        "feedback"      : ["whois.centralnic.com", "DOMAIN NOT FOUND"],
        "fi"            : ["whois.fi", "Domain not found"],
        "fish"          : ["whois.donuts.co", "Domain not found."],
        "fishing"       : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "flights"       : ["whois.donuts.co", "Domain not found."],
        "florist"       : ["whois.donuts.co", "Domain not found."],
        "fo"            : ["whois.nic.fo", "No entries found."],
        "foo"           : ["domain-registry-whois.l.google.com", "Domain not found"],
        "foundation"    : ["whois.donuts.co", "Domain not found."],
        "fr"            : ["whois.nic.fr", "No entries found"],
        "frogans"       : ["whois-frogans.nic.fr", "Requested Domain cannot be found"],
        "futbol"        : ["whois.unitedtld.com", "Domain not found."],
        "ga"            : ["whois.gal.coreregistry.net", "no matching objects found"],
        "gal"           : ["whois.donuts.co", "Domain not found."],
        "gd"            : ["whois.nic.gd", "not found..."],
        "gg"            : ["whois.gg", "Domain Status: No Object Found"],
        "gi"            : ["whois2.afilias-grs.net", "NOT FOUND"],
        "gift"          : ["whois.uniregistry.net", "is available for registration"],
        "gl"            : ["whois.nic.gl", "Domain Status: No Object Found"],
        "glass"         : ["whois.donuts.co", "Domain not found."],
        "gop"           : ["whois-cl01.mm-registry.com", "Status: Not Registered"],
        "gov"           : ["whois.dotgov.gov", "MATCH"], // not responding, awaiting answer from registrar: http://i.gyazo.com/5318b9ed2ba6452c3688ecc666126f63.png
        "graphics"      : ["whois.donuts.co", "Domain not found."],
        "gripe"         : ["whois.donuts.co", "Domain not found."],
        "gs"            : ["whois.nic.gs", "Domain Status: No Object Found"],
        "guitars"       : ["whois.uniregistry.net", "is available for registration"],
        "guru"          : ["whois.donuts.co", "Domain not found."],
        "gy"            : ["whois.registry.gy", "Domain Status: No Object Found"],
        "haus"          : ["whois.unitedtld.com", "Domain not found."],
        "hk"            : ["whois.hkirc.hk", "The domain has not been registered."],
        "hn"            : ["whois.nic.hn", "Domain Status: No Object Found"],
        "holiday"       : ["whois.donuts.co", "Domain not found."],
        "horse"         : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "house"         : ["whois.donuts.co", "Domain not found."],
        "hr"            : ["whois.dns.hr", "ERROR: no entries found"],
        "ht"            : ["whois.nic.ht", "Domain Status: No Object Found"],
        "hu"            : ["whois.nic.hu", "No match"],
        "id"            : ["whois.pandi.or.id", "DOMAIN NOT FOUND"],
        "ie"            : ["whois.domainregistry.ie", "Not Registered"],
        "il"            : ["whois.isoc.org.il", "No data was found to match the request criteria."],
        "im"            : ["whois.nic.im", "was not found."],
        "immobilien"    : ["whois.unitedtld.com", "Domain not found."],
        "in"            : ["whois.inregistry.net", "NOT FOUND"],
        "industries"    : ["whois.donuts.co", "Domain not found."],
        "institute"     : ["whois.donuts.co", "Domain not found."],
        "int"           : ["whois.iana.org", "This query returned 0 objects."],
        "international" : ["whois.donuts.co", "Domain not found."],
        "iq"            : ["whois.cmc.iq", "Domain Status: No Object Found"],
        "ir"            : ["whois.nic.ir", "No entries found in the selected"],
        "is"            : ["whois.isnic.is", "No entries found for query"],
        "it"            : ["whois.nic.it", "Status:             AVAILABLE"],
        "je"            : ["whois.je", "Domain Status: No Object Found"],
        "jobs"          : ["jobswhois.verisign-grs.com", "No match for"],
        "jp"            : ["whois.jprs.jp", "No match!!"],
        "kaufen"        : ["whois.unitedtld.com", "Domain not found."],
        "ke"            : ["whois.kenic.or.ke", "Status: Not Registered"],
        "kg"            : ["whois.domain.kg", "Data not found. This domain is available for registration."],
        "ki"            : ["whois.nic.ki", "Domain Status: No Object Found"],
        "kitchen"       : ["whois.donuts.co", "Domain not found."],
        "kiwi"          : ["whois.dot-kiwi.com", "Status: Not Registered"],
        "koeln"         : ["whois-fe1.pdt.koeln.tango.knipp.de", "no matching objects found"],
        "kr"            : ["whois.kr", "Above domain name is not registered to KRNIC."],
        "kz"            : ["whois.nic.kz", "Nothing found for this query."],
        "la"            : ["whois.nic.la", "DOMAIN NOT FOUND"],
        "land"          : ["whois.donuts.co", "Domain not found."],
        "lease"         : ["whois.donuts.co", "Domain not found."],
        "li"            : ["whois.nic.li", "We do not have an entry in our database matching your query"],
        "lighting"      : ["whois.donuts.co", "Domain not found."],
        "limo"          : ["whois.donuts.co", "Domain not found."],
        "link"          : ["whois.uniregistry.net", "is available for registration"],
        "london"        : ["whois-lon.mm-registry.com", "Status: Not Registered"],
        "lt"            : ["whois.domreg.lt", "Status:			available"],
        "lu"            : ["whois.dns.lu", "No such domain"],
        "luxury"        : ["whois.nic.luxury", "No Data Found"],
        "lv"            : ["whois.nic.lv", "Status: free"],
        "ly"            : ["whois.nic.ly", "Not found"],
        "ma"            : ["whois.iam.net.ma", "No Objects Found"],
        "management"    : ["whois.donuts.co", "Domain not found."],
        "mango"         : ["whois.mango.coreregistry.net", "no matching objects found"],
        "marketing"     : ["whois.donuts.co", "Domain not found."],
        "md"            : ["whois.nic.md", "No match for"],
        "me"            : ["whois.nic.me", "NOT FOUND"],
        "media"         : ["whois.donuts.co", "Domain not found."],
        "menu"          : ["whois.nic.menu", "No Data Found"],
        "mg"            : ["whois.nic.mg", "Domain Status: Available"],
        "miami"         : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "mk"            : ["whois.marnet.mk", "no entries found"],
        "ml"            : ["whois.dot.ml", "domain name not known"],
        "mn"            : ["whois.nic.mn", "MATCH"], // not responding
        "mo"            : ["whois.monic.mo", "No match for"],
        "mobi"          : ["whois.dotmobiregistry.net", "NOT FOUND"],
        "moda"          : ["whois.unitedtld.com", "Domain not found."],
        "monash"        : ["whois.nic.monash", "No Data Found"],
        "mp"            : ["whois.nic.mp", "MATCH"], // not responding
        "ms"            : ["whois.nic.ms", "Domain Status: No Object Found"],
        "mu"            : ["whois.nic.mu", "Domain Status: No Object Found"],
        "museum"        : ["whois.museum", "NOT FOUND."],
        "mx"            : ["whois.mx", "Object_Not_Found"],
        "my"            : ["whois.domainregistry.my", "does not exist in database"],
        "na"            : ["whois.na-nic.com.na", "Domain Status: No Object Found"],
        "name"          : ["whois.nic.name", "No match for"],
        "nc"            : ["whois.nc", "No entries found in the .nc database"],
        "nf"            : ["whois.nic.nf", "Domain Status: No Object Found"],
        "ng"            : ["whois.nic.net.ng", "Domain Status: Available"],
        "ninja"         : ["whois.unitedtld.com", "Domain not found."],
        "nl"            : ["whois.domain-registry.nl", "is free"],
        "no"            : ["whois.norid.no", "% No match"],
        "nu"            : ["whois.iis.nu", "not found."],
        "nz"            : ["whois.srs.net.nz", "query_status: 260 Will be Available"],
        "om"            : ["whois.registry.om", "No Data Found"],
        "onl"           : ["whois.afilias-srs.net", "NOT FOUND"],
        "paris"         : ["whois-paris.nic.fr", "Requested Domain cannot be found"],
        "partners"      : ["whois.donuts.co", "Domain not found."],
        "parts"         : ["whois.donuts.co", "Domain not found."],
        "pe"            : ["kero.yachay.pe", "Status: Not Registered"],
        "pf"            : ["whois.registry.pf", "Domain unknown"],
        "photo"         : ["whois.uniregistry.net", "is available for registration"],
        "photography"   : ["whois.donuts.co", "Domain not found."],
        "photos"        : ["whois.donuts.co", "Domain not found."],
        "pics"          : ["whois.uniregistry.net", "is available for registration"],
        "pictures"      : ["whois.donuts.co", "Domain not found."],
        "pl"            : ["whois.dns.pl", "No information available"],
        "plumbing"      : ["whois.donuts.co", "Domain not found."],
        "pm"            : ["whois.nic.pm", "No entries found"],
        "post"          : ["whois.dotpostregistry.net", "NOT FOUND"],
        "pr"            : ["whois.nic.pr", "is not registered."],
        "pro"           : ["whois.dotproregistry.net", "NOT FOUND"],
        "productions"   : ["whois.donuts.co", "Domain not found."],
        "properties"    : ["whois.donuts.co", "Domain not found."],
        "pt"            : ["whois.dns.pt", "no match"],
        "pub"           : ["whois.unitedtld.com", "Domain not found."],
        "pw"            : ["whois.nic.pw", "DOMAIN NOT FOUND"],
        "qa"            : ["whois.registry.qa", "No Data Found"],
        "quebec"        : ["whois.quebec.rs.corenic.net", "no matching objects found"],
        "re"            : ["whois.nic.re", "No entries found"],
        "recipes"       : ["whois.donuts.co", "Domain not found."],
        "reisen"        : ["whois.donuts.co", "Domain not found."],
        "rentals"       : ["whois.donuts.co", "Domain not found."],
        "repair"        : ["whois.donuts.co", "Domain not found."],
        "report"        : ["whois.donuts.co", "Domain not found."],
        "rest"          : ["whois.centralnic.com", "DOMAIN NOT FOUND"],
        "reviews"       : ["whois.unitedtld.com", "Domain not found."],
        "rich"          : ["whois.afilias-srs.net", "NOT FOUND"],
        "ro"            : ["whois.rotld.ro", "No entries found"],
        "rocks"         : ["whois.unitedtld.com", "Domain not found."],
        "rodeo"         : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "rs"            : ["whois.rnids.rs", "Domain is not registered"],
        "ru"            : ["whois.tcinet.ru", "No entries found"],
        "ruhr"          : ["whois.nic.ruhr", "no matching objects found"],
        "sa"            : ["whois.nic.net.sa", "No Match for"],
        "saarland"      : ["whois.ksregistry.net", "not found..."],
        "sb"            : ["whois.nic.net.sb", "Domain Status: No Object Found"],
        "sc"            : ["whois2.afilias-grs.net", "NOT FOUND"],
        "se"            : ["whois.iis.se", "not found."],
        "services"      : ["whois.donuts.co", "Domain not found."],
        "sexy"          : ["whois.uniregistry.net", "is available for"],
        "sg"            : ["whois.sgnic.sg", "Domain Not Found"],
        "sh"            : ["whois.nic.sh", "is available for purchase"],
        "shoes"         : ["whois.donuts.co", "Domain not found."],
        "si"            : ["whois.arnes.si", "No entries found"],
        "singles"       : ["whois.donuts.co", "Domain not found."],
        "sk"            : ["whois.sk-nic.sk", "Not found."],
        "sm"            : ["whois.nic.sm", "No entries found."],
        "sn"            : ["whois.nic.sn", "NOT FOUND"],
        "so"            : ["whois.nic.so", "DOMAIN NOT FOUND"],
        "social"        : ["whois.unitedtld.com", "Domain not found."],
        "solar"         : ["whois.donuts.co", "Domain not found."],
        "solutions"     : ["whois.donuts.co", "Domain not found."],
        "soy"           : ["domain-registry-whois.l.google.com", "Domain not found"],
        "st"            : ["whois.nic.st", "No entries found"],
        "su"            : ["whois.tcinet.ru", "No entries found"],
        "supplies"      : ["whois.donuts.co", "Domain not found."],
        "supply"        : ["whois.donuts.co", "Domain not found."],
        "support"       : ["whois.donuts.co", "Domain not found."],
        "sx"            : ["whois.sx", "Status: AVAILABLE"],
        "sy"            : ["whois.tld.sy", "Domain Status: Available"],
        "systems"       : ["whois.donuts.co", "Domain not found."],
        "tattoo"        : ["whois.uniregistry.net", "is available for registration"],
        "tc"            : ["whois.meridiantld.net", "Domain Status: No Object Found"],
        "technology"    : ["whois.donuts.co", "Domain not found."],
        "tel"           : ["whois.nic.tel", "Not found:"],
        "tf"            : ["whois.nic.tf", "No entries found"],
        "th"            : ["whois.thnic.co.th", "No match for"],
        "tienda"        : ["whois.donuts.co", "Domain not found."],
        "tips"          : ["whois.donuts.co", "Domain not found."],
        "tk"            : ["whois.dot.tk", "Invalid query or domain name not known"],
        "tl"            : ["whois.nic.tl", "Domain Status: No Object Found"],
        "tm"            : ["whois.nic.tm", "is available for purchase"],
        "tn"            : ["whois.ati.tn", "NO OBJECT FOUND!"],
        "to"            : ["whois.tonic.to", "No match for"],
        "today"         : ["whois.donuts.co", "Domain not found."],
        "tools"         : ["whois.donuts.co", "Domain not found."],
        "town"          : ["whois.donuts.co", "Domain not found."],
        "toys"          : ["whois.donuts.co", "Domain not found."],
        "tr"            : ["whois.nic.tr", "No match found for"],
        "training"      : ["whois.donuts.co", "Domain not found."],
        "travel"        : ["whois.nic.travel", "Not found:"],
        "tv"            : ["tvwhois.verisign-grs.com", "No match for"],
        "tw"            : ["whois.twnic.net.tw", "No Found"],
        "tz"            : ["whois.tznic.or.tz", "No entries found."],
        "ua"            : ["whois.ua", "No entries found for"],
        "ug"            : ["whois.co.ug", "No entries found for the selected source(s)."],
        "uk"            : ["whois.nic.uk", "This domain name has not been registered."],
        "university"    : ["whois.donuts.co", "Domain not found."],
        "us"            : ["whois.nic.us", "Not found"],
        "uy"            : ["whois.nic.org.uy", "No match for"],
        "black"         : ["whois.afilias.net", "NOT FOUND"],
        "blue"          : ["whois.afilias.net", "NOT FOUND"],
        "info"          : ["whois.afilias.net", "NOT FOUND"],
        "kim"           : ["whois.afilias.net", "NOT FOUND"],
        "pink"          : ["whois.afilias.net", "NOT FOUND"],
        "red"           : ["whois.afilias.net", "NOT FOUND"],
        "shiksha"       : ["whois.afilias.net", "NOT FOUND"],
        "uz"            : ["whois.cctld.uz", "not found in database"],
        "vacations"     : ["whois.donuts.co", "Domain not found."],
        "vc"            : ["whois2.afilias-grs.net", "NOT FOUND"],
        "ve"            : ["whois.nic.ve", "No match for"],
        "vegas"         : ["whois.afilias-srs.net", "NOT FOUND"],
        "ventures"      : ["whois.donuts.co", "Domain not found."],
        "vg"            : ["ccwhois.ksregistry.net", "not found..."],
        "viajes"        : ["whois.donuts.co", "Domain not found."],
        "villas"        : ["whois.donuts.co", "Domain not found."],
        "vision"        : ["whois.donuts.co", "Domain not found."],
        "vodka"         : ["whois-dub.mm-registry.com", "Status: Not Registered"],
        "voting"        : ["whois.voting.tld-box.at", "No match"],
        "voyage"        : ["whois.donuts.co", "Domain not found."],
        "vu"            : ["vunic.vu", "is not valid!"],
        "wang"          : ["whois.gtld.knet.cn", "No match"],
        "watch"         : ["whois.donuts.co", "Domain not found."],
        "wed"           : ["whois.nic.wed", "Domain Status: No Object Found"],
        "wf"            : ["whois.nic.wf", "No entries found in the AFNIC Database."],
        "wien"          : ["whois.nic.wien", "No match"],
        "wiki"          : ["whois.nic.wiki", "DOMAIN NOT FOUND"],
        "works"         : ["whois.donuts.co", "Domain not found."],
        "ws"            : ["whois.website.ws", "No match for"],
        "xxx"           : ["whois.nic.xxx", "NOT FOUND"],
        "xyz"           : ["whois.nic.xyz", "DOMAIN NOT FOUND"],
        "yt"            : ["whois.nic.yt", "No entries found in the AFNIC Database."],
        "ryukyu"        : ["whois.nic.ryukyu", "DOMAIN NOT FOUND"],
        "zm"            : ["whois.nic.zm", "Domain Status: No Object Found"],
        "zone"          : ["whois.donuts.co", "Domain not found."]
    };

    this.getTLD = function( string_LowerCaseDomainName ){
        var split = string_LowerCaseDomainName.split(".");
        return split[split.length-1];
    };

    this.isAvailable = function( string_DomainName ){
        var lowercaseDomainName = string_DomainName.toLowerCase(),
            tld = '',
            out = lowercaseDomainName + '\r\n',
            whoIsTextResponse = "",
            deferred = q.defer();

        // check the actual domain for an ip address mapping
        if ( hostbyname.resolve(lowercaseDomainName, "v4", cb) !== -1 ) {
            tld = this.getTLD(lowercaseDomainName);

            if (tld in this.whoIsData) {
                var whoIsServer = this.whoIsData[tld][0],
                    notFoundString = this.whoIsData[tld][1]; // NOT FOUND IS GOOD :D
            } else {
                throw "TLD WHOIS Server not found";W
            }

            // http://tools.ietf.org/html/rfc3912
            socket.connect(43, whoIsServer);

            socket.write(out);

            socket.on('data', function (d) {
                whoIsTextResponse += d.toString();
            });

            socket.on('close', function(){
                // resolve a promise
                //console.log(notFoundString);
                deferred.resolve([whoIsTextResponse, notFoundString]);
            });

        } else {
            // hostname maps to an IP address
            // return false;
            setTimeout(function(){
                deferred.reject("hostname mapped to ip address");
            }, 100);
        }

        // either way return the promise
        return deferred.promise;
    };

    this.resolve = function(responseArray){
        var response = responseArray[0],
            notFoundString = responseArray[1];
            //console.log({ r: response, s: notFoundString, v: response.indexOf(notFoundString)  });
        if ( !response.includes(notFoundString) ){
            console.log('D: not available');
            return false;
        } else {
            console.log('<3 AVAILABLE!')
/* NOT FOUND MEANS: _ _       _     _      _
...../\            (_) |     | |   | |    | |
..../  \__   ____ _ _| | __ _| |__ | | ___| |
.../ /\ \ \ / / _` | | |/ _` | '_ \| |/ _ \ |
../ ____ \ V / (_| | | | (_| | |_) | |  __/_|
./_/    \_\_/ \__,_|_|_|\__,_|_.__/|_|\___(*/
            return true;
        }
    };

    this.reject = function(error){
        console.log(false);
        return false;
    };

}

// sample implementation
var DA = new DomainAvailability();
DA.isAvailable("google.com").then(DA.resolve, DA.reject);