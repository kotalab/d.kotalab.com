import styles from './footer.module.css'
import Container from '../container'
import Navi from '../navi'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Navi></Navi>
      </Container>
    </footer>
  )
}

export default Footer
