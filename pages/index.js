import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SW0CCJ8EXT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SW0CCJ8EXT');
</script>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.tagline}>
          A place where you can write as beautifully as you think.
        </p>
        <div className={utilStyles.but}>
          <a style={{ background: "#0171C7", color: "whitesmoke", borderRadius: "20px", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "20px", paddingRight: "20px", scale: "0.7" }}>
            DOWNLOAD APK
          </a>
        </div>
      </section>
    </Layout>
  );
}
