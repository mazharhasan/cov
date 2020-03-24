const express = require('express');
const RiskAssesmentRouter = express.Router();

const RiskAssessmentModel = require('../../models/riskassesments.model');


RiskAssesmentRouter.route('/').get(function (req, res) {
    RiskAssessmentModel.find(function (err, RiskAssessmentModel) {
        if (err) {
            console.log(err);
        } else {
            res.json(RiskAssessmentModel);
        }
    });
});



RiskAssesmentRouter.route('/add').post(function (req, res) {
    let item = new RiskAssessmentModel(req.body);
    item.save().
        then(item => {
            res.status(200).json({ 'item': 'item added successfully' });
        }).
        catch(error => {
            res.status(400).send('adding new item failed');
        });
}
);
module.exports = RiskAssesmentRouter;
