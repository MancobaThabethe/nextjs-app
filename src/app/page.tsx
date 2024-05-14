import Link from "next/link";
import getUsers from "../../lib/getUsers";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='about'>Goto About page</Link>
    </main>
  );
}
