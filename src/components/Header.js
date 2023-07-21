import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-box">
        <img src={Logo} alt="Logo Image" className="logo-img" />
        <span className="logo-title">Shopping Cart</span>
      </Link>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="link" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="link">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
      <li>
        <Link to="/cart" className="cart-count">
          <span>Cart: 2</span>
        </Link>
      </li>
    </header>
  );
};
