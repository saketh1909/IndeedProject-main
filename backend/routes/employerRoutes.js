var express = require('express');
var kafka = require("../kafka/client")
var app = express();

app.get('/display_all_jobs', (req,res)=>{
    
    kafka.make_request('empjobactivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

app.post('/add_new_job', (req,res)=>{
    req.body.path="addJob";
    kafka.make_request('empjobactivity',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

app.get('/get_job_application_details', (req,res)=>{
    kafka.make_request('empjobactivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

app.get('/get_applicant_profile', (req,res)=>{
    kafka.make_request('empjobactivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

app.get('/get_job_statistics', (req,res)=>{
    kafka.make_request('empjobactivity',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

module.exports = app;
