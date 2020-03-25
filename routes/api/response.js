const express = require('express');
const responseRoute = express.Router();
let Response = require('../../models/response.model');



responseRoute.route('/:userId').get(async (req, res) => {
    var data = await Response.findAllReponses(req.db,req.params.userId);
  res.send(data);
})

responseRoute.route('/').post(async (req, res) => {
        var response = await Response.saveResponse(req.db,req.body);
        res.status(201).send('response saved successfully')
    
})
module.exports = responseRoute;
