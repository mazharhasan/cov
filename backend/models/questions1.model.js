const mongoose = require('mongoose');
const questionModel = mongoose.Schema({
    question: {
        type: String,
    },
    form_type: {
        type: String
    },
    question_type: {
        type: String
    },
    answers: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'answer' }
    ]
}, {
        timestamps: true
    });
module.exports = mongoose.model('Questions', questionModel);