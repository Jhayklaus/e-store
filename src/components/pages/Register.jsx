import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Buttons from "../Buttons";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    validate();
    axios
      .post(`https://api.escuelajs.co/api/v1/users/`, data)
      .then(function (response) {
        setLoading(false)
        console.log(response);
        toast.success(
          `Account Created Successfully, Login with the link below`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          }
        );
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
        toast.error(
          'Something went wrong...',
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false
          }
        );
      });
  };

  const alreadyRegistered = () => {
    //Check if user is already registered
  }

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const validate = (newData) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.name) {
      toast.error("username is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    }
    if (!data.avatar) {
      toast.error("A link to your avatar is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    }
    if (!data.email) {
      toast.error("email is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    } else if (!regex.test(data.email)) {
      toast.error("Invalid email", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    }
    if (!data.password) {
      toast.error("Password is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    } else if (data.password.length < 8) {
      toast.error("Password must be more than 8 characters", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    }
  };

  return (
    <div className="reg">
      <div className="reg-wrapper">
        <div className="logo">
          <h1>
            Shop<span>Xpress.</span>
          </h1>
        </div>
        <form onSubmit={(e) => submit(e)}>
          <h2 className="text-center">Sign Up To Get Started</h2>
          <div className="mb2"></div>
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
          <input
            onChange={(e) => handle(e)}
            id="avatar"
            value={data.avatar}
            type="url"
            placeholder="paste url to avatar"
          />
          <Buttons
            textColor={loading ? "#ffffff85" : "#fff"}
            text={loading ? "Signing you up..." : "Continue"}
            color="#3352ec"
          />
        </form>
        <NavLink className="forgot" to={`/`}>
          <p>Login here </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
