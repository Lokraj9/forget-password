import connectDB from '@/utils/database';
import News from "../../../../models/newsModel"
export async function GET(request,ctx){
    await connectDB()
    const id=ctx.params.id
    try {
        const news=await News.findById(id)
        return new Response(JSON.stringify(news),{status:200})
    } catch (error) {
        return new Response(JSON.stringify(null),{status:500})
    }
}
export async function PUT(request,ctx){
    await connectDB();
    const id=ctx.params.id
    try {
        const body= await request.json();
        const updatedNews=await News.findByIdAndUpdate(id,{ $set:{...body}},{new:true})
        return new Response(JSON.stringify(updatedNews),{status:200})
    } catch (error) {
        return new Response(JSON.stringify(null),{status:500})
    }
}
export async function DELETE(request,ctx){
    await connectDB();
    const id = ctx.params.id;
    try {
       await News.findByIdAndDelete(id)
        
        return new Response(JSON.stringify({msg: 'Successfully deleted blog'}), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify(null),{status:500})
    }
}