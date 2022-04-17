const mongoose = require('mongoose');
const ScoresheetModel = require('./scoresheet.model');
const Schema = mongoose.Schema; 

const studentRegSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    grade:{
        type: Number,
        required: true,
        trim: true
    },
    instrument1:{
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    instrument2:{
        type: String,
        trim: true,
        minlength: 2
    },
    school:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    ensemble1:{
        type: String,
        required: true,
    },
    ensemble2:{
        type: String,
    },
    preference:{
        type: String,
    },
}, 
{
    timestamps: true,
});

//Allows the use of studentRegSchema and associates with the variable StudentRegistration. 
const StudentRegistration = mongoose.model('StudentRegistration', studentRegSchema);

//exports the StudentRegistration Schema 
module.exports = StudentRegistration;