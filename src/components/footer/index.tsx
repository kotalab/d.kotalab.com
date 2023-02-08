import styles from './footer.module.css'
import Alert from '../alert'
import Container from '../container'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.container}>
          ここにプロフィール書こうかな
        </div>
      </Container>
      <Alert />
    </footer>
  )
}

export default Footer
