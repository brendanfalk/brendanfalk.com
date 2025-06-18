import Link from "next/link";
import { getPostsByYear } from "@/lib/posts";

export default async function HomePage() {
  const postsByYear = await getPostsByYear();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="space-y-12">
        {postsByYear.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No posts yet.</p>
          </div>
        ) : (
          postsByYear.map(({ year, posts }) => (
            <section key={year}>
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                {year}
              </h2>
              <div className="space-y-6">
                {posts.map((post) => (
                  <article key={post.slug}>
                    <Link href={`/posts/${post.slug}`} className="group block">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {post.title}
                        </h3>
                        <time
                          dateTime={post.date}
                          className="text-sm text-gray-500 dark:text-gray-400 shrink-0"
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
