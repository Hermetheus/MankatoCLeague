import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import { darkTheme, lightTheme } from "../../util/theme";
import banner from "../../images/m.png";
import { useLocation } from "react-router";
import headerHomeImage from "../../images/MCL-removebg-preview.png";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();

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
              <Nav.Item className={location.pathname === "/" && "active"}>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item className={location.pathname === "/teams" && "active"}>
                <Link to="/teams">Teams</Link>
              </Nav.Item>
              <Nav.Item
                className={location.pathname === "/schedule" && "active"}
              >
                <Link to="/schedule">Schedule</Link>
              </Nav.Item>
              <Nav.Item
                className={location.pathname === "/standings" && "active"}
              >
                <Link to="/standings">Standings</Link>
              </Nav.Item>
              <Nav.Item className={location.pathname === "/photos" && "active"}>
                <Link to="/photos">Photos</Link>
              </Nav.Item>
              <Nav.Item>
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
                  {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
                </Button>
              </Nav.Item>
              <Nav.Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/groups/571223759607584/"
                >
                  <AiFillFacebook size={"2em"} />
                </a>
              </Nav.Item>
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
