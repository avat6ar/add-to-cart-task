interface Color {
  color: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  cover: string;
  sizes: string[];
  colors: Color[];
  price: number;
  rate: number;
}

export interface State {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}
export interface ProductCart {
  id: number;
  name: string;
  cover: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}
