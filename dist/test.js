var socket = require('net').Socket(),
    fs = require('fs'),
    whoIsData   = require('./WhoIsData.js'),
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