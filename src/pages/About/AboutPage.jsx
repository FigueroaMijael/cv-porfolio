import React from 'react';
import HeaderPage from '../../components/Header/HeaderPage';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';
import cv from '../../cv/MiCV.pdf';
import photo from '../../img/me/me-photo.pdf';
import '../../pages/About/AboutPage.css';
import DW from '../../img/certificated/649f245b4268360002c60e46.png'
import JS from '../../img/certificated/64f09acf8278ce9cace9ede1.png'
import RJS from '../../img/certificated/65548694b4768ce51454cd11.png'
import PB from '../../img/certificated/663b8342bccd557071499eb8.png'
import Accordion from '../../pages/Service/Accordion'

const AboutPage = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");
    parrafoActive.classList.toggle("show");
    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  const placeholderImages = [
    DW,
    JS,
    RJS,
    PB
  ];

  return (
    <div>

      <HeaderPage />

      <ParticlesBackground />

      <main>
        <section className="sobre-mi-seccion">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={photo} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="MiCV.pdf" className="btn-codigo cv buttonDownload2">
              Download CV
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
              Hola, mi nombre el Mijael Figueroa ,tengo 20 años y estudio Desarrollo Web en la Universidad Pública de Ezeiza (UPE). He completado un año y medio de formación en Coderhouse, donde me certifiqué en Desarrollo Web, JavaScript, React JS y Backend, dominando tanto el front-end como el back-end. Actualmente, estoy realizando un curso de Ciberseguridad en Coderhouse para mejorar mis habilidades en ese campo.
              Aunque no tengo experiencia laboral en programación, confío en mis habilidades, inteligencia, capacidad de resolución de problemas y rápida absorción de conocimientos para aportar significativamente a cualquier empresa o proyecto. Me gusta estar en constante aprendizaje, conociendo nuevas herramientas y técnicas para ser más eficaz en el trabajo.
              Disfruto trabajando en equipo y colaborando con otros para alcanzar objetivos comunes. Mi objetivo es convertirme en un gran programador, dominando varios campos y contribuyendo ampliamente a un equipo de trabajo donde se logren grandes avances. Aspiro a crecer continuamente en el apasionante mundo de la programación y el desarrollo web.
              </p>
              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  Poseo una sólida comprensión de los fundamentos de HTML. Mis conocimientos en HTML me permiten crear estructuras web sólidas y bien organizadas, sirviendo como una base eficaz para la integración con CSS y JavaScript.
                </p> 
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                Tengo experiencia en CSS, especializado en diseño responsivo y creación de animaciones suaves con AOS. Manejo la integración de estilos en proyectos React, utilizando preprocesadores como Sass y aprovechando las ventajas de Bootstrap para un desarrollo eficiente y profesional.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                Poseo experiencia en el desarrollo de aplicaciones utilizando JavaScript. Creo funciones dinámicas, manipulo el DOM eficientemente y gestiono eventos para construir interfaces interactivas. Además, manejo la integración con APIs RESTful para la obtención y envío de datos, y optimizo el rendimiento del código mediante buenas prácticas y técnicas avanzadas de programación.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                Tengo conocimientos en utilizar Bootstrap para crear interfaces responsivas y modernas, aprovechando sus componentes y clases predefinidas para un desarrollo rápido y eficiente.
                </p>
              </div>
              
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="jQuery" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                Tengo experiencia en el desarrollo de aplicaciones con React.js, creando componentes reutilizables y gestionando estados para construir interfaces de usuario dinámicas y eficientes. Además, utilizo Vite para optimizar el rendimiento de las aplicaciones.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="jQuery" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                Tengo experiencia en el desarrollo de aplicaciones backend utilizando Node.js. He creado servidores eficientes y manejado operaciones asincrónicas, promesas async/await. Utilizo módulos modernos para el manejo avanzado de archivos. Implemento patrones de diseño modernos, como microservicios y arquitecturas basadas en eventos, para construir aplicaciones escalables y mantenibles.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="jQuery" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  Poseo un amplio conocimiento en el uso de Express para construir APIs RESTful y aplicaciones web. He gestionado rutas dinámicas y estáticas, implementado middleware para la autenticación y validación de datos, y configurado servidores para manejar múltiples solicitudes concurrentes. Además, he trabajado con plantillas y motores de vista para generar contenido dinámico y he utilizado principios de diseño como MVC (Model-View-Controller) para estructurar el código de manera clara y organizada.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <svg className="skills-img" viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid">
                  <path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"/>
                </svg>
                <h2 className="skill-name">MongodDB</h2>
                <p className="skill-info">
                Gestiono bases de datos NoSQL con MongoDB, diseñando esquemas flexibles y realizando operaciones CRUD con Mongoose. Implemento índices, replicación y particionamiento para mejorar rendimiento y escalabilidad, y uso agregaciones para consultas complejas y análisis de datos.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <svg className="skills-img" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                  <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/>
                </svg>
                <h2 className="skill-name"> Git</h2>
                <p className="skill-info">
                Utilizo Git para control de versiones y colaboración en proyectos. He gestionado ramas, realizado fusiones y resuelto conflictos de código. Utilizo Git para mantener un historial claro de cambios, realizar integraciones continuas y asegurar un desarrollo organizado mediante el uso de pull requests y revisiones de código.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <svg className="skills-img" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
                  <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"/>
                  <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"/>
                </svg>
                <h2 className="skill-name">SQL</h2>
                <p className="skill-info">
                Como programador junior, tengo experiencia en la gestión y manipulación de bases de datos relacionales utilizando SQL. Soy competente en la creación y optimización de consultas para operaciones CRUD (Create, Read, Update, Delete), el diseño de esquemas de bases de datos, y la implementación de integridad referencial mediante claves primarias y foráneas. Además, utilizo funciones agregadas, subconsultas y uniones (JOINs) para realizar análisis de datos complejos y obtener información detallada de múltiples tablas.
                </p> 
              </div>
            </div>
          </div>
          <div className="certificados">
      <h3 className="heading">Certificados</h3>
      <div className="certificados-grid" data-aos="flip-up" data-aos-delay="300">
        {placeholderImages.map((src, index) => (
          <img  key={index} src={src} alt={`Certificado ${index + 1}`} />
        ))}
      </div>
    </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  );
};

export default AboutPage;
