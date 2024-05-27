import Link from 'next/link';

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        post && ( // Check if post is not null
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            <p>{post.summary}</p>
          </li>
        )
      ))}
    </ul>
  );
}
