import Container from './container'
import { GITHUB_URL } from '../lib/constants'

const Alert = () => {
  return (
    <div
      className='border-t bg-neutral-50 border-neutral-200'
    >
      <Container>
        <div className="py-2 text-center text-sm">
          The source code for this blog is{' '}
          <a
            href={GITHUB_URL}
            className="underline hover:text-blue-600 duration-200 transition-colors"
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
