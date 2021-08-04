import React from "react";

import { FaBars } from "react-icons/fa";

import "./style.scss";

// const Edit

const CustomCard: React.FC<{ item?: any }> = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-toolbar">
        <div className="pr1 pt1 toolbar">{/* <FaBars /> */}</div>
      </div>
      <div className="card-content">
        <a href={item.photoURL} target="_blank" rel="noopener noreferrer">
          <img src={item.photoURL} alt="" className="img-content" />
        </a>
      </div>
    </div>
  );
};
export default CustomCard;
