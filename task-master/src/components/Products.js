/* eslint-disable array-callback-return */
import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import style from "../Style/style.module.css";


const Products = () => {
  const state = useSelector((state) => state.cart.products);
  console.log(state);
  return (
    <div className={style.mainObj}>
      <h1>Products</h1>
      <div className={style.mainContent}>
        {state.map((item) => {
          return <Product key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
