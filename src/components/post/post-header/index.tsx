import CoverImage from "@components/cover-image";
import FormatedDate from "@components/formated-date";
import PostTitle from "@components/post-title";

import styles from "./post-header.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className={styles.coverImage}>
      <CoverImage title={title} src={coverImage} slug="" priority />
    </div>
    <div className={styles.description}>
      <div className={styles.date}>
        <FormatedDate dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
