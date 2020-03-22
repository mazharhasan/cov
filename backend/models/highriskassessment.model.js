const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let highrisks = new Schema({
    question: {
        type: String
    },
    type: {
        type: String
    },
    choices: {
        type: String
    }
});
module.exports = mongoose.model('highrisks', highrisks);