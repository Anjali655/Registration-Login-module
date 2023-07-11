import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const style = {
    "background-image": `url("images/Home.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    padding: "20rem",
  };

  return (
    <div style={style}>
      <h1>Welcome {userName.name}</h1>

      <div className="d-grid gap-2 mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
