import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./MongoDbClient"

const handler = NextAuth({adapter: MongoDBAdapter(clientPromise),
providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    })

  ],

})

// ,
//            profile(profile) {
 
//     console.log(profile)
    
//     return {
//     profile
      
//     }
//   },
export { handler as GET, handler as POST }