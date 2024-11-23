import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Navbar style={{ backgroundColor: "#59b16b" }} expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Energia Solar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                        <Nav.Link as={Link} to="/solucao">Solução</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <span className="navbar-text text-light me-3">Olá, {user}!</span>
                                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    <Button variant="outline-light">Login</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/cadastrar">
                                    <Button variant="outline-light">Cadastrar</Button>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
