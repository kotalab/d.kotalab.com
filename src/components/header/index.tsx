import styles from './header.module.css'
import Link from 'next/link'
import { BLOG_TITLE } from '../../lib/constants'

const Header = () => {
  return (
    <h2 className={styles.header}>
      <Link href="/">
        {BLOG_TITLE}
      </Link>
    </h2>
  )
}

export default Header
