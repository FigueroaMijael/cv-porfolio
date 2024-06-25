import React from 'react';
import ParticleHeaderBg from '../ParticlesBackground/ParticlesHeader/ParticleHeaderBg';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = () => {
  return (
    <div className='contenido'>
      <ParticleHeaderBg id="particles-js" />

      <section className="inicio" id="inicio">
        <div className="titulo">
          <p data-aos="fade-up" data-aos-delay="600">Hola</p>
          <h1 data-aos="fade-up" data-aos-delay="800">Soy Mijael Figueroa</h1>
          <p data-aos="fade-up" data-aos-delay="1000">Full-Stack Developer</p>

          <div className="redes-sociales">
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="bi bi-linkedin"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="bi bi-github"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="bi bi-instagram"></i></a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="bi bi-whatsapp"></i></a>
          </div>

          <div className="wrapper">
            <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
              <div className="icon">
                <i className="bi bi-linkedin"></i>
              </div>
              <span>Linkedin</span>
            </a>
            <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
              <div className="icon">
                <i className="bi bi-github"></i>
              </div>
              <span>Github</span>
            </a>
            <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
              <div className="icon">
                <i className="bi bi-instagram"></i>
              </div>
              <span>Instagram</span>
            </a>
            <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
              <div className="icon">
                <i className="bi bi-whatsapp"></i>
              </div>
              <span>Whatsapp</span>
            </a>
          </div>

          <Link to="sobre-mi" href="#sobre-mi">
            <div className="scroll-down"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Content;
