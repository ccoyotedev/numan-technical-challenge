import { ProductAccordian } from "components/ui";
import { ExtendedProduct } from "types";
import styles from "./styles.module.scss";

interface Props {
  products: ExtendedProduct[];
  value?: string;
  onSelect: (id: string) => void;
}

export const ProductSelector = ({ products, onSelect, value }: Props) => {
  const orderProducts = (prods: ExtendedProduct[]) => {
    return prods.sort((a, b) =>
      a.attributes.name.localeCompare(b.attributes.name)
    );
  };

  return (
    <section className="container">
      <div className={styles["form-container"]}>
        <h6>Please choose your preferred monthly treatment.</h6>
        {orderProducts(products).map((product) => (
          <div key={product.id} className={styles["accordian-container"]}>
            <ProductAccordian
              product={product}
              onSelect={onSelect}
              value={value}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
