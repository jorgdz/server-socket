const express = require('express');
var app = express();
var socket = require('socket.io');
var port = 5000;

var server = app.listen(port, () => {
    console.log('Esperando clientes en el puerto ' + port);
});

let io = socket(server);

io.on('connection', (socket) => {
  	console.log("Cliente conectado !!");
  	
  	socket.on('habitacion', (habitacion) => { 
  		console.log('ID de Habitación: ' + habitacion.habitacion_id);

  		io.emit('habitacion_id', habitacion.habitacion_id);
	});
});