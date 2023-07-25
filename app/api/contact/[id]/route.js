import connectDB from "@/utils/database"
import Contact from "@/models/contactModel"
export async function GET(request,ctx){
    await connectDB()
    const id=ctx.params.id
    try {
        const contact=await Contact.findById(id)
        return new Response(JSON.stringify(contact),{status:200})
    } catch (error) {
        return new Response(JSON.stringify(null),{status:500})
    }
}

// export async function DELETE(request,ctx){
//     await connectDB();
//     const id = ctx.params.id;
//     try {
//        await Contact.findByIdAndDelete(id)
        
//         return new Response(JSON.stringify({msg: 'Successfully deleted Contact'}), {status: 200})

//     } catch (error) {
//         return new Response(JSON.stringify(null),{status:500})
//     }
// }
export async function DELETE(request, ctx) {
    await connectDB();
    const id = ctx.params.id;
    try {
      // Check if the contact exists
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return new Response(JSON.stringify({ msg: 'Contact not found' }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
  
      // Delete the contact
      await Contact.findByIdAndDelete(id);
  
      // Return success response
      return new Response(JSON.stringify({ msg: 'Successfully deleted Contact' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error deleting contact:', error);
      return new Response(JSON.stringify(null), { status: 500 });
    }
  }