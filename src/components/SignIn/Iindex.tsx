import React from "react";
import "./style.scss";

const SignIn: React.FC = () => {
  return (
    <React.Fragment>
      <form className="form-content">
        <div>
          <p className="bg-label color-primary font-weight-700">
            Welcome to Mindmail
          </p>
          <span className="sm-label color-gray-2">New Here? </span>
          <a className="sm-label color-blue-1 font-weight-800">
            &nbsp;Create an Account
          </a>
        </div>
        <div>
          <p className="sm-label">Email</p>{" "}
          <input
            type="text"
            name="email"
            placeholder="please input your email"
          />
          <p className="label color-danger">Username is required</p>
        </div>
        <div>
          <div className="forget">
            <span className="sm-label">Password</span>
            <a href="#" className="sm-label color-blue-1 font-weight-800">
              Forgot Password ?
            </a>
          </div>
          <p></p>
          <input
            type="password"
            name="password"
            placeholder="please input your password"
          />
          <p className="label color-danger">Password is required</p>
        </div>
        <div>
          <button className="font-weight-600 sm-label">Sign In</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignIn;
