import ResetPasswordComponent from '@/components/Auth/ResetPassword'
import React from 'react'

const ResetPasswordPage = ({searchParams:{token}}) => {
    
  return (
    <ResetPasswordComponent token={token}/>
  )
}

export default ResetPasswordPage