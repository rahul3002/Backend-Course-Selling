require('dotenv').config();
const userRouter = require('express').Router();
const {UserModel} = require("../Schema/db")
const jwt = require("jsonwebtoken")

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;


userRouter.post('/signup' , async(req , res)=>{
   const {firstName, lastName, email, password} = req.body;
   try {
      const user = await UserModel.create({
         firstName,
         lastName,
         email,
         password
      })
      res.send(user)
      
   } catch (error) {
      console.log(error)
      res.send("User already exist")
   }

})
userRouter.post('/signin' , async(req , res)=>{
      const{email, password} = req.body;

      const user = await UserModel.findOne({email:email, password: password})
      if(user){
         const token = jwt.sign({
            id: user._id
         }, JWT_USER_PASSWORD)
         res.json({token:token})
      }
      else{
         res.send("invalid credentials")
      }


})

userRouter.get("/user/purchaes", (req, res)=>{
    res.send("hello form courses")
})

module.exports  = userRouter