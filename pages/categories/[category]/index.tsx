import { SimpleNavLayout } from "components/layouts";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Category, Product } from "types";

const Category: NextPage<{ products: Product[] }> = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(products);
  return (
    <SimpleNavLayout back="/categories">
      <div></div>
    </SimpleNavLayout>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  // Call external API endpoint to get categories
  const res = await fetch("https://testapi.numan.com/v1/product_categories");
  const json = await res.json();
  const categories = json.data as Category[];

  // Get the paths we want to pre-render based on categories
  const paths = categories.map((item) => ({
    params: { category: item.attributes.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// Also call getStaticProps so we can fetch data about the category
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the category `id`.
  // Call external API endpoint to get products
  const slug = params?.category;
  const res = await fetch("https://testapi.numan.com/v1/product_categories");
  const { data, included } = await res.json();

  // Get related product Ids from category with matching slug
  const category = (data as Category[]).find(
    (item) => item.attributes.slug === slug
  );
  const productIds = category?.relationships.products.data.map(
    (item) => item.id
  );

  // Filter all products by the related product Ids
  const products = (included as Product[]).filter((item) =>
    productIds?.includes(item.id)
  );

  // pass products to props
  return {
    props: {
      products,
    },
  };
};

export default Category;
