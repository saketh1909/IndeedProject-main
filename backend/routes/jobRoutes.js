var express = require('express');
var app = express();
var kafka = require("../kafka/client");
app.get('/getjobs', (req,res) => {
    req.query.path="getjobs";
    kafka.make_request('jobs',req.query, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=results.status;
            res.send(results.data);
            }
    });
});

app.get('/getJobDetails', (req,res) => {
    
    req.query.path="getJobDetails";
    kafka.make_request('jobs',req.query, function(err,results){
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