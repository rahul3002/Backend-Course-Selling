require("dotenv").config();
const jwt = require('jsonwebtoken')

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

const userMidlleware = (req, res, next)=>{
    const token = req.header.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message:"Youre not Signed in"
        });
    }
}

module.exports ={
    userMidlleware:userMidlleware
}