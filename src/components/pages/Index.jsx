import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Buttons from "../Buttons";
import axios from 'axios';
import { setUserSession } from '../../Utils/Common';

const Index = (props) => {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/home");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="logo">
          <h1>
            Shop<span>Xpress.</span>
          </h1>
        </div>
        <form onSubmit={handleLogin}>
          <h3 className="text-center">Login to continue</h3>
          <div className="mb2"></div>
          {error && (
            <>
              <small style={{ color: "red" }}>{error}</small>
            </>
          )}
          <br />
          <input type="email" {...username} placeholder="email address" />
          <input type="password" {...password} placeholder="password" />
          <Buttons
            text={loading ? "Logging in..." : "Login"}
            color="#3352ec"
            textColor={loading ? "#ffffff85" : "#fff"}
            disabled={loading}
          />
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

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 

export default Index;
