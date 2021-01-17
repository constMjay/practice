const { Schema } = require('mongoose')
const mongoose = require('mongoose');

const fbUserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const fbUser = mongoose.model('fbUser', fbUserSchema);

module.exports = fbUser