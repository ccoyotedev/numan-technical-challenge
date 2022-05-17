import { useState, useEffect, useCallback } from "react";
import { ExtendedProduct, Order } from "types";
import { getProductFromVariantId, getVariantFromId } from "utils/functions";

export const useLocalStorage = () => {
  const [order, setOrder] = useState<Order>();
  const [userId, setUserId] = useState<string>();

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

  const generateRandomId = (): string => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    return uniqid;
  };

  const saveUserId = useCallback((): string => {
    const id = generateRandomId();
    localStorage.setItem("userId", id);
    setUserId(id);
    return id;
  }, []);

  // Fetch localstorage on render as need access to window
  useEffect(() => {
    const storageString = localStorage.getItem("order");
    const id = localStorage.getItem("userId");

    if (storageString) setOrder(JSON.parse(storageString));
    if (id) setUserId(id);
  }, []);

  return { order, userId, saveOrder, saveUserId };
};
