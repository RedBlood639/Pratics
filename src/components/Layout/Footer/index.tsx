import React from "react";
import "./style.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <span className="span-1">{`${new Date().getFullYear()}©`}</span>
        <span className="span-2">Mindmail</span>
      </div>
    </div>
  );
};
export default Footer;
