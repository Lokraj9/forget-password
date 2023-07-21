import React from 'react'

const ForgetPasswordPage = () => {
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

export default ForgetPasswordPage