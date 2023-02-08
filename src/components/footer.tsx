import Alert from './alert'
import Container from './container'


const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center"></div>
      </Container>
      <Alert />
    </footer>
  )
}

export default Footer
