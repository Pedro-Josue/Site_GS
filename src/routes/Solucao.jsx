import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Solucao = () => {
  return (
    <Container className="py-5">
      {/* Título Principal */}
      <h1 className="text-success fw-bold">Soluções Sustentáveis - SolarTech</h1>
      <p className="text-center mb-5">
        Descubra como a SolarTech combina inovação tecnológica e sustentabilidade para oferecer soluções práticas que reduzem o impacto ambiental e promovem inclusão social.
      </p>

      {/* Introdução */}
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <p className="text-center mb-5">
            A crescente demanda por energia sustentável e acessível é um dos maiores desafios do nosso tempo. Pensando nisso, a SolarTech desenvolveu um kit inovador que utiliza energia solar para recarregar pilhas, integrado a um software de monitoramento que otimiza o processo com base em condições climáticas. Esta solução não apenas reduz o impacto ambiental, mas também promove acessibilidade em regiões remotas.
          </p>
        </Col>
      </Row>

      {/* Seção de Componentes */}
      <h2 className="text-success">Componentes da Solução</h2>
      <Row className="justify-content-center">
        {/* Carregador Solar */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="src\assets\projeto.png" 
              alt="Carregador Solar" 
            />
            <Card.Body>
              <Card.Title>Carregador Solar</Card.Title>
              <Card.Text>
                Dispositivo que utiliza energia solar para recarregar pilhas AA ou AAA, substituindo pilhas descartáveis de forma sustentável.
              </Card.Text>
              <ul>
                <li>Reduz dependência de energia convencional</li>
                <li>Ideal para áreas sem acesso à eletricidade</li>
                <li>Durável e resistente a diferentes climas</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Software de Monitoramento */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="src\assets\monitamentodados.jpg" 
              alt="Software de Monitoramento" 
            />
            <Card.Body>
              <Card.Title>Software de Monitoramento</Card.Title>
              <Card.Text>
                Sistema inteligente que monitora o desempenho do carregador em tempo real e ajusta o uso da energia solar com base no clima.
              </Card.Text>
              <ul>
                <li>Monitoramento contínuo</li>
                <li>Alertas e notificações automáticas</li>
                <li>Previsão climática para eficiência máxima</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* API de Clima */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="src\assets\clima.jpg" 
              alt="API de Clima" 
            />
            <Card.Body>
              <Card.Title>API de Clima</Card.Title>
              <Card.Text>
                Integração com dados meteorológicos para prever condições climáticas e otimizar o uso da energia solar.
              </Card.Text>
              <ul>
                <li>Dados em tempo real</li>
                <li>Previsão de até 7 dias</li>
                <li>Ajustes automáticos do sistema</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Microcontrolador */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="src\assets\regulador.webp" 
              alt="Microcontrolador" 
            />
            <Card.Body>
              <Card.Title>Microcontrolador</Card.Title>
              <Card.Text>
                Gerencia todas as funções do sistema, integrando painéis solares, baterias e software de monitoramento.
              </Card.Text>
              <ul>
                <li>Baixo consumo energético</li>
                <li>Compatível com diversos sensores</li>
                <li>Alta capacidade de processamento</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Painéis Solares */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src="src\assets\mini-painel-solar.jpg" 
              alt="Painéis Solares" 
            />
            <Card.Body>
              <Card.Title>Painéis Solares</Card.Title>
              <Card.Text>
                Captam a luz solar e a convertem em energia elétrica, utilizando tecnologia fotovoltaica de alta eficiência.
              </Card.Text>
              <ul>
                <li>Alta durabilidade</li>
                <li>Fácil instalação</li>
                <li>Resistente a condições adversas</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Benefícios */}
      <h2 className="text-success">Benefícios da Solução</h2>
      <Row>
        <Col md={6}>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Redução de Resíduos:</strong> Menor uso de pilhas descartáveis.
            </li>
            <li className="list-group-item">
              <strong>Energia Renovável:</strong> Uso exclusivo de energia solar.
            </li>
            <li className="list-group-item">
              <strong>Inclusão Social:</strong> Solução acessível para comunidades remotas.
            </li>
            <li className="list-group-item">
              <strong>Economia:</strong> Redução de custos com eletricidade e pilhas.
            </li>
            <li className="list-group-item">
              <strong>Eficiência:</strong> Ajustes automáticos com base nas condições climáticas.
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <img 
              src="src\assets\futuro-sustentavel.jpg" 
              alt="Sustentabilidade" 
              className="img-fluid rounded" 
            />
          </div>
        </Col>
      </Row>

      {/* Casos de Uso */}
      <h2 className="text-success">Casos de Uso</h2>
      <Row className="justify-content-center">
        <Col md={10}>
          <p>
            O carregador solar pode ser utilizado em diversas situações práticas, como:
          </p>
          <ul>
            <li>Comunidades remotas sem acesso à rede elétrica</li>
            <li>Dispositivos portáteis como lanternas, rádios e carregadores</li>
            <li>Programas educacionais para ensinar sustentabilidade</li>
          </ul>
        </Col>
      </Row>

    </Container>
  );
};

export default Solucao;
