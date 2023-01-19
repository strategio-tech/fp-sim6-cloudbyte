import React, { useContext } from "react";

import { AuthContext } from "../contexts/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("Logged in: ", isLoggedIn);
  console.log("loading: ", isLoading);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsPrivate;
