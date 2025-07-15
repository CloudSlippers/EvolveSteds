import products from '@/data/products.json';

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="border border-zinc-700 bg-zinc-800 p-4 rounded hover:shadow-lg transition">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="font-semibold text-white text-sm">{p.title}</h3>
            <p className="text-zinc-400 text-sm">{p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
