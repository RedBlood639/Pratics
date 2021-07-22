import React from "react";
import "./style.scss";

const SignUp: React.FC = () => {
  return (
    <React.Fragment>
      <form className="form-content">
        <div>
          <p className="bg-label color-primary font-weight-700">Sign Up</p>
          <span className="sm-label color-gray-2">
            Enter your details to create your account?
          </span>
        </div>
        <div className="pt3">
          <input
            type="text"
            name="email"
            placeholder="please input your email"
          />
          <p className="label color-danger">Username is required</p>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="please input your email"
          />
          <p className="label color-danger">email is required</p>
        </div>
        <div>
          <input
            type="password"
            name="password1"
            placeholder="please input your password"
          />
          <p className="label color-danger">Password is required</p>
        </div>
        <div>
          <input
            type="password"
            name="password2"
            placeholder="please confirm your password"
          />
          <p className="label color-danger">Confirm Password is required</p>
        </div>
        <div className="mt2">
          <button role="signup" className="font-weight-600 sm-label mr1">
            Sign Up
          </button>
          <button role="cancel" className="font-weight-600 sm-label">
            Cancel
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
