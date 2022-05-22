import React, { useContext, useState } from "react";
import { LoginNavbar } from "../UI/LoginNavbar";
import working from "../../public/working.svg";
import { AuthContext } from "../../context/AuthContext";

export const Register = () => {
  const { setRegisterValues, registerValues } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleRole = (e) => {
    setRole(e.target.value);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if(name === '' || email === '' || password === '' || role === '') {
      return
    } else {
      await setRegisterValues({ name, email, password, role });

      try {
        const res = await fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/signup", {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerValues)
        })
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  //! OJO!!! Acá voy a hacer un select para los roles

  return (
    <>
      <main className="main">
        <LoginNavbar />
        <div className="form-container">
          <form onSubmit={handleRegister} className="login-form">
            <h1>Welcome to your professional community!</h1>
            <input
              placeholder="Name"
              type="text"
              onChange={handleName}
            />
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
            <select onChange={handleRole}>
              <option value="default">Select your role</option>
              <option value="admin">Admin</option>
              <option value="applicant">Applicant</option>
              <option value="employer">Employer</option>
            </select>

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
