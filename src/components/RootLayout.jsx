import React, { useState } from "react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../context/CartContextProvider";
import Cart from "./cart/Cart";
import { Footer } from "./footer/Footer";
import { Login } from "./logIn-signUp/Login";
import { SignUp } from "./logIn-signUp/SignUp";
import Style from "./RootLayout.module.css";
import { LoginSignupContextProvider } from "../context/LoginSignupContextProvider";
import { LogOut } from "./header/LogOut";

const RootLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [status, setStatus] = useState({
    loginContainer: false,
    logIn: false,
    signUp: false,
  });
  const [showLogout, setShowLogout] = useState(false);

  return (
    <CartContextProvider>
      <LoginSignupContextProvider>
        {status.loginContainer && (
          <div className={Style.loginSignUpContainer}>
            {status.logIn && <Login setStatus={setStatus} />}
            {status.signUp && <SignUp setStatus={setStatus} />}
          </div>
        )}
        {showCart && <Cart setShowCart={setShowCart} />}
        <Header
          setShowCart={setShowCart}
          setStatus={setStatus}
          setShowLogout={setShowLogout}
        />
        {showLogout && <LogOut setShowLogout={setShowLogout} />}
      </LoginSignupContextProvider>
      <Outlet />
      <Footer />
    </CartContextProvider>
  );
};

export default RootLayout;
