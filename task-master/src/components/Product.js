import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import style from "../Style/style.module.css";

const Product = ({ data }) => {
  const state = useSelector((state) => state.cart.cart);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.proMain}>
        <div className={style.product}>
          <img
            className={style.image}
            className={style.proImg}
            src={data.image}
            alt="pro"
          />
          <button
            className={style.button}
            onClick={() => dispatch(addToCart(data.id))}
          >
            <BsFillCartPlusFill className={style.Buttonicon} size="2em" />
          </button>
          <button
            className={style.button1}
            onClick={() => dispatch(removeFromCart(data.id))}
          >
            <BsFillCartDashFill className={style.Buttonicon} size="2em" />
          </button>
        </div>
        <div className={style.proTitle}>{data.title}</div>
        <div className={style.proPrice}>{data.amount}</div>
      </div>
    </>
  );
};

export default Product;
