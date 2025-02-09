import React, { useState } from "react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../context/CartContextProvider";
import Cart from "./cart/Cart";
import { Footer } from "./footer/Footer";
import { Login } from "./logIn-signUp/Login";
import { SignUp } from "./logIn-signUp/SignUp";
import Style from "./RootLayout.module.css";

const RootLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [status, setStatus] = useState({
    loginContainer: false,
    logIn: false,
    signUp: false,
  });

  return (
    <CartContextProvider>
      {status.loginContainer && (
        <div className={Style.loginSignUpContainer}>
          {status.logIn && <Login setStatus={setStatus} />}
          {status.signUp && <SignUp setStatus={setStatus} />}
        </div>
      )}
      {showCart && <Cart setShowCart={setShowCart} />}
      <Header setShowCart={setShowCart} setStatus={setStatus} />
      <Outlet />
      <Footer />
    </CartContextProvider>
  );
};

export default RootLayout;
