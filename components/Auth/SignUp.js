'use client'
import Link from "next/link"
import Button from "../Global/Button"
import Form from "../Global/Form"
import { signUpWithCredentials } from "@/action/authActions"


const SignUp = () => {
    async function handleSignUpCredentials(formData){
        const name=formData.get('name')
        const email=formData.get('email')
        const password=formData.get('password')
       
        const res=await signUpWithCredentials({name,email,password})
          if(res?.msg) alert (res?.msg)
        
      }
  return (
    <div>
        {/* <h2>Sign Up with nextauth</h2>
        <Form action={handleSignUpCredentials} style={{margin:'30px 0'}}>
            <input type='text' name='name' placeholder='Name' required/>
            <input type='email' name='email' placeholder='Email' required/>
            <input type='password' name='password' placeholder='Password' required/>
            <Button value={"Register"}/>
        </Form>
        <div style={{margin:'30px 0'}}>
          <Link href={'/signin'}>SignIn</Link>
        </div> */}
        <div className="bg-blue-200 h-full w-1/2 m-auto rounded-sm p-3 px-9">
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
        <form action={handleSignUpCredentials} className="mt-6">
        <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          
          <div className="mt-4 items-center">
          
          <Button 
          value="Signup"
          className="text-white  w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5  mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
          
          </div>
          <div className="mt-4 ml-2 underline">
          <Link href={'signin'}>Signin</Link>
          </div>
          
        </form>

       
      </div>
    </div>

    </div>

    </div> 
  )
}

export default SignUp