import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Brendan Falk",
  openGraph: {
    title: "About | Brendan Falk",
    description: "Learn more about Brendan Falk",
    url: "https://brendanfalk.com/about",
  },
  twitter: {
    title: "About | Brendan Falk",
    description: "Learn more about Brendan Falk",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-8">
        About
      </h1>

      <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-headings:mb-2 prose-h1:mb-3 prose-h2:mb-2 prose-h3:mb-2 prose-h4:mb-2 prose-h5:mb-2 prose-h6:mb-2 prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1 prose-a:text-black dark:prose-a:text-white">
        <p>
          Hi, I'm Brendan Falk. Welcome to my personal blog where I share my
          thoughts and ideas.
        </p>

        <p>
          You can find me on{" "}
          <a
            href="https://x.com/brendanfalk"
            target="_blank"
            rel="noopener noreferrer"
          >
            𝕏
          </a>{" "}
          and{" "}
          <a
            href="https://linkedin.com/in/brendanfalk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
