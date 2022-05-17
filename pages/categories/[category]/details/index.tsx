import type { NextPage } from "next";
import { SimpleNavLayout } from "components/layouts";
import { PersonalDetailsForm } from "components/sections";
import { useRouter } from "next/router";

const Details: NextPage = () => {
  const router = useRouter();

  const getToPath = () => {
    const currentPath = router.asPath;
    const newPath = currentPath.replace("details", "overview");
    return newPath;
  };

  return (
    <SimpleNavLayout to={getToPath()}>
      <PersonalDetailsForm />
    </SimpleNavLayout>
  );
};

export default Details;
