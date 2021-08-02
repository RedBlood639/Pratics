import React, { useState } from "react";
import "./style.scss";
interface postData {
  email: string;
  password: string;
}

const SignIn: React.FC<{ Onhandler?: any; history?: any }> = ({
  Onhandler,
  history,
}) => {
  const [fields, setFields] = useState<postData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<postData>({
    email: "",
    password: "",
  });

  const handleValidation = () => {
    const fieldErrors = {
      email: "",
      password: "",
    };
    let formIsValid = true;
    if (!fields["email"]) {
      formIsValid = false;
      fieldErrors["email"] = "Email is required";
    }
    if (typeof fields["email"] !== "undefined") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(fields["email"])) {
        formIsValid = false;
        fieldErrors["email"] = "Email is not valid";
      }
    }
    //password
    if (!fields["password"]) {
      formIsValid = false;
      fieldErrors["password"] = "Password is required";
    } else {
      if (fields["password"].toLocaleLowerCase() === fields["password"]) {
        formIsValid = false;
        fieldErrors["password"] =
          "Password should have more than 1 upper case letter";
      } else if (fields["password"].length < 8) {
        formIsValid = false;
        fieldErrors["password"] = "Password should be more than 8 characters";
      }
    }
    setErrors(fieldErrors);
    return formIsValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (handleValidation()) {
      // submit postData
      history.push("/dashboard");
    } else {
      return false;
    }
  };
  return (
    <form className="signin-content">
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
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
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
          onChange={(e) => setFields({ ...fields, password: e.target.value })}
        />
        <p className="label color-danger">{errors.password}</p>
      </div>
      <div>
        <button className="font-weight-600 sm-label" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignIn;
