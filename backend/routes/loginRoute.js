const router = require('express').Router();
const Login = require('../models/login.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const loginValidation = require('../middleware/validation');
const User = require('../models/userRegistration.model')



router.post('/login', async (req,res) => {
  //Validation 
//   const {error} = loginValidation(res.body); 
//   if(error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({userEmail: req.body.userEmail})
    if(!user) return res.status(400).send(req.body);

    const validPass = await bcrypt.compare(req.body.userPassword, user.userPassword);
    if(!validPass) return res.status(400).send('Invalid Password');

    const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET);
    res.header('auth-token',token).send(user._id)

});

module.exports = router;