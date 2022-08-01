import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { darkTheme, lightTheme } from "../../util/theme";
import { Image } from "react-bootstrap";
import banner from "../../images/m.png";

const Header = ({ toggleTheme, theme }) => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor:
            theme === "light" ? lightTheme.navbar : darkTheme.navbar,
        }}
        expand="md"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <h3>Mankato C League</h3>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="float-end">
              <Nav.Link>
                <Link to="/">home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/teams">Teams</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/standings">Standings</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/tournamentBracket">Championship Bracket</Link>
              </Nav.Link>
              <Nav.Link>
                <Button onClick={toggleTheme} variant="primary">
                  {theme === "light" ? "Light" : "Dark"}
                </Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      <Image
        fluid
        src={banner}
        style={{ height: "auto", width: "100%", maxHeight: "250px" }}
      />
    </>
  );
};

export default Header;
