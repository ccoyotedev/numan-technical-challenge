import type { NextPage } from "next";
import { Header } from "components/ui";
import { OrderSummary } from "components/sections";
import { useRouter } from "next/router";
import { useLocalStorage } from "hooks/useLocalStorage";
import Head from "next/head";

const Overview: NextPage = () => {
  const router = useRouter();
  const { order } = useLocalStorage();

  const handlePayment = () => {
    const currentPath = router.asPath;
    const newPath = currentPath.replace("overview", "success");
    router.push(newPath);
  };

  return (
    <>
      <Head>
        <title>Numan | Overview</title>
      </Head>
      <Header back={router.back} />
      <main className="main">
        <OrderSummary
          handlePayment={handlePayment}
          order={order}
          personalDetails={{
            firstName: "Caleb",
            lastName: "Brown",
            phoneNumber: "07892786672",
            emailAddress: "calebgcbrown@gmail.com",
          }}
        />
      </main>
    </>
  );
};

export default Overview;
