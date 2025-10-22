import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter : MongoDBAdapter(client),
  providers: [
    Google({
      clientId : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_SECRET_ID
    }),
    GitHub(
      {
        clientId : process.env.GITHUB_CLIENT_ID,
        clientSecret : process.env.GITHUB_SECRET_ID
      }
    ),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = {name : 'test',
          email : "test@gmail.com",
          password : "test"
        };
        if(credentials.email ===user.email &&
          credentials.password === user.password
        ){
          return user;
        }else{
          return null
        }
      },
    }),
],
})