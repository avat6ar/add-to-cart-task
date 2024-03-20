import type { Product } from "../types";
import black from "../images/black.png"
import red from "../images/red.png"
import cover from "../images/dd8.png"


export const products: Product[] = [
  {
    id: 1,
    name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    cover,
    sizes: ["small", "medium", "large", "x large", "xx large"],
    colors: [
      { color: "black", image: black },
      { color: "red", image: red},
    ],
    price: 9999,
    rate: 22,
  },
  {
    id: 2,
    name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    cover,
    sizes: ["small", "medium", "large", "x large", "xx large"],
    colors: [
      { color: "black", image: black},
      { color: "red", image: red},
    ],
    price: 9999,
    rate: 22,
  },
];

export function getProduct(id: number) {
  const product: Product | undefined = products.find(
    (products) => products.id === id
  );

  return product;
}
