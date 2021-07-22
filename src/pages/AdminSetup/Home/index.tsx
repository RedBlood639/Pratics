import React from "react";
import { LogoBig } from "../../../assets/icons/LogoBig";
import "./style.scss";

const HomePage: React.FC<{ history?: any; match?: any }> = ({ history }) => {
  return (
    <div className="home-container">
      <div className="aside-display">
        <div className="logo-header">
          <LogoBig />
        </div>
        <div className="logo-content">123</div>
        <div className="logo-footer">123</div>
      </div>
      <div className="content-display"></div>
    </div>
  );
};
export default HomePage;
