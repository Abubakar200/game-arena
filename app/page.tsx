import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Dashboard</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
