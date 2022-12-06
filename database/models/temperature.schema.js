let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let temperature = new Schema({
    date: Date,
    value: Number,
    status: String,
    data: {}
});

temperature.pre('save', function (next) {
    let error = null;

    //this.name ? error = null : error = new Error("Name missing");
    next(error);
});

let Temperature = mongoose.model('Temperature', temperature);

module.exports = Temperature;
