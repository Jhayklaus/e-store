import { React, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Buttons from "../Buttons";
import axios from "axios";
import ButtonSmall from "../ButtonSmall";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/users/", data)
      .then(function (response) {
        console.log(response);
        toast("account created successfully...", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Something went wrong...", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="reg">
      <div className="reg-wrapper">
        <div className="logo">
          <h1>
            Shop<span>Xpress.</span>
          </h1>
        </div>
        <form onSubmit={(e) => submit(e)}>
        <ToastContainer />
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            type="text"
            autoComplete="off"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            type="email"
            autoComplete="off"
            placeholder="email address"
          />
          <input
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            type="password"
            placeholder="password"
          />
          <Buttons text="Continue" color="#3352ec" />
        </form>
        <NavLink className="forgot" to={`/`}>
          <p>Already have an account? </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
