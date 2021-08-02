import React, { useState } from "react";
import "./style.scss";

const Forgot: React.FC<{ Onhandler?: any }> = ({ Onhandler }) => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const handleValidation = () => {
    if (!email) {
      setErrors("Email is required");
      return false;
    }
    if (typeof email !== "undefined") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        setErrors("Email is not valid");
        return false;
      }
    }
    setErrors("");
    return true;
  };

  const handleValidateByEvent = (value: string) => {
    setEmail(value);
    handleValidation();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (handleValidation()) {
      // submit email
    } else {
      return false;
    }
  };
  return (
    <form className="forget-content">
      <div>
        <p className="bg-label color-primary font-weight-700">
          Forgotten Password ?
        </p>
        <span className="sm-label color-gray-2">
          Enter your email to reset yur password
        </span>
      </div>
      <div className="pt2">
        <p className="sm-label">Email</p>{" "}
        <input
          type="text"
          name="email"
          value={email}
          placeholder="please input your email"
          onChange={(e) => handleValidateByEvent(e.target.value)}
        />
        <p className="label color-danger">{errors}</p>
      </div>
      <div className="forget-footer">
        <button
          role="submit"
          className="font-weight-600 sm-label mr1"
          onClick={handleSubmit}
        >
          Submit
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

export default Forgot;
