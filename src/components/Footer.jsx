import React from "react";
import { BsFacebook, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#59b16b" }} className="text-light pt-5">
      <div className="container px-5">
        <div className="row">
          <div className="col-6 col-lg-4">
            <h3 className="fw-bold">SolarTech</h3>
            <p className="pt-2">
              Em busca de um futuro Tech e Sustentável
            </p>
            <p className="mb-2">0987654321</p>
            <p>1234567890</p>
          </div>
          <div className="col">
            <h4>Menu</h4>
            <ul className="list-unstyled pt-2">
              <li className="py-1">Home</li>
              <li className="py-1">Videos</li>
              <li className="py-1">Sobre</li>
              <li className="py-1">Solução</li>
            </ul>
          </div>
          <div className="col">
            <h4>Veja Mais</h4>
            <ul className="list-unstyled pt-2">
              <li className="py-1">Landing Pages</li>
              <li className="py-1">Lugar de dados</li>
            </ul>
          </div>
          <div className="col">
            <h4>Categorias</h4>
            <ul className="list-unstyled pt-2">
              <li className="py-1">Navbars</li>
              <li className="py-1">Login</li>
              <li className="py-1">Carrossel</li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 text-lg-end">
            <h4>Nossas Redes Sociais</h4>
            <div className="social-media pt-2">
              <a href="#" className="text-light fs-2 me-3"><BsFacebook /></a>
              <a href="https://www.youtube.com/watch?v=3aUK81hJKEY" target="_blank" className="text-light fs-2 me-3"><BsYoutube /></a>
              <a href="#" className="text-light fs-2 me-3"><BsInstagram /></a>
              <a href="#" className="text-light fs-2"><BsLinkedin /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-sm-flex justify-content-between py-1">
          <p>2024 © SolarTech. Todos os direitos reservados.</p>
          <p>
            <a href="#" className="text-light text-decoration-none pe-4">
              Termos de Uso
            </a>
            <a href="#" className="text-light text-decoration-none">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;