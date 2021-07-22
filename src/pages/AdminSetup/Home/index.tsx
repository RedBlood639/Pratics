import React, { useState } from "react";
import SignIn from "../../../components/SignIn/Iindex";
import SignUp from "../../../components/SignUp";
import { LogoBig } from "../../../assets/icons/LogoBig";

import "./style.scss";

const HomePage: React.FC<{ history?: any; match?: any }> = ({ history }) => {
  return (
    <div className="home-container">
      <div className="left-container"></div>
      <div className="right-container">
        <div className="form-container">
          {/* <SignIn /> */}
          <SignUp />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
