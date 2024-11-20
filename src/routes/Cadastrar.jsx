import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Cadastrar = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push({
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha, // Idealmente, criptografar essa senha antes de armazenar
        });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");
        setFormData({ nome: "", email: "", senha: "", confirmarSenha: "" });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <Card style={{ width: "100%", maxWidth: "400px" }}>
                <Card.Body>
                    <h3 className="text-center mb-4">Cadastro</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seu Nome Completo"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Seu Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Sua Senha"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirme sua Senha"
                                name="confirmarSenha"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Cadastrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cadastrar;