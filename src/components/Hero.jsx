import React from "react";
import heroImage from "../images/content-img-removebg-preview.png";
import Buttons from "./Buttons";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>Don’t miss our Weekend amazing deals.</h1>
        <h4>Save up to 50% on your order using a voucher code</h4>
        <Buttons id='content' color="#3352ec"  text="Get Voucher" />
      </div>
      <div className="hero-img">
        <img src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;
