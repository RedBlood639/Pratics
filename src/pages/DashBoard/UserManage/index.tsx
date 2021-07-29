import React, { useEffect, useState } from "react";

// import UserCard from "../../../components/Dashboard/UserManage/UserCard";
import UserToolbar from "../../../components/Dashboard/UserManage/UserToolbar";
import UserTable from "../../../components/Dashboard/UserManage/UserTable";
// import UserFooter from "../../../components/Dashboard/UserManage/UserFooter";
import "./style.scss";
//
import apiClient from "../../../components/apiClient";
import * as dotenv from "dotenv";
import { m_user } from "../../../types";
dotenv.config();
const UserManage: React.FC = () => {
  const [users, setUsers] = useState<m_user[]>([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVERURL);
    apiClient
      .get("/admin/getusers")
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((e) => {
        console.log("something went wrong");
      });
  }, []);
  return (
    <div className="manage-container">
      <div className="manage-toolbar">
        <UserToolbar />
      </div>
      <div className="manage-body">
        <div className="manage-content">
          <UserTable items={users} />
        </div>
      </div>
    </div>
  );
};

export default UserManage;
