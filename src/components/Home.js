import React from "react";
import { Container, Image } from "react-bootstrap";
import styled, { useTheme } from "styled-components";
import banner from "../images/m.png";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Container fluid theme={theme}>
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Home;
