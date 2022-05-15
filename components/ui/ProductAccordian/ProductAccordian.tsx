import styles from "./styles.module.scss";
import { useState } from "react";
import { ExtendedProduct, ProductVariant } from "types";
import { convertNumberToPrice } from "utils/functions";
import { RadioInput } from "../RadioInput/RadioInput";
import { ExpandIcon } from "components/svgs";

interface Props {
  product: ExtendedProduct;
  value?: string;
  onSelect: (id: string) => void;
}

export const ProductAccordian = ({ product, value, onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  const orderVariants = (variants: ProductVariant[]) => {
    return variants.sort((a, b) => a.attributes.price - b.attributes.price);
  };

  const getCheapestPrice = (variants: ProductVariant[]) => {
    const prices = variants.map((item) => item.attributes.price);
    return Math.min(...prices);
  };

  return (
    <div
      aria-expanded={open}
      className={`${styles["accordian"]} ${open ? styles["open"] : ""}`}
    >
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className={styles["accordian-toggle"]}
      >
        {/* <figure className="product-img"></figure> */}
        <span className={styles["expand-icon"]}>
          <ExpandIcon size="22" open={open} />
        </span>
        <div className={styles["product-details"]}>
          <p>{product.attributes.name}</p>
          <small>
            from {convertNumberToPrice(getCheapestPrice(product.variants))} a
            month
          </small>
        </div>
      </button>
      <div className={styles["dropdown"]}>
        <p className="p-sm">{product.attributes.summary}</p>
        {orderVariants(product.variants)
          .filter((variant) => variant.attributes.active)
          .map((variant) => (
            <div key={variant.id} className={styles["radio-container"]}>
              <RadioInput
                checked={value === variant.id}
                onClick={() => onSelect(variant.id)}
              >
                <div className={styles["label"]}>
                  <div>
                    <p>{variant.attributes.variant}</p>
                  </div>
                  <p>{convertNumberToPrice(variant.attributes.price)}</p>
                </div>
              </RadioInput>
            </div>
          ))}
      </div>
    </div>
  );
};
