'use server'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignOut from '../Auth/SignOut'
import SignUp from '../Auth/SignUp'

const Header = async() => {
    const session=await getServerSession(authOptions);
  
    
  return (
   <header className='bg-blue-300 flex gap-10 p-3'>
        <Link href={'/'} className='text-2xl'>Home</Link>
        {/* <Link href={'/protected/client'}>Protected(client)</Link>
        <Link href={'/protected/server'}>Protected(server)</Link> */}
        <Link href={'/dashboard'} className='text-2xl'>Dashboard</Link>
        {/* {
            session ? <>
            <Link href={'/profile/client'}>Profile (client)</Link>
            <Link href={'/profile/server'}>Profile (server)</Link>
            <Link href={'/dashboard'}>Admin Dashboard</Link>
            <SignOut/>
            </>
            : <Link href={'/signin'}>SignIn</Link>
        } */}
        
        {
          session ? <><SignOut/></> :''
        }
        
   </header>
  )
}

export default Header