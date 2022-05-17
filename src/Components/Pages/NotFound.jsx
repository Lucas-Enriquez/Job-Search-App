import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>Go back to <Link to="/">Home</Link> </p>
    </>
  );
};
