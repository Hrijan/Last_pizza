export default async function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-black">Welcome to Crust Experts 🍕</h1>
        <p className="text-gray-600 text-lg">Quick orders, speedy delivery, and fresh ingredients always.</p>
        <p className="text-md text-green-700 font-medium">
          🚚 Free delivery on orders over $25!
        </p>
        <a
          href="/menu"
          className="inline-block mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl text-lg font-semibold transition"
        >
          Explore Menu
        </a>
      </div>
    </div>
  );
}
