"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import User from "@/models/userModel";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "@/utils/token";
import sendEmail from "@/utils/sendEmail";
const BASE_URL = process.env.NEXTAUTH_URL;

export async function updateUser({ name, image }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("unauthorization!");
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select("-password");
    if (!user) throw new Error("email does not exits");
    return { msg: "update profile successfully" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
export async function signUpWithCredentials(data) {
  try {
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error("Email already exist");
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }
    const token = generateToken({ user: data });
    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: "VERIFY",
    });

    return {
      msg: "sign up success! check your email to complete the registration ",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
export async function verifyWithCredentials(token) {
  try {
    const { user } = verifyToken(token);
    const userExist = await User.findOne({ email: user.email });
    if (userExist) return { msg: "verify success " };
    const newUser = new User(user);
    await newUser.save();
    return { msg: "verify success" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function changePasswordWithCredentials({ old_pass, new_pass }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("unauthorized");
    if (session?.user?.provider !== "credentials") {
      throw new Error(
        `This account is signed in with ${session?.user?.provider}.you cannot use this function`
      );
    }
    const user = await User.findById(session?.user?._id);
    if (!user) throw new Error("user doesnt exist");
    const compare = await bcrypt.compare(old_pass, user.password);
    if (!compare) throw new Error("old password doesnt match");
    const newPass = await bcrypt.hash(new_pass, 12);
    await User.findByIdAndUpdate(user._id, { password: newPass });

    return { msg: "change password successfully" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
export async function forgetPasswordWithCredentials({ email }) {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email doesnt exist");
    if (user?.provider !== "credentials") {
      throw new Error(
        `This account is signed in with ${user?.provider}.you cannot use this function`
      );
    }
    const token = generateToken({ userId: user._id });

    await sendEmail({
      to: email,
      url: `${BASE_URL}/reset_password?token=${token}`,
      text: "RESET PASSWORD",
    });
    return { msg: "sucess check your email to reset your password" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function resetPasswordWithCredentials({ token, password }) {
  try {
    const {userId}=verifyToken(token)
    const newPass=await bcrypt.hash(password,12)
    await User.findByIdAndUpdate(userId,{password:newPass})
    return { msg: "success your password has been reset" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
