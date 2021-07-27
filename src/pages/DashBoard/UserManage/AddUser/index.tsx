import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./style.scss";

const AddUser: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sections = [
    { title: "Account" },
    { title: "Payment" },
    { title: "Review" },
  ];

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="form-containter">
      <div className="form-content">
        <div className="stepper">
          <Stepper
            steps={sections}
            activeStep={currentPage}
            completeColor="#10889d"
            completeBarColor="#10889d"
          />
        </div>
        <div className="stepper-content">
          {currentPage === 1 && (
            <>
              <button onClick={next}>Next</button>
            </>
          )}

          {currentPage === 2 && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={prev}>Back</button>
                <button onClick={next}>Next</button>
              </div>
            </>
          )}

          {currentPage === 3 && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={prev}>Back</button>
                <button>Finish</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUser;
