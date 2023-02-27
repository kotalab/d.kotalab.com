import Link from "next/link";
import { useRouter } from "next/router";

import { BLOG_TITLE, BLOG_DESCRIPTION } from "@lib/constants";

import styles from "./intro.module.css";

const Intro = () => {
  const rootPath = "/";
  const router = useRouter();
  const isRootPath = router.pathname === rootPath;
  const heading = isRootPath ? (
    <h1>{BLOG_TITLE}</h1>
  ) : (
    <h1>
      <Link href={rootPath} className="hover:underline">
        {BLOG_TITLE}
      </Link>
    </h1>
  );

  return (
    <section className={styles.wrapper}>
      {heading}
      <h4>{BLOG_DESCRIPTION}</h4>
    </section>
  );
};

export default Intro;
