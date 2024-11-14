import { HomeStyle } from "../css/HomeStyle"
import Carousel from 'react-bootstrap/Carousel';

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
        </HomeStyle>
    )
}

export default Home