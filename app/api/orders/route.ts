import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { convertToBase, calculatePrice } from "@/lib/conversion";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId, items } = body;

    let totalAmount = 0;

    const order = await prisma.order.create({
      data: {
        userId,
        status: "PENDING",
        totalAmount: 0,
      },
    });

    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) continue;

      const quantityBase = convertToBase(
        Number(item.quantity),
        item.unit
      );

      const calculatedPrice = calculatePrice(
        Number(item.quantity),
        item.unit,
        Number(product.basePrice)
      );

      totalAmount += calculatedPrice;

      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          quantityEntered: item.quantity,
          unitEntered: item.unit,
          quantityBase,
          calculatedPrice,
        },
      });
    }

    const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: { totalAmount },
    });

    return NextResponse.json(updatedOrder);
  } catch (err) {
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}