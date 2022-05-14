import styles from "./styles.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({ ...props }: Props) => {
  return (
    <button {...props} className={styles["button"]}>
      {props.children}
    </button>
  );
};
