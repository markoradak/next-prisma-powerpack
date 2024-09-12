import UserClient from '@/components/UserClient'

export default async function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Quick dashboard page using shadcn</p>
      <UserClient />
    </div>
  );
}