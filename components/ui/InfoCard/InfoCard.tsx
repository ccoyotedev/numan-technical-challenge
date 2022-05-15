import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

export const InfoCard = ({ children }: Props) => {
  return <div className={styles["info-card"]}>{children}</div>;
};
