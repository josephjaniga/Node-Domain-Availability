var socket = require('net').Socket(),
    fs = require('fs'),
    http = require('http'),
    whoIsData   = require('./../dist/WhoIsData.js'),
    Seeker   = require('./../dist/Seeker.js'),
    whoIsTextResponse = '';

    //socket.connect(43, "whois.nic.it");
    //
    //socket.on('lookup', function(err, address, family){
    //    if ( err != null ){
    //        console.log("HOLY SHIT THERE WAS AN ERROR");
    //        console.log(err);
    //    }
    //});
    //
    //socket.write("?\r\n");
    //
    //socket.on('data', function (d) {
    //    whoIsTextResponse += d.toString();
    //});
    //
    //socket.on('close', function(had_error){
    //    console.log(whoIsTextResponse);
    //});


    // write tests for all whois dns registrars
    //for ( var key in whoIsData.registrars ){
    //    fs.appendFile(
    //        "./dist/out.txt",
    //        "it('"+key+"',            function(){ s.isAvailable('google."+key+"').should.eventually.match(/(true|false)/); });\r\n",
    //        function(err) { if(err){ return console.log(err); } }
    //    );
    //}

    // testing

    //var s = new Seeker(),
    //    out = s.isAvailable("pizza.ninja");
    //
    //console.log(out.inspect());
    //
    //setTimeout(function(){
    //    console.log(out.inspect());
    //}, 500);

/**
 * GET A FULL ARRAY OF ALL TLDS - active and pending
 */

http.get('http://data.iana.org/TLD/tlds-alpha-by-domain.txt', function(res){
    res.setEncoding('utf8');
    var body = "",
        processed = null;
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function(){
        processed = body.split("\n");
        for ( var i =0; i<processed.length; i++ ){
            if ( processed[i].indexOf(" ") > -1 || processed[i] == "" ) {
                processed.splice(i, 1);
            }
        }
        console.log(processed.length);
    });
});

