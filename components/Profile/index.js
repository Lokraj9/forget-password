'use client'

import ProfileCard from "./ProfileCard"
import ProfileUpdate from "./ProfileUpdate"
import { useSession } from "next-auth/react"

const ProfileComponent = ({user}) => {
  const {data:session,update}=useSession()

  return (
    <div>
        <ProfileCard user={session?.user || user}/>
        <ProfileUpdate update={update}/>
    </div>
  )
}

export default ProfileComponent