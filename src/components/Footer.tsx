import { Component } from "react";
import logo from "../images/logo.svg";
import subscribe from "../images/sss.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instrgram from "../images/instrgram.svg";
import cash from "../images/cash.png";
import visa from "../images/visa.png";
import card from "../images/card.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="flex mb-20">
            <div className="w-40">
              <img
                src={logo}
                alt="logo"
                width={220}
                height={65}
                loading="lazy"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
                <br />
                <br />
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia
                <br />
                <br />m nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              </p>
            </div>
            <div className="w-50">
              <form action="">
                <label htmlFor="subscribe">Subscribe to our newsletter</label>
                <div className="relative">
                  <input
                    type="text"
                    name="subscribe"
                    id="subscribe"
                    placeholder="Enter Your Mail"
                  />
                  <button type="submit">
                    Subscribe{" "}
                    <img
                      src={subscribe}
                      alt="subscribe"
                      width={21}
                      height={21}
                    />
                  </button>
                </div>
              </form>
              <div className="flex justify-between">
                <ul className="w-50">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Track Order</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Sell With Us</a>
                  </li>
                  <li>
                    <a href="">Shipping And Returns</a>
                  </li>
                </ul>
                <ul className="w-40">
                  <li>
                    <img src={facebook} alt="facebook" width={32} height={32} />
                    <span>/YESHTERY</span>
                  </li>
                  <li>
                    <img src={linkedin} alt="linkedin" width={32} height={32} />
                    <span>/YESHTERY</span>
                  </li>
                  <li>
                    <img
                      src={instrgram}
                      alt="instrgram"
                      width={32}
                      height={32}
                    />
                    <span>/YESHTERY</span>
                  </li>
                  <li>
                    <img src={twitter} alt="twitter" width={32} height={32} />
                    <span>/YESHTERY</span>
                  </li>
                </ul>
              </div>
              <ul></ul>
            </div>
          </div>
          <div className="flex justify-between">
            <p>© 2021 yeshtery, all rights reserved.</p>
            <div className="flex gap-5">
              <img src={cash} alt="cash" width={101} height={39} />
              <img src={visa} alt="visa" width={64} height={39} />
              <img src={card} alt="card" width={64} height={39} />
            </div>
            <p>Powered By Abdullah Mohamed</p>
          </div>
        </div>
      </footer>
    );
  }
}
