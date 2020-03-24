const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let riskassesments = new Schema(
    {
        name: String,
        question: String
    }

);
module.exports = mongoose.model('riskassesments', riskassesments);