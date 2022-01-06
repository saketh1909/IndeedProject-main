var express = require('express');
var app = express();
var kafka = require("../kafka/client");

app.post('/update_profile_details', (req,res)=>{
    req.body.path="updateProfileDetails";
    kafka.make_request('jobseekerprofile',req.body, function(err,results){
        console.log("Here");
        console.log(err,results);
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.post('/upload_profile_image', (req,res)=>{
    req.body.path="updateProfileImage";
    kafka.make_request('jobseekerprofile',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.get('/get_resume', (req,res)=>{
    req.query.path="getResume";
    kafka.make_request('jobseekeractivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.post('/upload_resume', (req,res)=>{
    req.body.path="uploadResume";
    kafka.make_request('jobseekeractivity',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.delete('/delete_resume', (req,res)=>{
    req.body.path="deleteResume";
    kafka.make_request('jobseekeractivity',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.get('/get_applied_jobs', (req,res)=>{
    req.query.path="getappliedjobs";
    kafka.make_request('jobseekeractivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.get('/get_saved_jobs', (req,res)=>{
    req.query.path="getsavedjobs";
    kafka.make_request('jobseekeractivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.get('/get_reviews_added', (req,res)=>{
    req.query.path="getreviewsjobs";
    kafka.make_request('jobseekeractivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.post('/apply_for_job', (req,res)=>{
    req.body.path="applyforjob";
    kafka.make_request('jobseekeractivity',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

module.exports = app;
