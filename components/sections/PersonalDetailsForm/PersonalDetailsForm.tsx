import { InfoCard, Input, ListHeading } from "components/ui";
import { PersonalDetails } from "types";
import styles from "./styles.module.scss";

interface Props {
  onValueChange: (property: keyof PersonalDetails, value: string) => void;
  values: PersonalDetails;
  errors: { [key in keyof PersonalDetails]: undefined | string };
}

export const PersonalDetailsForm = ({
  onValueChange,
  values,
  errors,
}: Props) => {
  return (
    <section className="container">
      <div className={styles["form-container"]}>
        <h6>A few details about you</h6>
        <p>
          We just need a few more details before we can send your order out.
          These will be kept private and will never be shared unless you ask us
          to.
        </p>
        <ListHeading number={1} title="Personal information" />
        <InfoCard>
          <p className="p-sm">
            We are required to confirm the identity of our members. Any
            incorrect details will cause delays to your order.
          </p>
        </InfoCard>
        <Input
          type="text"
          error={
            errors.firstName
              ? `Legal first name ${errors.firstName}`
              : undefined
          }
          label="Legal first name"
          message="Please write your name as it appears on your passport or ID. We need your full legal name to confirm your identity."
          onChange={(e) => onValueChange("firstName", e.target.value)}
          value={values.firstName}
        />
        <Input
          type="text"
          error={
            errors.lastName ? `Legal surname ${errors.lastName}` : undefined
          }
          label="Legal surname"
          onChange={(e) => onValueChange("lastName", e.target.value)}
          value={values.lastName}
        />
        <hr />
        <ListHeading number={2} title="Contact details" />
        <Input
          type="tel"
          error={
            errors.phoneNumber
              ? `Phone number ${errors.phoneNumber}`
              : undefined
          }
          label="Phone number"
          onChange={(e) => onValueChange("phoneNumber", e.target.value)}
          value={values.phoneNumber}
        />
        <Input
          type="email"
          error={
            errors.emailAddress
              ? `Email address ${errors.emailAddress}`
              : undefined
          }
          label="Email address"
          onChange={(e) => onValueChange("emailAddress", e.target.value)}
          value={values.emailAddress}
        />
      </div>
    </section>
  );
};
