import React from "react";
import styled from "styled-components";
import useBreakpoint, { SIZE_SM, SIZE_XS } from "../../hooks/useBreakpoint";
import { Teams } from "../../util/teams";
import { darkTheme, lightTheme } from "../../util/theme";

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
      <div className="d-flex justify-content-center align-items-center">
        {Object.keys(Teams).map((key) => {
          return (
            breakpoint !== SIZE_SM &&
            SIZE_XS && <div className="footer-teams"> {Teams[key]} </div>
          );
        })}
      </div>
      <hr />
    </Footer>
  );
};

export default Footer;
