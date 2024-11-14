import { Form, Button, Card } from 'react-bootstrap';

const Login=()=>{
    return(
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "85vh" }}>
                <Card style={{ width: '100%', maxWidth: '400px' }}>
                    <Card.Body>
                    <h3 className="text-center mb-4">Login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu Email" />
                        <Form.Text className="text-muted">
                            Nós nunca compartilharemos seu e-mail com mais ninguém.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Sua Senha" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Continuar conectado" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                        Entrar
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Login