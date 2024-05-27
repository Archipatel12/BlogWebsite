// [slug].js

import Layout from '../component/Layout';
import { getPostBySlug, getPostSlugs } from '../lib/posts';
import styles from './post.module.css';

export default function BlogPost({ post }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}> {/* Add wrapper div */}
          <h1 className={styles.heading}>{post.title}</h1>
          <p className={styles.date}>Date: {post.date}</p>
          <p className={styles.author}>Author: {post.author}</p>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
        <a href="/" className={styles.backButton}>Back to Home</a>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false }; // Set fallback to false if you don't use dynamic routes
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}
