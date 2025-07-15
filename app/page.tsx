export default function Home() {
  const features = [
    "✅ 100% Authentic",
    "🛡️ ISO Certified",
    "🏥 Health Care",
    "🧪 Quality Tested",
    "🧼 Hygienic Products",
    "🏆 Best Research",
    "🎁 Best Packaging",
    "📈 Proven Results",
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
        EvolveSteds
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed text-lg">
        Research-backed performance enhancers designed for elite transformation.
      </p>
      <a
        href="/products"
        className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-semibold hover:opacity-80 transition"
      >
        Browse Products
      </a>

      {/* Features grid */}
      <section className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {features.map((feature, idx) => {
          const [icon, ...rest] = feature.split(' ');
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-4 min-h-[100px] rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800"
            >
              <span className="text-2xl mb-2">{icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 break-words">
                {rest.join(' ')}
              </span>
            </div>
          );
        })}
      </section>


      {/* Product teaser grid placeholder */}
      <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
          >
            <div className="bg-gray-200 h-32 mb-4 rounded"></div>
            <h3 className="font-semibold mb-1">Product {id}</h3>
            <p className="text-sm text-gray-500">£XX.XX</p>
          </div>
        ))}
      </section>
    </main>
  );
}
