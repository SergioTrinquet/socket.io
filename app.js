const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    //res.send('<h1>Salut tout le monde !!!</h1>');
    res.sendFile(__dirname + '/view/index.html');
});

io.on('connection', function(socket) {
    
    console.log('Un utilisateur est connecté');
    socket.on('disconnect', function() {
        console.log('Utilisateur déconnecté !');
    });

    socket.on('chat message', function(msg) {
        //console.log('Message : ' + msg);
        io.emit('chat message', msg);
    });

});

http.listen(3000);