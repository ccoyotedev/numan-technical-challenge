import { ExtendedProduct } from "types";

export const convertNumberToPrice = (number: number): string => {
  const price = number / 100;
  return `£${price.toFixed(2)}`;
};

export const getDefaultVariantFromProductId = (
  products: ExtendedProduct[],
  id: string
) => {
  const defaultProduct = products.find((product) => product.id === id);
  const defaultVariantId =
    defaultProduct?.relationships.default_product_variant.data.id;
  if (defaultVariantId) {
    return getVariantFromId([defaultProduct], defaultVariantId);
  }
  return undefined;
};

export const getVariantFromId = (products: ExtendedProduct[], id: string) => {
  const selectedProduct = products.find((product) =>
    product.relationships.product_variants.data.some(
      (variant) => variant.id === id
    )
  );
  const selectedVariant = selectedProduct?.variants.find(
    (variant) => variant.id === id
  );
  return selectedVariant;
};
