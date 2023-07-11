import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const style = {
    "background-image": `url("images/Signup.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in Local Storages
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <div className="Auth-form-container" style={style}>
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?
              <span className="link-primary">
                <NavLink to="/login"> Sign In</NavLink>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
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
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2"></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
