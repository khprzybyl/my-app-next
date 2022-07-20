import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Hello from the other world</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded"> Button </button>


    </>
  );
};

export default Home;