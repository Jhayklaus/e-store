import React from "react";
import { NavLink } from "react-router-dom";
import ButtonSmall from "./ButtonSmall";
import shoes from "../images/catg shoes.png";
import gadget from "../images/catgElectronic.png";
import clothes from "../images/catg clothes.png";
import furn from "../images/catgFurniture.png";
import others from "../images/catg others.png";

const FeaturedCategories = () => {
  return (
    <>
      <div className="spacer-20"></div>
      <h1 className="text-center">Featured categories</h1>
      <div className="featured_categories_wrapper">
        <div className="item shoes">
          <img src={shoes} alt="" />
          <h3>Shoes</h3>
        </div>
        <div className="item electronics">
          <img src={gadget} alt="" />
          <h3>Electronics</h3>
        </div>
        <div className="item clothings">
          <img src={clothes} alt="" />
          <h3>Clothings</h3>
        </div>
        <div className="item furnitures">
          <img src={furn} alt="" />
          <h3>Furnitures</h3>
        </div>
        <div className="item others">
          <img src={others} alt="" />
          <h3>Others</h3>
        </div>
      </div>

      <div className="seeAll">
        <NavLink className="link" to="/products">
          <ButtonSmall color="#2845d33b" text="Explore Products" />
        </NavLink>
      </div>
    </>
  );
};

export default FeaturedCategories;
