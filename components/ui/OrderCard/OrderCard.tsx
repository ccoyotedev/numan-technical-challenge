import { Order } from "types";
import {
  convertFrequencyToReadableString,
  convertNumberToPrice,
} from "utils/functions";
import styles from "./styles.module.scss";

interface Props {
  order?: Order;
}

export const OrderCard = ({ order }: Props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-body"]}>
        <h6>{order?.productName ?? ""}</h6>
        <p className="p-sm">
          {order?.variant ?? ""}{" "}
          <span>
            every{" "}
            {convertFrequencyToReadableString(
              order?.subscriptionFrequency ?? "1m"
            )}
          </span>
        </p>
        <p className={styles["monthly-price"]}>
          {convertNumberToPrice(order?.price ?? 0)}{" "}
          <span className="p-sm">/ monthly</span>
        </p>
      </div>
      <div className={styles["card-footer"]}>
        <p>Total</p>
        <p>{convertNumberToPrice(order?.price ?? 0)}</p>
      </div>
    </div>
  );
};
