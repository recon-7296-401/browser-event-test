import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const orientationLockIfNeeded = () => {
  const needLock = window.innerWidth < 500 || window.innerHeight < 500;
  console.log(`needLock: ${needLock}`);
  console.log(
    `innerwidth: ${window.innerWidth}, innerHeight: ${window.innerHeight}`
  );
  console.log(screen.orientation);

  try {
    if (
      needLock &&
      (screen.orientation.type.startsWith('landscape') ||
        window.innerHeight < 500)
    ) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          screen.orientation.lock('portrait');
        })
        .catch(console.error);
    } else {
      if (!needLock) {
        screen.orientation.unlock();
        if (document.fullscreenElement) document.exitFullscreen();
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const Home: NextPage = () => {
  useEffect(() => {
    orientationLockIfNeeded();
  }, []);

  useEffect(() => {
    window.onfocus = () => {
      console.log('onfocus');
      orientationLockIfNeeded();
    };

    window.onresize = () => {};

    screen.orientation.onchange = () => {
      orientationLockIfNeeded();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='overflow-y-auto'>
        <button className={`w-20 h-20 text-lg font-semibold bg-green-400`}>
          reset
        </button>
      </div>
    </>
  );
};

export default Home;
