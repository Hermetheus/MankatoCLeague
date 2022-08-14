import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { darkTheme, lightTheme } from "../../util/theme";
import { Image } from "react-bootstrap";
import banner from "../../images/m.png";
import headerHomeImage from "../../images/MCL-removebg-preview.png";

const Header = ({ theme }) => {
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
            <Link className="ml-3" to="/">
              <Image
                src={headerHomeImage}
                style={{ width: "100px", height: "100px" }}
              />
            </Link>
          </Navbar.Brand>
          <Nav className="nav d-flex">
            <Navbar.Toggle
              style={{ backgroundColor: lightTheme.accent }}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse className="float-end">
              <Nav.Item>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/teams">Teams</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/schedule">Schedule</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/standings">Standings</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/photos">Photos</Link>
              </Nav.Item>
              <Nav.Link></Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      <Image
        fluid
        src={banner}
        style={{ height: "auto", width: "100%", maxHeight: "200px" }}
      />
    </>
  );
};

export default Header;
