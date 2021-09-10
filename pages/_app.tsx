import NProgress from 'nprogress'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import Page from '../components/Page'
import { Router } from 'next/dist/client/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Page>
         <Component {...pageProps} />
      </Page>
   )
}
export default MyApp
