'use client'
import {AiFillDelete } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
export default  function RemoveContact({id}){
    const router=useRouter()
    const removeContact=async()=>{
        const confirmed=confirm("Are you sure")
        if(confirmed){
            const res=await fetch(`http://localhost:3000/api/contact/${id}`,{
                method:'DELETE',
            });
            if(res.ok){
            router.refresh();
            }
        }
    }
    return(
        <button onClick={removeContact}>
            <AiFillDelete />
        </button>
    )
}