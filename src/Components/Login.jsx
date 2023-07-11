import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const style = {
    "background-image": `url("images/Login.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <>
      <div className="Auth-form-container" style={style}>
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Dont have any account?&nbsp;
              <NavLink to="/register">Register here</NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
