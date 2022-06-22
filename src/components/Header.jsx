import React from "react";
import cart from "../images/cart.png";
import profile from "../images/profile.png";
import dropdown from "../images/dropdown.png";
import logout from "../images/logout.png";
import settings from "../images/settings.png";
import checkout from "../images/cart-check.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h1>
            Shop<span>Xpress.</span>
          </h1>
        </div>
        <ul className="nav-links">
          <NavLink className="link" to="/">
            <div className="wishlist">
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink className="link" to="/products">
            <div className="wishlist">
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink className="link" to="/cart">
            <div className="cart">
              <img src={cart} />
              <p>Cart</p>
              <img src={dropdown} />
            </div>
            <div class="dropdown-cart">
              <div className="checkout">
                <a href="#">Checkout</a>
                <img src={checkout} />
              </div>
              <div className="checkout">
                <a>Cart</a>
                <p className="cartCount">0</p>
              </div>
            </div>
          </NavLink>

          <NavLink className="link" to="/user">
            <div className="user">
              <img src={profile} />
              <p>John Doe</p>
              <img src={dropdown} />
            </div>
            <div class="dropdown-content">
              <div className="settings">
                <a href="#">Settings</a>
                <img src={settings} />
              </div>
              <div className="logout">
                <a href="#">Logout</a>
                <img src={logout} />
              </div>
            </div>
          </NavLink>
        </ul>

        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
