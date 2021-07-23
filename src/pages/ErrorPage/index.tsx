import React, { useState } from "react";
import FailureSvg from "../../assets/images/failure";
import "./style.scss";
const ErrorPage: React.FC<{ history?: any }> = ({ history }) => {
  const Backhandler = () => {
    history.goBack();
  };
  return (
    <div className="e-conainter">
      <div className="e-display">
        <div className="pt5 header">{/* <FailureSvg /> */}</div>
        <div className="large-label color-gray-2">
          Oops! Something went to wrong
        </div>
        <div className="pt2">
          <button className="sm-label font-weight-600" onClick={Backhandler}>
            Ok, got it !
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
