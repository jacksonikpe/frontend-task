import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

import { ReactComponent as Eye } from "../../assets/img/eye.svg";
import "./login-form.style.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("jacksoncikpe@gmail.com");
  const [password, setPassword] = useState("Hello123");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // simulate a 4 second loading time
    setTimeout(() => {
      setLoading(false);
      setRedirect(true);
    }, 4000);
  };
  if (redirect) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <p className="info">Log in to your account</p>
      <p className="noAccountInfo">
        Don't have an account? <span>Get Started</span>
      </p>
      <div className="container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E.g: victor.onazi@getbani.co"
          required
        />
        <div className="password">
          <label>Password</label>
          <a href="#">Forgot password?</a>
        </div>
        <div className="passwordInput">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Eye className="eye" />
        </div>
        <button type="submit" className="loginButton">
          {loading ? (
            <Bars
              height="17"
              width="17"
              color="#fff"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Log In"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
