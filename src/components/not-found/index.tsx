import Link from "next/link";

import Container from "@components/container";
import Intro from "@components/intro";
import Layout from "@components/layout";

import styles from "./notFound.module.css";

const NotFound = () => (
  <Layout>
    <Container>
      <Intro />
      <div className={styles.wrapper}>
        <div>
          <h2>404 - Page Not Found</h2>
          <p>ページが見つかりませんでした</p>
        </div>
        <Link href="/" className="hover:underline">
          {">>"} トップページへ戻る
        </Link>
      </div>
    </Container>
  </Layout>
);

export default NotFound;
