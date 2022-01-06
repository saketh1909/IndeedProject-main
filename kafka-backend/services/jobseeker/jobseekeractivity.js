var userModel = require('../../models/userModel'); 
var jobModel = require('../../models/jobModel');
var jobApplicationModel = require('../../models/jobApplicationModel');
var reviewModel = require('../../models/reviewModel');
const getResume = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    userModel.findOne({userId:userId},{_id:0,resumeURL:1},(error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    });
    
}

const uploadResume = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    let update={
        resumeURL:""
    }
    userModel.findOneAndUpdate({userId:userId},update,(error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data="Resume Update Successful";
            callback(null,res);
        }
    });
}
const deleteResume = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    let update={
        resumeURL:""
    }
    userModel.findOneAndUpdate({_id:userId},update,(error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data="Resume Deletion Successful";
            callback(null,res);
        }
    });
}
const getappliedjobs = async (msg,callback) => {
    let res= {};
    console.log(msg);
    jobApplicationModel.find({userId:msg.userId},{_id:0},(error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    });
}
const getsavedjobs = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    userModel.findOne({_id:userId},{_id:0,savedJobs:1}, async (error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            let jobs=[];
            console.log(results);
            if(results.savedJobs.length==0){
                res.status=200;
                res.data=[];
                callback(null,res);
                return;
            }
            
            for(let i=0;i<results.savedJobs.length;i++){
                let obj = results.savedJobs[i];
                jobModel.findOne({_id:obj},async(error,result)=>{
                    if(error){
                        res.status=500;
                        res.data = "Database Error";
                        callback(null, res);
                    }else{
                        jobs.push(result);
                    }
                    if(i==results.savedJobs.length-1){
                        console.log(jobs);
                        res.status=200;
                        res.data=jobs;
                        callback(null,res);
                    }
                })
            }
        }
    });
}
const getreviewsjobs = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    reviewModel.find({userId:userId},(error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    });

}
const applyforjob = async (msg,callback) => {
    let res={};
    const job=new jobApplicationModel({
        userId:msg.userId,
        companyId:msg.companyId,
        jobId:msg.jobId,
        applicationStatus:msg.applicationStatus,
        CompanyName:msg.CompanyName,
        resume:msg.resume,
        coverLetter:msg.coverLetter
    })
    job.save(msg,(error,results)=>{
        if(error){
            res.status = 500;
            res.data = error;
            callback(null, res);
        }else{
            res.status = 200;
            res.data = "Applied for job Sucessfully";
            callback(null,res);
        }
    })
}

handle_request = (msg, callback) => {
    if(msg.path=="getResume"){
        delete msg.path;
        getResume(msg,callback);
    }
    else if(msg.path=="uploadResume"){
        delete msg.path;
        uploadResume(msg,callback);
    }
    else if(msg.path=="deleteResume"){
        delete msg.path;
        deleteResume(msg,callback);
    }
    else if(msg.path=="getappliedjobs"){
        delete msg.path;
        getappliedjobs(msg,callback);
    }
    else if(msg.path=="getsavedjobs"){
        delete msg.path;
        getsavedjobs(msg,callback);
    }
    else if(msg.path=="getreviewsjobs"){
        delete msg.path;
        getreviewsjobs(msg,callback);
    }
    else if(msg.path=="applyforjob"){
        delete msg.path;
        applyforjob(msg,callback);
    }
}

exports.handle_request = handle_request;