import React from "react";
import "./style.scss";
import { m_user } from "../../../../types";
//import material

const UserTable: React.FC<{ items?: any }> = ({ items }) => {
  return (
    <div className="usertable-container">
      <div className="usertable-content">
        <table className="usertable">
          <thead className="usertalbe-header">
            <tr>
              <th>ID</th>
              <th style={{ width: "3%" }}>#</th>
              <th>USERNAME</th>
              <th>USEREMAIL</th>
              <th>CREATEDATE</th>
              <th>REMOVEDATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="usertalbe-body">
            {items.map((item: m_user, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="state">
                      <div className={`online`}></div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {new Date(item.created_on).getFullYear() +
                      "-" +
                      new Date(item.created_on).getMonth() +
                      "-" +
                      new Date(item.created_on).getDate() +
                      " " +
                      new Date(item.created_on).getHours() +
                      ":" +
                      new Date(item.created_on).getMinutes() +
                      ":" +
                      new Date(item.created_on).getSeconds()}
                  </td>
                  <td>
                    {item.remove_on == null
                      ? ""
                      : new Date(item.remove_on).getFullYear() +
                        "-" +
                        new Date(item.remove_on).getMonth() +
                        "-" +
                        new Date(item.remove_on).getDate() +
                        " " +
                        new Date(item.remove_on).getHours() +
                        ":" +
                        new Date(item.remove_on).getMinutes() +
                        ":" +
                        new Date(item.remove_on).getSeconds()}
                  </td>
                  <td>
                    <div className="avtions">
                      <button role="edit">EDIT</button>
                      <button role="delete">DELLET</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
