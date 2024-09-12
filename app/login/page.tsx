import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { RiGithubFill, RiGoogleFill, RiMailFill } from '@remixicon/react'

import Image from "next/image";

import { auth, signIn } from "@/auth"

import Passkey from "./Passkey"

async function loginWithEmail(formData: FormData) {
  'use server'
  const email = formData.get('email')
  await signIn("resend", { email })
}

async function loginWithGoogle() {
  'use server'
  await signIn("google")
}

async function loginWithGithub() {
  'use server'
  await signIn("github")
}

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-[400px] mx-auto mt-8 py-3">
        <CardHeader>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={0}
            priority
          />
          <CardDescription>Sign Up or Login to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={loginWithEmail} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <RiMailFill className="mr-2 h-4 w-4" />
              Continue with Email
            </Button>
          </form>

          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form action={loginWithGoogle}>
            <Button type="submit" variant="outline" className="w-full">
              <RiGoogleFill className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </form>

          <form action={loginWithGithub}>
            <Button type="submit" variant="outline" className="w-full">
              <RiGithubFill className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </form>

          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Passkey />

          <div className="text-center text-xs text-balance text-gray-500">
            You can login with passkeys only after you&apos;ve already created an account and registered your passkey.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// export default async function LoginAsync() {
//   const session = await auth()
//   if (session?.user) { redirect('/dashboard') }

//   return <Login />
// }

