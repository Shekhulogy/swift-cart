import React, { useState, useRef, useId } from "react";
import Style from "./LoginSignup.module.css";
import { Link } from "react-router-dom";

export const SignUp = ({ setStatus }) => {
  const [signupFormValues, setSignupFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const emailInputRef = useRef();
  const [showError, setShowError] = useState(false);

  const usersData = JSON.parse(localStorage.getItem("users"));

  const checkDuplicate = (email) => {
    const isDuplicate = usersData.some((userData) => email === userData.email);

    if (isDuplicate) {
      emailInputRef.current.focus();
      emailInputRef.current.style.border = "1px solid red";
      setShowError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usersData) {
      if (!showError) {
        const users = [
          ...usersData,
          { id: crypto.randomUUID(), ...signupFormValues },
        ];

        localStorage.setItem("users", JSON.stringify(users));
        setStatus({ loginContainer: false, logIn: false, signUp: false });
        setSignupFormValues({
          name: "",
          email: "",
          password: "",
        });
      }
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([{ id: crypto.randomUUID(), ...signupFormValues }])
      );

      setStatus({ loginContainer: false, logIn: false, signUp: false });
      setSignupFormValues({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  const debounce = (callback, delay) => {
    let timeoutID;
    return (...args) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const emailInputChange = debounce(checkDuplicate, 300);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      emailInputRef.current.style.border = "1px solid #ccc";
      setShowError(false);
      emailInputChange(e.target.value);
    }
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
          ref={emailInputRef}
          required
        />
        {showError && (
          <div className={Style.error}>Error: email already in use</div>
        )}
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
        <Link
          href="#"
          onClick={() =>
            setStatus({ loginContainer: true, logIn: true, signUp: false })
          }
        >
          Login
        </Link>
      </p>
    </div>
  );
};
