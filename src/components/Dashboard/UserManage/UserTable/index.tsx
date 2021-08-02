import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { EditUser, DeleteUser } from "../../../../store/userlist/actions";

//
import SearchSvg from "../../../../assets/icons/SVG/SearchSvg";
import DownarrowSvg from "../../../../assets/icons/SVG/DownarrowSvg";
import BeforeSvg from "../../../../assets/icons/SVG/BeforeSvg";
import EllipsSvg from "../../../../assets/icons/SVG/EllipsSvg";
import NextSvg from "../../../../assets/icons/SVG/NextSvg";
import { Modal } from "react-bootstrap";
import Pagination from "../Pagination";
import "./style.scss";
import apiClient from "../../../apiClient";
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

const SelectBtn: React.FC<{ item: any }> = ({ item }) => {
  const dispatch = useDispatch();
  const [isdrop, setIsdrop] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLInputElement>(null);
  const [isshow, setIsshow] = useState<boolean>(false);
  const [isRole, setIsRole] = useState<string>("");

  useEffect(() => {
    setIsRole(item.role === "Admin" ? "Admin" : "Common");
  }, [isdrop]);
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

  const handleDiscard = (flag: boolean) => {
    setIsshow(flag);
  };

  const handleSubmit = () => {
    apiClient
      .put("/admin/edituser", { id: item.id, role: isRole })
      .then((res) => {
        dispatch(EditUser(item.id, isRole));
        handleDiscard(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setIsdrop(false);
  };

  const handleDelete = () => {
    document.removeEventListener("mousedown", handleClickOutside);
    apiClient
      .delete("/admin/deleteuser", { params: { id: item.id } })
      .then((res) => {
        dispatch(DeleteUser(item.id));
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
          <button onClick={() => handleDiscard(true)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>

      <Modal
        animation={false}
        show={isshow}
        onHide={setIsshow}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <span>Edit User</span>
        </Modal.Header>
        <Modal.Body>
          <div className="div-avatar">
            {item.photoURL ? (
              <img src={item.photoURL} alt="avatar" />
            ) : (
              <div className="symbol">
                <span className="color-white large-label">
                  {item.name.indexOf(" ") === -1
                    ? item.name[0].toUpperCase()
                    : item.name[0].toUpperCase() +
                      item.name[item.name.indexOf(" ") + 1].toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="div-userinfo">
            <div className="div-name">
              <p>Full Name</p>
              <input type="text" value={item.name} disabled />
            </div>
            <div className="div-email">
              <p>Email</p>
              <input type="text" value={item.email} disabled />
            </div>
          </div>
          <p>Role</p>
          <div className="div-role">
            <div className="div-checkbox">
              <input
                type="radio"
                name="role"
                checked={isRole === "Admin" ? true : false}
                onChange={() => setIsRole("Admin")}
                // defaultChecked={true}
              />
              <div>
                <span className="span-1">Administrator</span>
                <span className="span-2">
                  Best for business owners and company administrators
                </span>
              </div>
            </div>
            <div className="div-checkbox">
              <input
                type="radio"
                name="role"
                // defaultChecked={false}
                checked={isRole === "Admin" ? false : true}
                onChange={() => setIsRole("Common")}
              />
              <div>
                <span className="span-1">Customer</span>
                <span className="span-2">
                  Best for business owners and company customer
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button role="discard" onClick={() => handleDiscard(false)}>
            Discard
          </button>
          <button role="submit" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const UserTable: React.FC<{
  items?: any;
  page?: any;
  handleSearch?: any;
  handlePage?: any;
}> = ({ items, page, handleSearch, handlePage }) => {
  return (
    <>
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
                <td>REMOVE DATE</td>
                <td>ACTIONS</td>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any, index: number) => {
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
                    <td>
                      {item.role === "Admin" ? "Administrator" : "Customer"}
                    </td>
                    <td>
                      <div className="color-primary">Yesterday</div>
                    </td>
                    <td>{new Date(item.created_on).toLocaleString()}</td>
                    <td>
                      {item.state === 2
                        ? new Date(item.remove_on).toLocaleString()
                        : "- - -"}
                    </td>
                    <td>
                      {item.state === 1 ? (
                        <SelectBtn item={item} />
                      ) : (
                        <div className="color-danger">Deleted</div>
                      )}
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
      </div>
    </>
  );
};

export default UserTable;
