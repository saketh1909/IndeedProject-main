var jobModel = require('../../models/jobModel');
var ObjectId = require('mongoose').Types.ObjectId;
const getjobs = async ( msg , callback) => {
    let res={};
    const {companyId} = msg;
    jobModel.find({company  : new ObjectId(companyId)},(error,results)=> {
        if(error){
            res.status=500;
            res.data=error;
            callback(null,res);
        }else{
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    })
}

const getJobDetails = async ( msg , callback) => {
    let res={};
    const {jobId} = msg;
    jobModel.find({_id: jobId},(error,results)=> {
        if(error){
            res.status=500;
            res.data=error;
            callback(null,res);
        }else{
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    });
}

handle_request = (msg, callback) => {
    if(msg.path=="getjobs"){
        delete msg.path;
        getjobs(msg,callback);
    }
    else if(msg.path=="getJobDetails"){
        delete msg.path;
        getJobDetails(msg,callback);
    }
}
exports.handle_request = handle_request;