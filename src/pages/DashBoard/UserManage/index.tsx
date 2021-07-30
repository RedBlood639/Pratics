import React, { useEffect, useState } from "react";
import UserTable from "../../../components/Dashboard/UserManage/UserTable";
import apiClient from "../../../components/apiClient";
import * as dotenv from "dotenv";
import { t_user, t_pageproperty } from "../../../types";
import "./style.scss";
dotenv.config();
const UserManage: React.FC = () => {
  const [users, setUsers] = useState<t_user[]>([]);
  const [pageproperty, setPageproperty] = useState<t_pageproperty>({
    perpage: 5,
    totalcount: 0,
    pagecount: 0,
    currentpage: 1,
    search: "",
  });
  const handleSearch = (str: string) => {
    setPageproperty({ ...pageproperty, search: str, currentpage: 1 });
  };
  const handlePage = (currentpage: number) => {
    setPageproperty({ ...pageproperty, currentpage });
  };
  useEffect(() => {
    apiClient
      .get(`/admin/getusers`, { params: pageproperty })
      .then((res) => {
        console.log(pageproperty);
        setUsers(res.data.items);
        let data: number = res.data.count;
        if (res.data.count % pageproperty.perpage !== 0) {
          data = Math.floor(res.data.count / pageproperty.perpage) + 1;
        } else {
          data = Math.floor(res.data.count / pageproperty.perpage);
        }
        setPageproperty({
          ...pageproperty,
          pagecount: data,
          totalcount: res.data.count,
        });
      })
      .catch((e) => {
        console.log("something went wrong");
      });
  }, [pageproperty.search, pageproperty.currentpage]);
  return (
    <div className="manage-container">
      <div className="manage-body">
        <div className="manage-content">
          <UserTable
            items={users}
            page={pageproperty}
            handleSearch={handleSearch}
            handlePage={handlePage}
          />
        </div>
      </div>
    </div>
  );
};

export default UserManage;
