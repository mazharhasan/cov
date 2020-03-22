const express = require('express');
const highRiskRoutes = express.Router();

let HighRisk = require('../../models/highriskassessment.model');



highRiskRoutes.route('/').get(function (req, res) {
    HighRisk.find(function (err, highrisk) {
        if (err) {
            console.log(err);
        } else {
            res.json(highrisk);
        }
    });
});


highRiskRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    HighRisk.findById(id, function (err, highrisk) {
        res.json(highrisk);
    });
});

highRiskRoutes.route('/update/:id').post(function (req, res) {
    HighRisk.findById(req.params.id, function (err, highrisk) {
        if (!highrisk)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;

        todo.save().then(todo => {
            res.json('highrisk updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

highRiskRoutes.route('/add').post(function (req, res) {
    let HighRisk = new HighRisk(req.body);
    HighRisk.save()
        .then(todo => {
            res.status(200).json({ 'form': 'high risk added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new high risk failed');
        });
});

module.exports = highRiskRoutes;
