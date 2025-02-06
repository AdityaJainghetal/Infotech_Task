const mongoose= require("mongoose");

const stuSchema= new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number,
    status: {type:String, default:"pending"}
})

module.exports = mongoose.model("student", stuSchema);