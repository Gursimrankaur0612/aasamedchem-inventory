"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("g");

  async function placeOrder() {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "demo-user",
        items: [
          {
            productId,
            quantity,
            unit,
          },
        ],
      }),
    });

    alert("Order Placed!");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Place Order
      </h1>

      <input
        className="border p-2 mt-4"
        placeholder="Product ID"
        onChange={(e) => setProductId(e.target.value)}
      />

      <input
        className="border p-2 mt-2"
        type="number"
        value={quantity}
        onChange={(e) =>
          setQuantity(Number(e.target.value))
        }
      />

      <select
        className="border p-2 mt-2"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="g">g</option>
        <option value="kg">kg</option>
        <option value="mL">mL</option>
        <option value="L">L</option>
        <option value="item">item</option>
      </select>

      <button
        className="bg-green-600 text-white p-2 mt-4"
        onClick={placeOrder}
      >
        Place Order
      </button>
    </div>
  );
}