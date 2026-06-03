export function convertToBase(
  quantity: number,
  unit: string
): number {
  switch (unit) {
    case "kg":
      return quantity * 1000;

    case "g":
      return quantity;

    case "L":
      return quantity * 1000;

    case "mL":
      return quantity;

    case "item":
      return quantity;

    default:
      return quantity;
  }
}
export function calculatePrice(
  quantity: number,
  unit: string,
  basePrice: number
) {
  const baseQuantity = convertToBase(
    quantity,
    unit
  );

  return baseQuantity * basePrice;
}