import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router'


const name = 'Brendan Falk'
export const siteTitle = 'Brendan Falk'


export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {

  // Get the path (e.g. "posts/[id]" and the query object which has the url params and query params)
  const {pathname, query} = useRouter();

  return (
    <div className={styles.container}>
      <Head>

{/* Replace favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>" />
        <meta
          name="description"
          content="Brendan Falk's personal website. Brendan is the co-founder and CEO of Fig"
        />
        <meta
          property="og:image"
          content="/images/Brendan Falk Open Graph Image.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@BrendanFalk" />
        <meta name="twitter:site" content="@BrendanFalk" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              // src="/images/Brendan Falk Tokyo Square.jpg"
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        )}

        {pathname == "/posts/[id]" && (
          <>
          <br />
          <hr />
          <p style={{textAlign: "right"}}>
          <small><a href={`https://github.com/falky97/personal-website/blob/master/posts/${query.id}.md`}> Edit this page on GitHub</a></small>
          </p>
          </>
        )}


        
    </div>
  )
}
