import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 text-sm py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} EvolveSteds. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          <Link href="/about">
            <a className="hover:text-white transition">About</a>
          </Link>
          <Link href="/products">
            <a className="hover:text-white transition">Products</a>
          </Link>
          <Link href="/faq">
            <a className="hover:text-white transition">FAQ</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
