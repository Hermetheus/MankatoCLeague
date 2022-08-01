import React from "react";
import { Container } from "react-bootstrap";

const Home = ({ theme }) => {
  return (
    <>
      <Container fluid theme={theme}>
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Home;
