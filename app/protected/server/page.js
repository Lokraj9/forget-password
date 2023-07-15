'use server'
import ProtectedComponent from "@/components/Protected"
import { getServerSession } from "next-auth"
const ProtectedServerPage =async () => {
  const session=await getServerSession()
  return (
    <div>
        <h1>this is a 
            <i style={{color:'red'}}>server -side</i>Protected page
        </h1>
       <ProtectedComponent user={session?.user}/>
    </div>
  )
}

export default ProtectedServerPage