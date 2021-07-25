import React, { useState } from "react";
import SignIn from "../../components/AdminSetup/SignIn/Iindex";
import SignUp from "../../components/AdminSetup/SignUp";
import Forgot from "../../components/AdminSetup/Forgot";
import "./style.scss";

const AdminSetup: React.FC<{ history?: any; match?: any }> = ({ history }) => {
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
            <SignIn Onhandler={handleStateClick} history={history} />
          ) : signpage === 1 ? (
            <SignUp Onhandler={handleStateClick} history={history} />
          ) : (
            <Forgot Onhandler={handleStateClick} />
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminSetup;
