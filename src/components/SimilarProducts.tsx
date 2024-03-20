import { Component } from "react";
import img from "../images/img.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import adidas from "../images/adidas.svg";
import star from "../images/star.svg";
import star2 from "../images/star2.svg";

const images = [img, img2, img3, img4];

export default class SimilarProducts extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h3 className="title">Similar Products</h3>
          <p className="sub-title">You may like these products also</p>
          <div className="grid">
            {images.map((img, index) => (
              <div className="card" key={index}>
                <img src={img} alt="img" width={254} height={254} />
                <div className="card-content">
                  <h4>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="price">
                      9999 <span>LE</span>
                    </span>
                    <img
                      src={adidas}
                      alt="adidas"
                      width={65}
                      height={37}
                      className="adidas"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-center mt-10">
                    <div className="flex gap-5">
                      <img
                        src={star}
                        alt="star"
                        width={20}
                        height={20}
                        className="star"
                      />
                      <img
                        src={star}
                        alt="star"
                        width={20}
                        height={20}
                        className="star"
                      />
                      <img
                        src={star}
                        alt="star"
                        width={20}
                        height={20}
                        className="star"
                      />
                      <img
                        src={star}
                        alt="star"
                        width={20}
                        height={20}
                        className="star"
                      />
                      <img
                        src={star2}
                        alt="star"
                        width={20}
                        height={20}
                        className="star"
                      />
                    </div>
                    <span className="rate">4.9 of 5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
