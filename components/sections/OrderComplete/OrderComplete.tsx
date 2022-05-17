import { ListHeading, OrderCard } from "components/ui";
import { Order, PersonalDetails } from "types";
import styles from "./styles.module.scss";

interface Props {
  order?: Order;
  personalDetails?: PersonalDetails;
}

export const OrderComplete = ({ order, personalDetails }: Props) => {
  return (
    <section className="container">
      <div className={`row ${styles["summary-container"]}`}>
        <div className="col-12 col-sm-6">
          <OrderCard order={order} />
        </div>
        <div className={`col-12 col-sm-6 ${styles["details-container"]}`}>
          <h2>Order successful!</h2>
          <div className={styles["personal-information"]}>
            <ListHeading number={1} title="Personal information" />
            {personalDetails && (
              <span className={styles["info"]}>
                {personalDetails.firstName} {personalDetails.lastName}
              </span>
            )}
          </div>
          <hr />
          <div className={styles["contact-information"]}>
            <ListHeading number={2} title="Contact details" />
            {personalDetails && (
              <>
                <span className={styles["info"]}>
                  {personalDetails.phoneNumber}
                </span>
                <span className={styles["info"]}>
                  {personalDetails.emailAddress}
                </span>
              </>
            )}
          </div>
          <p>
            Thank you for your purchase, and taking another step towards
            becoming a new man.
          </p>
          <p>Your order should be with you within 3 - 5 working days.</p>
        </div>
      </div>
    </section>
  );
};
