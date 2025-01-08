const express = require("express");
const mongoose = require("mongoose");
const port =  5000;
const {UserModel, AdminModel, CourseModel, PurchaseModel} = require("./Schema/db");
const connectDb = require("./cofiguration/database");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const courseRouter = require("./routes/courses");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

connectDb()
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () =>
      console.log("> Server is up and running on port : " + port)
    );
  })
  .catch((err) => {
    console.error("Something Went wrong");
  });