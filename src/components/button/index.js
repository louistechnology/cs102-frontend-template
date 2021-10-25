import styles from "./button.module.css";

const Button = (props) => {
  const { children, variant = "primary", disabled = false, ...others } = props;

  let className;
  if (disabled) {
    className = `${styles.common_btn} ${styles.disabled}`;
  } else if (variant === "primary") {
    className = `${styles.common_btn} ${styles.primary_btn}`;
  } else if (variant === "secondary") {
    className = `${styles.common_btn} ${styles.secondary_btn}`;
  }

  return (
    <button className={className} disabled={disabled} {...others}>
      {children}
    </button>
  );
};

export default Button;
