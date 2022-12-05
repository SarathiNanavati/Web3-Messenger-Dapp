import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const Home: NextPage = () => {
  const isAuthenticated = true;

  if (isAuthenticated) return <Login />;

  return (
    <div>
      <Head>
        <title>Web3 Messenger Dapp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Welcome to the Metaverse App</h1>
    </div>
  );
};

export default Home;
