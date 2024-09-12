"use client";

import { useSession, signOut } from "@/auth/client"


export default function MyComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div className="flex flex-col items-center">
        <p>Signed in as {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <p>Not signed in</p>;
}
