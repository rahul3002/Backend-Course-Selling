const router = require('express')

const UserRouter = router();

UserRouter.post('/user/signup' , (req , res)=>{

   res.send('hello from simple server :)')

})
UserRouter.post('/user/sigin' , (req , res)=>{

   res.send('hello from simple server :)')

})

UserRouter.get("/user/purchaes", (req, res)=>{
    res.send("hello form courses")
})

module.exports  = UserRouter