// app/products/[id]/page.tsx
import products from '@/data/products.json';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="rounded mb-6 object-contain"
        unoptimized
      />
      <p className="mb-6 text-lg font-semibold">{product.price}</p>

      <WhatsAppButton productTitle={product.title} />
    </main>
  );
}
