import Link from "next/link"

interface PostProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{post.title}</h1>
      <p>
        <strong>Post ID:</strong> {post.id}
      </p>
      <p>
        <strong>User ID:</strong> {post.userId}
      </p>
      <div>
        <h3>Content:</h3>
        <p>{post.body}</p>
      </div>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        ← Back to Home
      </Link>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }],
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}
