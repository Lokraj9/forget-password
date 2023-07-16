export { default } from "next-auth/middleware"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
// export default withAuth(
//     function middleware(req) {
      
//       const{pathname,origin}=req.nextUrl
//       const{token}=req.nextUrl
//       if( pathname.startsWith('/dashboard') && token?.user?.role == 'admin'){
//         // return  NextResponse.redirect(origin)
//         return new NextResponse("you are not authorized")
      
//     }

//     },
//     {
//       callbacks: {
//         authorized: ({ token }) => {
//             return !!token //true middleware is run
//         },
//       },
//     }
//   )

export const config = { matcher: ["/profile/:path*","/protected/:path*","/dashboard/:path*"] }