'use server'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignOut from '../Auth/SignOut'
const Header = async() => {
    const session=await getServerSession(authOptions);
    console.log(session)
  return (
   <header style={{display:'flex' , gap:30}}>
        <Link href={'/'}>Home</Link>
        <Link href={'/protected/client'}>Protected(client)</Link>
        <Link href={'/protected/server'}>Protected(server)</Link>
        {
            session ? <>
            <Link href={'/profile/client'}>Profile (client)</Link>
            <Link href={'/profile/server'}>Profile (server)</Link>
            <Link href={'/dashboard'}>Admin Dashboard</Link>
            <SignOut/>
            </>
            : <Link href={'/signin'}>SignIn</Link>
        }
        
   </header>
  )
}

export default Header