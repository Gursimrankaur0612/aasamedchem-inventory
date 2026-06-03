"use client";

import { useState } from "react";

export default function NewProductPage() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    description: "",
    baseUnit: "g",
    basePrice: "",
    inventoryQuantity: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Product Added");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <input
          placeholder="Name"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="SKU"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              sku: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Description"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <select
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              baseUnit: e.target.value,
            })
          }
        >
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="mL">mL</option>
          <option value="L">L</option>
          <option value="item">item</option>
        </select>

        <input
          placeholder="Base Price"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              basePrice: e.target.value,
            })
          }
        />

        <input
          placeholder="Inventory Quantity"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              inventoryQuantity: e.target.value,
            })
          }
        />

        <button
          className="bg-green-600 text-white p-2 rounded"
          type="submit"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}