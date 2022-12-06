const rest = require('../rest.helper');
const jwt = require('jsonwebtoken');
const configData = require('../../config');

let mainRoutes = function (router, io) {
    const mainRepository = require('../repositories/main.repository')(io);

    function checkAuth(req, res, next) {
        let token = req.headers['authorization'];
        try {
            let verifiedTokenData = jwt.verify(token.replace('Bearer ', ''), configData.serverSecret);
            next();
        } catch (err) {
            rest.Error(res, 'AUTH_ERROR', [err], 401);
        }
    }

    router
        .route('/sensors')
        .get(checkAuth, function (req, res) {
            mainRepository.getSensorsData().then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });

    router
        .route('/config')
        .get(checkAuth, function (req, res) {
            mainRepository.getConfigData().then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        })
        .post(checkAuth, function (req, res) {
            let newConfigData = req.body;

            mainRepository.setConfigData(newConfigData).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });

    router
        .route('/temperatures')
        .get(checkAuth, function (req, res) {
            let amountOfDays = req.query.amountOfDays;

            if (amountOfDays > 30) {
                rest.Error(res, 'PARAMS_ERROR', [new Error('Too hight amount of days (limit 30)')], 400);
            }

            mainRepository.getTemperaturesData(amountOfDays).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });

    router
        .route('/sensors/feeding')
        .put(checkAuth, function (req, res) {
            let options = req.body;


            mainRepository.sendFirebaseMessage().then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });


            // mainRepository.feed(options).then((response) => {
            //     rest.Ok(res, response, 200);
            // }, (error) => {
            //     rest.Error(res, 'ERROR', [error], 404);
            // });
        });

    router
        .route('/sensors/light')
        .put(checkAuth, function (req, res) {
            let options = req.body;

            mainRepository.toggleLight(options).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });

    router
        .route('/sensors/night-light')
        .put(checkAuth, function (req, res) {
            let options = req.body;

            mainRepository.toggleNightLight(options).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });

    router
        .route('/sensors/heater')
        .put(checkAuth, function (req, res) {
            let options = req.body;

            mainRepository.toggleHeater(options).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });

    router
        .route('/sensors/filter')
        .put(checkAuth, function (req, res) {
            let options = req.body;

            mainRepository.toggleFilter(options).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        });


    router
        .route('/system')
        .get(checkAuth, function (req, res) {
            mainRepository.getSystemData().then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 404);
            });
        })
        .post(checkAuth, function (req, res) {
            rest.Ok(res, { ok: true }, 200);
        });

    router
        .route('/auth')
        .post(function (req, res) {
            mainRepository.checkPassword(req.body.password).then((response) => {
                rest.Ok(res, response, 200);
            }, (error) => {
                rest.Error(res, 'ERROR', [error], 401);
            });
        })

};

module.exports = mainRoutes;
