import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <p>Blogs</p>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Blogs. All rights reserved.</p>
        <p>Designed with ❤️ by Patel Archi</p>
      </footer>
    </div>
  );
};

export default Layout;
