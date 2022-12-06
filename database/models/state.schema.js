let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let state = new Schema({
  lastUpdateTime: Date,
  temperature: {
    value: Number
  },
  heater: {
    status: Number
  },
  feeding: {
    status: Number
  },
  light: {
    status: Number
  }, 
  nightLight: {
    status: Number
  },
  filter: {
    status: Number
  }
});

state.pre('save', function (next) {
  let error = null;
  this.lastMeasurementTime = new Date();

  //this.name ? error = null : error = new Error("Name missing");
  next(error);
});

let State = mongoose.model('State', state);

module.exports = State;

