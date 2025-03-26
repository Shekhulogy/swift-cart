import React, { useContext, useRef, useState } from "react";
import Style from "./LoginSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginSignupContext } from "../../context/LoginSignupContext";

export const Login = ({ setStatus }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { auth, dispatch } = useContext(LoginSignupContext);
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const [authState, setAuthState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));

    const matchedUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (matchedUser) {
      dispatch({ type: "login", payload: matchedUser });
      setLoginData({
        email: "",
        password: "",
      });
      setStatus({ logIn: false, loginContainer: false });
    }

    if (auth) {
      setAuthState(false);
    } else {
      setAuthState(true);
      emailInputRef.current.style.border = "1px solid red";
      passInputRef.current.style.border = "1px solid red";
    }
  };

  const handleChange = (e) => {
    setAuthState(false);
    emailInputRef.current.style.border = "1px solid #ccc";
    passInputRef.current.style.border = "1px solid #ccc";

    setLoginData((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={Style.authContainer}>
      <div
        className={Style.closeBtn}
        onClick={() => setStatus({ logIn: false, loginContainer: false })}
      >
        <span className="material-symbols-outlined">close</span>
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          ref={emailInputRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          ref={passInputRef}
          required
        />
        {authState && (
          <div className={Style.error}>error: invalid email or password</div>
        )}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link
          href="#"
          onClick={() =>
            setStatus({ loginContainer: true, logIn: false, signUp: true })
          }
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};
