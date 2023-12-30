// import { NextResponse } from "next/server"
// import * as jose from 'jose'

// export const config = {
//     matcher: ["/checkout/:path*", "/dashbord"]
// }

// export default function middleware(request) {

//     if (request.cookies.get("token") !== undefined) {
//         const token = request.cookies.get("token")
//         const user = jose.decodeJwt(token.value) //jwt to object

//         if (user.exp !==  null)// checking if token in valid
//         {
//             return NextResponse.rewrite(request.nextUrl.href)


//         }
//         else {//token is invalid and it will be deleted and redirecting in loggin page

//             return request.cookies.delete("token")

//         }
//     }


//     else {
//         return NextResponse.rewrite(`${request.nextUrl.origin}/Auth/signup`)
//     }



// }
export default function middleware(request) {}

