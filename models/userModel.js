import mongoose, { Schema } from "mongoose";
const userSchema=new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    passwod:String,
    image:String,
    role:{
        type:String,
        default:'user'
    },
    provider:{
        type:String,
        default:'credentials'
    },
},{timestamps:true})
const User=mongoose?.models?.user || mongoose.model('user',userSchema)
export default User;