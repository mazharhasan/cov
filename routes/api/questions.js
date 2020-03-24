const express = require('express');
const questionsRoute = express.Router();

let Questions = require('../../models/questions.model');
let Answers = require('../../models/answers.model');

/*************************Load all questions */
questionsRoute.route('/').get(async (req, res) => {
    var data = await Questions.load(req.db);
  res.send(data);
})

questionsRoute.route('/:form_type/').get(async (req, res) => {
    let formType = req.params.form_type; 
    var result = await Questions.loadQuestionsById(req.db,formType)
    res.send(result);
})

// questionsRoute.route('/:form_type/').get(async (req, res) => {
//     let formType = req.params.form_type; 
//     var finalResult=[];
//     var result = getQuestions(req.db,formType)
//         .then(function(result) {
//             console.log('questions'+ result);
//             result.forEach(element => {                
//                 quesArray.push(element);
//                 var result1 = getAnswers(req.db,element._id.toString())
//                 .then(function(result1) {
//                      if(result1.length > 0)
//                      {
//                          for(var i=0;i<result1.length ; i++)
//                          {
//                            console.log(element + '    '+ result1[i]);
//                          }
//                      }
//                 });
//             });
        
//        res.send(finalResult);
//     });
   
// })


var getQuestions = async (db,formType) => {
    var result = await (Questions.loadQuestionsById(db,formType));
    return result;
};

var getAnswers = async (db,id) => {
    var result1 = await Answers.loadAnwersById(db,id);
    return result1;
};


module.exports = questionsRoute;
