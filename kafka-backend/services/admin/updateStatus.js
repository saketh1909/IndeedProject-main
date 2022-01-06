const Company = require('../../models/companyModel');
const reviewModel = require('../../models/reviewModel');
const jobApplicationsModel = require('../../models/jobApplicationModel');

const updateReviewStatus = async (reviewDetails,callback) => {
    let statuscode = 0;
    let res={};
    if(reviewDetails.status === 'approve'){
        statuscode = 1
    } else if (reviewDetails.status === 'reject') {
        statuscode = 2
    }
    console.log('statuscode',statuscode);

    await reviewModel.updateOne({
        _id: reviewDetails.reviewId
    }, {$set: { reviewStatus: statuscode}}, (error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    })
}

const updatePhotoStatus = async (photoDetails,callback) => {
    let statuscode = 0;
    let res={};
    if(photoDetails.status === 'approve'){
        statuscode = 1
    } else if (photoDetails.status === 'reject') {
        statuscode = 2
    }
    console.log(statuscode)

    await Company.updateOne({ 
        $and: [{
        _id: photoDetails.companyId,
        "images._id": photoDetails.imageId
    }]
    }, {
        $set: { 
            "images":{
                "imageStatus": statuscode
        }
        }
    }, (error,results)=>{
        if(error){
            res.status=500;
            // res.data="Database Error";
res.data = error
            callback(null,res);
        }else{
            console.log('res', results)
            res.status=200;
            res.data=results;
            callback(null,res);
        }
    }).clone()
}

const getReviewsListForApproval = async (msg, callback) => {
    let reviewsListForApproval = await Review.find({
        reviewStatus: 0
    })
    if (!reviewsListForApproval) {
        callback({
            message: "No reviews found in DB for Approval!"
        }, null)
    }
    callback(null, reviewsListForApproval)
}

const getPhotosListForApproval = async (msg, callback) => {
    let photosListForApproval = await Company.find({
        "images.imageStatus": 0
    }, {_id:0, images:1})
    if (!photosListForApproval) {
        callback({
            message: "No reviews found in DB for Approval!"
        }, null)
    }
    callback(null, photosListForApproval)
}

const getCompaniesListForAdmin = async (msg, callback) => {
    let companiesListForAdmin = await Company.find({}, 'name logoUrl')
    if (!companiesListForAdmin) {
        callback({
            message: "No reviews found in DB for Approval!"
        }, null)
    }
    callback(null, companiesListForAdmin)
}

const getCompanyReviewsListForAdmin = async (msg, callback) => {
    let companyReviewsListForAdmin = await Review.find({
        companyId: msg.companyId, reviewStatus : {$gte: 1}
    })
    if (!companyReviewsListForAdmin) {
        callback({
            message: "No reviews found in DB for this Company!"
        }, null)
    }
    callback(null, companyReviewsListForAdmin)
}

const getCompanyApplicantsList = async (msg, callback) => {
    let appliedCount = await jobApplicationsModel.count({companyId: msg.companyId, applicationStatus:'applied'});
    let hiredCount = await jobApplicationsModel.count({companyId: msg.companyId, applicationStatus:'hired'});
    let rejectedCount = await jobApplicationsModel.count({companyId: msg.companyId, applicationStatus:'rejected'});

    const companyApplicantsList = {
        appliedCount, hiredCount, rejectedCount
    }
    if (!companyApplicantsList) {
        callback({
            message: "No reviews found in DB for this Company!"
        }, null)
    }
    callback(null, companyApplicantsList)
}

handle_request = (msg,callback) => {
    if(msg.path === "updateReviewStatus"){
        delete msg.path;
        updateReviewStatus(msg,callback);
    } else if(msg.path === "updatePhotoStatus"){
        delete msg.path;
        updatePhotoStatus(msg,callback);
    } 
    else if(msg.path === "getReviewsListForApproval"){
        delete msg.path;
        getReviewsListForApproval(msg,callback);
    } else if(msg.path === "getPhotosListForApproval"){
        delete msg.path;
        getPhotosListForApproval(msg,callback);
    } else if(msg.path === "getCompaniesListForAdmin"){
        delete msg.path;
        getCompaniesListForAdmin(msg,callback);
    } else if(msg.path === "getCompanyReviewsListForAdmin"){
        delete msg.path;
        getCompanyReviewsListForAdmin(msg,callback);
    }else if(msg.path === "getCompanyApplicantsList"){
        delete msg.path;
        getCompanyApplicantsList(msg,callback);
    }
}

exports.handle_request = handle_request;