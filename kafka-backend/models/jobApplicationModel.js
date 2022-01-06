const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
    companyId: { type: String, required: true },
    userId: { type: String, required: true },
    jobId: { type: String, required: true },
    CompanyName: { type: String, required: true },
    //add job seeker name field
    applicationStatus: { type: String, required: true },
    resume: { type: String, required: true },
    coverLetter: { type: String, required: true },

},
    {
        versionKey: false
    }
);

const jobApplicationModel = mongoose.model('jobApplication', jobApplicationSchema);
module.exports = jobApplicationModel;