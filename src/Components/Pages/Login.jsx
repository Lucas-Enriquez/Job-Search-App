import React, { useContext, useState } from "react";
import { LoginNavbar } from "../UI/LoginNavbar";
import onthephone from "../../public/onthephone.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { setIsLogged } = useContext(AuthContext);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const fetchLogin = async () => {
    const url =
      "https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/login";
    try {
      const fetchRes = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const { user, token } = await fetchRes.json();

      if (user !== undefined || token !== undefined) {
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("userToken", JSON.stringify(token));
        setIsLogged(true);
      } else {
        setInvalidCredentials(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <>
      <main className="main">
        <LoginNavbar />
        <div className="form-container">
          <form className="login-form" onSubmit={handleLoginForm}>
            <h1>Login</h1>
            <p>Stay up to date with your professional world</p>
            {invalidCredentials && (
              <div className="invalid-cred">
                <span>Invalid Credentials</span>
              </div>
            )}
            <input placeholder="Email" type="email" onChange={handleEmail} />
            <input
              placeholder="Password"
              type="password"
              onChange={handlePassword}
            />
            <button className="signup-btn">Login</button>
            <p>
              Not registered?{" "}
              <Link className="register-link" to="/register">
                Sign Up
              </Link>
            </p>
          </form>
          <div className="illustration">
            <img src={onthephone} />
          </div>
        </div>
      </main>
    </>
  );
};
