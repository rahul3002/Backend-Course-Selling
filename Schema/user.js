const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
                type: String,
                required: True
            },
    lastName:{
                type: String,
                type: Required
            },
            
    userEmail:{
                type: String,
                required: true
            },
    userPassword:{
                type: String,
                required: true,
                minlength: 8
            }
})

module.exports = UserSchema