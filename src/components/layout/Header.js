import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ toggleTheme }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Navbar</Link>
          </Navbar.Brand>
          <Nav>
            <Link to="/">home</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/standings">Standings</Link>
            <Link to="/tournamentBracket">Championship Bracket</Link>
            <Button onClick={toggleTheme} variant="primary">
              Primary
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
