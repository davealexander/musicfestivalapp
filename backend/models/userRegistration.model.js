const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userRegSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    lastName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    userEmail: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 10,
    },
    userPassword: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    passwordConfirmation: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
}, 
{
    timestamps: true,
});

const UserRegistration = mongoose.model('UserRegistration', userRegSchema);

module.exports = UserRegistration;