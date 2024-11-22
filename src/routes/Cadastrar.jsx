import { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Função de validação de CPF
function validarCPF(strCPF) {
    strCPF = strCPF.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (strCPF.length !== 11 || /^(\d)\1{10}$/.test(strCPF)) return false;

    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(strCPF.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(strCPF.substring(10, 11))) return false;

    return true;
}

const Cadastrar = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        cpf: "",  // Campo de CPF
    });
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

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

        // Valida CPF
        if (!validarCPF(formData.cpf)) {
            alert("CPF inválido!");
            return;
        }

        // Salva o usuário no localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const novoUsuario = {
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
            cpf: formData.cpf,  // Armazena o CPF
        };
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Autentica o usuário automaticamente
        login(formData.nome);

        navigate("/"); // Redireciona para a página inicial
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
                        <Form.Group className="mb-3" controlId="formCPF">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seu CPF"
                                name="cpf"
                                value={formData.cpf}
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
