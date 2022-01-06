var express = require('express');
var router = express();
var kafka = require('../kafka/client')
// var bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { secret } = require('../utils/constants');
const { checkAuth } = require('../utils/passport');
const { auth } = require('../utils/passport');
const mongoose = require('mongoose');

router.get("/details/:id", (req, res) => {
    console.log('Inside Get Company Details')
    console.log('Request Body: ', req.params);
    let body = {
        companyId: req.params,
        path: "getCompanyDetails"
    }
    kafka.make_request("companyGetFunct", body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.get("/details/salary/:id", (req, res) => {
    console.log('Inside Get Company Salary Details')
    console.log('Request Body: ', req.params);
    let body = {
        companyId: req.params,
        path:"getCompanySalaryDetails"
    }
    kafka.make_request("companyGetFunct", body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.get("/details/reviews/:id", (req, res) => {
    console.log('Inside Get Company Review Details')
    console.log('Request Body: ', req.params);
    let body = {
        companyId: req.params,
        path:"getCompanyReviewsDetails"
    }
    kafka.make_request("companyGetFunct", body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.get("/details/photos/:id", (req, res) => {
    console.log('Inside Get Company Photos List')
    console.log('Request Body: ', req.params);
    let body = {
        companyId: req.params,
        path:"getCompanyPhotos"
    }

    kafka.make_request("companyGetFunct", body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.get("/details/openjobs/:id", (req, res) => {
    console.log('Inside Get Company Open Jobs Details')
    console.log('Request Body: ', req.params);
    let body = {
        companyId: req.params,
        path:"getCompanyOpenJobs"
    }    
    kafka.make_request("companyGetFunct", body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.post("/add/review", (req, res) => {
    console.log('Inside Get Company Open Jobs Details')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    let body = {
        path:"addReviews",
        reviewDetails: req.body
    }
    kafka.make_request("companyPostFunct", body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.post("/add/photo", (req, res) => {
    console.log('Inside Get Company Open Jobs Details')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    req.body.path = "addPhotoToCompany";
    kafka.make_request("companyPostFunct", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

router.post("/add/salary", (req, res) => {
    console.log('Inside Get Company Open Jobs Details')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    kafka.make_request("companyPostFunct", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
}) 


router.post("/apply/job", (req, res) => {
    console.log('Inside Get Company Open Jobs Details')
    console.log('Request Body: ', req.body);
    // const { id } = req.body;
    // let 
    kafka.make_request("companyPostFunct", req.body, (err, result) => {
        if (err) {
            console.log("Error ", err);
            res.status(500).json({
                message: err.message
            })
        }
        res.status(200).json(result)
    });
})

module.exports = router;