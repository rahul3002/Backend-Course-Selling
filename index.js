const express = require("express");
const app = express();
const port =  5000;
const connectDb = require("./cofiguration/database");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const courseRouter = require("./routes/courses");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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