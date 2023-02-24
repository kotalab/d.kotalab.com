import styles from './post-title.module.css'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className={styles.heading}>
      {children}
    </h1>
  )
}

export default PostTitle
