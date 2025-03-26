import React, { useContext } from "react";
import Style from "./LogOut.module.css";
import { LoginSignupContext } from "../../context/LoginSignupContext";

export const LogOut = ({ setShowLogout }) => {
  const { ath, dispatch } = useContext(LoginSignupContext);

  const handleClick = () => {
    dispatch({ type: "logout" });
    setShowLogout(false);
  };

  return (
    <div className={Style.logOut}>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
