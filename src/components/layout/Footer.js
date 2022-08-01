import React from "react";
import { Image } from "react-bootstrap";
import styled, { useTheme } from "styled-components";
import banner from "../../images/m.png";

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
        <a href="https://www.mankato.com/">Mankato.com</a>
      </p>
    </Footer>
  );
};

export default Footer;
