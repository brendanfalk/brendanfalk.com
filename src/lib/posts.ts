import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  published: boolean
}

export interface PostsByYear {
  year: string
  posts: Post[]
}

export async function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.md'))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug: realSlug,
    title: data.title || realSlug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt,
    content: contentHtml,
    published: data.published || false,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  )
  
  // Filter out null posts and unpublished posts for listings
  return posts
    .filter((post): post is Post => post !== null && post.published === true)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export async function getPostsByYear(): Promise<PostsByYear[]> {
  const posts = await getAllPosts()
  const postsByYear: { [key: string]: Post[] } = {}

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })

  return Object.entries(postsByYear)
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
} 