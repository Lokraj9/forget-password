'use client'
import React from 'react'
import {signOut} from 'next-auth/react'

const SignOut = () => {
  return (
   <button onClick={()=>signOut()}>Sign Out</button>
  )
}

export default SignOut