import styles from "./container.module.css";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
