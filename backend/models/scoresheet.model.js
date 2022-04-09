const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ScoresheetSchema = new Schema({
    StudentName: {type: String, required: true},
    Ensemble: {type: String, required: true},
    Scale1: {type: Number, required: true},
    Scale2: {type: Number, required: true},
    Scale3: {type: Number, required: true},
    Comment1: {type: String, required: true},
    Comment2: {type: String, required: true},
    Comment3: {type: String, required: true},
    Score1: {type:Number, required: true},
    Score2: {type:Number, required: true},
    TotalScore: {type:Number, required: true},
    Date: {type: Date, required: true}
}, {
    timestamps: true,
});