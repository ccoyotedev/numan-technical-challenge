import { Input, ListHeading } from "components/ui";
import { useState } from "react";
import styles from "./styles.module.scss";

export const PersonalDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

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
        <Input
          type="text"
          label="Legal first name"
          message="Please write your name as it appears on your passport or ID. We need your full legal name to confirm your identity."
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <Input
          type="text"
          label="Legal surname"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <hr />
        <ListHeading number={2} title="Contact details" />
        <Input
          type="tel"
          label="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <Input
          type="email"
          label="Email address"
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
        />
      </div>
    </section>
  );
};
