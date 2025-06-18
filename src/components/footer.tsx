export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/brendanfalk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com/in/brendanfalk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div>© {new Date().getFullYear()} Brendan Falk</div>
        </div>
      </div>
    </footer>
  );
}
