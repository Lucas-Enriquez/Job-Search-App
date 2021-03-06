import React from "react";
import { Link } from "react-router-dom";

export const LoginNavbar = () => {
  return (
    <nav className="navbar">
      <div className="burger">
        <div className="layer1"></div>
        <div className="layer2"></div> //TODO HACER RESPONSIVE SI ES NECESARIO
        <div className="layer3"></div>
      </div>
      <div className="logo">
        <span className="logo-text">
          <i
            className="fa-solid fa-briefcase"
            style={{ marginRight: ".4em" }}
          ></i>
          <span style={{ color: "#ffffff; font-size: 1.1em" }}>Job</span>
          <span style={{ color: "#eb4028; font-size: 1.1em" }}>Search</span>
        </span>
      </div>

      <div className="menubar">
        <ul className="login-list">
          <li className="list-items">
            <Link to="/auth/register">Join Now</Link>
          </li>
          <li className="list-items">
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
