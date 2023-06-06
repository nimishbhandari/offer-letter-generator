import React, { useState } from "react";
import BasicDocument from "./BasicDocument";

import OfferLetterDisplay from "./OfferLetterDisplay";
import OfferLetterTable from "./OfferLetterTable";
import OfferLetterFooter from "./OfferLetterFooter";

const OfferLetterGenerator = () => {
  let [pdf, setPdf] = useState(0);
  const recruiterName = "Equip";
  const companyName = "Equip";
  const [varName, setVarName] = useState([
    "Candidate Name",
    "Role",
    "Offered CTC",
  ]);
  const [varValue, setVarValue] = useState(["Ratnesh", "SDE", 2500000]);
  const [activeState, setActiveState] = useState([0, 0, 0]);

  const exportTemplate = () => {
    const template = {};
    varName.forEach((name, index) => {
      template[name] = varValue[index];
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(template, null, 2)], {
        type: "text/plain",
      })
    );
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const importTemplate = () => {
    const a = document.createElement("input");
    a.setAttribute("type", "file");
    a.setAttribute("id", "template-input");

    document.body.appendChild(a);
    a.onchange = () => {
      const selectedFile = a.files[0];
      const reader = new FileReader();

      // Define the function to be executed when the file is loaded
      reader.onload = function (e) {
        const contents = e.target.result;
        const data = JSON.parse(contents);
        setVarName(Object.keys(data));
        const value = [];
        varName.forEach((ele) => {
          value.push(data[ele]);
        });
        setVarValue(value);
        // Here, you can do further processing with the file contents
      };

      // Read the file as text
      reader.readAsText(selectedFile);
    };
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      {pdf == 0 && (
        <>
          <div className="page-heading">Offer Letter Builder</div>
          <div className="container">
            <OfferLetterDisplay
              varName={varName}
              setVarName={setVarName}
              varValue={varValue}
              setVarValue={setVarValue}
              activeState={activeState}
              setActiveState={setActiveState}
              recruiterName={recruiterName}
              companyName={companyName}
            />
            <OfferLetterTable
              varName={varName}
              setVarName={setVarName}
              varValue={varValue}
              setVarValue={setVarValue}
              activeState={activeState}
              setActiveState={setActiveState}
              recruiterName={recruiterName}
              companyName={companyName}
            />
          </div>
          <OfferLetterFooter
            setPdf={setPdf}
            exportTemplate={exportTemplate}
            importTemplate={importTemplate}
          />
        </>
      )}
      {pdf == 1 && (
        <BasicDocument
          varValue={varValue}
          recruiterName={recruiterName}
          companyName={companyName}
        />
      )}
    </>
  );
};

export default OfferLetterGenerator;
