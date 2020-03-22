const express = require('express');
const userRouter = express.Router();
let User = require('../../models/users.model');

userRouter.route('/').get(function (req, response) {
    User.find(function (error, user) {
        if (error) {
            console.log('');
        }
        else {
            response.json(user);
        }
    }
    );
});


userRouter.route('/add').post(function (req, res) {
    let todo = new User(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'user': 'user added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});



module.exports = userRouter;