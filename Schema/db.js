const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    firstName : String,
    lastName: String,
    email: String,
    password: String

})


const adminSchema = new Schema({
    firstName : String,
    lastName: String,
    email: String,
    password: String

})

const courseSchema = new Schema({
    tittle : String,
    Description: String,
    creatorID : ObjectId,
    coursePrice: Number
})

const purchaseSchema = new Schema({
   courseId : ObjectId,
   userId:ObjectId
})


const UserModel = mongoose.model("User", userSchema);
const AdminModel = mongoose.model("Admin", adminSchema);
const CourseModel = mongoose.model("Course", courseSchema);
const PurchaseModel = mongoose.model("Purchase", purchaseSchema);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}   