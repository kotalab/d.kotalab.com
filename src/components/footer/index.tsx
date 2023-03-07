import Container from "@components/container";
import Navi from "@components/navi";

import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Navi />
    </Container>
  </footer>
);

export default Footer;
