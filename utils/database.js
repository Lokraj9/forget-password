import mongoose from "mongoose";
const connectDB=async()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected")
        return true
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;