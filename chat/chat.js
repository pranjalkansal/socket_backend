'use strict';

const io = require('socket.io')(3000);
var chat = io.of('/chat');

chat.on('connection', function (socket) {
    console.log('connected'); 
    socket.on('message', function (message) {
	console.log(message);
        chat.send('request_recived');
	socket.send('processing data!!');
    });
});
