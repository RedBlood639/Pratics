import React, { useState } from "react";
import "./style.scss";

interface postData {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

const SignUp: React.FC<{ Onhandler?: any; history?: any }> = ({
  Onhandler,
  history,
}) => {
  const [fields, setFields] = useState<postData>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState<postData>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const handleValidation = () => {
    const fieldErrors = {
      name: "",
      email: "",
      password: "",
      confirm: "",
    };
    let formIsValid = true;
    //Name
    if (!fields["name"]) {
      formIsValid = false;
      fieldErrors["name"] = "Name is required";
    } else {
      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z0-9_]+$/)) {
          formIsValid = false;
          fieldErrors["name"] = "Please use only letter for name";
        }
      }
    }
    //Email
    if (typeof fields["email"] !== "undefined") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(fields["email"])) {
        formIsValid = false;
        fieldErrors["email"] = "Email is not valid";
      }
    }
    if (!fields["email"]) {
      formIsValid = false;
      fieldErrors["email"] = "Email is required";
    }

    //Password
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

    if (!fields["confirm"]) {
      formIsValid = false;
      fieldErrors["confirm"] = "Confirm Password is required";
    } else {
      if (fields["confirm"].toLocaleLowerCase() === fields["confirm"]) {
        formIsValid = false;
        fieldErrors["confirm"] =
          "Password should have more than 1 upper case letter";
      } else if (fields["confirm"].length < 8) {
        formIsValid = false;
        fieldErrors["confirm"] = "Password should be more than 8 characters";
      } else if (fields["confirm"] !== fields["password"]) {
        formIsValid = false;
        fieldErrors["confirm"] = fieldErrors["password"] =
          "Password and Confirm Password should be same";
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
    <form className="signup-content">
      <div>
        <p className="bg-label color-primary font-weight-700">Sign Up</p>
        <span className="sm-label color-gray-2">
          Enter your details to create your account?
        </span>
      </div>
      <div className="pt3">
        <input
          type="text"
          name="name"
          placeholder="please input your name"
          value={fields.name}
          onChange={(e) =>
            setFields({
              ...fields,
              name: e.target.value.replace(/\s\s+/g, " "),
            })
          }
        />
        <p className="label color-danger">{errors.name}</p>
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="please input your email"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
        <p className="label color-danger">{errors.email}</p>
      </div>
      <div>
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
        <input
          type="password"
          name="confirm"
          placeholder="please confirm your password"
          value={fields.confirm}
          onChange={(e) => setFields({ ...fields, confirm: e.target.value })}
        />
        <p className="label color-danger">{errors.confirm}</p>
      </div>

      <div className="mt2 signup-footer">
        <button
          role="signup"
          className="font-weight-600 sm-label mr1"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <button
          role="cancel"
          className="font-weight-600 sm-label"
          onClick={() => Onhandler(0)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SignUp;
