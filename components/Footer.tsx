import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-0 dark:bg-zinc-900 text-gray-700 dark:text-gray-400 text-sm py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} EvolveSteds. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          <Link href="/about" className="hover:text-black dark:hover:text-white transition">
            About
          </Link>
          <Link href="/products" className="hover:text-black dark:hover:text-white transition">
            Products
          </Link>
          <Link href="/faq" className="hover:text-black dark:hover:text-white transition">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}