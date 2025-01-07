const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    courseTittle: {
        type: String,
        required: true,
    },
    courseDescription: {
        description : String,
        required: true,
    },
    coursePrice:{
        type: number,
        required: true
    },
    creatorId:{
        type: number,
        required: true

    }
})

module.exports = CoursesSchema

