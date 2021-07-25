import React from "react";
import { Link } from "react-router-dom";
import SearchSvg from "../../../../assets/icons/SVG/SearchSvg";
import "./style.scss";

const UserToolbar: React.FC<{ history?: any }> = ({ history }) => {
  return (
    <div className="toolbar-containter">
      <div className="search-group pl1">
        <div className="search">
          <input className="pl1" type="text" placeholder="Search..." />
          <SearchSvg />
        </div>
      </div>
      <div className="btngroup pr1">
        <Link to="/dashboard/adduser">
          <button className="font-weight-600">Add User</button>
        </Link>
      </div>
    </div>
  );
};

export default UserToolbar;
