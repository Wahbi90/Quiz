var mongoose = require('mongoose');


var QuizSchema = new mongoose.Schema({
    question : String,
    answers : [String],
    correct : String
});

module.exports = mongoose.model('Quiz', QuizSchema);