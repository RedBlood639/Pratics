import React from "react";

import { FaBars } from "react-icons/fa";
import FacebookSvg from "../../../../assets/icons/SVG/FacebookSvg";
import GoogleSvg from "../../../../assets/icons/SVG/GoogleSvg";
import MailSvg from "../../../../assets/icons/SVG/MailSvg";
import "./style.scss";

const UserCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card-toolbar">
        <div className="pr1 pt1 toolbar">
          <FaBars />
        </div>
      </div>
      <div className="card-body">
        <div className="card-header pt1">
          <div className="symbol">
            <span className="font-weight-600 color-white bg-label">WD</span>
          </div>
          <div className="name md-label pt1">
            <span>Wong Dong</span>
          </div>
          <div className="state pt1">
            <div className="online"></div>
            <span className="label">I am online</span>
          </div>
        </div>
        <div className="card-content pt1">
          <button className="font-weight-600">WRITE MESSAGE</button>
        </div>
        <div className="card-footer">
          <div className="google">
            <GoogleSvg />
          </div>
          <div className="facebook">
            <FacebookSvg />
          </div>
          <div className="email">
            <MailSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
