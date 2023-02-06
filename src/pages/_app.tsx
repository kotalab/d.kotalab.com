import { AppProps } from 'next/app'
import '@kotala/css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
