import { useState, useEffect } from "react";
import { ExtendedProduct, Order } from "types";
import { getProductFromVariantId, getVariantFromId } from "utils/functions";

export const useLocalStorage = () => {
  const [order, setOrder] = useState<Order>();

  const saveOrder = (
    variantId: string,
    products: ExtendedProduct[]
  ): boolean => {
    // Fetch parent product
    const product = getProductFromVariantId(products, variantId);
    if (!product) return false;
    // Fetch variant details
    const variant = getVariantFromId([product], variantId);
    if (!variant) return false;

    // Store order into local storage
    const storage: Order = {
      id: variantId,
      productName: product.attributes.name,
      variant: variant.attributes.variant,
      price: variant.attributes.price,
      subscriptionFrequency: variant.attributes.subscription_frequency,
    };
    localStorage.setItem("order", JSON.stringify(storage));
    setOrder(storage);
    return true;
  };

  // Fetch localstorage on render as need access to window
  useEffect(() => {
    const storageString = localStorage.getItem("order");
    if (storageString) setOrder(JSON.parse(storageString));
  }, []);

  return { order, saveOrder };
};
