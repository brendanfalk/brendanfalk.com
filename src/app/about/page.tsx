import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Brendan Falk | Founder & CEO @ Zeus",
  openGraph: {
    title: "About | Brendan Falk",
    description: "Brendan Falk | Founder & CEO @ Zeus",
    url: "https://brendanfalk.com/about",
  },
  twitter: {
    title: "About | Brendan Falk",
    description: "Brendan Falk | Founder & CEO @ Zeus",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      {/* <h1 className="text-2xl font-bold text-black dark:text-white mb-8">
        About
      </h1> */}

      <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-headings:mb-2 prose-h1:mb-3 prose-h2:mb-2 prose-h3:mb-2 prose-h4:mb-2 prose-h5:mb-2 prose-h6:mb-2 prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1 prose-a:text-black dark:prose-a:text-white">
        <p>
          Hi, I'm{" "}
          <a
            href="https://linkedin.com/in/brendanfalk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brendan
          </a>
          .
        </p>
        <ul>
          <li>
            I'm currently founder/CEO at{" "}
            <a
              href="https://withzeus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zeus
            </a>
          </li>
          <li>
            I was previously founder/CEO at{" "}
            <a href="https://fig.io" target="_blank" rel="noopener noreferrer">
              Fig
            </a>{" "}
            which was acquired by AWS in 2023.
          </li>
          <li>I studied Econ/CS at Harvard</li>
          <li>I live in San Francisco and am originally from Australia</li>
          <li>
            You can follow me on{" "}
            <a
              href="https://x.com/brendanfalk"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>{" "}
            or connect on{" "}
            <a
              href="https://linkedin.com/in/brendanfalk"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
