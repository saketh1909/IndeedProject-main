const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema =  new Schema({
    name: {type: String, required:true},
    // jobs: [{type: Schema.Types.ObjectId ,ref:'job'}],
    // reviews: [{type: Schema.Types.ObjectId ,ref:'review'}],
    websiteURL : {type:String, default:''},
    logoURL : {type:String, default:''},
    companySize : {type:Number, default:0},
    companyType : {type:String, default:''},
    revenue : {type:String, default:''},
    headquarters : {type:String, default:''},
    industry : {type:String, default:''},
    foundedDate : {type:Date, default:''},
    ceoName: {type:String, default:''},
    missionAndVision: {type:String, default:''},
    address: {
      city: {type: String, default:''},
      state: {type: String, default:''},
      zipcode: {type: String, default:''},
      country: {type: String, default:''},
      streetAddress: {type: String, default:''},
    },
    whyJoinUs: {
        aboutTheCompany: {type: String, default:''}, 
        workCulture: {type: String, default:''},
        companyValues: {type: String, default:''},
    },
    images: [
        {
            // _id: {type: ObjectId},
            // _id,
            url: {type: String, default:''},
            imageStatus: {type: Number, default:0} // (0 = default (only admin users can see them) | 1 (its admin approved) | 2 (its admin rejected))
        }
    ],
    snapshotData: {
        averageScore: {type: Number}
    }  },
  {
    versionKey: false
  }
  );

  const companyModel = mongoose.model('company', companySchema);
  module.exports = companyModel;