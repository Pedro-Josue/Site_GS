import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const Sobre = () => {
  return (
    <main>
      {/* Introdução */}
      <section className="bg-light py-5">
        <Container>
          <Row className="mb-4 align-items-center">
            <Col md={6}>
              <h1 className="text-success fw-bold">SolarTech</h1>
              <p className="fs-5">
                Unindo tecnologia e sustentabilidade para um futuro mais verde e acessível.
              </p>
              <p className="fs-5">
                A <strong>SolarTech</strong> é uma empresa comprometida com o desenvolvimento de soluções tecnológicas sustentáveis. 
                Inspirada por iniciativas globais, nossa missão é democratizar o acesso 
                à energia limpa, promovendo inovação e acessibilidade.
              </p>
            </Col>
            <Col md={6}>
              <Image
                src="src\assets\painel_solar.jpg"
                alt="Painel Solar"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Oportunidade e Problema */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="src\assets\industrias.jpg"
                alt="Energia Sustentável"
                className="img-fluid rounded shadow mb-3"
              />
            </Col>
            <Col md={6}>
              <h2 className="text-success">Oportunidade</h2>
              <p>
                A energia sustentável é mais do que uma alternativa: é uma necessidade global. 
                A dependência de combustíveis fósseis como carvão, petróleo e gás está gerando uma crise climática, 
                com impactos visíveis como o aumento da temperatura global e eventos climáticos extremos.
              </p>
              <ul>
                <li>Sustentabilidade ambiental: Reduz a emissão de gases poluentes.</li>
                <li>Acessibilidade: Pode ser utilizada em áreas remotas com pouca infraestrutura elétrica.</li>
                <li>Economia a longo prazo: Investimentos iniciais podem gerar benefícios contínuos.</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <h2 className="text-success">O Problema</h2>
              <p>
                Cerca de **13% da população mundial** ainda não tem acesso à eletricidade. Além disso, 
                mais de 80% da energia consumida globalmente é derivada de combustíveis fósseis, 
                responsáveis por 75% das emissões de gases de efeito estufa.
              </p>
              <p>
                O descarte inadequado de pilhas e baterias também é um problema significativo, liberando 
                metais pesados como mercúrio e cádmio no meio ambiente, contaminando o solo e a água.
              </p>
            </Col>
            <Col md={6}>
              <Image
                src="src\assets\residuo_pilha.jpg"
                alt="Problemas Ambientais"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Solução */}
      <section className="bg-white py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-success text-center">Nossa Solução</h2>
              <p className="text-center">
                Propomos um sistema integrado de carregamento solar com monitoramento climático, combinando 
                inovação tecnológica e sustentabilidade ambiental.
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="mb-4 shadow-sm">
                <Image
                  src="src\assets\pilha_reciclavel.jpg"
                  alt="Pilha Reciclavel"
                  className="img-fluid rounded-top"
                />
                <Card.Body>
                  <Card.Title className="text-success">Carregador de Pilhas com Energia Solar</Card.Title>
                  <Card.Text>
                    Nosso carregador utiliza painéis solares para converter luz solar em energia elétrica, 
                    recarregando pilhas recarregáveis de maneira limpa e eficiente.
                  </Card.Text>
                  <ul>
                    <li>Redução do descarte de pilhas convencionais.</li>
                    <li>Fonte de energia renovável e autossustentável.</li>
                    <li>Aplicável em regiões remotas sem acesso à eletricidade.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4 shadow-sm">
                <Image
                  src="src\assets\monitoramento.jpg"
                  alt="Monitoramento Climático"
                  className="img-fluid rounded-top"
                />
                <Card.Body>
                  <Card.Title className="text-success">Software de Monitoramento com API Climática</Card.Title>
                  <Card.Text>
                    Um sistema inteligente que ajusta o carregamento com base nas condições climáticas em tempo real, 
                    maximizando a eficiência energética.
                  </Card.Text>
                  <ul>
                    <li>Monitoramento do nível de carga em tempo real.</li>
                    <li>Ajuste automático com base na previsão do tempo.</li>
                    <li>Notificações e alertas para otimizar o uso do sistema.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-success text-center">Benefícios da Nossa Solução</h2>
              <ul className="fs-5">
                <li><strong>Sustentabilidade:</strong> Reduz emissões de carbono e resíduos perigosos.</li>
                <li><strong>Eficiência:</strong> Maximiza o uso de energia solar com monitoramento em tempo real.</li>
                <li><strong>Acessibilidade:</strong> Torna a energia renovável viável para comunidades remotas.</li>
                <li><strong>Educação ambiental:</strong> Promove conscientização sobre o uso responsável de recursos naturais.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Botao com informacoes */}
      <section className="bg-success text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Faça Parte da Mudança</h2>
              <p className="fs-5">
                Junte-se a nós na construção de um futuro mais sustentável. Descubra como nossas soluções 
                podem fazer a diferença na sua vida e no mundo.
              </p>
              <Button
                variant="light"
                size="lg"
                href="src\assets\GlobalSolutionSoftware&TotalExperienceDesign.pdf"
                target="_blank"
              >
                Saiba Mais
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Sobre;
