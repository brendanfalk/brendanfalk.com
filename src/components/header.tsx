import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-2xl px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg font-semibold text-black dark:text-white"
            >
              Brendan Falk
            </Link>
            <nav className="hidden sm:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <a
                href="https://x.com/brendanfalk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Follow me on 𝕏
              </a>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
