'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiPlus } from "react-icons/bi";
import { useRouter } from 'next/navigation';

const NewsDetails = (ctx) => {
    const [newsDetails,setNewsDetails]=useState('')
    const router=useRouter()
    useEffect(()=>{
        async function fetchNews(){
            const res=await fetch(`http://localhost:3000/api/news/${ctx.params.id}`,{
                cache:'no-store'
            })
            const news=await res.json()
            setNewsDetails(news)
        } 
        fetchNews()
    },[])
    const handleDelete=async()=>{
        const confirmDelete=confirm("Are you sure want to delete this news post")
        if(confirmDelete){
            const res=await fetch(`http://localhost:3000/api/news/${ctx.params.id}`,{
                method:'DELETE'
            })
            if(res.ok){
                router.push('/dashboard/news')
            }
        }
        
    }
  return (
    <div className='bg-white w-[95%] m-auto mt-10 overflow-y-auto'>
        <h1 className="text-center text-2xl font-bold pt-6">News</h1>
        <div className='flex justify-between p-3 items-center'>
        <div className='ml-10'>
            <h1>{newsDetails?.title}</h1>
            <p className='mt-4'>{newsDetails?.content}</p>
        </div>
        <div className='mr-10 ' href={`/dashboard/news/${ctx.params.id}`}>
            <Image src={newsDetails?.imageUrl} width={'300'} height={300}/>
        </div>
        
        
        </div>
        <div className="flex mr-10 justify-end text-2xl gap-3 p-4">
          <Link href={`/dashboard/editNews/${ctx.params.id}`}><BiEdit /></Link>
          <button onClick={handleDelete}><AiFillDelete /></button>
        </div>
    </div>
  )
}

export default NewsDetails