import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

import {getMDXComponent} from 'mdx-bundler/client'
import * as React from 'react'




export default function Post(
  {
  code,
  frontmatter
}: {
    code: string
    frontmatter: {[key: string]: any} | null
}) {


  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{frontmatter.title}</h1>
        <div className={utilStyles.lightText}>

          {/*  The post will error if there is no date front matter */}
        {frontmatter.date ? (<Date dateString={frontmatter.date} />) : "COMING SOON"}
        </div>
        <Component />
      </article>
    </Layout>
  )
}


// export default function Post({
//   postData
// }: {
//   postData: {
//     title: string
//     date: string
//     contentHtml: string
//   }
// }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{postData.title}</title>
//       </Head>
//       <article>
//         <h1 className={utilStyles.headingXl}>{postData.title}</h1>
//         <div className={utilStyles.lightText}>

//           {/*  The post will error if there is no date front matter */}
//         {postData.date ? (<Date dateString={postData.date} />) : "COMING SOON"}
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </article>
//     </Layout>
//   )
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)

  return {
    props: postData
  }
}
