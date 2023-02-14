import { AppProps } from 'next/app'
import '@kotala/css'
import '../styles/style.css'
import 'highlight.js/styles/github-dark-dimmed.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
