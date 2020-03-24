const express = require('express');
const loginRoute = express.Router();
let User = require('../../models/users.model');

loginRoute.route('/').post(async (req, res) => {
    var user = await User.findUser(req.db,req.body.email);
    if(user.length > 0)
    {
        res.status(200).send(user);
    }
    else
    {
        res.status(409).send('user not found')
    }
})


module.exports = loginRoute;
