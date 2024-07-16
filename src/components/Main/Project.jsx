import React from 'react';
import '../../pages/Project/ProjectPage.css'; 
import JavaScript from '../Icons/JavaScript';
import ReactJS from '../Icons/React';
import MongoDB from '../Icons/Mongo';

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-blue text-white",
    icon: () => <ReactJS className="project-tag-icon" />,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-yellow text-black",
    icon: () => <JavaScript className="project-tag-icon" />,
  },
  HTML5: {
    name: "HTML5",
    class: "bg-orange text-white",
    icon: () => (
      <svg className="project-tag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
        <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
        <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
      </svg>
    ),   
  },
  CSS: {
    name: "CSS",
    class: "bg-blue text-white",
    icon: () => (
      <svg className="project-tag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
        <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"/>
        <path fill="#30a9dc" d="M226 472l149-41 35-394H226"/>
        <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
        <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"/>
      </svg>
    ),
  },
  MONGODB: {
    name: "MONGODB",
    class: "bg-green text-white",
    icon: () => <MongoDB className="project-tag-icon" />,
  },
};

const PROJECTS = [
  {
    title: "Formula One Web",
    description: "Web informativa del deporte numero uno del automivilismo. Donde podes conocer las ultimas novedades sobre tu piloto u equipo favorito del campeonato. Creada desde cero con solo HTML y CSS.",
    link: "https://figueroamijael.github.io/FormulaWeb/",
    github: "https://github.com/FigueroaMijael/FormulaWeb.git",
    image: "./src/img/project/FormulawebProject.png",
    tags: [TAGS.HTML5, TAGS.CSS],
  },
  {
    title: "Programming",
    description: "'Programming' es un E-commerse diseñado puramente con Java Script. El cual te deja simular un proceso simple de compra.",
    link: "https://figueroamijael.github.io/proyecto-js-2/",
    github: "https://github.com/FigueroaMijael/proyecto-js-2.git",
    image: "./src/img/project/ProgrammingProject.png",
    tags: [TAGS.JAVASCRIPT],
  },
  {
    title: "Back-Commerse",
    description: "'Back-Commerse' es un E-commerse de flujo completo. Este permite registrar y loguear usuarios guardando cada movimiento en la base de dato (nuevo usuario, rol, ultimo inicio, etc). Posee vista de perfil del usuario con su custom de configuracion y un chat para que interactuen los usuarios en tiempo real. Los diferentes roles permiten distintas funciones segun el usuario. Permite visualizar productos, ver su detalle, agregar al carrito, visualizar el carrito, finalizar el proceso de compras mediante el check-in de Mercado pago, recibe un comprobante con el id y detalle de la compra.",
    link: "https://myproyectfinals-production.up.railway.app",
    github: "https://github.com/FigueroaMijael/MyProyectFinals.git",
    image: "./src/img/project/E-ecommersBackend.png",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MONGODB],
  },
];

const Projects = () => (
  <div className="projects-container" id='project' >
    <h2 className="projects-title" data-aos="fade-up" data-aos-delay="100">{"</>"} Proyectos</h2>
    {PROJECTS.map(({ image, title, description, tags, link, github }) => (
      <article key={title} className="project-card">
        <div className="project-image-container" data-aos="fade-up" data-aos-delay="200">
          <img alt={title} className="project-image" loading="lazy" src={image} />
        </div>
        <div className="project-info">
          <h3 className="project-title" data-aos="fade-up" data-aos-delay="200">{title}</h3>
          <div className="project-tags">
            <ul className="project-tags-list" data-aos="fade-up" data-aos-delay="300">
              {tags.map((tag) => (
                <li key={tag.name}>
                  <span className={`project-tag ${tag.class}`}>
                    {tag.icon()}
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="project-description" data-aos="fade-up" data-aos-delay="200">{description}</div>
          <footer className="project-footer" data-aos="fade-up" data-aos-delay="300">
            {github && (
              <button className="button-link">
                <a href={github} className="project-link">
                <svg className="project-tag-icon"
                  viewBox="0 0 256 250" 
                  width="256" 
                  height="250" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  preserveAspectRatio="xMidYMid"
                >
                  <path 
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" 
                  />
                </svg>
                  Code
                </a>
              </button>
            )}
            {link && (
              <button className="button-link">
                <a href={link} className="project-link">
                <svg className="project-tag-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                </svg>
                  Preview
                </a>
              </button>
            )}
          </footer>
        </div>
      </article>
    ))}
  </div>
);

export default Projects;
