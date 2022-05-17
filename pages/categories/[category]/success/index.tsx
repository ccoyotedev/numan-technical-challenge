import type { NextPage } from "next";
import { Header } from "components/ui";
import { OrderComplete } from "components/sections";
import { useLocalStorage } from "hooks/useLocalStorage";

const Success: NextPage = () => {
  const { order } = useLocalStorage();

  return (
    <>
      <Header />
      <main className="main">
        <OrderComplete order={order} />
      </main>
    </>
  );
};

export default Success;
