"use client";
import React from "react";
import Form from "../Global/Form";
import { forgetPasswordWithCredentials } from "@/action/authActions";
import Button from "../Global/Button";
import SignInPage from "@/app/signin/page";
import Link from "next/link";

const ForgetPassword = ({ callbackUrl }) => {
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
          <h2>Forget Password</h2>
          <Form action={handleForgetPassword} style={{ margin: "10px 0" }}>
            <input type="email" name="email" placeholder="Email" required />
            <Button value="forget password" />
            <Link href={"/signin"}>Signin</Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
