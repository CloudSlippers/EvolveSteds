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
  category: string;
};

const products = productsData as Product[];

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#4A96BE] dark:text-[#4A96BE]">
        {product.title}
      </h1>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-400 capitalize">
        Category: {product.category.replace(/-/g, ' ')}
      </p>
      <Image
        src={product.image}
        alt={`Image of ${product.title}`}
        width={400}
        height={400}
        className="rounded mb-6 object-contain"
        unoptimized
      />
      <div className="mb-6 text-lg font-semibold flex items-center gap-3">
        <span>{product.price}</span>
        {product.isOnSale && product.originalPrice && (
          <span className="line-through text-gray-500 dark:text-gray-400 text-base font-normal">
            {product.originalPrice}
          </span>
        )}
      </div>
      <WhatsAppButton
        productTitle={product.title}
        productSlug={product.id.toString()}
      />
    </main>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}
