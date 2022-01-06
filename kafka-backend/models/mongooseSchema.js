const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = mongoose.model('user', new Schema({
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
));

const review = mongoose.model('review', new Schema({
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
}))

const company = mongoose.model('company', new Schema({
    name: {type: String, required:true},
    // jobs: [{type: Schema.Types.ObjectId ,ref:'job'}],
    // reviews: [{type: Schema.Types.ObjectId ,ref:'review'}],
    websiteURL : {type:String, default:''},
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
            url: {type: String, default:''},
            imageStatus: {type: Number, default:0} // (0 = default (only admin users can see them) | 1 (its admin approved) | 2 (its admin rejected))
        }
    ],
    snapshotData: {
        averageScore: {type: Number}
    }
  },
  {
    versionKey: false
  }
  ))

  const job = mongoose.model('job', new Schema({
	company: {type: Schema.Types.ObjectId ,ref:'company'},
	jobType: {type:String,required:true},
	role: {type:String,required:true},
	location: [
				{
					city:{type:String,required:true},
					state:{type:String,required:true},
					country:{type:String,required:true},
					zipcode:{type:String,required:true},
					streetAddress:{type:String,required:true},
				}
			],
	salary: {type:Number,required:true},
	jobStatus: {type:Boolean,default:true},
	mode:{type:String,required:true}, // remote or inperson
	industry: {type:String, required:true},
	jobPostedDate: {type:Date, required:true},
  isOpenToApply: {type:Boolean, retuired:true}
}))

const jobApplications = mongoose.model('jobApplication', new Schema({
  companyId:{type:String,required:true},
	userId : {type:String, required:true},
  jobId: {type:String, required:true},
  CompanyName: {type:String, required:true},
  
  applicationStatus: {type:String, required:true},
  resume: {type:String, required:true},
  coverLetter: {type:String, required:true},
}))

const chat = mongoose.model('chat', new Schema({
  companyId:{type:String,required:true},
	userId : {type:String, required:true},
  from:{type:String,required:true},
	to : {type:String, required:true},
  message: {type:String, required:true},
  time: {type:Date, required:true}
}))

module.exports = {
    user,
    review,
    company,
    job,
    jobApplications
};
