import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types";

export const LoginScreen = () => {
  const navigator = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    //
    const action = {
      type: types.login,
      payload: { name: "kervis vasquez" },
    };
    dispatch(action);

    navigator("/", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
