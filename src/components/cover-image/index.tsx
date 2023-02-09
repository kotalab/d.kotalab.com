import styles from './cover-image.module.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const fallbackSrc = src === undefined ? '/assets/no_image.png' : src
  const image = (
    <Image
      src={fallbackSrc}
      alt={`Cover Image for ${title}`}
      className={styles.image}
      width={1200}
      height={675}
    />
  )

  return (
    <div className={styles.wrapper}>
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
