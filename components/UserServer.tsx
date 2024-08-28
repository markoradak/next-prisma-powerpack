import { auth, signOut } from "../auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return <p>Not signed in</p>;
 
  return (
    <div className="flex flex-col items-center">
      <p>Signed in as {session.user.email}</p>
      <form
        action={async (formData) => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">
          Sign Out
        </button>
      </form>
    </div>
  )
}