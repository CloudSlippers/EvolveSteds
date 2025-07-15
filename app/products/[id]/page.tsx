import products from '@/data/products.json';
import Link from 'next/link';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id.toString() }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return <div>Product not found.</div>;

  const whatsappLink = `https://wa.me/447123456789?text=Hi, I'm interested in ordering: ${encodeURIComponent(product.title)} - ${encodeURIComponent('https://evolvesteds.com/products/' + product.id)}`;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <img src={product.image} alt={product.title} className="w-full rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-lg text-zinc-400 mb-4">{product.price}</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:opacity-80 transition"
      >
        📦 Place Order via WhatsApp
      </a>
    </main>
  );
}
