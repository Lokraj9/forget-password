'use client'
import {signIn} from 'next-auth/react'
import Link from 'next/link'

const Signin = ({callbackUrl}) => {
  return (
    <div>
        <h2>Sign in with nextauth</h2>
        <div style={{margin:'30px 0'}}>
            <button onClick={()=>signIn('google',{callbackUrl})}>continue with google</button>
        </div>
        {/* <div style={{margin:'30px 0'}}>
          <Link href={'signup'}>SignUp</Link>
        </div> */}
    </div>
  )
}

export default Signin