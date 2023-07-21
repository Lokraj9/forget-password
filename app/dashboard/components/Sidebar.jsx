import Image from "next/image";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import {MdOutlineEventAvailable} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import logo from '../../../public/logo.png'

const sans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Sidebar({ children }) {
  return (
    <div className={sans.className}>
      <div className="flex p-2 mt-2">
        <div className="fixed w-[100px] xl:w-[350px] h-[96%] max-h-screen  rounded-[15px] xl:rounded-3xl bg-[#2F80ED]">
          <Image
            width={200}
            height={100}
            src={logo}
            className="m-auto"
            alt="logo"
          />
          {/* horizontal line */}
          <div className="border w-[83%] mx-auto" />
          <div className="flex flex-col w-[160px] mx-auto text-white">
            {/* Inputs */}
            <Link href="/dashboard">
            <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10 ">
              <MdOutlineDashboard className=" w-4 h-4 xl:w-[30px] xl:h-[30px]" />
              Dashboard
            </div></Link>
            <Link href="/dashboard/notice">
              <div className="hover:bg-white hover:text-[#2F80ED] flex xl:gap-2 xl:text-2xl mt-10">
                <MdOutlineEventAvailable
                  src="/icons/notices.png"
                  width={1000}
                  height={800}
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px]"
                  alt="notices"
                />
                Notices
              </div>
            </Link>
            <Link href="/dashboard/news" className="">
              <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10 hover:bg-white rounded-md hover:text-[#2F80ED]">
                <BiCalendar
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px]"
                  alt="events"
                />
               News
              </div>
            </Link>
            <Link href="/dashboard/contact">
              <div className="flex hover:bg-white hover:text-[#2F80ED] place-items-center xl:gap-2 xl:text-2xl mt-10">
                <AiOutlineContacts
                  src="/icons/contacts.png"
                  width={1000}
                  height={800}
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px]"
                  alt="home"
                />
                Contacts
              </div>
            </Link>
            {/* <Link href="/admission">
              <div className="flex place-items-center xl:gap-2 xl:text-2xl mt-10">
                <Image
                  src="/Vector.png"
                  width={1000}
                  height={800}
                  className=" w-4 h-4 xl:w-[30px] xl:h-[30px] "
                  alt="home"
                />
                Admission
              </div>
            </Link> */}
          </div>
        </div>
        <main className="ml-[100px] xl:ml-[350px] w-[77%] ">{children}</main>
      </div>
    </div>
  );
}