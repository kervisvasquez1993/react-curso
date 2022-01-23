import React, { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const path = `${pathname}${search}`;
  useMemo(
    () => localStorage.setItem("pathHistory", JSON.stringify(path)),
    [path]
  );

  return user.logged ? children : <Navigate to="login" />;
};
