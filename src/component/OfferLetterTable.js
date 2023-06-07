import React from "react";

const OfferLetterTable = ({
  varName,
  setVarName,
  varValue,
  setVarValue,
  activeState,
  setActiveState,
  recruiterName,
}) => {
  return (
    <div className="offer-letter-table">
      <div className="table-content heading">
        <h2>Name</h2>
        <h2>Value</h2>
        <h2 style={{ opacity: "0.0" }}>None</h2>
      </div>
      {varName.map((ele, key) => {
        return activeState[key] ? (
          <>
            <div className="table-content">
              <input
                type="text"
                className="textbox"
                value={varName[key]}
                placeholder="Enter the Variable Name"
                onChange={(e) => {
                  let newVarName = [...varName];
                  newVarName[key] = e.target.value;
                  setVarName(newVarName);
                }}
              />
              <input
                type="text"
                className="textbox"
                disabled={activeState[key] ? "" : "disabled"}
                value={varValue[key]}
                placeholder="Enter the Variable Value"
                onChange={(e) => {
                  let newVarValue = [...varValue];
                  newVarValue[key] = e.target.value;
                  setVarValue(newVarValue);
                }}
              />
              <button
                className="btn btn2"
                onClick={() => {
                  let curState = [...activeState];
                  curState[key] = 0;
                  setActiveState(curState);
                }}
              >
                <span className="text">Delete</span>
              </button>
            </div>
          </>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default OfferLetterTable;
