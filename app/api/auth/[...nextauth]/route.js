import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import connectDB from "@/utils/database";
import User from "@/models/userModel";
connectDB();
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
       if(account.type === 'oauth'){
        return await signInWithOAuth({account,profile})
       }
      return true;
    },
    async jwt({ token, trigger, session }) {
        if(trigger === 'update'){
                token.user.name=session.name;
                token.user.image=session.image;
        }
        else{
            const user=await getUserByEmail({email:token.email})
            token.user=user;
        }
        
        
      return token;
    },
    async session({ session, token }) {
        session.user=token.user;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

async function signInWithOAuth({account,profile}){
    const user= await User.findOne({email:profile.email})
    if(user) return true;
    const newUser=new User({
        name:profile.name,
        email:profile.email,
        image:profile.picture,
        provider:account.provider,
    })
    await newUser.save();
    return true;
}
async function getUserByEmail({email}){
    const user=await User.findOne({email}).select('-password')
    if(!user) throw new Error("Email doesnot exist")
    return {...user._doc,_id:user._id.toString()}
}
