import { SimpleNavLayout } from "components/layouts";
import { ProductSelector } from "components/sections";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import { Category, ExtendedProduct, Product, ProductVariant } from "types";
import { getDefaultVariantFromProductId } from "utils/functions";
import { useRouter } from "next/router";
import { useLocalStorage } from "hooks/useLocalStorage";
import Head from "next/head";
import { useGlobal } from "context";

const Category: NextPage<{
  products: ExtendedProduct[];
  defaultProductId?: string;
  category?: string;
}> = ({
  products,
  defaultProductId,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { saveOrder } = useLocalStorage();
  const [{ userId }] = useGlobal();

  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >(
    defaultProductId
      ? getDefaultVariantFromProductId(products, defaultProductId)?.id
      : undefined
  );

  const handleNav = () => {
    if (!selectedVariantId) return;
    // Save order to local storage using custom hook
    const success = saveOrder(selectedVariantId, products);

    if (success) {
      // Navigate to details page
      const currentPath = router.asPath;
      router.push(`${currentPath}/details`);
    }
  };

  return (
    <>
      <Head>
        <title>Numan | {category || "Products"}</title>
      </Head>
      <SimpleNavLayout
        back="/categories"
        disabled={!selectedVariantId}
        handleClick={handleNav}
      >
        <ProductSelector
          products={products}
          value={selectedVariantId}
          onSelect={setSelectedVariantId}
        />
      </SimpleNavLayout>
    </>
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
export const getStaticProps: GetStaticProps<{
  products: ExtendedProduct[];
  defaultProductId?: string;
  category?: string;
}> = async ({ params }) => {
  // params contains the category `id`.
  // Call external API endpoint to get products
  const slug = params?.category;
  const res = await fetch("https://testapi.numan.com/v1/product_categories");
  const {
    data,
    included,
  }: { data: Category[]; included: Array<Product | ProductVariant> } =
    await res.json();

  // GET PRODUCTS + VARIANTS
  // Get related product Ids from category with matching slug
  const category = data.find((item) => item.attributes.slug === slug);
  const productIds = category?.relationships.products.data.map(
    (item) => item.id
  );

  // Filter all products + variants by the related product Ids and type
  const products = included.filter(
    (item) => productIds?.includes(item.id) && item.type === "product"
  ) as Product[];

  // Map in product variants
  const productsWithVariants = products.map((item) => {
    // Get related variant Ids
    const variantsIds = item.relationships.product_variants.data.map(
      (variant) => variant.id
    );
    // Filter all products + variants by the related variant Ids
    const variants = included.filter(
      (item) => variantsIds.includes(item.id) && item.type === "product_variant"
    ) as ProductVariant[];

    return {
      ...item,
      variants,
    };
  });

  // GET DEFAULT PRODUCT ID
  const defaultId = category?.attributes.default_product_id;

  // pass products to props
  return {
    props: {
      products: productsWithVariants,
      defaultProductId: defaultId,
      category: category?.attributes.name,
    },
  };
};

export default Category;
