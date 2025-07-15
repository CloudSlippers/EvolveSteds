import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products.json';

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id} className="block">
            <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 rounded hover:shadow-lg transition cursor-pointer">
              <Image
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="w-full h-40 object-cover mb-4 rounded"
                unoptimized
              />
              <h3 className="font-semibold text-black dark:text-white text-sm">{p.title}</h3>
              <p className="text-zinc-555 text-sm">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
