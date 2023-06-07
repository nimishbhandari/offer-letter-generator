import React from "react";
import { Row, Col } from "react-bootstrap";

const OfferLetterFooter = ({ setPdf, exportTemplate, importTemplate }) => {
  return (
    <Row>
      <Col md={6}>
        <button
          className="btn"
          onClick={() => {
            setPdf(1);
          }}
        >
          Save Offer Letter
        </button>
      </Col>
      <Col md={3}>
        <button
          className="btn"
          onClick={() => {
            exportTemplate();
          }}
        >
          Export Template
        </button>
      </Col>
      <Col md={3}>
        <input
          type="button"
          value="Import Template"
          className="btn"
          onClick={() => {
            importTemplate();
          }}
        />
      </Col>
    </Row>
  );
};

export default OfferLetterFooter;
