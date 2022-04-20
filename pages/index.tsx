import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/nav/nav';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name='description' content='Simple Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Sidebar />
        <Nav />
      </main>
    </div>
  );
};

export default Home;
