const Company = require('../../models/companyModel');
const Review = require('../../models/reviewModel');
const Jobs = require('../../models/jobModel');
var mongoose = require('mongoose');

const getCompanyDetails = async (msg,callback)=>{
    let company = await Company.findOne({
        _id: mongoose.Types.ObjectId(msg.companyId)
    })
    if (!company) {
        callback({
            message: "company not found in DB!"
        }, null)
    }
    callback(null, company)
}

const getCompanySalaryDetails = async (msg, callback) => {

}

const getCompanyReviewsDetails = async (msg, callback) => {
    let companyReviews = await Review.find({
        companyId: mongoose.Types.ObjectId(msg.companyId)
    })
    if (!companyReviews) {
        callback({
            message: "No reviews found in DB for this company!"
        }, null)
    }
    callback(null, companyReviews)

}

const getCompanyPhotos = async (msg, callback) => {

}

const getCompanyOpenJobs = async (msg, callback) => {
    let openJobs = await Jobs.find({ $and: [{companyId:mongoose.Types.ObjectId(msg.companyId), 
        isOpenToapply: true}]
    })
    if (!openJobs) {
        callback({
            message: "No open jobs found in DB for this company!"
        }, null)
    }
    callback(null, openJobs)

}

handle_request = (msg,callback) => {
    if(msg.path === "getCompanyDetails"){
        delete msg.path;
        getCompanyDetails(msg,callback);
    } else if(msg.path === "getCompanySalaryDetails"){
        delete msg.path;
        getCompanySalaryDetails(msg,callback);
    } else if(msg.path === "getCompanyReviewsDetails"){
        delete msg.path;
        getCompanyReviewsDetails(msg,callback);
    } else if(msg.path === "getCompanyPhotos"){
        delete msg.path;
        getCompanyPhotos(msg,callback);
    } else if(msg.path === "getCompanyOpenJobs"){
        delete msg.path;
        getCompanyOpenJobs(msg,callback);
    }
}

exports.handle_request = handle_request;