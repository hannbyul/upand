import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

import { NavbarStyle, ButtonStyle } from "./NavigationHeader.style";

import logoImage from "../../../assets/images/logo.png";

const NavigationHeader = () => {
  return (
    <NavbarStyle expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="upand-logo"
          />
          upand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">link1</Nav.Link>
            <Nav.Link href="/">link2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <ButtonStyle variant="outline-primary">Search</ButtonStyle>
        </Form>
      </Container>
    </NavbarStyle>
  );
};

export default NavigationHeader;
