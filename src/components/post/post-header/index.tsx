import styles from './post-header.module.css'
import FormatedDate from '../../formated-date'
import CoverImage from '../../cover-image'
import PostTitle from '../../post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={styles.coverImage}>
        <CoverImage title={title} src={coverImage} priority={true} />
      </div>
      <div className={styles.description}>
        <div className={styles.date}>
          <FormatedDate dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
