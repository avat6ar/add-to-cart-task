import { Component, ReactNode } from "react";
import { ProductCart } from "../types";
import close from "../images/close.svg";

interface props {
  handelRemoveProduct: (index: number) => void;
  handelToggleMenu: () => void;
  isOpenMenu: boolean;
  products: ProductCart[];
}

export class Carts extends Component<props, {}> {
  constructor(props: props) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      <>
        <div className={`menu ${this.props.isOpenMenu ? "active" : ""}`}>
          <span className="close-btn" onClick={this.props.handelToggleMenu}>
            <img
              src={close}
              alt="close-btn"
              width={16.48}
              height={16.48}
              loading="lazy"
            />
          </span>
          <div className="py-20 text-center">
            <h4 className="h4">My Cart</h4>
          </div>
          {this.props.products.length <= 0 ? (
            <div className="cart-summary">Cart Empty</div>
          ) : (
            <>
              <div className="cart-summary">Cart Summary</div>
              <ul>
                {this.props.products.map((product, index) => (
                  <li className="card-cart" key={index}>
                    <img
                      src={product.cover}
                      alt="image"
                      width={104}
                      height={104}
                      loading="lazy"
                      className="image"
                    />
                    <div className="content">
                      <h5 className="h5">{product.name}</h5>
                      <span className="quantity">
                        Quantity: {product.quantity}
                      </span>
                      <div className="flex justify-between">
                        <span className="price">
                          {product.price * product.quantity} <span>LE</span>
                        </span>
                        <span
                          className="btn"
                          onClick={() => this.props.handelRemoveProduct(index)}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-10">
                <span className="total-price">
                  Total:{" "}
                  {this.props.products.reduce((total, product) => {
                    return total + product.price * product.quantity;
                  }, 0)}{" "}
                  LE
                </span>
              </div>
            </>
          )}
        </div>
        <div
          className={`overlay ${this.props.isOpenMenu ? "active" : ""}`}
          onClick={this.props.handelToggleMenu}
        ></div>
      </>
    );
  }
}
