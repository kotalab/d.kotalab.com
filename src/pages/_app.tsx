import { AppProps } from 'next/app'
import '@kotala/css'
import '../styles/style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
