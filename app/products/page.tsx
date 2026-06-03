async function getProducts() {
  const res = await fetch(
    "http://localhost:3000/api/products",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Product Catalog
      </h1>

      <div className="mt-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border p-4 mb-4 rounded"
          >
            <h2 className="font-bold">
              {product.name}
            </h2>

            <p>{product.description}</p>

            <p>
              ₹{product.basePrice} per{" "}
              {product.baseUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}