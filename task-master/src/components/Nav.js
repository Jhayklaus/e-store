import React from 'react'
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearchAlt } from "react-icons/bi";
import style from '../Style/style.module.css'


const Nav = () => {
  const state = useSelector((state) => state.cart.cart);
  console.log(state);
    return (
      <div className={style.main}>
        <label htmlFor={style.logo}>Logo</label>

        <div className={style.search}>
          <div className={style.input}>
            <input type="text" placeholder="Search " />
            <BiSearchAlt className={style.icon} />
          </div>
        </div>
        <div>
          <AiOutlineShoppingCart className={style.icon} />
          <span className={style.cartItem} style={{ color: "white" }}>
            {state.length}
          </span>
        </div>
      </div>
    );
}

export default Nav
