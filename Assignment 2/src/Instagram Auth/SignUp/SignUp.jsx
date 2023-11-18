import React from "react";
import "./SignUp.css";
import InstaLogo from "../../assets/logo.png";

const SignUp = ({ onClick }) => {
  return (
    <div className="form-wrapper">
      <form>
        <img className="instaLogo" src={InstaLogo} alt="instagram Logo" />
        <div className="inputs">
          <input
            className="form-input"
            type="text"
            placeholder="Mobile Number or Email"
          />
          <input className="form-input" type="text" placeholder="Full Name" />
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
            Sign Up
          </button>
        </div>
        <div>
          have an account ?{" "}
          <a onClick={onClick} className="login-link">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
