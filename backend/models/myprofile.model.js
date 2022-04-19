const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const myProfileSchema = new Schema({
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
    MMEANumber: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 5,
    },
    school:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    address1:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    address2:{
        type: String,
        required: false,
        unique: true,
        trim: true,
        minlength: 3
    },
    city:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    state:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    zipcode:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 10
    },
    // preference:{
    //     type: Boolean,
    //     required: true,
    // }
}, 
{
    timestamps: true,
});

const MyProfile = mongoose.model('MyProfile', myProfileSchema);

module.exports = MyProfile;