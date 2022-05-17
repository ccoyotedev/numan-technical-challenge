import type { NextPage } from "next";
import { Header } from "components/ui";
import { OrderSummary } from "components/sections";
import { useRouter } from "next/router";
import { useLocalStorage } from "hooks/useLocalStorage";
import Head from "next/head";
import { useCookies } from "hooks/useCookies";

const Overview: NextPage = () => {
  const router = useRouter();
  const { order } = useLocalStorage();
  const { userDetails, removeUserDetails } = useCookies();

  const handlePayment = () => {
    const currentPath = router.asPath;
    const newPath = currentPath.replace("overview", "success");
    router.push(newPath);
  };

  const handleEditDetails = () => {
    removeUserDetails();
    const currentPath = router.asPath;
    const newPath = currentPath.replace("overview", "details");
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
          personalDetails={userDetails}
          editDetails={handleEditDetails}
        />
      </main>
    </>
  );
};

export default Overview;
