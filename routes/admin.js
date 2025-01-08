require('dotenv').config();
const adminRouter = require("express").Router();
const { AdminModel, UserModel } = require("../Schema/db");
const jwt = require("jsonwebtoken");

// Get the JWT secret from environment variables
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

adminRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await AdminModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.send("User created");
  } catch (err) {
    res.send("User already exist");
  }
});
adminRouter.post("/signin", async(req, res) => {
        const {email, password} = req.body;
        const user = await AdminModel.findOne({email: email, password:password})
            if(user){
                const token = jwt.sign({
                    id :user._id
                }, JWT_ADMIN_PASSWORD)

                res.json({token:token})
            }
            else{
                res.send("Invalid Credentials")
            }
});

adminRouter.post("/course", (req, res) => {
  res.send("creating the course");
});

adminRouter.put("/update/courses", (req, res) => {
  res.send("Update this courses");
});
adminRouter.get("/courses/bulk", (req, res) => {
  res.send("get all bulk");
});

module.exports = adminRouter;
