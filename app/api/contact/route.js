import connectDB from "@/utils/database";
import Contact from "@/models/contactModel";
export async function GET(){
    await connectDB();
    try {
        const contacts=await Contact.find();
        return new Response(JSON.stringify(contacts),{status:200})
    } catch (error) {
        throw new Response(JSON.stringify(null),{status:500})
    }
};
export async function POST(request){
        await connectDB();
        try {
            const body = await request.json()
            const newContact = await Contact.create(body)
    
            return new Response(JSON.stringify(newContact), { status: 201 })
        } catch (error) {
            return new Response(JSON.stringify(null), { status: 500 })
        }
};