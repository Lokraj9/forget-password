import Notice from "@/models/noticeModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id}=params;
    const {newTitle:title,newDescription:description}=await request.json();
    await connectDB();
    await Notice.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Notice updated"},{status:200})
}
export async function GET(request,{params}){
    const {id}=params;
    await connectDB();
    const notice=await Notice.findOne({_id:id});
    return NextResponse.json({notice},{status:200})
}