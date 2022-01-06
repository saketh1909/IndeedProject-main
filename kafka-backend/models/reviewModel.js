const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema =  new Schema({
    postedDate:{type:Date,required:true},
	wasReviewHelpful: {
		yes : {type:Number,default:0},
		no: {type:Number,default:0}
	},
	companyId:{type:String,required:true},
	isFeatured : {type:Boolean, default:false},
	userId : {type:String, required:true},
	reviewSummary : {type:String,required:true},
	reviewContent : {type:String, required:true},
	reviewStatus : {type:Number, default:0},
	pros : {type:String, default:''},
	cons: {type:String, default:''},
	overallRating  : {type:Number, default:0},
	happinessScore : {type:Number, default:0},
	learning  : {type:Number, default:0},
	appreciation  : {type:Number, default:0},
	CEORating : {type:Number, default:0},
	CEOApproval : {type:Number, default:0},
	howToPrepareForInterview : {type:String, default:''},
  },
  {
    versionKey: false
  }
  );

  const reviewModel = mongoose.model('review', reviewSchema);
  module.exports = reviewModel;