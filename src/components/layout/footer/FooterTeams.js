import React from "react";
import { Col } from "react-bootstrap";
const FooterTeams = ({ teams }) => {
  return (
    <Col>
      <div className="footer-team">{teams}</div>
    </Col>
  );
};

export default FooterTeams;
