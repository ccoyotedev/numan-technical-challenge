import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "components/sections";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="The helpful healthcare company"
        subtitle="helping your health wherever we can"
        href="/categories"
      />
    </>
  );
};

export default Home;
