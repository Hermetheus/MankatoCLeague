import React from "react";
import styled, { useTheme } from "styled-components";

const Footer = () => {
  const { theme } = useTheme();
  const Footer = styled.footer`
    background-color: ${theme === "light" ? "#f5f5f5" : "#2f2f2f"};
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
      {" "}
      <p>
        {" "}
        <a href="https://www.mankatocleague.com/">MankatoCLeague.com</a>
      </p>
    </Footer>
  );
};

export default Footer;
