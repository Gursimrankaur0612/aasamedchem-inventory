import { prisma } from "@/lib/prisma";

export default async function AdminOrders() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        All Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="border p-4 mt-4"
        >
          <p>Order ID: {order.id}</p>
          <p>User: {order.userId}</p>
          <p>Total: ₹{order.totalAmount}</p>
          <p>Status: {order.status}</p>

          <div className="mt-2">
            {order.items.map((item) => (
              <div key={item.id}>
                Product: {item.productId} |
                Qty: {item.quantityEntered}
                {item.unitEntered} | ₹
                {item.calculatedPrice}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}