const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    companyId: { type: String, required: true },
    userId: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    message: { type: String, required: true },
    time: { type: Date, required: true }
},
    {
        versionKey: false
    }
);

const chatModel = mongoose.model('jobApplication', chatSchema);
module.exports = chatModel;