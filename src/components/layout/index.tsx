import Footer from '../footer'
import Meta from '../Meta'
import styles from './layout.module.css'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
