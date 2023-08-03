import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <Link href="/users">
        <h2>Users</h2>
    </Link>
    <Link href="/posts">
    <h2>Posts</h2>
    </Link>
    </>
  )
}
