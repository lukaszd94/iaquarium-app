const Promise = require('promise');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const configData = require('../../config');
const Temperature = require('../../database/models/temperature.schema.js');
const State = require('../../database/models/state.schema.js');
const Config = require('../../database/models/config.schema');

const messaging = require('firebase/messaging');
const firebase = require('firebase/app');

//const raspberryService = require('../../raspberryService.js');
let mainRepository = function (io) {
    let getSensorsData = function () {
        return new Promise(function (resolve, reject) {
            State.find({}, function (error, states) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve({
                    sensors: states[0]
                });
            });
        });
    };

    let getTemperaturesData = function (amountOfDays) {
        return new Promise(function (resolve, reject) {
            amountOfDays = amountOfDays ? amountOfDays : 1;
            let lowerDate = new Date();
            lowerDate.setDate(lowerDate.getDate() - amountOfDays);

            Temperature.find({ "date": { "$gte": lowerDate } }).sort('date').exec(function (error, temperatures) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve({
                    lastTemperatureValues: temperatures
                });
            });
        });
    };

    let getSystemData = function () {
        return new Promise(function (resolve, reject) {
            let system = {
                status: global.socketConnected ? global.socketConnected : null
            };
            resolve(system);
        });
    };

    let feed = function (options) {
        return new Promise(function (resolve, reject) {
            let status;
            io.emit('feed');
            status = true;
            resolve(status);
        });
    };

    let toggleLight = function (options) {
        return new Promise(function (resolve, reject) {
            let status;
            if (options.newLightState) {
                io.emit('light', 1);
                status = 1;
            } else {
                io.emit('light', 0);
                status = 0;
            }

            resolve(status);
        });
    };

    let toggleNightLight = function (options) {
        return new Promise(function (resolve, reject) {
            let status;
            if (options.newLightState) {
                io.emit('nightLight', 1);
                status = 1;
            } else {
                io.emit('nightLight', 0);
                status = 0;
            }

            resolve(status);
        });
    };

    let toggleHeater = function (options) {
        return new Promise(function (resolve, reject) {
            let status;
            if (options.newHeaterState) {
                io.emit('heater', 1);
                status = 1;
            } else {
                io.emit('heater', 0);
                status = 0;
            }

            resolve(status);
        });
    };

    let toggleFilter = function (options) {
        return new Promise(function (resolve, reject) {
            let status;
            if (options.newFilterState) {
                io.emit('filter', 1);
                status = 1;
            } else {
                io.emit('filter', 0);
                status = 0;
            }

            resolve(status);
        });
    };

    let getConfigData = function () {
        return new Promise(function (resolve, reject) {
            Config.findOne({}, function (err, foundConfig) {
                if (err || !foundConfig) {
                    console.log(err);
                    reject(err);
                }

                resolve(foundConfig);
            });
        });
    };

    let setConfigData = function (newConfigData) {
        return new Promise(function (resolve, reject) {
            Config.findByIdAndUpdate(newConfigData._id, newConfigData, { new: true }, function (err, updatedConfig) {
                if (err || !updatedConfig) {
                    console.log(err);
                    reject(err);
                }

                io.emit('updateConfigData');
                resolve(updatedConfig);
            });
        });
    };

    let checkPassword = function (password) {
        return new Promise(function (resolve, reject) {

            // TODO change to password from db
            password === getPassword() ? resolve({
                isLoggedIn: true,
                token: getToken()
            }) : reject({
                isLoggedIn: false
            });
        });
    };

    let sendFirebaseMessage = function () {
        const registrationToken = 'c17wD4T_z6PKHKQTqRJPon:APA91bEGV_u4o2Iaa2L7pvxYAPUhE97EuAZEi2xib7vIxycYWY5w0NBkRrekbSo0b6m8QCMNC4IDv2WcYZHalNuJYC1XmASjA4VlNqo33IP1l7c7S0h3MsaoztDmjtN8700djKCTHFWl';

        const message = {
            data: {
                score: '850',
                time: '2:45'
            },
            token: registrationToken
        };

        let firebaseConfig = {
            apiKey: "AIzaSyA9g3qOYvcfyZ1UU-HDvDl-96HIli3rucE",
            authDomain: "iaquarium-v2-aaae7.firebaseapp.com",
            projectId: "iaquarium-v2-aaae7",
            storageBucket: "iaquarium-v2-aaae7.appspot.com",
            messagingSenderId: "1093225067884",
            appId: "1:1093225067884:web:b1a5640779cfb95eadef49",
            measurementId: "G-ERVX777CB5"
        };

        const app = firebase.initializeApp(firebaseConfig);

        messaging.getMessaging().send(message)
            .then((response) => {
                // Response is a message ID string.
                console.log('Successfully sent message:', response);
            })
            .catch((error) => {
                console.log('Error sending message:', error);
            });
    };


    return {
        getSensorsData: getSensorsData,
        getSystemData: getSystemData,
        toggleLight: toggleLight,
        toggleNightLight: toggleNightLight,
        toggleHeater: toggleHeater,
        feed: feed,
        toggleFilter: toggleFilter,
        getTemperaturesData: getTemperaturesData,
        getConfigData: getConfigData,
        setConfigData: setConfigData,
        checkPassword: checkPassword,
        sendFirebaseMessage: sendFirebaseMessage
    };
};

module.exports = mainRepository;

function getToken() {
    return jwt.sign({ login: 'lukasor' }, configData.serverSecret, { expiresIn: '1000h' });
}

function getPassword() {
    return configData.appPassword;
}