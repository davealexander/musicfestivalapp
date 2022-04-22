const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const LoginSchema = new Schema({
    //Login schema
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
    //Username info
    //login info
    
}, {
    timestamps: true,
});


//Allows the use of loginSchema and associates with the variable Login. 
const Login = mongoose.model('Login', LoginSchema);

//exports the Login Schema 
module.exports = Login;