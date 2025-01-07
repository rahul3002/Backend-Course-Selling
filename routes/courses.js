const courseRoute = require('express').Router()

courseRoute.post("/course/purchase",(req, res)=>{
    console.log("user course purchase")

})

courseRoute.get("/courses", (req, res)=>{

console.log("get courses")

})

module.exports  = courseRoute