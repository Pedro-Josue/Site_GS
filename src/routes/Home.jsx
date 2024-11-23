import { HomeStyle } from "../css/HomeStyle";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    return (
        <HomeStyle>
            <h2 className="titulo-home">Energia Sustentável para um Futuro Mais Limpo</h2>
            
            {/* Carrossel */}
            <Carousel className="w-50 mx-auto">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src/assets/energia-solar.jpg"
                        alt="Primeiro slide"
                    />
                    <Carousel.Caption>
                        <h3>Energia</h3>
                        <p>Como podemos renovar energia?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src/assets/sustentabilidade.png"
                        alt="Segundo slide"
                    />
                    <Carousel.Caption>
                        <h3>Futuro Sustentável</h3>
                        <p>Como alcançar esse futuro sustentável?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src/assets/sustentavel.png"
                        alt="Terceiro slide"
                    />
                    <Carousel.Caption>
                        <h3>Você pode fazer a diferença!</h3>
                        <p>Descubra como salvar o planeta!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Seção de Vídeo */}
            <div className="video-section my-5 text-center">
                <h2 className="titulo-home">Assista ao Nosso Vídeo</h2>
                <p className="text-muted mb-4">Entenda como nossa solução pode transformar o futuro com energia renovável.</p>
                <iframe 
                    width="60%" 
                    height="450" 
                    src="src\assets\video.mp4" 
                    title="Vídeo sobre energia renovável" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>

            {/* Cards com fotos da solução */}
            <h2 className="titulo-home">Peças que utilizamos para a solução</h2>
            <CardGroup className="custom-card-group">
                <Card className="custom-card">
                    <Card.Img variant="top" src="src/assets/esp32.jpg" />
                    <Card.Body>
                        <Card.Title>ESP32</Card.Title>
                        <Card.Text>
                            O ESP32 é um microcontrolador de baixo custo e alta performance desenvolvido pela Espressif Systems, amplamente utilizado em projetos de IoT (Internet das Coisas).
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="src/assets/mini-painel.jpg" />
                    <Card.Body>
                        <Card.Title>Mini painel solar</Card.Title>
                        <Card.Text>
                            Painel solar de 3W com 5v, para gerar energia para o ESP32 e para a bateria do projeto.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="src/assets/bateria.jpg" />
                    <Card.Body>
                        <Card.Title>Bateria de Lítio</Card.Title>
                        <Card.Text>
                            Bateria de lítio com vários ciclos, diminuindo a quantidade de vezes que o usuário teria que trocar e descartar uma pilha.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup className="custom-card-group">
                <Card className="custom-card">
                    <Card.Img variant="top" src="src/assets/protoboard.jpg" />
                    <Card.Body>
                        <Card.Title>Protoboard</Card.Title>
                        <Card.Text>
                            A protoboard foi utilizada para diminuir o uso da solda e para deixar os jumper cables mais organizados no projeto.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="src/assets/regulador.webp" />
                    <Card.Body>
                        <Card.Title>Regulador de Tensão</Card.Title>
                        <Card.Text>
                            Dispositivo utilizado para trocar a voltagem que vem do painel solar (5V), para 3.3V.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </HomeStyle>
    );
};

export default Home;
