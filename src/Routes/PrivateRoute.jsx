import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? children : <Navigate to={"/auth/login"} />;
};
