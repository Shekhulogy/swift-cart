import React, { useState } from "react";
import Style from "./LoginSignup.module.css";

export const SignUp = ({ setStatus }) => {
  const [signupFormValues, setSignupFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up with:", { ...signupFormValues });
    setSignupFormValues({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setSignupFormValues((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={Style.authContainer}>
      <div
        className={Style.closeBtn}
        onClick={() => setStatus({ loginContainer: false, signUp: false })}
      >
        <span className="material-symbols-outlined">close</span>
      </div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={signupFormValues.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupFormValues.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupFormValues.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <a
          href="#"
          onClick={() =>
            setStatus({ loginContainer: true, logIn: true, signUp: false })
          }
        >
          Login
        </a>
      </p>
    </div>
  );
};
