import Footer from "@components/footer";
import Meta from "@components/Meta";

import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <div className={styles.wrapper}>
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
