import { Container, Navbar, Nav } from "react-bootstrap";
import { BellFill, Grid3x3Gap } from "react-bootstrap-icons";

export function UnauthenticatedNav() {
  return (
    <Navbar className="shadow-sm" expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="text-muted">
          <strong>SAPIEN SYSTEMS</strong>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#">
            <BellFill />{" "}
          </Nav.Link>
          <Nav.Link href="#">
            <Grid3x3Gap />{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
