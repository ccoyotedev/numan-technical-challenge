import styles from "./styles.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean;
  wide?: boolean;
  icon?: JSX.Element;
}

export const Button = ({ secondary, wide, icon, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${styles["button"]} ${secondary ? styles["secondary"] : ""} ${
        wide ? styles["wide"] : ""
      }`}
    >
      {props.children}
      {icon && <span className={styles["icon"]}>{icon}</span>}
    </button>
  );
};
