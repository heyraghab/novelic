import '../styles/global.css';
import localFont from 'next/font/local'
import { GoogleAnalytics } from "nextjs-google-analytics";

const myFont = localFont({ src: '../public/font2.otf' })

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.className}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </div>
  )
    ;
}
