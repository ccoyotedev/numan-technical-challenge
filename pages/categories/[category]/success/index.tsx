import type { NextPage } from "next";
import { Header } from "components/ui";
import { OrderComplete } from "components/sections";
import { useLocalStorage } from "hooks/useLocalStorage";
import Head from "next/head";

const Success: NextPage = () => {
  const { order } = useLocalStorage();

  return (
    <>
      <Head>
        <title>Numan | Order confirmed</title>
      </Head>
      <Header />
      <main className="main">
        <OrderComplete order={order} />
      </main>
    </>
  );
};

export default Success;
