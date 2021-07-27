import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./style.scss";

const AddUser: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sections = [
    { title: "Account" },
    { title: "Payment" },
    { title: "Avatar" },
  ];

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="form-container">
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
          <div className="account-container">
            <div className="account-header">{"SignUp User"}</div>
            <br />
            <div className="account-content">
              <input type="text" placeholder="Input user's name" />
              <input type="text" placeholder="Input user's password" />
              <input type="text" placeholder="Confirm user's password" />
            </div>
            <br />
            <div className="account-footer">
              <button onClick={next} role="next">
                Next
              </button>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <button onClick={prev} role="before">
              Back
            </button>
            <button onClick={next} role="next">
              Next
            </button>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <button onClick={prev}>Back</button>
            <button>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
