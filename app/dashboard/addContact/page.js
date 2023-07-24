'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
const Contact = () => {
    const[fullname,setFullName]=useState('');
    const[email,setEmail]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('')
    const[subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const router=useRouter();

    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!fullname || !email || !phoneNumber || !subject ||!message){
        alert('all field  are required')
        return;
  
    }
    console.log({fullname,email,phoneNumber,subject,message})
    try {
        const res=await fetch('http://localhost:3000/api/contact',{
            method:'POST',
            body:JSON.stringify({fullname,email,phoneNumber,subject,message})
        });
        if(res.ok){
            router.push("/dashboard/addContact");
            setFullName("");
          setEmail("");
          setPhoneNumber("");
          setSubject("");
          setMessage("");
        }
        else{
            throw new Error("failed to create a contact details")
        }
  
    } catch (error) {
        console.log(error);
    }
  
  
    }
    return (
      <div className="mx-10 my-10 p-3 bg-white">
        <h1 className="text-center text-2xl">Contact</h1>
        <hr className="w-full mt-2" />
        
        <form onSubmit={handleSubmit} className="w-[590px] h-[480px] xl:h-[560px] opacity-70 bg-white rounded-xl xl:mt-32 2xl:mt-40 mx-auto">
          <h1 className="lg:text-2xl xl:text-3xl text-center mt-6 font-medium">Reach Out to Us</h1>
          <hr className=" lg:w-[30%] border-[#CAC6C6] mx-auto mt-2" />
          <input onChange={(e)=>setFullName(e.target.value)} value={fullname} type="text" placeholder="Full Name" className="w-[75%] lg:h-14 ml-12 mt-8 xl:h-16 border-b-[1px] border-black" required/>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
          <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} type="tel" placeholder="Phone number" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
          <input onChange={(e)=>setSubject(e.target.value)} value={subject} type="text" placeholder="Subject" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
          <input onChange={(e)=>setMessage(e.target.value)} value={message} type="text" placeholder="Message" className="w-[75%] lg:h-14 ml-12 xl:h-16 border-b-[1px] border-black" required/>
          <button type="submit" className="flex justify-center items-center border-2 border-black xl:h-16 w-32 h-14 rounded-3xl text-base font-semibold lg:mt-5 xl:mt-8 mx-auto">Submit</button>
         </form>
         
      </div>
    );
  };
  
  export default Contact;