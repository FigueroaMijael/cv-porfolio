import React, {useState}from 'react';
import HeaderPage from '../../components/Header/HeaderPage';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';
import cv from '../../cv/Cv.pdf';
import photo from '../../img/me/me-photo.pdf';
import '../../pages/About/AboutPage.css';
import DW from '../../img/certificated/649f245b4268360002c60e46.png';
import JS from '../../img/certificated/64f09acf8278ce9cace9ede1.png';
import RJS from '../../img/certificated/65548694b4768ce51454cd11.png';
import PB from '../../img/certificated/663b8342bccd557071499eb8.png';
import CS from '../../img/certificated/66fc99343ff0c813c7212038.png';

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
    PB,
    CS
  ];

  const [visibleSkills, setVisibleSkills] = useState({});

  const toggleSkillInfo = (skill) => {
    setVisibleSkills((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill],
    }));
  };

  const skills = [
    {
      name: 'HTML',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      description: 'Poseo una sólida comprensión de los fundamentos de HTML. Mis conocimientos en HTML me permiten crear estructuras web sólidas y bien organizadas, sirviendo como una base eficaz para la integración con CSS y JavaScript.',
    },
    {
      name: 'CSS',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      description: 'Tengo experiencia en CSS, especializado en diseño responsivo y creación de animaciones suaves con AOS. Manejo la integración de estilos en proyectos React, utilizando preprocesadores como Sass y aprovechando las ventajas de Bootstrap para un desarrollo eficiente y profesional.',
    },
    {
      name: 'JavaScript',
      img: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
      description: 'Poseo experiencia en el desarrollo de aplicaciones utilizando JavaScript. Creo funciones dinámicas, manipulo el DOM eficientemente y gestiono eventos para construir interfaces interactivas. Además, manejo la integración con APIs RESTful para la obtención y envío de datos, y optimizo el rendimiento del código mediante buenas prácticas y técnicas avanzadas de programación.',
    },
    {
      name: 'Bootstrap',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      description: 'Tengo conocimientos en utilizar Bootstrap para crear interfaces responsivas y modernas, aprovechando sus componentes y clases predefinidas para un desarrollo rápido y eficiente.',
    },
    {
      name: 'ReactJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Tengo experiencia en el desarrollo de aplicaciones con React.js, creando componentes reutilizables y gestionando estados para construir interfaces de usuario dinámicas y eficientes. Además, utilizo Vite para optimizar el rendimiento de las aplicaciones.',
    },
    {
      name: 'NodeJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'Tengo experiencia en el desarrollo de aplicaciones backend utilizando Node.js. He creado servidores eficientes y manejado operaciones asincrónicas, promesas async/await. Utilizo módulos modernos para el manejo avanzado de archivos. Implemento patrones de diseño modernos, como microservicios y arquitecturas basadas en eventos, para construir aplicaciones escalables y mantenibles.',
    },
    {
      name: 'Express',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      description: 'Poseo un amplio conocimiento en el uso de Express para construir APIs RESTful y aplicaciones web. He gestionado rutas dinámicas y estáticas, implementado middleware para la autenticación y validación de datos, y configurado servidores para manejar múltiples solicitudes concurrentes. Además, he trabajado con plantillas y motores de vista para generar contenido dinámico y he utilizado principios de diseño como MVC (Model-View-Controller) para estructurar el código de manera clara y organizada.',
    },
    {
      name: 'MongoDB',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      description: 'Gestiono bases de datos NoSQL con MongoDB, diseñando esquemas flexibles y realizando operaciones CRUD con Mongoose. Implemento índices, replicación y particionamiento para mejorar rendimiento y escalabilidad, y uso agregaciones para consultas complejas y análisis de datos.',
    },
    {
      name: 'Git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Utilizo Git para control de versiones y colaboración en proyectos. He gestionado ramas, realizado fusiones y resuelto conflictos de código. Utilizo Git para mantener un historial claro de cambios, realizar integraciones continuas y asegurar un desarrollo organizado mediante el uso de pull requests y revisiones de código.',
    },
    {
      name: 'SQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      description: 'Como programador junior, tengo experiencia en la gestión y manipulación de bases de datos relacionales utilizando SQL. Soy competente en la creación y optimización de consultas para operaciones CRUD (Create, Read, Update, Delete), el diseño de esquemas de bases de datos, y la implementación de integridad referencial mediante claves primarias y foráneas. Además, utilizo funciones agregadas, subconsultas y uniones (JOINs) para realizar análisis de datos complejos y obtener información detallada de múltiples tablas.',
    },
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
              Hola, mi nombre el Mijael Figueroa ,tengo 21 años y estudio Desarrollo Web en la Universidad Pública de Ezeiza (UPE). He completado un año y medio de formación en Coderhouse, donde me certifiqué en Desarrollo Web, JavaScript, React JS y Backend, dominando tanto el front-end como el back-end. Tambien realice un curso de Ciberseguridad en Coderhouse para mejorar mis habilidades en ese campo.
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
              {skills.map((skill, index) => (
                <div className="skill-card" key={index} data-aos="flip-left" data-aos-delay="300">
                  <img alt={skill.name} className="skills-img icon-li" src={skill.img} title={skill.name} />
                  <h2 className="skill-name">
                    {skill.name}
                    <button onClick={() => toggleSkillInfo(skill.name)} className="toggle-button">
                      {visibleSkills[skill.name] ? '▲' : '▼'}
                    </button>
                  </h2>
                  {visibleSkills[skill.name] && <p className="skill-info">{skill.description}</p>}
                </div>
              ))}
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
