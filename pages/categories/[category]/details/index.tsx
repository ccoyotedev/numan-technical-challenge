import type { NextPage } from "next";
import { SimpleNavLayout } from "components/layouts";
import { PersonalDetailsForm } from "components/sections";

const Details: NextPage = () => {
  return (
    <SimpleNavLayout>
      <PersonalDetailsForm />
    </SimpleNavLayout>
  );
};

export default Details;
