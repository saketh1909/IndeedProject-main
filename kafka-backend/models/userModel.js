const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    emailId: {type: String, required: true, unique: true},
  name: {type: String},
  contact: {type: String, default:''},
  address: {
      city: {type: String, default:''},
      state: {type: String, default:''},
      zipcode: {type: String, default:''},
      country: {type: String, default:''},
      streetAddress: {type: String, default:''},
    },
  profileImg: {type: String, default:''},
  resumeURL: {type: String, default:''},
  coverLetterURL: {type:String, default:''},
  linkedInURL: {type: String, default:''},
  currentCompanyDetails: {
    company: {type: Schema.Types.ObjectId ,ref:'company'},
    name: {type: String, default:''},
    role: {type: String, default:''},
    joiningDate: {type: Date, default:''},
    reviews: [{type: Schema.Types.ObjectId ,ref:'reviews'}],
    salary: {type: Number, default:0},
  },
  // reviews: {type: String},  // check this once
  educationDetails: {type: String, default:''},
  savedJobs: [{type: Schema.Types.ObjectId ,ref:'job'}]

  },
  {
    versionKey: false
  }
  );

  const userModel = mongoose.model('user', userSchema);
  module.exports = userModel;