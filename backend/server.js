const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var request = require("request");
const cors = require('cors');
const port = 5000;
const highRiskRoute = require('./routes/api/highrisk');
const userRoute = require('./routes/api/users');
const riskAssesmentRoute = require('./routes/api/riskassesments');
var path    = require("path");

const app = express();
//app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://dbusr:Covid19@covidtracker.3f18u.azure.mongodb.net/coviddb', { useNewUrlParser: true })
    .then(() => console.log('connecting')).catch(err => console.log(err));

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

// Use Routes
app.use('/api/highrisk', highRiskRoute);
app.use('/api/users', userRoute);
app.use('/api/riskassesments', riskAssesmentRoute);


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});




