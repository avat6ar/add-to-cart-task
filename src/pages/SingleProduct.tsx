import { Component, ReactNode } from "react";
import type { ProductCart } from "../types";
import ProductDetails from "../components/ProductDetails";
import SimilarProducts from "../components/SimilarProducts";

interface props {
  handleProductInCart: (product: ProductCart) => void;
}

export default class SingleProduct extends Component<props,{}> {
  constructor(props: props) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      <>
        <ProductDetails handleProductInCart={this.props.handleProductInCart} />
        <SimilarProducts />
      </>
    );
  }
}
