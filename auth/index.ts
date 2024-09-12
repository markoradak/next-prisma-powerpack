import NextAuth from "next-auth"

import Resend from "next-auth/providers/resend"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Passkey from "next-auth/providers/passkey"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Passkey,
    Resend({ from: "no-reply@markoradak.com" }),
    GitHub,
    Google,
  ],
  pages: {
    signIn: "/login",
    signOut: '/',
    verifyRequest: '/verify',
    error: '/',
    newUser: '/',
  },
  experimental: { enableWebAuthn: true },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      return isAuthenticated;
    },
  },
})
