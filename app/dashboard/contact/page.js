"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import RemoveNotice from "../components/RemoveNotice";
import RemoveContact from "../components/RemoveContact";
const getContacts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/contact", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch the notice");
    }
    return res.json();
  } catch (error) {
    console.log("error loading notice", error);
  }
};

const Contact = async () => {
    const  contacts  = await getContacts();
    console.log("contacts data:", contacts);

  return (
    <div className="mx-10 my-10 p-3 bg-white">
      <h1 className="text-center text-2xl">Contact</h1>
      <hr className="w-full mt-2" />
     
        <table className="border border-slate-400 m-auto my-10">
          <thead>
            <tr>
              <th className="border border-slate-300 p-3">Full Name</th>
              <th className="border border-slate-300 p-3">Email</th>
              <th className="border border-slate-300 p-3">Phone Number</th>
              <th className="border border-slate-300 p-3">Subject</th>
              <th className="border border-slate-300 p-3">Message</th>
              <th className="border border-slate-300 p-3">Delete</th>
             
            </tr>
          </thead>
         {
          contacts.map(contact=>(
            <tbody>
            <tr>
              <td className="border border-slate-300 p-4">
                {contact.fullname}
              </td>
              <td className="border border-slate-300 p-4">{contact.email}</td>
              <td className="border border-slate-300 p-4">
                {contact.phoneNumber}
              </td>
              <td className="border border-slate-300 p-4">{contact.subject}</td>
              <td className="border border-slate-300 p-4">{contact.message}</td>
             <td className="border border-slate-300 p-4"><RemoveContact id={contact._id}/></td>
            
            </tr>
          </tbody>
          ))
         }
        </table>
        {/* <div className="flex justify-between">
          <h1>FullName</h1>
          <h1>Email</h1>
          <h1>PhoneNumber</h1>
          <h1>Subject</h1>
          <h1>Message</h1>
          <h1>Delete</h1>
        </div>
        {
          contacts.map(contact=>(
            <div className="flex justify-between">
        <h1>{contact.fullname}</h1>
          <h1>{contact.email}</h1>
          <h1>{contact.phoneNumber}</h1>
          <h1>{contact.subject}</h1>
          <h1>{contact.message}</h1>
          <RemoveContact id={contact._id}/>
        </div>
          ))
        } */}
       <Link className="ml-3" href={'/dashboard/addContact'}>Add Contact</Link>
    </div>
  );
};

export default Contact;
