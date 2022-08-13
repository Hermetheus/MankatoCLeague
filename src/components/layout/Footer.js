import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import useBreakpoint, { SIZE_SM, SIZE_XS } from "../../hooks/useBreakpoint";
import { Teams } from "../../util/teams";
import { darkTheme, lightTheme } from "../../util/theme";
import FooterTeams from "./footer/FooterTeams";

const Footer = ({ theme }) => {
  const breakpoint = useBreakpoint();
  const Footer = styled.footer`
    background-color: ${theme === "light"
      ? lightTheme.navbar
      : darkTheme.navbar};
    color: ${theme === "light" ? "#2f2f2f" : "#f5f5f5"};
    padding: 1rem;
    text-align: center;
    position: absolute;
    width: 100%;
    clear: both;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  `;

  return (
    <Footer>
      <Row className="footer-teams">
        {Object.keys(Teams).map((key) => {
          return <FooterTeams teams={Teams[key]} />;
        })}
      </Row>
      <hr />
    </Footer>
  );
};

export default Footer;
