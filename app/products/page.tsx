// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import products from '@/data/products.json';
import Image from 'next/image';

export const dynamicParams = true; // allow dynamic params during build

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => String(p.id) === params.id);

  if (!product) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-center">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="mx-auto mb-6 rounded"
        unoptimized
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{product.price}</p>
      <a
        href={`https://wa.me/447123456789?text=I want to order: ${encodeURIComponent(product.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Place Order
      </a>
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}
