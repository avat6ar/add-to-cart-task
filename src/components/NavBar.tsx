import { Component, ReactNode } from "react";
import { ProductCart } from "../types";
import { Carts } from "./Carts";
import adidas from "../images/adidas.svg"
import cart from "../images/cart.svg";

interface NavBarProps {
  products: ProductCart[];
  handelRemoveProduct: (index: number) => void;
}

interface NavBarState {
  totalQuantity: number;
  isOpenMenu: boolean;
}

export default class NavBar extends Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      totalQuantity: 0,
      isOpenMenu: false,
    };
  }

  componentDidMount() {
    this.calculateTotalQuantity();
  }

  componentDidUpdate(prevProps: NavBarProps) {
    if (prevProps.products !== this.props.products) {
      this.calculateTotalQuantity();
    }
  }

  calculateTotalQuantity = () => {
    const { products } = this.props;
    let totalQuantity = 0;
    for (const product of products) {
      totalQuantity += product.quantity;
    }
    this.setState({ totalQuantity });
  };

  handleToggleMenu = () => {
    this.setState((prevState: Readonly<NavBarState>) => ({
      ...prevState,
      isOpenMenu: !prevState.isOpenMenu,
    }));
  };

  render(): ReactNode {
    return (
      <header className="py-20 border-b">
        <div className="container">
          <nav className="flex items-center justify-between">
            <img src={adidas} alt="logo" width={85} height={56} />
            <div
              className="flex gap-10 relative cursor-pointer"
              onClick={this.handleToggleMenu}
            >
              <img src={cart} alt="cart" width={29} height={24} />
              <span className="cart">Cart</span>
              <div className="badge">{this.state.totalQuantity}</div>
            </div>
          </nav>
        </div>
        <Carts
          handelRemoveProduct={this.props.handelRemoveProduct}
          handelToggleMenu={this.handleToggleMenu}
          isOpenMenu={this.state.isOpenMenu}
          products={this.props.products}
        />
      </header>
    );
  }
}
