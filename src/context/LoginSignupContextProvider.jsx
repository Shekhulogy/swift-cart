import React, { useState, useReducer, useEffect } from "react";
import { LoginSignupContext } from "./LoginSignupContext";

const initialState = JSON.parse(sessionStorage.getItem("loggedUser"));

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      sessionStorage.setItem("loggedUser", JSON.stringify(action.payload));
      return JSON.parse(sessionStorage.getItem("loggedUser"));
    case "logout":
      sessionStorage.removeItem("loggedUser");
      return JSON.parse(sessionStorage.getItem("loggedUser"));

    default:
      break;
  }
};

export const LoginSignupContextProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  return (
    <LoginSignupContext.Provider value={{ auth, dispatch }}>
      {children}
    </LoginSignupContext.Provider>
  );
};
