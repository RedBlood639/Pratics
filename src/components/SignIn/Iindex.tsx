import React, { useState } from "react";
import "./style.scss";
interface postData {
  email: string;
  password: string;
}

const SignIn: React.FC<{ Onhandler?: any }> = ({ Onhandler }) => {
  const [fields, setFields] = useState<postData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<postData>({
    email: "",
    password: "",
  });
  return (
    <React.Fragment>
      <form className="form-content">
        <div>
          <p className="bg-label color-primary font-weight-700">
            Welcome to Mindmail
          </p>
          <span className="sm-label color-gray-2">New Here? </span>
          <a
            className="sm-label color-blue-1 font-weight-800"
            href="#"
            onClick={() => Onhandler(1)}
          >
            &nbsp;Create an Account
          </a>
        </div>
        <div className="pt2">
          <p className="sm-label">Email</p>{" "}
          <input
            type="text"
            name="email"
            placeholder="please input your email"
            value={fields.email}
          />
          <p className="label color-danger">{errors.email}</p>
        </div>
        <div>
          <div className="forget">
            <span className="sm-label">Password</span>
            <a
              href="#"
              className="sm-label color-blue-1 font-weight-800"
              onClick={() => Onhandler(2)}
            >
              Forgot Password ?
            </a>
          </div>
          <p></p>
          <input
            type="password"
            name="password"
            placeholder="please input your password"
            value={fields.password}
          />
          <p className="label color-danger">{errors.password}</p>
        </div>
        <div>
          <button className="font-weight-600 sm-label">Sign In</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignIn;
