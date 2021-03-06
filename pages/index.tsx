import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "components/sections";
import { postEvent } from "utils/api";
import { useLocalStorage } from "hooks/useLocalStorage";

const Home: NextPage = () => {
  const { userId } = useLocalStorage();

  const handleEvent = () => {
    if (userId) {
      postEvent({
        type: "user-started-flow",
        user_id: userId,
        data: {
          foo: "bar",
        },
      });
    }
  };

  return (
    <>
      <Head>
        <title>Numan | Digital healthcare for men</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="The helpful healthcare company"
        subtitle="helping your health wherever we can"
        href="/categories"
        handleClick={handleEvent}
      />
    </>
  );
};

export default Home;
