const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt');

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

LoginSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.userPassword = await bcrypt.hash(this.userPassword,salt);
    next();
});

//Allows the use of loginSchema and associates with the variable Login. 
const Login = mongoose.model('Login', loginSchema);

//exports the Login Schema 
module.exports = Login;