import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products.json';

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id}>
            <div className="border border-zinc-700 bg-zinc-800 p-4 rounded hover:shadow-lg transition cursor-pointer">
              <Image
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="w-full h-40 object-cover mb-4 rounded"
                unoptimized // prevent next/image from trying to optimize remote images
              />
              <h3 className="font-semibold text-white text-sm">{p.title}</h3>
              <p className="text-zinc-400 text-sm">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
