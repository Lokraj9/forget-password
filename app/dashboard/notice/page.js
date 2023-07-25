'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiPlus } from "react-icons/bi";
import RemoveNotice from "../components/RemoveNotice";
const getNotices = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notice", {
      cache: "no-store",
    });
    if(!res.ok){
      throw new Error('failed to fetch the notice')
    }
    return res.json()
  } catch (error) {
    console.log("error loading notice",error)
  }
};

export default  function page() {
  // const {notices}=await getNotices()
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function fetchNotices() {
      const { notices } = await getNotices();
      setNotices(notices.reverse()); // Reverse the order to display the latest notice first
    }
    fetchNotices();
  }, []);
  return (
    <>
   
        <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="text-center text-2xl font-bold pt-6">Notices</h1>
      <hr className="w-full mt-2" />
      <Link href="/dashboard/addNotice">
        <div className="flex uppercase justify-center items-center ml-auto mr-8 mt-6 bg-[#18e06c] w-fit  xl:w-40 xl:h-10 font-bold text-[12px] -xl:text-sm text-white lg:gap-3 rounded-[12px]">
          <BiPlus className="text-xl" /> add notice
        </div>
      </Link>
      {
        notices.map(notice=>(
          <div className="border w-[90%] mt-10 mx-auto rounded-[15px] mb-6">
        <div className="flex justify-end text-2xl gap-3 p-4">
          <Link href={`/dashboard/editNotice/${notice._id}`}>
            {" "}
            <BiEdit />
          </Link>
          <RemoveNotice id={notice._id}/>
        </div>
        {/* one item */}
        <div className="p-2 ml-4 mb-4 flex-col w-1/2">
          <h1 className="p-2">{notice.title}</h1>
          <p className="p-2">{notice.description}</p>
        </div>
      </div>
        ))
      }
    </div>
      
    </>
  );
}
