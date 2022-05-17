import styles from "./styles.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  message?: string;
  error?: string;
}

export const Input = ({ label, message, error, ...props }: Props) => {
  return (
    <div className={styles["input-wrapper"]}>
      <div
        className={`${styles["input-container"]} ${
          props.value ? styles["has-value"] : ""
        } ${error ? styles["error"] : ""}`}
      >
        <legend>{label}</legend>
        <label>{label}</label>
        <input {...props} />
      </div>
      {error && <small className={styles["error-message"]}>{error}</small>}
      {message && !error && (
        <small className={styles["message"]}>{message}</small>
      )}
    </div>
  );
};
