const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsDemo = mongoose.model('reviewsdemo', new Schema({
	postedDate:{type:Date,required:true},
  companyId:{type:Schema.Types.ObjectId,required:true},
	userId : {type:Schema.Types.ObjectId, required:true},
	reviewSummary : {type:String,required:true},
	review : {type:String, required:true},
	pros : {type:String},
	cons: {type:String},
	overallRating  : {type:Number, default:0}
}))

module.exports=reviewsDemo;