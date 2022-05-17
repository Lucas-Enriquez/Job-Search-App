import React, { useContext, useState } from "react";
import { LoginNavbar } from "../UI/LoginNavbar";
import working from "../../public/working.svg";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { setRegisterValues, registerValues } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setRegisterValues({
      email,
      password,
    });
  };

  return (
    <>
      <main className="main">
        <LoginNavbar />
        <div className="form-container">
          <form onSubmit={handleAuth} className="login-form">
            <h1>Welcome to your professional community!</h1>
            <input
              placeholder="Email or phone number"
              type="email"
              onChange={handleEmail}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={handlePassword}
            />
            <button className="signup-btn">Sign Up</button>
          </form>
          <div className="illustration">
            <img src={working} />
          </div>
        </div>
      </main>
    </>
  );
};
