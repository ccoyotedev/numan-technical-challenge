import styles from "./styles.module.scss";

interface Props {
  name: string;
  active: boolean;
}

export const CategoryCard = ({ name, active }: Props) => {
  return (
    <div
      className={`${styles["card-container"]} ${
        active ? styles["active"] : ""
      }`}
    >
      <h1>{name}</h1>
    </div>
  );
};
