import styles from "./styles.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  message?: string;
}

export const Input = ({ label, message, ...props }: Props) => {
  return (
    <div className={styles["input-wrapper"]}>
      <div
        className={`${styles["input-container"]} ${
          props.value ? styles["has-value"] : ""
        }`}
      >
        <legend>{label}</legend>
        <label>{label}</label>
        <input {...props} />
      </div>
      {message && <small className={styles["message"]}>{message}</small>}
    </div>
  );
};
