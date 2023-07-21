import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
    {
        title: String,
        description: String, 
    },
    {
        timestamps: true,
    }
);

const Notice = mongoose.models.Notice || mongoose.model("Notice", noticeSchema);
export default Notice;
