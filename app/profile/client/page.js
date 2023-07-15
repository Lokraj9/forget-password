'use client'

import ProfileComponent from "@/components/Profile"
import { useSession } from "next-auth/react"
const ProfileClientPage = () => {
  
  return (
    <div>
      
      <h1 style={{color:'red'}}>Profile Client side</h1>
      <ProfileComponent />
    </div>
  )
}

export default ProfileClientPage