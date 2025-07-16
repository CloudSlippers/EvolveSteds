import productsData from '@/data/products.json';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

type Product = {
  id: number;
  title: string;
  image: string;
  price: string;
  originalPrice: string | null;
  link: string;
  isOnSale: boolean;
  category: string; // assume always present now
};

const products: Product[] = productsData as Product[];

export function generateStaticParams() {
  return products.map(p => ({
    id: p.id.toString(),
  }));
}

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const { id } = params;

  // Simulate async fetch if needed; otherwise just sync find works too
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="mb-6 text-sm text-gray-500 capitalize">
        Category: {product.category.replace(/-/g, ' ')}
      </p>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="rounded mb-6 object-contain"
        unoptimized
      />
      <p className="mb-6 text-lg font-semibold">{product.price}</p>

      <WhatsAppButton productTitle={product.title} productSlug={product.id.toString()} />
    </main>
  );
}
