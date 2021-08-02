import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUserlist } from "../../../store/userlist/actions";
import { AppState } from "../../../store";
//
import { t_pageproperty } from "../../../types";
import UserTable from "../../../components/Dashboard/UserManage/UserTable";
import * as dotenv from "dotenv";
import "./style.scss";
dotenv.config();
const UserManage: React.FC = () => {
  const dispatch = useDispatch();
  const userlist = useSelector((state: AppState) => state.userlist);
  const [users, setUsers] = useState<any>([]);
  const [pageproperty, setPageproperty] = useState<t_pageproperty>({
    perpage: 10,
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
    dispatch(GetUserlist(pageproperty));
  }, [pageproperty.currentpage, pageproperty.search]);

  useEffect(() => {
    setUsers(userlist.list);
    let pagecount: any = userlist.count;
    if (userlist.count % pageproperty.perpage !== 0) {
      pagecount = Math.floor(userlist.count / pageproperty.perpage) + 1;
    } else {
      pagecount = Math.floor(userlist.count / pageproperty.perpage);
    }
    setPageproperty({
      ...pageproperty,
      pagecount,
      totalcount: userlist.count,
    });
  }, [userlist]);
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
