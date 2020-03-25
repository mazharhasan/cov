const express = require('express');
const registerRoute = express.Router();
let User = require('../../models/users.model');

/*************************Load all users********* */
registerRoute.route('/').get(async (req, res) => {
    var data = await User.findAllUsers(req.db);
  res.send(data);
})

// registerRoute.route('/:form_type/').get(async (req, res) => {
//     let formType = req.params.form_type; 
//     var result = await User.loadQuestionsById(req.db,formType)
//     res.send(result);
// })

registerRoute.route('/').post(async (req, res) => {

     var user = User.findUser(req.db,req.body.email)
     .then(data => {
         if(data.length == 0)
         {
        //   var t = User.saveUser(req.db,req.body);
        //   console.log('here is the user detail   '+t);
        //   res.status(201).send(t);
         // console.log('here are the user detail);

         req.db.collection("users").insertOne(req.body)
       .then(result => res.status(201).send(`${result.insertedId}`))
        .catch(err => res.status(409).send(`Failed to insert item: ${err}`))
         }
         else
         {
            res.status(409).send('user already exist')
         }
    });
    // if(user.length == 0)
    // {
    //     var user1 = await User.saveUser(req.db,req.body);
    //     console.log('After registeration '+ user1);
    //     res.status(201).send('user registered successfully')
    // }
    // else
    // {
    //     res.status(409).send('user already exist')
    // }
});


module.exports = registerRoute;
