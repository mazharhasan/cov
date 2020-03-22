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
            type: String
        },email: {
            type: String
        }
    });

module.exports = mongoose.model('Users', Users);
