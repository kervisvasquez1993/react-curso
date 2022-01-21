import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { DashboarRouter } from "./DashboarRouter";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user.logged ? <DashboarRouter /> : <Navigate to="/login" />;
};
