import React, { useState } from "react";
import { LoginNavbar } from "../UI/LoginNavbar";
import onthephone from "../../public/onthephone.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <main className="main">
        <LoginNavbar />
        <div className="form-container">
          <form className="login-form">
            <h1>Login</h1>
            <p>Stay up to date with your professional world</p>
            <input placeholder="Email or phone number" type="email" onChange={(e)=> setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button className="signup-btn">Login</button>
            <p>Not registered? <Link className="register-link" to="/register">Sign Up</Link></p>
          </form>
          <div className="illustration">
            <img src={onthephone}/>
          </div>
        </div>
      </main>
    </>
  );
};
