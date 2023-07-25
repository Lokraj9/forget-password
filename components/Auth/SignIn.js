"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Form from "../Global/Form";
import Button from "../Global/Button";
import { forgetPasswordWithCredentials } from "@/action/authActions";
import { useRouter } from "next/navigation";


const Signin = ({ callbackUrl }) => {
  async function handleCredentials(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    await signIn("credentials", { email, password, callbackUrl }); 
    Router.push("/dashboard")
  }
  async function handleForgetPassword(formData) {
    const email = formData.get("email");
    const res = await forgetPasswordWithCredentials({ email });
    if (res.msg) alert(res?.msg);
  }
  return (
    <div className="bg-blue-200 h-full w-1/2 m-auto rounded-sm p-3 px-9">
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
        <form action={handleCredentials} className="mt-6">
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
          <Link
            href="/forgetpassword"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
          <Button
          value="Login"
          className="text-white  w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5  mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
          </div>
        </form>

        {/* <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p> */}
      </div>
    </div>
    </div>
  );
};

export default Signin;
