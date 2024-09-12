"use client"

import { RiKeyFill } from '@remixicon/react'
import { Button } from "@/components/ui/button"
 
import { signIn } from "@/auth/webauthn"
 
export default function Passkey() { 
  return (
    <Button onClick={() => signIn("passkey")} type="submit" variant="outline" className="w-full">
      <RiKeyFill className="mr-2 h-4 w-4" />
      Login with Passkey
    </Button>
  )
}
