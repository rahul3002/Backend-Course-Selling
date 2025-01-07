const mongoose = require('mongoose');
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://rahulbagal7171:8UQgwSQ5g6pYT84A@cluster0.ot6nw.mongodb.net/CourseWebsite")

}
module.exports = connectDb