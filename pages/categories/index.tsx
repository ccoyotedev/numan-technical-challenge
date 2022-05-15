import { SimpleNavLayout } from "components/layouts";
import { CategorySelector } from "components/sections";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import { Category } from "types";

const Categories: NextPage<{ categories: Category[] }> = ({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <SimpleNavLayout
      to={selectedCategory ? `/categories/${selectedCategory}` : undefined}
      disabled={!selectedCategory}
    >
      <CategorySelector
        categories={categories}
        onSelect={setSelectedCategory}
        selected={selectedCategory}
      />
    </SimpleNavLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  categories: Category[];
}> = async () => {
  // Call external API endpoint to get categories
  const res = await fetch("https://testapi.numan.com/v1/product_categories");
  const json = await res.json();

  const categories = json.data as Category[];

  // By returning { props: { categories } }, the Categories component
  // will receive `posts` as a prop at build time
  return {
    props: {
      categories,
    },
  };
};

export default Categories;
