import { Component, ChangeEvent, ReactNode } from "react";
import type { ProductCart, State } from "../types";
import { getProduct, products } from "../services/products";
import star from "../images/star.svg";
import star2 from "../images/star2.svg";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";

interface props {
  handleProductInCart: (product: ProductCart) => void;
}

export default class ProductDetails extends Component<props, State> {
  constructor(props: props) {
    super(props);
    const defaultProduct = products[0];
    this.state = {
      product: getProduct(1) || defaultProduct,
      quantity: 1,
      size: (getProduct(1)?.sizes || [])[0],
      color: (getProduct(1)?.colors || [])[0]?.color,
    };
  }

  handleActiveItem = (size: string) => {
    this.setState((prevState: Readonly<State>) => ({
      ...prevState,
      size,
    }));
  };

  handleColorItem = (color: string) => {
    this.setState((prevState: Readonly<State>) => ({
      ...prevState,
      color,
    }));
  };

  handleIncrementItem = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity >= 99 ? 99 : prevState.quantity + 1,
    }));
  };

  handleDecrementItem = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity <= 1 ? 1 : prevState.quantity - 1,
    }));
  };

  handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "1" : e.target.value;
    this.setState({ quantity: Number(value) });
  };

  handleAddToCart = () => {
    const productCart: ProductCart = {
      id: this.state.product.id,
      cover: this.state.product.cover,
      name: this.state.product.name,
      color: this.state.color,
      size: this.state.size,
      price: this.state.product.price,
      quantity: this.state.quantity,
    };

    this.props.handleProductInCart(productCart);
    this.setState((prevState: Readonly<State>) => ({
      ...prevState,
      quantity: 1,
    }));
  };

  render(): ReactNode {
    const { size, quantity, color, product } = this.state;
    return (
      <section className="section">
        <div className="container">
          <div className="flex gap-40">
            <div className="w-40">
              <img
                src={product.cover}
                alt="image"
                width={568}
                height={568}
                className="object-cover"
              />
            </div>
            <div className="w-60">
              <div className="content">
                <h3 className="h3">{product.name}</h3>
                <span className="category">Men</span>
                <div className="flex flex-wrap items-center mt-10">
                  <div className="flex gap-5">
                    <img src={star} alt="star" width={20} height={20} />
                    <img src={star} alt="star" width={20} height={20} />
                    <img src={star} alt="star" width={20} height={20} />
                    <img src={star} alt="star" width={20} height={20} />
                    <img src={star2} alt="star" width={20} height={20} />
                  </div>
                  <span className="rate">4.9 of 5</span>
                  <span className="count-rate">{product.rate} Rates</span>
                </div>
                <div className="flex items-center mt-20">
                  <span className="price">
                    {product.price} <span>LE</span>
                  </span>
                  <del className="price-discount">9,999 LE</del>
                  <span className="offer">30% Off</span>
                </div>
              </div>
              <div className="py-20 border-t">
                <h3 className="h3">Size</h3>
                <ul className="flex items-center gap-10 mt-20">
                  {product?.sizes.map((item, index) => (
                    <li
                      className={`size-item ${item == size ? "active" : ""}`}
                      key={index}
                      onClick={() => this.handleActiveItem(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-20 border-t">
                <h3 className="h3">Color</h3>
                <ul className="flex items-center gap-10 mt-20">
                  {product?.colors.map((item, index) => (
                    <img
                      src={item.image}
                      width={60}
                      height={60}
                      alt="color"
                      key={index}
                      onClick={() => this.handleColorItem(item.color)}
                      className={`color-item ${
                        item.color == color ? "active" : ""
                      }`}
                    />
                  ))}
                </ul>
              </div>
              <div className="py-20 border-t">
                <h3 className="h3">Quantity</h3>
                <div className="count-container">
                  <span
                    className="action-count"
                    onClick={this.handleDecrementItem}
                  >
                    <img src={minus} alt="btn" width={12} height={2} />
                  </span>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="input-count"
                    value={quantity}
                    min={1}
                    max={99}
                    onChange={this.handleQuantityChange}
                  />
                  <span
                    className="action-count"
                    onClick={this.handleIncrementItem}
                  >
                    <img src={plus} alt="btn" width={12} height={2} />
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="add-to-cart"
                onClick={this.handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
