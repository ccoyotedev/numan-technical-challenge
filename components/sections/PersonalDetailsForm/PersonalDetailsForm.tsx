import { InfoCard, Input, ListHeading } from "components/ui";
import { useState } from "react";
import { PersonalDetails } from "types";
import styles from "./styles.module.scss";

export const PersonalDetailsForm = () => {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const handleSetDetails = (property: keyof PersonalDetails, value: string) => {
    setPersonalDetails((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

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
          label="Legal first name"
          message="Please write your name as it appears on your passport or ID. We need your full legal name to confirm your identity."
          onChange={(e) => handleSetDetails("firstName", e.target.value)}
          value={personalDetails.firstName}
        />
        <Input
          type="text"
          label="Legal surname"
          onChange={(e) => handleSetDetails("lastName", e.target.value)}
          value={personalDetails.lastName}
        />
        <hr />
        <ListHeading number={2} title="Contact details" />
        <Input
          type="tel"
          label="Phone number"
          onChange={(e) => handleSetDetails("phoneNumber", e.target.value)}
          value={personalDetails.phoneNumber}
        />
        <Input
          type="email"
          label="Email address"
          onChange={(e) => handleSetDetails("emailAddress", e.target.value)}
          value={personalDetails.emailAddress}
        />
      </div>
    </section>
  );
};
