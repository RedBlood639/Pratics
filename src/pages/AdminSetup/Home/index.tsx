import React, { useState } from "react";
import SignIn from "../../../components/SignIn/Iindex";
import SignUp from "../../../components/SignUp";
import Forgot from "../../../components/Forgot";
import "./style.scss";

const HomePage: React.FC<{ history?: any; match?: any }> = ({ history }) => {
  const [signpage, setSignpage] = useState<boolean>(true);
  return (
    <div className="home-container">
      <div className="left-container"></div>
      <div className="right-container">
        <div className="form-container">
          {/* {signpage ? <SignIn /> : <SignUp />} */}
          <Forgot />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
