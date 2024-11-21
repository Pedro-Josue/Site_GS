
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Solucao = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Solução - SolarTech</h2>
      <p className="text-center mb-5">
        A SolarTech apresenta um kit inovador que utiliza mini painéis solares para alimentar baterias recarregáveis, 
        promovendo uma solução prática e sustentável para dispositivos portáteis.
      </p>

      <Row className="justify-content-center">
        {/* Painel Solar */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="https://via.placeholder.com/400x250" 
              alt="Painel Solar" 
            />
            <Card.Body>
              <Card.Title>Painel Solar</Card.Title>
              <Card.Text>
                Capta a luz solar e converte em energia elétrica, utilizando tecnologia fotovoltaica avançada.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Bateria Recarregável */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="https://via.placeholder.com/400x250" 
              alt="Bateria Recarregável" 
            />
            <Card.Body>
              <Card.Title>Bateria Recarregável</Card.Title>
              <Card.Text>
                Armazena a energia captada para alimentar dispositivos portáteis de forma ecológica e eficiente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Dispositivo Alimentado */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="https://via.placeholder.com/400x250" 
              alt="Dispositivo Alimentado" 
            />
            <Card.Body>
              <Card.Title>Dispositivo Alimentado</Card.Title>
              <Card.Text>
                Exemplo prático: uma lanterna LED ou carregador portátil, eliminando a necessidade de pilhas descartáveis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Benefícios */}
      <h3 className="text-center my-5">Benefícios</h3>
      <Row>
        <Col md={6}>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Redução de Resíduos:</strong> Diminui drasticamente o descarte de pilhas tóxicas.
            </li>
            <li className="list-group-item">
              <strong>Energia Renovável:</strong> Utiliza luz solar, uma fonte limpa e infinita.
            </li>
            <li className="list-group-item">
              <strong>Economia:</strong> Evita gastos recorrentes com pilhas descartáveis.
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/400x250" 
              alt="Sustentabilidade" 
              className="img-fluid rounded" 
            />
          </div>
        </Col>
      </Row>

      {/* Chamada para Ação */}
      <div className="text-center mt-5">
        <Button variant="success" size="lg">
          Saiba Mais Sobre Nossa Solução
        </Button>
      </div>
    </Container>
  );
};

export default Solucao;