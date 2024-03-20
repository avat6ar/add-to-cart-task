import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import { ProductCart } from "./types";
import Footer from "./components/Footer";

const SingleProduct = React.lazy(() => import("./pages/SingleProduct"));

interface State {
  products: ProductCart[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleProductInCart = (product: ProductCart) => {
    const { products } = this.state;
    const existingProductIndex = products.findIndex(
      (p) =>
        p.id === product.id &&
        p.size === product.size &&
        p.color === product.color
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity += product.quantity;
      this.setState({ products: updatedProducts });
    } else {
      this.setState((prevState) => ({
        ...prevState,
        products: prevState.products.concat([product]),
      }));
    }
  };

  handelRemoveProduct = (index: number) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((_, i) => i !== index),
    }));
  };

  render(): React.ReactNode {
    return (
      <>
        <NavBar
          products={this.state.products}
          handelRemoveProduct={this.handelRemoveProduct}
        />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <SingleProduct handleProductInCart={this.handleProductInCart} />
          </Suspense>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
