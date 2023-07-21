'use client'
import React from 'react'
import Form from '../Global/Form';
import { forgetPasswordWithCredentials } from '@/action/authActions';
import Button from '../Global/Button';

const ForgetPassword = ({callbackUrl}) => {
    async function handleForgetPassword(formData) {
        const email = formData.get("email");
        const res = await forgetPasswordWithCredentials({ email });
        if (res.msg) alert(res?.msg);
      }
  return (
     <div>
        <h2>Forgert Password</h2>
      <Form action={handleForgetPassword} style={{ margin: "10px 0" }}>
        <input type="email" name="email" placeholder="Email" required />
        <Button value="forget password" />
        </Form>
     </div>
  )
}

export default ForgetPassword