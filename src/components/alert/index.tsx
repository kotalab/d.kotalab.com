import styles from './alert.module.css'
import Container from '../container'
import { GITHUB_URL } from '../../lib/constants'

const Alert = () => {
  return (
    <div
      className={styles.wrapper}
    >
      <Container>
        <div className={styles.message}>
          The source code for this blog is{' '}
          <a
            href={GITHUB_URL}
          >
            available on GitHub
          </a>
          .
        </div>
      </Container>
    </div>
  )
}
export default Alert
