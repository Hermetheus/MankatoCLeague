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
          <Navbar.Brand className="nav-links">
            <Link className="nav-links" to="/">
              <h3 className="btn">Mankato C League</h3>
            </Link>
          </Navbar.Brand>
          <Nav className="nav d-flex">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="float-end">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/teams">Teams</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/schedule">Schedule</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/standings">Standings</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/photos">Photos</Link>
              </Nav.Link>
              <Nav.Link>
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
