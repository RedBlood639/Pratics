import React, { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import FacebookSvg from "../../../../assets/icons/SVG/FacebookSvg";
import GoogleSvg from "../../../../assets/icons/SVG/GoogleSvg";
import MailSvg from "../../../../assets/icons/SVG/MailSvg";
import "./style.scss";

const UserCard: React.FC<{ item?: any }> = ({ item }) => {
  const [letter, setLetter] = useState<string>("");
  useEffect(() => {
    if (item.name.indexOf(" ") === -1) {
      setLetter(item.name[0]);
    } else {
      setLetter(item.name[0] + item.name[item.name.indexOf(" ") + 1]);
    }
  }, []);
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
            <span className="font-weight-600 color-white bg-label">
              {letter}
            </span>
          </div>
          <div className="name md-label pt1">
            <span>{item.name}</span>
          </div>
          <div className="state pt1">
            <div className="offline"></div>
            <span className="label">I am online</span>
          </div>
        </div>
        <div className="card-content pt1">
          <button className="font-weight-600">WRITE MESSAGE</button>
        </div>
        <div className="card-footer">
          <div
            className={`signtype ${item.signtype === "Google" && "selected"}`}
          >
            <GoogleSvg />
          </div>
          <div
            className={`signtype ${item.signtype === "Facebook" && "selected"}`}
          >
            <FacebookSvg />
          </div>
          <div
            className={`signtype ${item.signtype === "Email" && "selected"}`}
          >
            <MailSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
