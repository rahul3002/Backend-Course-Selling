const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    couseId:{
        type: Number,
        required: true
    },
    userId:{
        type: Number,
        required: true
    }
})

module.exports = PurchaseSchema