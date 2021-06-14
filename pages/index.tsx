import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'


console.log(`


      ██████  ██████  ███████ ███    ██ ██████   █████  ███    ██ 
      ██   ██ ██   ██ ██      ████   ██ ██   ██ ██   ██ ████   ██ 
      ██████  ██████  █████   ██ ██  ██ ██   ██ ███████ ██ ██  ██ 
      ██   ██ ██   ██ ██      ██  ██ ██ ██   ██ ██   ██ ██  ██ ██ 
      ██████  ██   ██ ███████ ██   ████ ██████  ██   ██ ██   ████ 
                                                                  
                                                                  
      Come work with me

      JOBS AT FIG: https://fig.io/jobs
      EMAIL ME:    brendan@fig.io

      

`)


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
})


{
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

      <h3>👋 Hey</h3>
<p>I'm Brendan and I'm the co-founder & CEO of <a href="https://fig.io?ref=brendan_personal_website">Fig</a></p>

<ul>
  <li>📍 { " " } I am from Australia (Syd / Cbr) 🦘 and now live in SF 🌉</li>
  <li>👍 I went to college at Harvard and worked at Brex</li>
  <li>📫 You can find me on <a href="https://twitter.com/brendanfalk">Twitter</a>, <a href="https://www.linkedin.com/in/brendanfalk/">LinkedIn</a> and <a href="mailto:brendan+pw@fig.io">email</a></li>
</ul>


      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>



           {allPostsData.length ?
          allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))
        : 
        <p>Coming soon</p>
        }
        </ul>
      </section>
    </Layout>
  )
}


