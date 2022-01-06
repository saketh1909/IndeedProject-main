var jobModel = require('../../models/jobModel'); 
var jobApplication = require('../../models/jobApplicationModel');
var user = require('../../models/userModel');

var mongoose = require('mongoose');
const getAllJobs = async (msg,callback) => {
    let res= {};
    let companyId = msg.companyId;
    console.log("company id " + msg);
    jobModel.find({company:companyId}, (error, results) => {
        if(error){
            console.log("Error is " + error);
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        } else{
            const jobIds = [];
            
            for(var i = 0; i < results.length; i++){
                jobIds.push(results[i]._id);
            }
             
            jobApplication.aggregate([{$match: { jobId: {$in: jobIds} } }, { $group: { _id: "$jobId", numOfApplicants: {$sum: 1 } } } ], (error, applicants) => {
                if(error){
                    console.log("Error is " + error);
                    res.status=500;
                    res.data="Database Error";
                    callback(null,res);
                }
                else{
                        //console.log(jobId)
                    console.log("Applicants are - ");
                    console.log(JSON.stringify(applicants));
                    console.log("********");
                }   
                } 
                )
            
            
            res.status=200;
            res.data=results;
            callback(null, res); 
        }
    })
}

const addJob = async (msg,callback) => {
    res={};
    const location = {
        city: msg.city,
        state:msg.state,
        country:msg.country,
        zipcode:msg.zipcode,
        streetAddress:msg.streetAddress
    }

    var d = new Date();
    jobPostedDate = d.getMonth() + 1;
    jobPostedDate += "/" + d.getDate();
    jobPostedDate += "/" + d.getFullYear();
    console.log("Date of job: " + jobPostedDate);

    const newJob = new jobModel({
        company: msg.companyId,
        jobType: msg.jobType,
        role:msg.role,
        location: location,
        salary:msg.salary,
        mode:msg.mode,
        industry:msg.industry,
        jobPostedDate:jobPostedDate,
        isOpenToApply:true
    });

    newJob.save((err, job) =>{
        if(err){
            console.log("Error is" + err);
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        
        } else{
            res.status=200;
            res.data=job;
            callback(null, res);
        }
    } )
}

const getJobApplicationDetails = async (msg,callback) => {
    res = {};

    jobApplication.find({jobId: msg.jobId}, (err, result)=>{
        if(err){
            console.log("Error is: " + err);
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }
        else{
            console.log(JSON.stringify(result));
            res.status=200;
            res.data=result;
            callback(null, res);
        }
    });

}

const getUserProfileFromApplication = async (msg,callback) => {
    res = {};
    user.find({_id: msg.userId}, (err, jobSeekerDetails) =>{
        if(err){
            console.log("Error is: " + err);
            res.status=500;
            res.data="Database error while getting applicant details";
            callback(null,res);
        
        } else{
            console.log("Job seeker details: ");
            console.log(JSON.stringify(jobSeekerDetails));
            res.status=200;
            res.data=jobSeekerDetails;
            callback(null, res);
        }
    });
}

const getJobStatistics = async (msg,callback) => {
    res = {};
    var currentDate = new Date();
    var startDate = currentDate.getMonth();
    startDate += "/" + currentDate.getDate() + "/";
    startDate += currentDate.getFullYear() - 1;
    
    jobModel.find({ $and: [{company: msg.companyId}, {jobPostedDate: {$gte: startDate, $lte: currentDate}}]}, (err, jobs) =>{
        if(err){
            console.log("Error is: " + err);
            res.status=500;
            res.data="Database error while getting jobs";
            callback(null,res);
        
        } else{
            console.log("Job of the past year: ");
            console.log(JSON.stringify(jobs));
            const jobIds = [];
            
            for(var i = 0; i < jobs.length; i++){
                jobIds.push(jobs[i]._id);
            }

            jobApplication.aggregate([{ $match: {jobId: {$in: jobIds} } }, 
                { $group: {
                    "_id": "$jobId", 
                "totalApplicants": {$sum: 1 }, 
                "selectedApplicants": { $sum: { applicationStatus: {$eq: ["$applicationStatus", "Hired"]}} }, 
                "rejectedApplicants": { $sum: { applicationStatus: {$eq: ["$applicationStatus", "Rejected"]}} } } }], (err, stats) =>{
                    if(err){
                        console.log("Error is: " + err);
                        res.status=500;
                        res.data="Database error while getting stats";
                        callback(null,res);
                    }
                    else{
                        console.log("Stats: ");
                        console.log(JSON.stringify(stats));
                        res.status=200;
                        res.data=stats;
                        callback(null, res);
                    }
                })
        }
    });
}

handle_request = (msg, callback) => {
    if(msg.path=="getAllJobs"){
        delete msg.path;
        getAllJobs(msg,callback);
    }
    else if(msg.path=="addJob"){
        delete msg.path;
        addJob(msg,callback);
    }
    else if(msg.path=="getJobApplicationDetails"){
        delete msg.path;
        getJobApplicationDetails(msg,callback);
    }
    else if(msg.path=="getUserProfileFromApplication"){
        delete msg.path;
        getUserProfileFromApplication(msg,callback);
    }
    else if(msg.path=="getJobStatistics"){
        delete msg.path;
        getJobStatistics(msg,callback);
    }
}

exports.handle_request = handle_request;