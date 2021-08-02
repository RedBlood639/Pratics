import React from "react";

import { FaBars } from "react-icons/fa";

import "./style.scss";

// const Edit

const CustomCard: React.FC<{ item?: any }> = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-toolbar">
        <div className="pr1 pt1 toolbar">
          <FaBars />
        </div>
      </div>
      <div className="card-content">
        <img src={item.photoURL} alt="" className="img-content" />
      </div>
    </div>
  );
};
export default CustomCard;
