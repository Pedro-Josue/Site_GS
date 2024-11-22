import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", senha: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const user = usuarios.find(
            (u) => u.email === credentials.email && u.senha === credentials.senha
        );

        if (user) {
            login(user.nome);
            navigate("/");
        } else {
            alert("Usuário ou senha incorretos!");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "85vh" }}>
            <Card style={{ width: "100%", maxWidth: "400px" }}>
                <Card.Body>
                    <h3 className="text-center mb-4">Login</h3>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Seu Email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Sua Senha"
                                name="senha"
                                value={credentials.senha}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Entrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;