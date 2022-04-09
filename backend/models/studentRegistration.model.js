const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const studentRegSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    lastName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    grade:{
        type: Number,
        required: true,
    },
    instrument1:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    instrument2:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    School:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    ensemble1:{
        type: String,
        required: true,
    },
    ensemble2:{
        type: String,
        required: true,
    },
    preference:{
        type: Boolean,
        required: true,
    }
}, 
{
    timestamps: true,
});