import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Simple Next.js Pages App</h1>
      <p>Click on a post to view it:</p>
      <ul>
        <li>
          <Link href="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link href="/posts/2">Post 2</Link>
        </li>
        <li>
          <Link href="/posts/3">Post 3</Link>
        </li>
      </ul>
    </div>
  )
}
