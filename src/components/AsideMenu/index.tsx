import React from "react";
import MenuItem from "../../assets/icons/SVG/MenuItem";
import "./style.scss";

const AsdieMunu: React.FC<{ history?: any }> = ({ history }) => {
  return (
    <div className="aside-containter">
      <div className="menu-title font-weight-700 color-white sm-label pl1">
        <span>Mindmail</span>
      </div>
      <div className="menu-content pt2 color-gray-2 ">
        <div className="menu-section label pl1">APPLICATIONS</div>
        <div className="menu-items">
          <div className="menu-item">
            <a className="pl1" href="/dashboad/home">
              Home
            </a>
          </div>
          <div className="menu-item">
            <a className="pl1" href="/dashboad/usermanage">
              UserManagement
            </a>
          </div>
          <div className="menu-item">
            <a className="pl1">PromoCode</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsdieMunu;
