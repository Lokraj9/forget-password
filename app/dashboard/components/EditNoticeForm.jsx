'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditNoticeForm({id,title,description}){
  const [newTitle,setNewTitle]=useState(title);
  const [newDescription,setNewDescription]=useState(description);
  const router=useRouter()
  const handleSubmit=async(e)=>{
     e.preventDefault();
     try {
      const res=await fetch(`http://localhost:3000/api/notice/${id}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({newTitle,newDescription})
      })
      if(!res.ok){
        throw new Error("failed to update notice")
      }
      router.refresh()
      router.push('/dashboard/notice')
     } catch (error) {
      console.log(error)
     }


  }
    return(
        <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="uppercase text-center text-2xl font-bold pt-6">important notices</h1>
      <hr className="w-full mt-2" />
      <form onSubmit={handleSubmit} className="mt-6 px-8 ">
        <h3 className="ml-3 text-xl">Title</h3>
        <input onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}  type="text" className="border rounded-[4px] w-full h-8 mt-2 p-3" />
        <h3 className="ml-3 text-xl mt-6">Description</h3>
        <textarea onChange={(e)=>setNewDescription(e.target.value)} value={newDescription}  type="text" className="border rounded-[4px] w-full h-10 mt-2 p-3" />
        <div className="flex justify-center text-white my-4">
      <button className="w-28 h-8 bg-[#27AE60] rounded-xl text-base font-medium">Update Post</button>
      </div>
      </form>
      
      
    </div>
    )
}