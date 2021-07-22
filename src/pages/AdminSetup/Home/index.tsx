import React, { useState } from "react";
import SignIn from "../../../components/SignIn/Iindex";
import SignUp from "../../../components/SignUp";
import Forgot from "../../../components/Forgot";
import "./style.scss";

const HomePage: React.FC<{ history?: any; match?: any }> = ({ history }) => {
  const [signpage, setSignpage] = useState<number>(0);

  const handleStateClick = (state: number) => {
    setSignpage(state);
  };
  return (
    <div className="home-container">
      <div className="left-container"></div>
      <div className="right-container">
        <div className="form-container">
          {signpage === 0 ? (
            <SignIn Onhandler={handleStateClick} />
          ) : signpage === 1 ? (
            <SignUp Onhandler={handleStateClick} />
          ) : (
            <Forgot Onhandler={handleStateClick} />
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
