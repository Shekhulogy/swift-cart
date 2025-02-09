import React, { useState } from "react";
import Style from "./LoginSignup.module.css";

export const Login = ({ setStatus }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { ...loginForm });
    setLoginForm({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setLoginForm((preValue) => ({
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
          value={loginForm.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <a
          href="#"
          onClick={() =>
            setStatus({ loginContainer: true, logIn: false, signUp: true })
          }
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};
