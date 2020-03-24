const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var request = require("request");
const cors = require('cors');
const port = 5000;
const highRiskRoute = require('./routes/api/highrisk');
const userRoute = require('./routes/api/users');
const riskAssesmentRoute = require('./routes/api/riskassesments');
const questionsRoute = require('./routes/api/questions');
const { MongoClient } = require('mongodb');

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

const PORT = process.env.PORT || 8081;
const dev = process.env.NODE_DEV !== 'production'; // true false

const MONGO_URL = 'mongodb+srv://dbusr:Covid19@covidtracker.3f18u.azure.mongodb.net/';
const dbName = 'coviddb';

// Fix crash with react-datepicker
global.navigator = {
  userAgent: 'node.js',
};

MongoClient.connect(MONGO_URL, (err, client) => {
    console.log('Connected successfully to server', MONGO_URL);
    const db = client.db(dbName);
      // express code here
      const app = express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
  
      app.use((req, res, next) => {
        // Also expose the MongoDB database handle so Next.js can access it.
        req.db = db;
        next();
      });
  
      app.use('/api/highrisk', highRiskRoute);
app.use('/api/users', userRoute);
app.use('/api/riskassesments', riskAssesmentRoute);
app.use('/api/questions', questionsRoute);
  
  
      app.listen(PORT, err1 => {
        if (err1) throw err1;
        console.log(`ready at http://localhost:${PORT}`);
      });
  });





