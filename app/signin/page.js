import Signin from '@/components/Auth/SignIn'
import React from 'react'

const SignInPage = ({searchParams:{callbackUrl}}) => {
  return (
   <Signin callbackUrl={callbackUrl || "/"}/>
  )
}

export default SignInPage