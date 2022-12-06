let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let config = new Schema({
  tempReadIntervalCroneCmd: String,
	feedingIntervalCroneCmd: String,
	lightSwitchingOnIntervalCroneCmd: String,
	lightSwitchingOffIntervalCroneCmd: String,
	nightLightSwitchingOnIntervalCroneCmd: String,
	nightLightSwitchingOffIntervalCroneCmd: String,
	filterSwitchingOnIntervalCroneCmd: String,
	filterSwitchingOffIntervalCroneCmd: String,
	updateStateIntervalCroneCmd: String,
	minTemperature: String,
	maxTemperature: String
});

config.pre('save', function (next) {
    let error = null;

    //this.name ? error = null : error = new Error("Name missing");
    next(error);
});

let Config = mongoose.model('Config', config);

module.exports = Config;
