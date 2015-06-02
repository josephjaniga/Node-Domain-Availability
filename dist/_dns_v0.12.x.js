var dns = require("dns"),
	hostname = process.argv[0];

dns.lookup(hostname, 4, function(err, address, family){
	console.log("error: " + err);
	console.log("address: " + address);
	console.log("family: " + fmaily);
});