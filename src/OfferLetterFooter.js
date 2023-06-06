import React from "react";

const OfferLetterFooter = ({ setPdf, exportTemplate, importTemplate }) => {
  return (
    <div className="container-footer">
      <div className="footer-content">
        <button
          className="btn"
          onClick={() => {
            setPdf(1);
          }}
        >
          Save Offer Letter
        </button>
      </div>
      <div className="footer-content">
        <button
          className="btn"
          onClick={() => {
            exportTemplate();
          }}
        >
          Export Template
        </button>
        <div>
          <input
            type="button"
            value="Import Template"
            className="btn"
            onClick={() => {
              importTemplate();
            }}
          />
        </div>
      </div>
      {/* Import Template</button> */}
    </div>
  );
};

export default OfferLetterFooter;
