// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 text-sm py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} EvolveSteds. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/products" className="hover:text-white transition">Products</a>
          <a href="/faq" className="hover:text-white transition">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}