import type { NextPage } from "next";
import { Header } from "components/ui";
import { OrderComplete } from "components/sections";
import { useLocalStorage } from "hooks/useLocalStorage";
import Head from "next/head";
import { useCookies } from "hooks/useCookies";

const Success: NextPage = () => {
  const { order } = useLocalStorage();
  const { userDetails } = useCookies();

  return (
    <>
      <Head>
        <title>Numan | Order confirmed</title>
      </Head>
      <Header />
      <main className="main">
        <OrderComplete order={order} personalDetails={userDetails} />
      </main>
    </>
  );
};

export default Success;
