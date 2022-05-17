import type { NextPage } from "next";
import { useEffect, useState, useCallback } from "react";
import { SimpleNavLayout } from "components/layouts";
import { PersonalDetailsForm } from "components/sections";
import { useRouter } from "next/router";
import { Detail, PersonalDetails } from "types";
import Head from "next/head";
import { useCookies } from "hooks/useCookies";
import { useGlobal } from "context";
import { postEvent } from "utils/api";

const Details: NextPage = () => {
  const router = useRouter();
  const { saveUsersDetails, userDetails } = useCookies();
  const [{ userId }] = useGlobal();

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

  const handleSetDetails = (property: keyof PersonalDetails, value: string) => {
    setPersonalDetails((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const handleSubmit = () => {
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
    if (!isError) {
      saveUsersDetails(personalDetails);
      postEvent({
        type: "user-entered-contact-data",
        user_id: userId,
        data: {
          first_name: personalDetails.firstName,
          last_name: personalDetails.lastName,
          phone_number: personalDetails.phoneNumber,
          email_address: personalDetails.emailAddress,
        },
      });
      handleNav("overview");
    }
  };

  const handleNav = useCallback(
    (path: string) => {
      const currentPath = router.asPath;
      const newPath = currentPath.replace("details", path);
      router.push(newPath);
    },
    [router]
  );

  useEffect(() => {
    // Reroute to overview page if no fields are empty
    const hasEmptyField = Object.keys(userDetails).some(
      (key) => userDetails[key as Detail] === ""
    );
    // Auto fill inputs
    setPersonalDetails(userDetails);
    if (!hasEmptyField) {
      handleNav("overview");
    }
  }, [userDetails, router, handleNav]);

  return (
    <>
      <Head>
        <title>Numan | A few details about you</title>
      </Head>
      <SimpleNavLayout
        handleClick={handleSubmit}
        headerBack={() => handleNav("")}
      >
        <PersonalDetailsForm
          onValueChange={handleSetDetails}
          values={personalDetails}
          errors={errors}
        />
      </SimpleNavLayout>
    </>
  );
};

export default Details;
