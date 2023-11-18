import React from "react";
import "./SingIn.css";
import InstaLogo from "../../assets/logo.png";

const SignIn = ({ onClick }) => {
  return (
    <div className="form-wrapper">
      <form>
        <img className="instaLogo" src={InstaLogo} alt="instagram Logo" />
        <div className="inputs">
          <input
            className="form-input"
            type="text"
            placeholder="Phone number,username, or email"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
          />
          <button onClick={onClick} className="signIn-button">
            Sign in
          </button>
        </div>
        <div>
          Don't have account ?{" "}
          <a onClick={onClick} className="signup-link">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
