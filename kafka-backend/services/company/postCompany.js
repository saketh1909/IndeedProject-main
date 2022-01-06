const Company = require('../../models/companyModel');
const Review = require('../../models/reviewModel');
const Jobs = require('../../models/jobModel');
var mongoose = require('mongoose');

const addReviews = (msg,callback)=>{
    let res={};
    Review.save(msg,(error,results)=>{
        if(error){
            res.status = 500;
            res.data = "Database Error";
            callback(null, res);
        }else{
            res.status = 200;
            res.data = "Applied for job Sucessfully";
            callback(null,res);
        }
    })
};

const getCompanySalaryDetails = (msg, callback) => {

}

// const applyForAJob = (msg, callback) => {
//     let companyReviews = await Review.find({
//         companyId: msg.companyId
//     })
//     if (!companyReviews) {
//         callback({
//             message: "No reviews found in DB for this company!"
//         }, null)
//     }
//     callback(null, companyReviews)

// }

const addSalary = (msg, callback) => {

}

const addPhotoToCompany = async (companyDetails, callback) => {
    let company = await Company.findOne({
        _id: mongoose.Types.ObjectId(companyDetails.companyId)
    })
    if (!company) {
        callback({
            message: "No Company found in DB!"
        }, null)
    }
    var image = {
        url: companyDetails.imageURL
    }
    let companyImage = await Company.updateOne({
        _id: mongoose.Types.ObjectId(companyDetails.companyId)
    }, {
        $push: {
            images: image
        }
    })
    
    callback(null,
        companyImage
    )

}

handle_request = (msg,callback) => {
    if(msg.path === "addReviews"){
        delete msg.path;
        addReviews(msg,callback);
    } else if(msg.path === "addPhotoToCompany"){
        delete msg.path;
        addPhotoToCompany(msg,callback);
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