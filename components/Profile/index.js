'use client'

import ChangePassword from "./ChangePassword"
import ProfileCard from "./ProfileCard"
import ProfileUpdate from "./ProfileUpdate"
import { useSession } from "next-auth/react"

const ProfileComponent = ({user}) => {
  const {data:session,update}=useSession()

  return (
    <div>
        <ProfileCard user={session?.user || user}/>
        <ProfileUpdate update={update}/>
        {
          (session?.user?.provider==='credentials'|| user?.provider === "credentials")&&  <ChangePassword/> 
        }
       
    </div>
  )
}

export default ProfileComponent