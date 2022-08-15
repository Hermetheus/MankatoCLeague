import React from "react";
import { Row } from "react-bootstrap";
import { Teams } from "../../util/teams";
import { lightTheme } from "../../util/theme";
import FooterTeams from "./footer/FooterTeams";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="footer-teams">
        {Object.keys(Teams).map((key) => {
          return <FooterTeams key={key} teams={Teams[key]} />;
        })}
      </Row>
      <hr
        style={{
          color: lightTheme.accent,
        }}
      />
    </div>
  );
};

export default Footer;
