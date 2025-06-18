import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt || `Read "${post.title}" by Brendan Falk`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read "${post.title}" by Brendan Falk`,
      type: "article",
      publishedTime: post.date,
      authors: ["Brendan Falk"],
      url: `https://brendanfalk.com/posts/${post.slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read "${post.title}" by Brendan Falk`,
      creator: "@brendanfalk",
      images: ["/og-image.png"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div
          className="prose prose-neutral dark:prose-invert max-w-none 
                     prose-headings:font-semibold prose-headings:tracking-tight prose-headings:mb-2
                     prose-h1:mb-3 prose-h2:mb-2 prose-h3:mb-2 prose-h4:mb-2 prose-h5:mb-2 prose-h6:mb-2
                     prose-p:leading-7 prose-p:text-gray-700 dark:prose-p:text-gray-300
                     prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1
                     prose-a:font-medium prose-a:underline prose-a:decoration-from-font prose-a:underline-offset-4
                     prose-blockquote:font-normal prose-blockquote:not-italic
                     prose-code:font-semibold prose-code:before:content-none prose-code:after:content-none
                     prose-pre:border prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900 prose-pre:border-gray-200 dark:prose-pre:border-gray-800
                     prose-hr:border-gray-200 dark:prose-hr:border-gray-800
                     prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-gray-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
