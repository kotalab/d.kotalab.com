import styles from "./post-body.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <div className={styles.wrapper}>
    <div
      className={styles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody;
