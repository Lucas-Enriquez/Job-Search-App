import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../Components/Pages/Register";
import "../scss/styles.scss";
import { AuthContext } from "../context/AuthContext";
import { Login } from "../Components/Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { JobsContext } from "../context/JobsContext";
import { DashboardRoutes } from "./DashboardRoutes";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const { registerValues, setIsLogged } = useContext(AuthContext);
  const { name, email, password, role } = registerValues;

  const [appliedJobs, setAppliedJobs] = useState([]);


  return (
    <JobsContext.Provider value={{ appliedJobs, setAppliedJobs }}>
      <div className={"App"}>

        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <DashboardRoutes/>
              </PrivateRoute>
            }
          />

          <Route
            path="/auth/*"
            element={
              <PublicRoute>
                <AuthRouter />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </JobsContext.Provider>
  );
};
