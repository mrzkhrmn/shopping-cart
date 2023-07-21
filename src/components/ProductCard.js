import React from "react";
import Item from "../assets/ears.jpg";

import "./ProductCard.css";

export const ProductCard = () => {
  return (
    <div className="card-item">
      <img src={Item} alt="Item Image" />
      <div className="card-content">
        <span>Sony WH-250 Bluetooth Wireless</span>
        <div className="price-box">
          <span>$149</span>
          <button type="submit" className="add-button">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
