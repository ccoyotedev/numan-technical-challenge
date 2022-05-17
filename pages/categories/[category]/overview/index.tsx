import type { NextPage } from "next";
import { Header } from "components/ui";
import { useEffect, useState } from "react";
import { Order } from "types";
import { OrderSummary } from "components/sections";

const Overview: NextPage = () => {
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    // Fetch localstorage client side as need access to window
    const storageString = localStorage.getItem("order");
    if (storageString) setOrder(JSON.parse(storageString));
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <OrderSummary order={order} />
      </main>
    </>
  );
};

export default Overview;
