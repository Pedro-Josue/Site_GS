import { HomeStyle } from "../css/HomeStyle"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home=()=>{
    return(
        <HomeStyle>
            <h2 className="titulo-home">Energia Sustentável para um Futuro Mais Limpo</h2>
            <Carousel className="w-50 mx-auto">
                <Carousel.Item>
                <img
                className="d-block w-100" // classes do Bootstrap para largura total
                src="src\assets\energia-solar.jpg" // Caminho da primeira imagem
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100" // classes do Bootstrap para largura total
                src="src\assets\energia-solar.jpg" // Caminho da segunda imagem
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100" // classes do Bootstrap para largura total
                src="src\assets\energia-solar.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            {/* cards com fotos da solução */}
            <h2 className="titulo-home">Peças que utilizamos para a solução</h2>
            <CardGroup className="custom-card-group">
                <Card className="custom-card">
                    <Card.Img variant="top" src="src\assets\esp32.jpg" />
                    <Card.Body>
                    <Card.Title>ESP32</Card.Title>
                    <Card.Text>
                    O ESP32 é um microcontrolador de baixo custo e alta performance desenvolvido pela Espressif Systems, 
                    amplamente utilizado em projetos de IoT (Internet das Coisas).
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="src\assets\mini-painel.jpg" />
                    <Card.Body>
                    <Card.Title>Mini painel solar</Card.Title>
                    <Card.Text>
                        painel solar de 3W com 5v, para gerar energia para o esp32 e para a bateria do projeto.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="src\assets\bateria.jpg" />
                    <Card.Body>
                    <Card.Title>Bateria de Litío</Card.Title>
                    <Card.Text>
                        Bateria de lítio com vários ciclos, diminuindo a quantidade de vezes que o usuário teria que trocar e descartar uma pilha.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup className="custom-card-group">
                <Card className="custom-card">
                    <Card.Img variant="top" src="src\assets\protoboard.jpg" />
                    <Card.Body>
                    <Card.Title>Protoboard</Card.Title>
                    <Card.Text>
                    A protoboard foi utilizada para diminui o uso da solda e para deixar os jumper cables mais organizados no projeto.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="src\assets\regulador.webp" />
                    <Card.Body>
                    <Card.Title>Regulador de tensão</Card.Title>
                    <Card.Text>
                        Dispositivo utilizado para trocar a voltagem que vem do painel solar (5V), para 3.3V
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </HomeStyle>
    )
}

export default Home