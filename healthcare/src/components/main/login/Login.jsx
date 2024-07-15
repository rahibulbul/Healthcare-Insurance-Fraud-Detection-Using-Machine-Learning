import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function login() {
  return (
    <div className="container_login">
      <div className="login-header">
        <h2 className="login-h2">Sign In</h2>
        <h3 className="welcome-h3">Welcome Back</h3>
        <p className="session-p">Please login to start your session.</p>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="text"
          placeholder="username"
          autoComplete="off"
          required
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          className="text"
          placeholder="password"
          autoComplete="off"
          required
        />
      </div>
      <div className="forgot">
        <section>
          <input type="checkbox" id="check" />
          <label for="check">Keep me sign in</label>
        </section>
        <section>
          <link to="/forgot" className="forgot-password"></link>
        </section>
      </div>
      <div className="input-submit">
        <button className="submit-btn" id="submit"></button>
        <label for="submit">Sign In</label>
      </div>
      <div className="registration-here">
        <label>Don't have account?</label>
        <Link to="/registration" className="registration-link">
          Click here to register
        </Link>
      </div>
    </div>
  );
}

export default login;
