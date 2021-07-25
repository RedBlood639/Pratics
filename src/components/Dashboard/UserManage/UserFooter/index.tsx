import React, { useState } from "react";
import "./style.scss";
import DoubleBeforeSvg from "../../../../assets/icons/SVG/DoubleBeforeSvg";
import BeforeSvg from "../../../../assets/icons/SVG/BeforeSvg";
import NextSvg from "../../../../assets/icons/SVG/NextSvg";
import DoubleNextSvg from "../../../../assets/icons/SVG/DoubleNextSvg";

interface Pagination {
  count: number;
  currentpage: number;
  totalpage: number;
  pagegroup: number[];
}

interface Record {
  total: number;
  current: number;
}
const UserFooter: React.FC = () => {
  const [paination, setpaination] = useState<Pagination>({
    count: 5,
    currentpage: 1,
    totalpage: 20,
    pagegroup: [1, 2, 3, 4, 5],
  });

  const [record, setRecord] = useState<Record>({
    total: 100,
    current: 16,
  });
  const goToFirstPage = (): void => {
    console.log(`first`);
  };
  const goToPreviousPage = (): void => {
    console.log(`previous`);
  };
  const goToNextPage = (): void => {
    console.log(`next`);
  };
  const goToLastPage = (): void => {
    console.log(`last`);
  };
  return (
    <div className="footer-container">
      <div className="pagination ml2">
        <button>
          <DoubleBeforeSvg />
        </button>
        <button onClick={goToPreviousPage}>
          <BeforeSvg />
        </button>
        {paination.pagegroup.map((item: number) => {
          return <button key={item}>{item}</button>;
        })}
        <button onClick={goToNextPage}>
          <NextSvg />
        </button>
        <button>
          <DoubleNextSvg />
        </button>
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
