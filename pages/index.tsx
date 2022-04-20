import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useUIContext } from '../components/Context';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { openSidebar } = useUIContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name='description' content='Simple Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Sidebar />
        <div>
          <button onClick={openSidebar} type='button'>
            open
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
