import '../styles/global.css';
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/font2.otf' })

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  )
    ;
}
