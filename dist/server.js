var express = require('express'),
    Seeker  = require('./Seeker.js'),
    app     = express(),
    router  = express.Router(),
    tldrouter  = express.Router(),
    http    = require('http'),
    port    = 3333;

router.get('/:domain', function(req, res){
    var s       = new Seeker(),
        domain  = req.params.domain || "google.com",
        promise  = s.isAvailable(domain);

    promise.then(
        function(data){
            res.json(data);
        },
        function(data){
            res.json(data);
        }
    );

});

tldrouter.get('/', function(req, response){

    /**
     * GET A FULL ARRAY OF ALL TLDS - active and pending
     */

    http.get('http://data.iana.org/TLD/tlds-alpha-by-domain.txt', function(res){
        res.setEncoding('utf8');
        var body = "",
            processed = null,
            version = null;
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function(){
            processed = body.split("\n");
            version = processed[0];
            for ( var i =0; i<processed.length; i++ ){
                if ( processed[i].indexOf(" ") > -1 || processed[i] == "" ) {
                    processed.splice(i, 1);
                }
            }
            response.json({ tld: processed, count: processed.length, version: version });
        });
    });

});

app.use('/api', router);
app.use('/tld', tldrouter);

app.listen(port);
console.log('Magic happens on port '+ port);