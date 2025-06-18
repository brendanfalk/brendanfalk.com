import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-2xl px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-black dark:text-white"
          >
            Brendan Falk
          </Link>
          <div className="flex items-center justify-end space-x-6">
            <nav className="flex items-center space-x-6">
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
                <span className="hidden sm:inline">Follow me on 𝕏</span>
                <span className="sm:hidden">Follow</span>
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
