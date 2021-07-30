import React, { useEffect, useState, useRef } from "react";
import { t_user } from "../../../../types";
import Pagination from "../Pagination";

import SearchSvg from "../../../../assets/icons/SVG/SearchSvg";
import DownarrowSvg from "../../../../assets/icons/SVG/DownarrowSvg";
import AddSvg from "../../../../assets/icons/SVG/AddSvg";
import BeforeSvg from "../../../../assets/icons/SVG/BeforeSvg";
import EllipsSvg from "../../../../assets/icons/SVG/EllipsSvg";
import NextSvg from "../../../../assets/icons/SVG/NextSvg";
import "./style.scss";
//import material

const PrevBtn = (props: any) => (
  <button type="button" {...props}>
    <BeforeSvg />
  </button>
);

const NextBtn = (props: any) => (
  <button type="button" {...props}>
    <NextSvg />
  </button>
);
const Ellipsis = () => (
  <button className="ellipsis">
    <EllipsSvg />
  </button>
);

const SelectBtn: React.FC = () => {
  const [isdrop, setIsdrop] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setIsdrop(false);
  };

  useEffect(() => {
    if (isdrop) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isdrop]);

  return (
    <>
      <button className="actions" onClick={() => setIsdrop(!isdrop)}>
        <span>Actions</span>
        <span>
          <DownarrowSvg />
        </span>
      </button>
      <div
        className={`${isdrop ? "active" : "inactive"} dropdownlist`}
        ref={dropMenuRef}
      >
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

const UserTable: React.FC<{
  items?: any;
  page?: any;
  handleSearch?: any;
  handlePage?: any;
}> = ({ items, page, handleSearch, handlePage }) => {
  const [isshow, setIsshow] = useState<boolean>(false);
  const handleCloseModal = (e: any) => {
    setIsshow(false);
  };
  return (
    <div className="usertable-container">
      <div className="usertable-header">
        <div className="searchbox">
          <SearchSvg />
          <input
            className="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button role="adduser" onClick={() => setIsshow(!isshow)}>
            <AddSvg /> <span>Add User</span>
          </button>
        </div>
      </div>
      <br />
      <div className="usertable-content">
        <table className="usertable">
          <thead>
            <tr>
              <td className="selectbox">No</td>
              <td>USER</td>
              <td>ROLE</td>
              <td>LASTLOGIN</td>
              <td>JOINED DATE</td>
              <td>ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item: t_user, index: number) => {
              return (
                <tr key={item.id}>
                  <td className="selectbox">
                    {index + 1 + page.perpage * (page.currentpage - 1)}
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
                    <SelectBtn />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="usertable-pagination">
        <Pagination
          activePage={page?.currentpage}
          handlePage={handlePage}
          pagecount={page?.pagecount}
          totalcount={page?.totalcount}
          prevBtn={PrevBtn}
          nextBtn={NextBtn}
          ellipsis={Ellipsis}
        />
      </div>
      {/*  */}
    </div>
  );
};

export default UserTable;
