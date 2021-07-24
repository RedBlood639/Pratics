import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const AsdieMunu: React.FC<{ history?: any }> = ({ history }) => {
  return (
    <div className="aside-containter">
      <div className="menu-title font-weight-700 color-white sm-label pl1">
        <span>Mindmail</span>
      </div>
      <div className="menu-content pt2 color-gray-2 ">
        <div className="label pl1">DASHBOARD</div>
        <div className="menu-items">
          <Link className="link" to="/dashboard">
            <div className="menu-item">
              <span className="item">Home</span>
            </div>
          </Link>
        </div>
        <div className="label pl1 pt1">APPLICATIONS</div>
        <div className="menu-items">
          <Link className="link" to="/dashboard/usermanage">
            <div className="menu-item">
              <span className="item">UserManagement</span>
            </div>
          </Link>
          <Link className="link" to="#">
            <div className="menu-item">
              <span className="item">PromoCode</span>
            </div>
          </Link>
        </div>

        <div className="menu-items signout">
          <Link className="link" to="/">
            <div className="menu-item">
              <span className="item">Log out</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsdieMunu;
