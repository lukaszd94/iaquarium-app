let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let firebaseToken = new Schema({
    registerDate: Date,
    token: String,
    userAgent: String
});

firebaseToken.pre('save', function (next) {
    let error = null;

    //this.name ? error = null : error = new Error("Name missing");
    next(error);
});

let FirebaseToken = mongoose.model('FirebaseToken', firebaseToken);

module.exports = FirebaseToken;
