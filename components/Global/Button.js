'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import React from 'react'


const Button = ({value,...props}) => {
    const {pending}=useFormStatus();
  return (
   <button {...props} disabled={pending}>
    {pending ? 'loading...': value}
   </button>
  )
  
}

export default Button