import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <div className='h-screen '>
      <Head>
        <title>Web3 Messenger Dapp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Login />
    </div>
  );
};

export default Home;
