import SignOut from "@/components/Auth/SignOut";
import Image from "next/image";
import React from "react";
import { IoNotifications } from "react-icons/io5";


export default function Headerr() {
  return (
    <div className="flex sticky top-0 z-50 opacity-100 justify-between px-2 xl:px-5 pt-2 xl:pt-4">
      <div  className="flex place-items-center gap-1 xl:gap-x-3 text-[12px] xl:text-lg">
        {/* <Image
          src="/Vector.png"
          width={1000}
          height={800}
          className="w-4 h-4 xl:w-5 xl:h-5"
          alt="home"
        /> */}
        Dashboard
      </div>
      <SignOut/>
      <div className="flex gap-x-2 xl:gap-x-4">
        {/* <Image
          src="/user.svg"
          width={1000}
          height={800}
          className="w-5 xl:w-8 "
          alt="home"
        /> */}
        <select className="hidden lg:grid">
          <option className="">admin</option>
          <option>user</option>
        </select>
        <IoNotifications className="h-5 xl:w-8 xl:h-7" />
      </div>
    </div>
  );
}