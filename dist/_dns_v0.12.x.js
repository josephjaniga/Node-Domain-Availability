var dns = require("dns");

// get and remove all elements before THIS filepath
// assuming script was executed with: $node __filename [input]
var command = process.argv,
	i = command.indexOf(__filename)+1;
	
	command.splice(0,i);
	
	console.log(command);

dns.lookup(command[0], 4, function(err, address, family){
	console.log("error: " + err);
	console.log("address: " + address);
	console.log("family: " + family);
});