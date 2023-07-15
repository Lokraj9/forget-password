'use server'
import { getServerSession } from "next-auth"
import ProfileComponent from "@/components/Profile"

const ProfileServerPage = async() => {
  const session=await getServerSession()
  return (
    <div>
       <h1 style={{color:'red'}}>Profile Server side</h1>
      <ProfileComponent user={session?.user}/>
    </div>
  )
}

export default ProfileServerPage