import styles from "./styles.module.scss";
import { useState } from "react";
import { Product } from "types";

interface Props {
  product: Product;
}

export const ProductAccordian = ({ product }: Props) => {
  const [open, setOpen] = useState();

  return (
    <div aria-expanded={open}>
      <button>
        <figure className="product-img"></figure>
        <div className="product-details">
          <p className="name">{product.attributes.name}</p>
        </div>
      </button>
    </div>
  );
};
