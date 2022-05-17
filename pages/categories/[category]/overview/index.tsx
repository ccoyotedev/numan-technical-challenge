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
    handleNav("success");
  };

  const handleEditDetails = () => {
    removeUserDetails();
    handleNav("details");
  };

  const handleNav = (path: string) => {
    const currentPath = router.asPath;
    const newPath = currentPath.replace("overview", path);
    router.push(newPath);
  };

  return (
    <>
      <Head>
        <title>Numan | Overview</title>
      </Head>
      <Header back={() => handleNav("")} />
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
