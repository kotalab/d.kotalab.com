import styles from './hero-post.module.css'
import FormatedDate from '../formated-date'
import CoverImage from '../cover-image'
import Link from 'next/link'
import type Author from '../../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className={styles.coverImage}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className={styles.wrapper}>
        <div>
          <h3 className={styles.heading}>
            <Link
              as={`/${slug}`}
              href="/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className={styles.date}>
            <FormatedDate dateString={date} />
          </div>
        </div>
        <div>
          {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
          <p className={styles.paragraph}>{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
