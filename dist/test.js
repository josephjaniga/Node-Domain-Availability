var socket = require('net').Socket(),
    whoIsTextResponse = '';
    
    socket.connect(43, "whois.nic.it");
    
    socket.on('lookup', function(err, address, family){
        if ( err != null ){
            console.log("HOLY SHIT THERE WAS AN ERROR");
            console.log(err);
        }
    });
    
    socket.write("?\r\n");
    
    socket.on('data', function (d) {
        whoIsTextResponse += d.toString();
    });
    
    socket.on('close', function(had_error){
        console.log(whoIsTextResponse);
    });