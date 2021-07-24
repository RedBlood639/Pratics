import React from "react";

import UserCard from "../../.../../../components/UserCard";
import UserToolbar from "../../../components/UserToolbar";
import "./style.scss";

const UserManage: React.FC = () => {
  return (
    <div className="manage-container">
      <div className="manage-toolbar">
        <UserToolbar />
      </div>
      <div className="manage-content pl1 pr1 pt1 mb1 ">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default UserManage;
