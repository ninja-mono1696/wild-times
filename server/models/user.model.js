const mongoose = require("mongoose")


//schema for the player to register
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    score:{type:Number,default:0},
    level:{type:Number,default:1}
},{
    versionKey:false
})

//player model
const UserModel = mongoose.model("player",userSchema)

module.exports = {UserModel};