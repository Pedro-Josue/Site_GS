import { Card, ListGroup } from 'react-bootstrap';

const Sobre=()=>{
    return(
        <>
        <div className="container mt-5">
      {/* Card: Sobre o Projeto */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="fs-2">Sobre o Projeto</Card.Title>
          <Card.Text>
            A SolarTech utiliza mini painéis solares para carregar baterias de lítio, oferecendo uma alternativa ecológica ao uso de pilhas descartáveis. Ao usar energia solar, nossa solução visa reduzir o impacto ambiental causado pelo descarte de pilhas e promover uma forma mais sustentável de alimentar dispositivos portáteis.
          </Card.Text>
          <img src="https://via.placeholder.com/500x300.png?text=Painel+Solar" alt="Painel Solar" className="img-fluid rounded mt-3" />
        </Card.Body>
      </Card>

      {/* Card: Como Funciona? */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="fs-2">Como Funciona?</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Painel Solar:</strong> Captura a luz solar e converte em energia elétrica.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Armazenamento:</strong> A energia é armazenada em baterias de lítio recarregáveis.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Uso Sustentável:</strong> A bateria recarregada alimenta seus dispositivos de maneira ecológica.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Card: Benefícios para o Meio Ambiente */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="fs-2">Benefícios para o Meio Ambiente</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Reduzimos o uso de pilhas descartáveis:</strong> Evitamos poluição e resíduos tóxicos.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Energia Solar Limpa e Renovável:</strong> Utilizamos uma fonte de energia sem impacto ambiental.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Menor Pegada de Carbono:</strong> Reduzimos emissões ao optar por energia solar.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Card: Impacto e Visão do Futuro */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="fs-2">Impacto e Visão do Futuro</Card.Title>
          <Card.Text>
            Nosso objetivo é criar uma alternativa prática e sustentável para reduzir o uso de pilhas e promover um consumo mais consciente. Ao escolher a SolarTech, você participa da construção de um futuro mais verde.
          </Card.Text>
          <img src="https://via.placeholder.com/500x300.png?text=Visão+Sustentável" alt="Visão Sustentável" className="img-fluid rounded mt-3" />
        </Card.Body>
      </Card>
    </div>
        </>
    )
}

export default Sobre