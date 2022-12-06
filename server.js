const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const raspberryService = require('./rpi/raspberryService');
const appArguments = require('optimist').argv;
const mainRoutes = require('./backend/routes/main.route');
const serverHelper = require('./backend/server.helper');

console.log('### SERVER:\t\t Started...');

//serverHelper.configureLogs(appArguments.mode);

const config = require('./config');

// ------------- promise deprecation warning bypass -----------------------------
mongoose.Promise = global.Promise;
serverHelper.app.use(cors());
serverHelper.app.use('/scripts', serverHelper.express.static(__dirname + '/node_modules/'));
mongoose
    .connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
        if (err) {
            console.error('### DATABASE:\t Unable to connect to server... \n### Error:', err.message);
        } else {
            console.log('### DATABASE:\t Connection established to database at url: ', config.dbUrl);
        }
    });

//================================================================================
serverHelper.configureRouter();

let io = serverHelper.configureExpress(appArguments.mode, appArguments.port);

io.on('connection', function(socket) {
	console.log('[sockets]: socket connected!');
	socket.emit('connectedToSocket', {socket: socket.id});

    socket.on('disconnect', function() {
        console.log('[sockets]: socket disconnect!');
    });

    socket.on('appConnected', function() {
        console.log('[sockets]: client socket connected!');
    });

    socket.on('appDisconnected', function() {
        console.log('[sockets]: client socket disconnected!');
    });

    socket.on('rpiConnected', function() {
        console.log('[sockets]: rpi socket connected!');
        global.socketConnected = true;
    });

    socket.on('refresh', function() {
        console.log('[sockets]: refresh request!');
        socket.broadcast.emit('refreshApp');
    });

    socket.on('rpiDisconnected', function() {
        console.log('[sockets]: rpi socket disconnected!');
        socket.broadcast.emit('refreshApp');
        global.socketConnected = false;
    });
});


serverHelper.app.use('/scripts', serverHelper.express.static(__dirname + '/node_modules/'));

//serverHelper.configureMongooseConnection(appArguments.db);

mainRoutes(serverHelper.router, io);


process.on('exit', serverHelper.exitHandler.bind(null, {exit: true}));
process.on('SIGTERM', serverHelper.exitHandler.bind(null, {exit: true}));
process.on('uncaughtException', serverHelper.exitHandler.bind(null, {exit: false}));
