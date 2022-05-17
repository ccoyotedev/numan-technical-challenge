import type { NextPage } from "next";
import { Header } from "components/ui";
import { OrderSummary } from "components/sections";
import { useRouter } from "next/router";
import { useLocalStorage } from "hooks/useLocalStorage";
import Head from "next/head";
import { useCookies } from "hooks/useCookies";
import { Detail } from "types";
import { postEvent } from "utils/api";
import { useGlobal } from "context";

const Overview: NextPage = () => {
  const router = useRouter();
  const { order } = useLocalStorage();
  const { userDetails, saveUsersDetails } = useCookies();
  const [{ userId }] = useGlobal();

  const handlePayment = () => {
    postEvent({
      type: "user-submitted-order",
      user_id: userId,
      data: {
        product_id: order?.id,
        first_name: userDetails.firstName,
        last_name: userDetails.lastName,
        phone_number: userDetails.phoneNumber,
        email_address: userDetails.emailAddress,
      },
    });
    handleNav("success");
  };

  const handleEditDetails = (keys: Detail[]) => {
    const updatedDetails = { ...userDetails };
    keys.forEach((key) => {
      updatedDetails[key] = "";
    });
    saveUsersDetails(updatedDetails);
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
