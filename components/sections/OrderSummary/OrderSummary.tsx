import { ListHeading, OrderCard, Button } from "components/ui";
import { Detail, Order, PersonalDetails } from "types";
import styles from "./styles.module.scss";

interface Props {
  order?: Order;
  personalDetails?: PersonalDetails;
  handlePayment: () => void;
  editDetails: (keys: Detail[]) => void;
}

export const OrderSummary = ({
  order,
  personalDetails,
  handlePayment,
  editDetails,
}: Props) => {
  return (
    <section className="container">
      <div className={`row ${styles["summary-container"]}`}>
        <div className="col-12 col-sm-6">
          <OrderCard order={order} />
        </div>
        <div className={`col-12 col-sm-6 ${styles["details-container"]}`}>
          <h2>Order summary</h2>
          <p>
            Please make sure your order and personal details below are correct
            before placing your order.
          </p>
          <div className={styles["personal-information"]}>
            <ListHeading number={1} title="Personal information" />
            {personalDetails && (
              <span className={styles["info"]}>
                {personalDetails.firstName} {personalDetails.lastName}
                <span
                  className={styles["edit"]}
                  onClick={() => editDetails(["firstName", "lastName"])}
                >
                  Edit
                </span>
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
                  <span
                    className={styles["edit"]}
                    onClick={() => editDetails(["phoneNumber"])}
                  >
                    Edit
                  </span>
                </span>
                <span className={styles["info"]}>
                  {personalDetails.emailAddress}
                  <span
                    className={styles["edit"]}
                    onClick={() => editDetails(["emailAddress"])}
                  >
                    Edit
                  </span>
                </span>
              </>
            )}
          </div>
          <Button
            wide
            onClick={handlePayment}
            disabled={!order || !personalDetails}
          >
            Pay now
          </Button>
        </div>
      </div>
    </section>
  );
};
