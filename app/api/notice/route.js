import Notice from "@/models/noticeModel";
import connectDB from "@/utils/database"
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();

        // Log the received data to verify it is correct
        console.log("Received data:", { title, description });

        if (!title) {
            return NextResponse.json({ message: "Title is required" }, { status: 400 });
        }

        await connectDB();
        const createdNotice = await Notice.create({ title, description });

        // Construct the response data object with title and description
        const responseData = {
            _id: createdNotice._id,
            title: createdNotice.title,
            description: createdNotice.description,
            createdAt: createdNotice.createdAt,
            updatedAt: createdNotice.updatedAt,
            __v: createdNotice.__v
        };

        // Return the response data object in the response
        return NextResponse.json(responseData, { status: 201 });
    } catch (error) {
        console.error("Error creating notice:", error);
        return NextResponse.json({ message: "Failed to create notice" }, { status: 500 });
    }
}

export async function GET(){
    await connectDB();
    const notices=await Notice.find();
    return NextResponse.json({notices})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectDB();
    
    try {
        // Check if the notice exists before attempting to delete
        const notice = await Notice.findById(id);
        if (!notice) {
            return NextResponse.json({ message: "Notice not found" }, { status: 404 });
        }

        await Notice.findByIdAndDelete(id);
        return NextResponse.json({ message: "Notice deleted" }, { status: 200 });
    } catch (error) {
        // Handle any potential errors
        console.error(error);
        return NextResponse.json({ message: "Failed to delete notice" }, { status: 500 });
    }
}

