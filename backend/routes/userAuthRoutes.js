var express = require('express');
var app = express();
var kafka = require("../kafka/client")

app.post('/signup', (req,res)=>{
    req.body.path="signup";
    kafka.make_request('userAuth',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

app.get('/getusers', (req,res)=>{
    req.body.path="getusers";
    kafka.make_request('userAuth',req.body, function(err,results){
        if (err){
            res.statusCode=500;
            res.send(err);
        }else{
            res.statusCode=200;
            res.send(results);
            }
    });
});

app.post('/login', (req,res)=>{
    req.body.path="login";
    kafka.make_request('userAuth',req.body, function(err,results){
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
