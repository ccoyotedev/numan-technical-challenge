import { CategoryCard } from "components/ui";
import { Category } from "types";
import styles from "./styles.module.scss";

interface Props {
  categories: Category[];
  onSelect: (slug: string) => void;
  selected?: string;
}

export const CategorySelector = ({ categories, onSelect, selected }: Props) => {
  const orderCategories = (cats: Category[]) => {
    return cats.sort((a, b) =>
      a.attributes.name.localeCompare(b.attributes.name)
    );
  };

  return (
    <section className="container">
      <div className={styles["section-header"]}>
        <h2>What can we help with today?</h2>
        <p>Choose a category</p>
      </div>
      <div className={`row ${styles["category-grid"]}`}>
        {orderCategories(categories).map((category) => (
          <button
            key={category.id}
            className="col-12 col-sm-6 col-lg-4"
            onClick={() => onSelect(category.attributes.slug)}
          >
            <CategoryCard
              name={category.attributes.name}
              active={selected === category.attributes.slug}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
