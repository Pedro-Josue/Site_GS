import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Energia Solar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/solucao">Solução</Nav.Link>
            </Nav>
            <Nav className="ms-auto"> 
              <Nav.Link href="/login">
                <Button variant="outline-light">Login</Button>
              </Nav.Link>
              <Nav.Link href="/cadastrar">
                <Button variant="outline-light">Cadastrar</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
