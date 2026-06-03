import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        AasaMedChem Inventory System
      </h1>

      <div className="mt-6 flex flex-col gap-3">
        <Link href="/admin/products">
          👉 Admin Products
        </Link>

        <Link href="/products">
          👉 Product Catalog
        </Link>

        <Link href="/orders">
          👉 Place Order
        </Link>

        <Link href="/login">
          👉 Login
        </Link>
      </div>
    </div>
  );
}