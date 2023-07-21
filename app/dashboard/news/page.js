"use client"
import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiPlus } from "react-icons/bi";
import image from '../../../public/c.jpg'

export default function page() {
  return (
    <div className="bg-white w-[95%] m-auto mt-10 overflow-y-auto">
      <h1 className="text-center text-2xl font-bold pt-6">News</h1>
      <hr className="w-full mt-2" />
      <Link href="/dashboard/addNews">
        <div className="flex uppercase justify-center items-center ml-auto mr-8 mt-6 bg-[#18e06c] w-fit  xl:w-40 xl:h-10 font-bold text-[12px] -xl:text-sm text-white lg:gap-3 rounded-[12px]">
          <BiPlus className="text-xl" /> add notice
        </div>
      </Link>
      <div className="border w-[90%] mt-10 mx-auto rounded-[15px] mb-6">
        <div className="flex justify-end text-2xl gap-3 p-4">
          <BiEdit />
          <AiFillDelete />
        </div>
        {/* one item */}

        <div className="my-3">
          <h1 className="ml-10 text-2xl">Title</h1>
          <div className="flex gap-x-5">
            {/* paragraph div */}
            <div className="rleative ml-5 mt-4 w-[60%] border rounded-[15px]">
              <p className=" px-4 pt-6 line-clamp-4 lg:line-clamp-6">
                Our school team recently had the privilege of visiting the
                nearby old age home. Through our collective efforts, we aimed to
                bring smiles, comfort, and nourishment to these esteemed members
                of our community. It was a heartwarming experience to witness
                their faces light up with gratitude and delight as they received
                these thoughtful provisions. We made sure to engage in
                meaningful conversations, lending an empathetic ear and offering
                companionship to brighten their day. Through our small acts of
                kindness and generosity, we aimed to spread joy, nourishment,
                and companionship among the elderly residents. It is our hope
                that this initiative serves as an inspiration for others to make
                a difference in the lives of those who have enriched our
                community with their wisdom and experiences.
              </p>
              <button className="flex w-full justify-center mt-2">More</button>
            </div>
            <Image src={image} height={400} width={300} alt="image"/>
          </div>
          
    
        </div>
        
      </div>
      <div className="border w-[90%] mt-10 mx-auto rounded-[15px] mb-6">
        <div className="flex justify-end text-2xl gap-3 p-4">
          <BiEdit />
          <AiFillDelete />
        </div>
        {/* one item */}

        <div className="my-3">
          <h1 className="ml-10 text-2xl">Title</h1>
          <div className="flex gap-x-5">
            {/* paragraph div */}
            <div className="rleative ml-5 mt-4 w-[60%] border rounded-[15px]">
              <p className=" px-4 pt-6 line-clamp-4 lg:line-clamp-6">
                Our school team recently had the privilege of visiting the
                nearby old age home. Through our collective efforts, we aimed to
                bring smiles, comfort, and nourishment to these esteemed members
                of our community. It was a heartwarming experience to witness
                their faces light up with gratitude and delight as they received
                these thoughtful provisions. We made sure to engage in
                meaningful conversations, lending an empathetic ear and offering
                companionship to brighten their day. Through our small acts of
                kindness and generosity, we aimed to spread joy, nourishment,
                and companionship among the elderly residents. It is our hope
                that this initiative serves as an inspiration for others to make
                a difference in the lives of those who have enriched our
                community with their wisdom and experiences.
              </p>
              <button className="flex w-full justify-center mt-2">More</button>
            </div>
            <Image src={image} height={400} width={300} alt="image"/>
          </div>
          
    
        </div>
        
      </div>
      <div className="border w-[90%] mt-10 mx-auto rounded-[15px] mb-6">
        <div className="flex justify-end text-2xl gap-3 p-4">
          <BiEdit />
          <AiFillDelete />
        </div>
        {/* one item */}

        <div className="my-3">
          <h1 className="ml-10 text-2xl">Title</h1>
          <div className="flex gap-x-5">
            {/* paragraph div */}
            <div className="rleative ml-5 mt-4 w-[60%] border rounded-[15px]">
              <p className=" px-4 pt-6 line-clamp-4 lg:line-clamp-6">
                Our school team recently had the privilege of visiting the
                nearby old age home. Through our collective efforts, we aimed to
                bring smiles, comfort, and nourishment to these esteemed members
                of our community. It was a heartwarming experience to witness
                their faces light up with gratitude and delight as they received
                these thoughtful provisions. We made sure to engage in
                meaningful conversations, lending an empathetic ear and offering
                companionship to brighten their day. Through our small acts of
                kindness and generosity, we aimed to spread joy, nourishment,
                and companionship among the elderly residents. It is our hope
                that this initiative serves as an inspiration for others to make
                a difference in the lives of those who have enriched our
                community with their wisdom and experiences.
              </p>
              <button className="flex w-full justify-center mt-2">More</button>
            </div>
            <Image src={image} height={400} width={300} alt="image"/>
          </div>
          
    
        </div>
        
      </div>
    </div>
  );
}