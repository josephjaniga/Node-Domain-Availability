var express = require('express'),
    Seeker  = require('./Seeker.js'),
    app     = express(),
    router  = express.Router(),
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

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port '+ port);