require("dotenv").config();
const jwt = require('jsonwebtoken')

const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

const adminMidlleware = (req, res, next)=>{
    const token = req.header.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

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
    adminMidlleware:adminMidlleware
}