import productsData from '@/data/products.json';
import Link from 'next/link';
import Image from 'next/image';
import { inferCategory } from '@/scripts/inferCategory';

type RawProduct = {
  id: number;
  title: string;
  image: string;
  price: string;
  originalPrice: string | null;
  link: string;
  isOnSale: boolean;
  category?: string;
};

type Product = RawProduct & {
  category: string;
};

const rawProducts = productsData as RawProduct[];

const products: Product[] = rawProducts.map(p => ({
  ...p,
  category: p.category ?? inferCategory(p.title),
}));

export function generateStaticParams() {
  const categories = [...new Set(products.map(p => p.category))];
  return categories.map(category => ({ category }));
}

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  // You can await here if you fetch async data, but with JSON it's sync
  const filteredProducts = products.filter(p => p.category === category);

  if (!filteredProducts.length) {
    return <div className="p-6">No products found for category: {category}</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize text-[#4A96BE]">
        {category.replace(/-/g, ' ')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
        {filteredProducts.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id} className="block h-full">
            <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 rounded hover:shadow-lg transition cursor-pointer h-full flex flex-col justify-between">
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
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
