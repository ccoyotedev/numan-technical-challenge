import { ListHeading, OrderCard, Button } from "components/ui";
import { Order } from "types";

interface Props {
  order?: Order;
}

export const OrderSummary = ({ order }: Props) => {
  return (
    <section className="container">
      <OrderCard order={order} />
      <h2>Order summary</h2>
      <p>
        Please make sure your order and personal details below are correct
        before placing your order.
      </p>
      <ListHeading number={1} title="Personal information" />
      <ListHeading number={2} title="Contact details" />
      <Button wide>Pay now</Button>
    </section>
  );
};
