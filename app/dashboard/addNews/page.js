'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillDelete, AiOutlineFileImage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";

export default function page() {
  const CLOUD_NAME='dzgioenxf'
  const UPLOAD_PRESET='webiste-image'
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [photo,setPhoto]=useState('');
  const {data:session,status}=useSession()
  const router=useRouter()
  
  if(status === 'loading'){
    return <p>Loading ...</p>
  }
  if(status === 'unauthenticated'){
    return <p>Access Denied</p>
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!photo || !title || !content){
      alert("All field are required")
      return
    }
    try {
      const imageUrl=await uploadImage();
      const res=await fetch(`http://localhost:3000/api/news`,{
        headers:{
          'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify({title,content,imageUrl})
      })
      if(!res.ok){
        throw new Error("Error occured")
      }
      const news=await res.json()
      router.push(`/dashboard/news/${news?._id}`)
    } catch (error) {
      console.log(error)
    }
    
}
  const uploadImage=async()=>{
    if(!photo) return
    const formData=new FormData();
    formData.append("file",photo)
    formData.append("upload_preset",UPLOAD_PRESET)
    try {
      const res= await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,{
        method:'POST',
        body:formData
      })
      const data=await res.json();
      const imageUrl=data['secure_url']
      return imageUrl;
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="text-center text-2xl font-bold pt-6">NEWS AND EVENTS</h1>
      <hr className="w-full mt-2" />
      <form onSubmit={handleSubmit} className="my-6 px-8 ">
        <h3 className="ml-3 text-xl">Title</h3>
        <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} className="border mt-1 rounded-[8px] w-full h-8 p-3" />
        <h3 className="ml-3 text-xl mt-6">Content</h3>
        <textarea type="text" onChange={(e)=>setContent(e.target.value)} className="border rounded-[8px] w-full h-40 p-3" />
        
          <div className="flex">
          <label htmlFor="image" className="p-2 border items-center w-[15%] h-30 m-auto rounded-[15px] my-7">
          Upload Image <AiOutlineFileImage />
          </label>
        <input id="image" type='file' className="mt-3 p-3" style={{display:'none'}} onChange={(e)=>setPhoto(e.target.files[0])}/>
          </div>
        
          <div className="flex justify-center text-white my-4">
      <button type="submit" className="w-28 h-10 bg-[#27AE60] rounded-xl text-xl font-medium">Post</button>
      </div>
     
      </form>
      {/* Image upload */}
      
    </div>
  );
}