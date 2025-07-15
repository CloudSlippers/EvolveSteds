// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import products from '@/data/products.json';

type Props = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return products.map((p) => ({
    id: String(p.id),
  }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => String(p.id) === params.id);

  if (!product) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="mx-auto mb-6 rounded"
        unoptimized
      />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">{product.price}</p>

      <a
        href={`https://wa.me/447000000000?text=I'm%20interested%20in%20${encodeURIComponent(product.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
      >
        Place Order on WhatsApp
      </a>
    </main>
  );
}
