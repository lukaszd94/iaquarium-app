const fs = require('fs');
const Promise = require('promise');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080"
    }
});

let port = (process.env.PORT || 8080);

function configureExpress(serverMode, serverPort) {
    switch (serverMode) {
        case 'prod':
            app.use(express.static(__dirname.replace('backend', '') + '/dist'));
            console.log('### SERVER:\t\t Running on port ' + port + ' and PUBLIC mode...');
            console.log('### SERVER:\t\t Serving /dist...');
            break;
        case 'dev':
            app.use(express.static(__dirname.replace('backend', '') + '/frontend'));
            console.log('### SERVER:\t\t Running on port ' + port + ' and DEVELOPMENT mode...');
            console.log('### SERVER:\t\t Serving /frontend...');
            break;
        default:
            app.use(express.static(__dirname.replace('backend', '') + '/dist'));
            console.log('### SERVER:\t\t Running on port ' + port + ' and DEVELOPMENT mode...');
            console.log('### SERVER:\t\t Serving /dist...');
            break;
    }

    if (serverPort) {
        port = serverPort;
    }

    server.listen(port);

    return io;
}

function configureRouter() {
    app.use('/api', router);
    router.use(bodyParser.urlencoded({ extended: false }));
    router.use(bodyParser.json());
}

function exitHandler(options, err) {
    if (options.cleanup)
        console.log('!!! Server clean');
    if (err)
        console.log('!!! Server error: \n' + err.stack);
    if (!options.exit)
        console.log('!!! Server unknown error!');
    if (options.exit) {
        console.log('!!! Server exit');
        process.exit(0);
    }
}

module.exports = {
    port: port,
    router: router,
    app: app,
    path: path,
    express: express,
    configureExpress: configureExpress,
    configureRouter: configureRouter,
    exitHandler: exitHandler
};
