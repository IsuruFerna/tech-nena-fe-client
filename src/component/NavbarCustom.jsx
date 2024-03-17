import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "../assets/styles/nav.css";

import logo from "../assets/img/logo.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarCustom = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      className="bg-white-secondary shadow-btm p-0 sticky-top"
    >
      <Container className="navbar-cont">
        <Navbar.Brand
          href="#home"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              active={location.pathname === "/" ? true : false}
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="bi bi-house-door-fill me-1"></i>
              Home
            </Nav.Link>
            <Nav.Link active={location.pathname === "/profile" ? true : false}>
              <i className="bi bi-person-fill me-1"></i>
              Profile
            </Nav.Link>
            <Nav.Link active={location.pathname === "/contacts" ? true : false}>
              <i className="bi bi-info-circle-fill me-1"></i>
              Contact us
            </Nav.Link>
          </Nav>
          <Button
            className="rounded-4 shadow-btm mb-md-o mb-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
