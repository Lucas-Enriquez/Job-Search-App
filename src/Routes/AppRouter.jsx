import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../Components/Pages/Home";
import { Register } from "../Components/Pages/Register";
import "../scss/styles.scss";
import { AuthContext } from "../context/AuthContext";
import { Login } from "../Components/Pages/Login";
import { NotFound } from "../Components/Pages/NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ThemeContext } from "../context/ThemeContext";

export const AppRouter = () => {
  const navigate = useNavigate();

  const { registerValues, setIsLogged } = useContext(AuthContext);
  const { name, email, password, role } = registerValues;

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if ((name === "", email === "", password === "", role === "")) {
      return;
    } else {
      //! DESCOMENTAR TODO ESTO DESPUÉS
      // localStorage.setItem("isAuth", JSON.stringify(registerValues));
      // setIsLogged(true);
    }
  }, [registerValues]);

  return (
    <div className={"App"}>
      <Routes>
        <Route path="/" element={ <PrivateRoute> <Home /> </PrivateRoute> } />
        <Route path="/*" element={
          <PublicRoute>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </PublicRoute> } />
      </Routes>
    </div>
  );
};
