const adminRouter = require('express').Router()


adminRouter.post("/signup", (req, res)=>{
    res.send("admin signin");
    })
    
    adminRouter.post("/sigin",(req, res)=>{
        res.send("Admin signin")
    })
    
    adminRouter.post("/course", (req, res)=>{
        res.send("creating the course");
    })
    
    adminRouter.put("/update/courses", (req, res)=>{
        res.send("Update this courses")
    })
    adminRouter.get("/courses/bulk", (req, res)=>{
        res.send("get all bulk");
    })

module.exports  = adminRouter