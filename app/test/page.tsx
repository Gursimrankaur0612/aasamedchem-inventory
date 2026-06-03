export default async function TestPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {products.map((p: any) => (
        <div key={p.id} className="border p-4 mb-2">
          <h2>{p.name}</h2>
          <p>SKU: {p.sku}</p>
          <p>₹{p.basePrice}</p>
        </div>
      ))}
    </div>
  );
}