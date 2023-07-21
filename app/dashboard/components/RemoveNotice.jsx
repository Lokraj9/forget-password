'use client'
import {AiFillDelete } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
export default  function RemoveNotice({id}){
    const router=useRouter()
    const removeNotice=async()=>{
        const confirmed=confirm("Are you sure")
        if(confirmed){
            const res=await fetch(`http://localhost:3000/api/notice?id=${id}`,{
                method:'DELETE',
            });
            if(res.ok){
            router.refresh();
            }
        }
    }
    return(
        <button onClick={removeNotice}>
            <AiFillDelete />
        </button>
    )
}