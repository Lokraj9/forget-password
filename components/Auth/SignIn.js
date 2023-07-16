'use client'
import {signIn} from 'next-auth/react'
import Link from 'next/link'
import Form from '../Global/Form'
import Button from '../Global/Button'
import { forgetPasswordWithCredentials } from '@/action/authActions'

const Signin = ({callbackUrl}) => {
  async function handleCredentials(formData){
    const email=formData.get('email')
    const password=formData.get('password')
    await signIn('credentials',{email,password,callbackUrl})

  }
  async function handleForgetPassword(formData){
    const email=formData.get("email")
    const res=await forgetPasswordWithCredentials({email})
      if(res.msg) alert(res?.msg)
  }
  return (
    <div>
        <h2>Sign in with nextauth</h2>
        {/* google login */}
        <div style={{margin:'30px 0'}}>
            <button onClick={()=>signIn('google',{callbackUrl})}>continue with google</button>
        </div>
         {/* signin with credentials */}
         <Form action={handleCredentials} style={{margin:'30px 0'}}>
          <input type='email' name='email' placeholder='Email' required/>
          <input type='password' name='password' placeholder='Password' required/>
          <Button value="credentials login"/>
         </Form>
         {/*  forget password*/}
         <h2>Forgert Password</h2>
         <Form action={handleForgetPassword} style={{margin:'10px 0'}}>
          <input type='email' name='email' placeholder='Email' required/>
          <Button value="forget password"/>
         </Form>
        <div style={{margin:'30px 0'}}>
          <Link href={'signup'}>SignUp</Link>
        </div>
    </div>
  )
}

export default Signin