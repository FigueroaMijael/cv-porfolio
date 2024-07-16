import React, { useEffect } from 'react';
import ParticleHeaderBg from '../ParticlesBackground/ParticlesHeader/ParticleHeaderBg';
import './Content.css';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='contenido'>
      <ParticleHeaderBg id="particles-js" />

      <section className="inicio" id="inicio">
        <div className="titulo">
          <p data-aos="fade-up" data-aos-delay="600">Hola</p>
          <h1 data-aos="fade-up" data-aos-delay="800">Soy Mijael Figueroa</h1>
          <p data-aos="fade-up" data-aos-delay="1000">Full-Stack Developer</p>

          <div className="redes-sociales">
            <a href="https://www.linkedin.com/in/mijael-figueroa-019952249/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/FigueroaMijael" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com/figuee15_/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="bi bi-instagram"></i></a>
            <a href="https://api.whatsapp.com/send?phone=541141974731" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="bi bi-whatsapp"></i></a>
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

          <Link to="about-me" smooth={true} duration={500}>
            <div className="scroll-down"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Content;
