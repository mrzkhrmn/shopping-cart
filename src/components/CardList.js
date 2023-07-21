import React from "react";
import { ProductCard } from "./ProductCard";
import "./CardList.css";

export const CardList = () => {
  return (
    <div className="products container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
