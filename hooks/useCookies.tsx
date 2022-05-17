import { setCookies, getCookie, removeCookies } from "cookies-next";
import { PersonalDetails } from "types";
import { useEffect, useState } from "react";

export const useCookies = () => {
  const [userDetails, setUserDetails] = useState<PersonalDetails>();

  const saveUsersDetails = (details: PersonalDetails) => {
    const store = JSON.stringify(details);
    setCookies("user_details", store);
  };

  const removeUserDetails = () => {
    removeCookies("user_details");
  };

  // Fetch cookie on render as need access to window
  useEffect(() => {
    const cookie = getCookie("user_details");
    if (cookie) setUserDetails(JSON.parse(cookie as string));
  }, []);

  return { saveUsersDetails, removeUserDetails, userDetails };
};
