import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";

export default function page() {
  return (
    <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="text-center text-2xl font-bold pt-6">NEWS AND EVENTS</h1>
      <hr className="w-full mt-2" />
      <form className="my-6 px-8 ">
        <h3 className="ml-3 text-xl">Title</h3>
        <input type="text" className="border rounded-[8px] w-full h-8 p-3" />
        <h3 className="ml-3 text-xl mt-6">Content</h3>
        <textarea type="text" className="border rounded-[8px] w-full h-40 p-3" />
      </form>
      {/* Image upload */}
      <div className="border w-[25%] h-30 m-auto rounded-[15px] my-7">
        <input type='file' className="mt-3 p-3"/>
          {/* <BsImageFill />
          Upload Image */}
        
       
      </div>
      <div className="flex justify-end text-2xl gap-3 px-8 -mt-12">
        <BiEdit />
        <AiFillDelete />
      </div>
      <div className="flex justify-center text-white my-4">
      <button className="w-28 h-10 bg-[#27AE60] rounded-xl text-xl font-medium">Post</button>
      </div>
    </div>
  );
}