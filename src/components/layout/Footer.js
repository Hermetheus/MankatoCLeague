import React from "react";
import { Button, Row } from "react-bootstrap";
import { Teams } from "../../util/teams";
import { darkTheme, lightTheme } from "../../util/theme";
import FooterTeams from "./footer/FooterTeams";

const Footer = ({ toggleTheme, theme }) => {
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
      <div>
        <Button
          onClick={toggleTheme}
          variant="primary"
          style={{
            marginTop: "-4px",
            color: `${lightTheme.accent}`,
            backgroundColor:
              theme === "light" ? lightTheme.body : darkTheme.body,
            borderColor: `${lightTheme.accent}`,
          }}
        >
          {theme === "light" ? "Light" : "Dark"}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
