import React from "react";
import { FaCircleNotch } from "react-icons/all";
import "./index.style.scss";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <FaCircleNotch size={48} />
      <span>Loading...</span>
    </div>
  );
};
export default Loading;
