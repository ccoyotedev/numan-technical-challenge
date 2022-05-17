import type { NextPage } from "next";
import { Header } from "components/ui";
import { useEffect, useState } from "react";
import { Order } from "types";
import { OrderSummary } from "components/sections";
import { useRouter } from "next/router";

const Overview: NextPage = () => {
  const router = useRouter();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    // Fetch localstorage client side as need access to window
    const storageString = localStorage.getItem("order");
    if (storageString) setOrder(JSON.parse(storageString));
  }, []);

  return (
    <>
      <Header back={router.back} />
      <main className="main">
        <OrderSummary
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
