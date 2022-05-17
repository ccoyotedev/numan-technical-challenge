import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  checked: boolean;
  onClick: () => void;
}

export const RadioInput = ({ children, checked, onClick }: Props) => {
  return (
    <label className={styles["radio-container"]} onClick={onClick}>
      {children}
      <input type="radio" checked={checked} onChange={() => null} />
      <span className={styles["checkmark"]}></span>
    </label>
  );
};
