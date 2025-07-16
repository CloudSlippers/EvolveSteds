import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products.json';

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#4A96BE' }}>
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id} className="block h-full">
            <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between transform hover:scale-[1.03]">
              <Image
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="w-full h-40 object-cover mb-4 rounded"
                unoptimized
              />
              <h3 className="font-semibold text-black dark:text-white text-sm min-h-[2.5rem]">
                {p.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">{p.price}</p>
              <button
                className="mt-4 px-4 py-2 bg-[#4A96BE] text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
                aria-label={`View details for ${p.title}`}
              >
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
