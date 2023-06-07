import React from "react";
import "./offerLetter.css";
const OfferLetterDisplay = ({
  varName,
  setVarName,
  varValue,
  setVarValue,
  activeState,
  setActiveState,
  recruiterName,
  companyName,
}) => {
  return (
    <div className="offer-letter-display">
      <div className="offer-letter">
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Job Offer
        </h1>

        <p>
          Dear{" "}
          <span
            className="recipient-name"
            onClick={() => {
              let curState = [...activeState];
              curState[0] = 1;
              setActiveState(curState);
            }}
          >
            <input
              type="text"
              className="offer-letter-textbox"
              value={varValue[0]}
              disabled
              placeholder="Candidate's Name"
              onChange={(e) => {
                let newVarValue = [...varValue];
                newVarValue[0] = e.target.value;
                setVarValue(newVarValue);
              }}
            />
          </span>
          ,
        </p>

        <p>
          We are pleased to offer you the position of{" "}
          <span
            className="position"
            onClick={() => {
              let curState = [...activeState];
              curState[1] = 1;
              setActiveState(curState);
            }}
          >
            <input
              type="text"
              className="offer-letter-textbox"
              value={varValue[1]}
              disabled
              placeholder="Job's Title"
              onChange={(e) => {
                let newVarValue = [...varValue];
                newVarValue[1] = e.target.value;
                setVarValue(newVarValue);
              }}
            />
          </span>{" "}
          at <span className="company-name">{companyName}</span>. The terms and
          conditions of your employment are as follows:
        </p>

        <ul>
          <li className="offer-letter-bullet">
            Role:{" "}
            <span className="start-date">
              <span
                className="position"
                onClick={() => {
                  let curState = [...activeState];
                  curState[1] = 1;
                  setActiveState(curState);
                }}
              >
                <input
                  type="text"
                  className="offer-letter-textbox"
                  value={varValue[1]}
                  disabled
                  placeholder="Job's Title"
                  onChange={(e) => {
                    let newVarValue = [...varValue];
                    newVarValue[1] = e.target.value;
                    setVarValue(newVarValue);
                  }}
                />
              </span>
            </span>
          </li>
          <li className="offer-letter-bullet">
            Salary:{" "}
            <span
              className="salary"
              onClick={() => {
                let curState = [...activeState];
                curState[2] = 1;
                setActiveState(curState);
              }}
            >
              $
              <input
                type="text"
                className="offer-letter-textbox"
                value={varValue[2]}
                disabled
                placeholder="Enter the CTC"
                onChange={(e) => {
                  let newVarValue = [...varValue];
                  newVarValue[2] = e.target.value;
                  setVarValue(newVarValue);
                }}
              />{" "}
              per year
            </span>
          </li>
          <li className="offer-letter-bullet">
            Benefits:{" "}
            <span className="benefits">
              Health insurance, paid time off, retirement plan
            </span>
          </li>
        </ul>

        <p>
          Please review this offer carefully and sign the acceptance letter
          attached to this email. We look forward to welcoming you to our team.
        </p>

        <p>Sincerely,</p>

        <p className="signature">{recruiterName}</p>
        <p>HR Manager, {companyName}</p>
      </div>
    </div>
  );
};

export default OfferLetterDisplay;
