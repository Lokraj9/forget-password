import connectDB from "@/utils/database";
import News from '../../../models/newsModel'
export async function GET(){
    await connectDB()
    try {
        const news=await News.find();
        return new Response(JSON.stringify(news),{status:200})
    } catch (error) {
        throw new Response(JSON.stringify(null),{status:500})
    }
};
export async function POST(request){
        await connectDB();
        try {
            const body = await request.json()
            const newNews = await News.create(body)
    
            return new Response(JSON.stringify(newNews), { status: 201 })
        } catch (error) {
            return new Response(JSON.stringify(null), { status: 500 })
        }
};
