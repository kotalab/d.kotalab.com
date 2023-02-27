import Link from "next/link";

import CoverImage from "@components/cover-image";
import FormatedDate from "@components/formated-date";

import styles from "./hero-post.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => (
  <section>
    <div className={styles.coverImage}>
      <CoverImage title={title} src={coverImage} slug={slug} priority />
    </div>
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.heading}>
          <Link as={`/${slug}`} href="/[slug]" className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className={styles.date}>
          <FormatedDate dateString={date} />
        </div>
      </div>
      <div>
        <p className={styles.paragraph}>{excerpt}</p>
      </div>
    </div>
  </section>
);

export default HeroPost;
