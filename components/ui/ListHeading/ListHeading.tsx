import styles from "./styles.module.scss";

interface Props {
  title: string;
  number: number;
}

export const ListHeading = ({ title, number }: Props) => {
  return (
    <div className={styles["heading-container"]}>
      <div className={styles["indicator"]}>
        <span>{number}</span>
      </div>
      <p>{title}</p>
    </div>
  );
};
