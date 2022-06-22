import React from "react";
import { NavLink } from "react-router-dom";
import Buttons from "../Buttons";
import ButtonSmall from "../ButtonSmall";

const Index = () => {
  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="logo">
          <h1>
            Shop<span>Xpress.</span>
          </h1>
        </div>
        <form>
          <input type="email" placeholder="email address" />
          <input type="password" placeholder="password" />
          <Buttons text="Login" color="#3352ec" />
        </form>
        <NavLink className="forgot" to={`/forgotpwd`}>
          <p>Forgot password?</p>
        </NavLink>
        <NavLink className="new-user" to={`/newuser`}>
          <p>Don't have an account?</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Index;
