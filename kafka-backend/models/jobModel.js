const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    company: { type: Schema.Types.ObjectId, ref: 'company' },
    jobType: { type: String, required: true },
    role: { type: String, required: true },
    location: [
        {
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            zipcode: { type: String, required: true },
            streetAddress: { type: String, required: true },
        }
    ],
    salary: { type: Number, required: true },
    jobStatus: { type: Boolean, default: true },
    mode: { type: String, required: true }, // remote or inperson
    industry: { type: String, required: true },
    jobPostedDate: { type: Date, required: true },
    isOpenToApply: { type: Boolean, retuired: true }
},
    {
        versionKey: false
    }
);

const jobModel = mongoose.model('job', jobSchema);
module.exports = jobModel;