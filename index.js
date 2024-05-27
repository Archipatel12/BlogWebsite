import Layout from '../component/Layout';
import Link from 'next/link';
import { getPostSlugs, getPostBySlug } from '../lib/posts';
import styles from './index.module.css'; // Import the CSS module

export default function Home({ posts }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome to My Blog</h1>
        <ul className={styles.grid}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.card}>
              {post && (
                <>
                  <p className={styles.cardTitle}>{post.title}</p>
                  <p className={styles.cardSummary}>{post.summary}</p>
                  <Link className={styles.link} href={`/${post.slug}`}>
                    
                      <button className={styles.button}>Read More</button>
                    
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));
  return {
    props: {
      posts: posts.filter(post => post !== null), // Filter out null posts
    },
  };
}
