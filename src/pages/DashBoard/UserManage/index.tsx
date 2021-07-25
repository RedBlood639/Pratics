import React from "react";

import UserCard from "../../../components/Dashboard/UserManage/UserCard";
import UserToolbar from "../../../components/Dashboard/UserManage/UserToolbar";
import UserFooter from "../../../components/Dashboard/UserManage/UserFooter";
import "./style.scss";

const UserManage: React.FC = () => {
  return (
    <div className="manage-container">
      <div className="manage-toolbar">
        <UserToolbar />
      </div>
      <div className="manage-body">
        <div className="manage-content">
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
      <div className="manage-footer">
        <UserFooter />
      </div>
    </div>
  );
};

export default UserManage;
