var connection =  new require('./kafka/Connection');


//MongoDB connection Part
const { mongoDB } = require('./utils/dbConfig');
const mongoose = require('mongoose');
var jobseekerprofile = require('./services/jobseeker/jobseekerprofile');
var jobseekeractivity = require('./services/jobseeker/jobseekeractivity');
var adminApprovals = require('./services/admin/updateStatus');
var companyGetDetails = require('./services/company/details');
var companyPostOps = require('./services/company/postCompany');
var userAuthActivity = require('./services/userauth/userAuth');
var employerJobActivity = require('./services/employer/jobs');
var jobs = require('./services/jobs/jobs');

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 500
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


function handleTopicRequest(topic_name, fname) {
    //var topic_name = 'root_topic';
    console.log("in handle topic req");
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log("server is running ");
    // console.log('Here in server.js', message)
    consumer.on("message", function (message) {
      console.log("message received for " + topic_name + " ", fname);
      console.log('checking message',message);
      console.log(JSON.stringify(message.value));
      var data = JSON.parse(message.value);
      console.log('here', data.data)
  
      fname.handle_request(data.data, function (err, res) {
        console.log("after handle" + res);
        var payloads = [
          {
            topic: data.replyTo,
            messages: JSON.stringify({
              correlationId: data.correlationId,
              data: res,
            }),
            partition: 0,
          },
        ];
        // console.log("payload created")
        // console.log(payloads)
        producer.send(payloads, function (err, data) {
          console.log(data);
        });
        return;
      });
    });
  }


// // Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("jobseekerprofile",jobseekerprofile);
handleTopicRequest("jobseekeractivity",jobseekeractivity);
handleTopicRequest("adminApprovals", adminApprovals);
handleTopicRequest("companyGetFunct",companyGetDetails);
handleTopicRequest("companyPostFunct",companyPostOps);
handleTopicRequest("jobs",jobs);
handleTopicRequest("userAuth",userAuthActivity);
handleTopicRequest("empjobactivity",employerJobActivity);
