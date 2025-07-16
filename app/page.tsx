import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { FaBoxOpen, FaPills, FaSyringe, FaVial } from 'react-icons/fa';

type Product = {
  id: number;
  title: string;
  image: string;
  price: string;
};

export default function Home() {
  const features = [
    "✅ 100% Authentic",
    "🛡️ ISO Certified",
    "🏥 Health Care",
    "🧪 Quality Tested",
    "🧼 Hygienic Products",
    "🏆 Best Research",
    "🎁 Best Packaging",
    "📈 Proven Results",
  ];

  const filePath = path.join(process.cwd(), 'data/products.json');
  const products: Product[] = JSON.parse(fs.readFileSync(filePath, 'utf8')).slice(0, 4);

  const categories = [
    {
      id: 'all',
      title: 'All Products',
      icon: <FaBoxOpen className="mx-auto mb-4 text-6xl text-[#4A96BE]" />,
      href: '/products',
    },
    {
      id: 'oral',
      title: 'Oral / Tablets',
      icon: <FaPills className="mx-auto mb-4 text-6xl text-[#4A96BE]" />,
      href: '/products/category/oral-tablets',
    },
    {
      id: 'injectables',
      title: 'Injectables / Ampoules',
      icon: <FaSyringe className="mx-auto mb-4 text-6xl text-[#4A96BE]" />,
      href: '/products/category/injectables-ampoules',
    },
    {
      id: 'vials',
      title: 'Vials',
      icon: <FaVial className="mx-auto mb-4 text-6xl text-[#4A96BE]" />,
      href: '/products/category/vials',
    },
  ];

  return (
    <main>
      {/* Hero section with background image */}
      <section
        className="relative text-center text-white py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/weights.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#4A96BE]">
            EvolveSteds
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Research-backed performance enhancers designed for elite transformation.
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#4A96BE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3a7bb9] transition shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Features grid */}
      <section className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {features.map((feature, idx) => {
          const [icon, ...rest] = feature.split(' ');
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-4 min-h-[100px] rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800
              hover:border-[#E53935] transition"
            >
              <span className="text-2xl mb-2">{icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 break-words">
                {rest.join(' ')}
              </span>
            </div>
          );
        })}
      </section>

      {/* Product Range Section */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A96BE]">Product Range</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-gray-300 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-800 text-center"
            >
              {category.icon}
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <Link
                href={category.href}
                className="inline-block bg-[#4A96BE] dark:bg-[#4A96BE] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3a7bb9] transition"
              >
                View Products
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
