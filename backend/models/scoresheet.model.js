const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ScoresheetSchema = new Schema({
    // district: {type: String, trim: true, required: true},
    // studentName: {type: String, trim: true, required: true},
    // ensemble: {type: String, trim: true, required: true},
    studentId: {type:String, required: true},
    scale1: {type: Number, required: true},
    scale2: {type: Number, required: true},
    scale3: {type: Number, required: true},
    comment1: {type: String, trim: true, required: true},
    comment2: {type: String, trim: true, required: true},
    comment3: {type: String, trim: true, required: true},
    score: {type:Number, required: true},
    // Score2: {type:Number, required: true},
    // TotalScore: {type:Number, required: true},
    // Date: {type: Date, required: true}
}, {
    timestamps: true,
});

const ScoresheetModel = mongoose.model("scoresheet",ScoresheetSchema)
module.exports = ScoresheetModel; 