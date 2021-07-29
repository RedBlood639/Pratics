import React, { useEffect, useState } from "react";
import { m_user } from "../../../../types";
import SearchSvg from "../../../../assets/icons/SVG/SearchSvg";
import FilterSvg from "../../../../assets/icons/SVG/FilterSvg";
import DownarrowSvg from "../../../../assets/icons/SVG/DownarrowSvg";
import AddSvg from "../../../../assets/icons/SVG/AddSvg";
import "./style.scss";
//import material
const UserTable: React.FC<{ items?: any }> = ({ items }) => {
  const [Isdrop, setIsdrop] = useState<boolean>(false);
  const [Items, setItems] = useState<m_user[]>([]);
  useEffect(() => {
    setItems(items);
  }, [items]);
  return (
    <div className="usertable-container">
      <div className="usertable-header">
        <div className="searchbox">
          <SearchSvg />
          <input className="text" placeholder="Search..." />
        </div>
        <div className="btn-group">
          <button role="filter">
            <FilterSvg /> <span>Filter</span>
          </button>
          <button role="adduser">
            <AddSvg /> <span>Add User</span>
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="usertable-content">
        <table className="usertable">
          <thead>
            <tr>
              <td className="selectbox">
                <input type="checkbox" />
              </td>
              <td>USER</td>
              <td>ROLE</td>
              <td>LASTLOGIN</td>
              <td>JOINED DATE</td>
              <td>ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {Items.map((item: m_user) => {
              return (
                <tr key={item.id}>
                  <td className="selectbox">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="userfield">
                      <div className="avatar">
                        {item.photoURL ? (
                          <img src={item.photoURL} alt="avatar" />
                        ) : (
                          <div className="symbol">
                            <span className="color-white sm-label">
                              {item.name.indexOf(" ") === -1
                                ? item.name[0].toUpperCase()
                                : item.name[0].toUpperCase() +
                                  item.name[
                                    item.name.indexOf(" ") + 1
                                  ].toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="userinfo">
                        <span className="sp-name">{item.name}</span>
                        <span>{item.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{item.role}</td>
                  <td>
                    <div className="color-primary">Yesterday</div>
                  </td>
                  <td>{new Date(item.created_on).toLocaleString()}</td>
                  <td>
                    <button
                      className="actions"
                      onClick={() => setIsdrop(!Isdrop)}
                    >
                      <span>Actions</span>
                      <span>
                        <DownarrowSvg />
                      </span>
                    </button>
                    {/* <div className="dropdown">
                      <div>
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div> */}
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
