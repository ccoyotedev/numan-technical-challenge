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

export const getProductFromVariantId = (
  products: ExtendedProduct[],
  id: string
) => {
  const product = products.find((item) =>
    item.variants.some((variant) => variant.id === id)
  );
  return product;
};

export const convertFrequencyToReadableString = (frequency: string) => {
  const dayOrMonth = frequency.includes("d") ? "day" : "month";
  const split = frequency.split(dayOrMonth === "day" ? "d" : "m");
  const number = split[0];

  return `${split[0]} ${dayOrMonth}${Number(number) > 1 ? "s" : ""}`;
};
