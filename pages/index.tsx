import type { NextPage } from 'next';
import Head from 'next/head';
import Jumbo from '../components/jumbo/jumbo';
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
        <div className='md:pl-[306px] pt-[84px]'>
          <div className='md:p-[32px]'>
            <Jumbo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
