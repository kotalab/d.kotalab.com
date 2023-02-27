import Link from "next/link";

import CoverImage from "@components/cover-image";
import FormatedDate from "@components/formated-date";

import styles from "./post-preview.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => (
  <div>
    <div className={styles.coverImage}>
      <CoverImage slug={slug} title={title} src={coverImage} priority={false} />
    </div>
    <h3 className={styles.heading}>
      <Link as={`/${slug}`} href="/[slug]" className="hover:underline">
        {title}
      </Link>
    </h3>
    <div className={styles.date}>
      <FormatedDate dateString={date} />
    </div>
    <p className={styles.excerpt}>{excerpt}</p>
  </div>
);

export default PostPreview;
