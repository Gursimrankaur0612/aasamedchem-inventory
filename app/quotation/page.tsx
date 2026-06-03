"use client";

import { useState } from "react";

export default function QuotationPage() {
  const [quantity, setQuantity] =
    useState(1);

  const [unit, setUnit] =
    useState("kg");

  const basePrice = 12.5;

  let converted =
    unit === "kg"
      ? quantity * 1000
      : unit === "L"
      ? quantity * 1000
      : quantity;

  const total =
    converted * basePrice;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Quotation Demo
      </h1>

      <div className="mt-6 flex flex-col gap-4">
        <input
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(
              Number(e.target.value)
            )
          }
          className="border p-2"
        />

        <select
          value={unit}
          onChange={(e) =>
            setUnit(e.target.value)
          }
          className="border p-2"
        >
          <option>kg</option>
          <option>g</option>
          <option>L</option>
          <option>mL</option>
        </select>

        <div>
          Converted Quantity:
          {" "}
          {converted}
        </div>

        <div>
          Total Price:
          ₹{total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}