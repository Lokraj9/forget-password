'use client'
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function page() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
     const router=useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!title || !description){
            alert('Title and description are required')
            return;
        }
        try {
            const res=await fetch(`http://localhost:3000/api/notice`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title,description})
            });
            if(res.ok){
                router.push("/dashboard/notice")
            }
            else{
                throw new Error("failed to create a notice")
            }

        } catch (error) {
            console.log(error);
        }


    }
  return (
    <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="uppercase text-center text-2xl font-bold pt-6">important notices</h1>
      <hr className="w-full mt-2" />
      <form onSubmit={handleSubmit} className="mt-6 px-8 ">
        <h3 className="ml-3 text-xl">Title</h3>
        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="border rounded-[4px] w-full h-8 mt-2 p-3" required/>
        <h3 className="ml-3 text-xl mt-6">Description</h3>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" className="border rounded-[4px] w-full h-10 mt-2 p-3" required/>
        <div className="flex justify-center text-white my-4">
      <button type="submit" className="w-24 h-8 bg-[#27AE60] rounded-xl text-base font-medium">Post</button>
      </div>
     
      </form>
    </div>
  );
}