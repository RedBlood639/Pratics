import React, { useState } from "react";
import "./style.scss";
import BeforeSvg from "../../../../assets/icons/SVG/BeforeSvg";
import NextSvg from "../../../../assets/icons/SVG/NextSvg";
import EllipsSvg from "../../../../assets/icons/SVG/EllipsSvg";

import Pagination from "../Pagination";

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

const UserFooter: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="pagination ml2">
        {/* <Pagination
          activePage={1}
          pagecount={page?.pagecount}
          totalcount={page?.totalcount}
          prevBtn={PrevBtn}
          nextBtn={NextBtn}
          ellipsis={Ellipsis}
        /> */}
      </div>
      <div className="controller mr1">
        <div className="pageState mr1 label">
          {"Displaying 16 of 100 records"}
        </div>
        <div>
          <select className="pl1 font-weight-600">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
