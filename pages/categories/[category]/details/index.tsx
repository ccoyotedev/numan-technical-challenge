import type { NextPage } from "next";
import { useState } from "react";
import { SimpleNavLayout } from "components/layouts";
import { PersonalDetailsForm } from "components/sections";
import { useRouter } from "next/router";
import { Detail, PersonalDetails } from "types";

const Details: NextPage = () => {
  const router = useRouter();

  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [errors, setErrors] = useState<{
    [key in keyof PersonalDetails]: undefined | string;
  }>({
    firstName: undefined,
    lastName: undefined,
    phoneNumber: undefined,
    emailAddress: undefined,
  });

  const getToPath = () => {
    const currentPath = router.asPath;
    const newPath = currentPath.replace("details", "overview");
    return newPath;
  };

  const handleSetDetails = (property: keyof PersonalDetails, value: string) => {
    setPersonalDetails((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const handleNav = () => {
    const newErrors = { ...errors };
    // Check for empty input values
    Object.keys(personalDetails).forEach((key) => {
      const prop = key as Detail;
      const value = personalDetails[prop];
      // Assign error as "field is required"
      newErrors[prop] = !!value ? undefined : "field is required.";
    });

    setErrors(newErrors);

    const isError = Object.keys(newErrors).some(
      (key) => newErrors[key as Detail]
    );

    // If no error, continue nav logic
    if (!isError) router.push(getToPath());
  };

  return (
    <SimpleNavLayout handleClick={handleNav} headerBack={router.back}>
      <PersonalDetailsForm
        onValueChange={handleSetDetails}
        values={personalDetails}
        errors={errors}
      />
    </SimpleNavLayout>
  );
};

export default Details;
