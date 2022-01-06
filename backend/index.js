//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require ('mysql');
var kafka = require('./kafka/client');
var mysqlConnection = require('./utils/mysqlConfig');
var reviewsDemo = require('./models/reviewsDemo');
//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
// const redis = require("redis");
// REDIS_HOSTNAME="127.0.0.1"
// REDIS_PORT=6379

// REDIS_HOSTNAME="indeed-project-001.9jgh1e.0001.use2.cache.amazonaws.com"
// REDIS_PORT=6379

// REDIS_PASSWORD="lK2VgfnxhM77grEXT5BjM5TFXfSQorVB"

// const client = redis.createClient({
//     host: REDIS_HOSTNAME,
//     port: REDIS_PORT,
//     // password: REDIS_PASSWORD
// });

// client.on("connect", () => {
//     console.log("Connected to our redis instance!");
// });

//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  const { mongoDB } = require('./utils/dbConfig');
  const mongoose = require('mongoose');
const { review } = require('../kafka-backend/models/mongooseSchema');
  var options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 500 //for connection pooling
  }
  mongoose.connect(mongoDB, options, (err, res) => {
      if(err){
          console.log(err);
          console.log('MongoDB connection failed');
      }
      else {
          console.log('MongoDB connected');
      }
  })


  // var jobSeekerRoutes = require('../backend/routes/jobseekerRoutes');
  var userAuthRoutes = require('../backend/routes/userAuthRoutes')
  var jobRoutes = require('../backend/routes/jobRoutes');
  const customerRoutes = require('./routes/companyRoutes');
  const adminRoutes = require('./routes/adminRoutes');
  const jobSeekerRoutes = require('../backend/routes/jobseekerRoutes');
  
  
  app.use("/jobseeker", jobSeekerRoutes);
  app.use('/company', customerRoutes);
  app.use('/admin', adminRoutes);
  app.use("/user",userAuthRoutes)
  app.use("/jobs",jobRoutes);

//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");