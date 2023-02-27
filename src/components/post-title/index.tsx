import { ReactNode } from "react";

import styles from "./post-title.module.css";

type Props = {
  children: ReactNode;
};

const PostTitle = ({ children }: Props) => (
  <h1 className={styles.heading}>{children}</h1>
);

export default PostTitle;
