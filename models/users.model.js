const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            String
        },
        city: {
            type: String
        },
        age: {
            type: Number
        },email: {
            type: String
        },
        longitude: {
            type: String
        },
        latitude: {
            type: String
        }
    });

module.exports = mongoose.model('Users', Users);
