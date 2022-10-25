import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    window.addEventListener('focus', () => {
      setContent(
        `${content}<br>focus: ${window.innerWidth}, ${window.innerHeight}`
      );
    });

    window.addEventListener('resize', () => {
      setContent(
        `${content}<br>resize: ${window.innerWidth}, ${window.innerHeight}`
      );
    });

    screen.orientation.onchange = () => {
      setContent(
        `${content}<br>orientationchange: ${window.innerWidth}, ${window.innerHeight}`
      );
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Home;
