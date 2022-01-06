var express = require("express");
var router = express.Router();
var kafka = require('../kafka/client')
// var bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { secret } = require('../utils/constants');
const { checkAuth } = require('../utils/passport');
const { auth } = require('../utils/passport');
const mongoose = require('mongoose');
const { application } = require("express");

router.post("/review/approve",  (req, res) => {
    console.log('Inside Admin approve a review')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    // let body = {
    //     msg="addReviews",
    //     reviewDetails: req.body
    // }
    req.body.path= "updateReviewStatus";
    req.body.status= "approve";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.post("/reviews/reject",  (req, res) => {
    console.log('Inside Admin Reject a review')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "updateReviewStatus";
    req.body.status= "reject";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})


router.post("/photo/reject",  (req, res) => {
    console.log('Inside Admin Reject an Image')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "updatePhotoStatus";
    req.body.status= "reject";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.post("/photo/approve",  (req, res) => {
    console.log('Inside Admin Approve an Image')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "updatePhotoStatus";
    req.body.status= "approve";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.get("/reviews/list/approve", (req, res) => {
    console.log('Inside Admin Get Reviews list for approval')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "getReviewsListForApproval";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
});

router.get("/photos/list/approve", (req, res) => {
    console.log('Inside Admin Get Photos list for approval')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "getPhotosListForApproval";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
});

router.get("/Company/list", (req, res) => {
    console.log('Inside Admin Get Companies list')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "getCompaniesListForAdmin";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
});

router.get("/company/reviews/list", (req, res) => {
    console.log('Inside Admin Get Company Review list')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "getCompaniesListForAdmin";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
});

router.get("/company/applicants/list", (req, res) => {
    console.log('Inside Admin Get Companies list')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path= "getCompaniesListForAdmin";
    kafka.make_request("adminApprovals", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
});


module.exports = router