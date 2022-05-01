//Use to protect routes
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).send("Access denied!")
    try{
        const verified = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}

module.exports = verifyJWT; 