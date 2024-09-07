"use client"
 
import { useSession } from "@/auth/client"
import { signIn } from "@/auth/webauthn"
 
export default function Passkey() {
  const { data: session, update, status } = useSession()
 
  return (
    <div>
      {status === "authenticated" ? (
        <button onClick={() => signIn("passkey", { action: "register" })}>
          Register new Passkey
        </button>
      ) : status === "unauthenticated" ? (
        <button onClick={() => signIn("passkey")}>Sign in with Passkey</button>
      ) : null}
    </div>
  )
}
