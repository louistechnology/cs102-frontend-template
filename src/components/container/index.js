import styles from "./container.module.css";

const Container = (props) => {
  const { title, children } = props;

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>{title}</h4>
      {children}
    </div>
  );
};

export default Container;
