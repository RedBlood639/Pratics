import React from "react";
import "./style.scss";

const Forgot: React.FC = () => {
  return (
    <React.Fragment>
      <form className="form-content">
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
            placeholder="please input your email"
          />
          <p className="label color-danger">Email is required</p>
        </div>
        <div>
          <button role="submit" className="font-weight-600 sm-label mr1">
            Submit
          </button>
          <button role="cancel" className="font-weight-600 sm-label">
            Cancel
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Forgot;
