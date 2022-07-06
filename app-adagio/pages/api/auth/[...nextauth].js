const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import * as jwt from "jsonwebtoken";
import { useEffect } from "react";


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Connexion",
        // The credentials is used to generate a suitable form on the sign in page.
        credentials: {
          email: { label: "Mail", type: "text", placeholder: "email@email.fr" },
          password: {  label: "Mot de passe", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          // check if user exists in database
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            });
            
            if (!user) {
                console.log('user not found');
            }
            // check if password is correct
            if (user.password !== credentials.password) {
                console.log('password incorrect');
            }
            return user;
        }
      })
    ],
    callbacks: {
        jwt: async ({token, user}) => {
            if (user) {
                token.id = user.id;
            }
            // Add logic here to save the token to your database
            return token
        },
        session: async ({session, token}) => {
            if (token) {
                session.id = token.id
            }
            return session;
        }
    },
    secret: "supersecretkeyyoushouldnotcommittogithub",
    jwt: { 
        secret: "secret",
        encryption: true,
    }
  })
