import '../../pages/Project/ProjectPage.css'; 
import JavaScript from '../Icons/JavaScript';
import ReactJS from '../Icons/React';
import MongoDB from '../Icons/Mongo';
import proyectoUno from '../../img/project/FormulawebProject.png'
import proyectoDos from '../../img/project/ProgrammingProject.png'
import proyectoTres from '../../img/project/E-ecommersBackend.png'
import proyectoCuatro from '../../img/project/draguada.png'
import proyectoCinco from '../../img/project/geminis.png'
import { useTranslation } from '../../Context/Languaje-context';



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
  SCSS: {
    name: "PTRP",
    class: "bg-ptrp text-white",
    icon: () => (
      <svg className="project-tag-icon" viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg" width="512" height="384"><path fill="#CF649A" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"/></svg>
    )
  },
    C: {
    name: "C",
    class: "bg-green text-white",
    icon: () => (
      <svg className="project-tag-icon" viewBox="0 0 306 345" xmlns="http://www.w3.org/2000/svg" width="306" height="345" fill="none"><g clip-path="url(#c__a)"><path fill="#00599C" d="M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.139c0-4.207-1.49-8.892-3.892-13.051L153 172.175l149.107 86.087Z"/><path fill="#004482" d="m166.25 341.193 126.5-73.034c3.644-2.104 6.956-5.737 9.357-9.897L153 172.175 3.893 258.263c2.4 4.159 5.714 7.793 9.357 9.896l126.5 73.034c7.287 4.208 19.213 4.208 26.5 0Z"/><path fill="#659AD2" d="M302.108 86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25 3.156c-7.287-4.208-19.213-4.208-26.5 0L13.25 76.19C5.962 80.397 0 90.725 0 99.14v146.069c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088Z"/><path fill="#fff" d="M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.139 19.53 88.331 50.968l-44.143 25.544c-9.105-15.736-26.038-25.512-44.188-25.512-28.122 0-51 22.878-51 51 0 28.121 22.878 51 51 51 18.152 0 35.085-9.776 44.191-25.515l44.143 25.543c-18.192 31.441-52.04 50.972-88.334 50.972Z"/></g><defs><clipPath id="c__a"><path fill="#fff" d="M0 0h306v344.35H0z"/></clipPath></defs></svg>
    )
  },
    VUE: {
    name: "VUE",
    class: "bg-green text-white",
    icon: () => (
      <svg className="project-tag-icon" viewBox="0 0 256 221" width="256" height="221" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>
    )
  },
};

const PROJECTS = [
  
  {
    title: "Formula One Web",
    description: "{translate('formulawed')}",
    link: "https://figueroamijael.github.io/FormulaWeb/",
    github: "https://github.com/FigueroaMijael/FormulaWeb.git",
    image: proyectoUno,
    tags: [TAGS.HTML5, TAGS.CSS],
  },
  {
    title: "Programming",
    description: "'Programming' es un E-commerse diseñado puramente con Java Script. El cual te deja simular un proceso simple de compra.",
    link: "https://figueroamijael.github.io/proyecto-js-2/",
    github: "https://github.com/FigueroaMijael/proyecto-js-2.git",
    image: proyectoDos,
    tags: [TAGS.JAVASCRIPT],
  },
  {
    title: "Back-Commerse",
    description: "'Back-Commerse' es un E-commerse de flujo completo. Este permite registrar y loguear usuarios guardando cada movimiento en la base de dato (nuevo usuario, rol, ultimo inicio, etc). Posee vista de perfil del usuario con su custom de configuracion y un chat para que interactuen los usuarios en tiempo real. Los diferentes roles permiten distintas funciones segun el usuario. Permite visualizar productos, ver su detalle, agregar al carrito, visualizar el carrito, finalizar el proceso de compras mediante el check-in de Mercado pago, recibe un comprobante con el id y detalle de la compra.",
    link: "https://myproyectfinals-production.up.railway.app",
    github: "https://github.com/FigueroaMijael/MyProyectFinals.git",
    image: proyectoTres,
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MONGODB],
  },
  {
    title: "Abogada Guadalupe Lizarazo | Derecho Laboral, Civil, Familia y Amparos de Salud",
    description: "Abogada Guadalupe Lizarazo brinda asesoramiento y representación legal especializada en Derecho Laboral, Civil, de Familia y Amparos de Salud. Con un enfoque humano, compromiso ético y experiencia profesional, acompaña a cada cliente en la defensa de sus derechos y en la búsqueda de soluciones efectivas. Atención personalizada, respuestas claras y confianza en cada paso legal.",
    link: "https://draguadalupelizarazo.com",
    github: "https://github.com/FigueroaMijael/bogada-Guadalupe-Lizarazo-Derecho-Laboral-Civil-Familia-y-Amparos-de-Salud.git",
    image: proyectoCuatro,
    tags: [TAGS.HTML5, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.SCSS],
  },
    {
    title: "Geminis | e-commers",
    description: "",
    link: "",
    github: "https://github.com/FigueroaMijael/E-geminis.git",
    image: proyectoCinco,
    tags: [TAGS.VUE, TAGS.MONGODB],
  },
];


const Projects = () => (

  
  <div className="projects-container" id='project' >
    <h2 className="projects-title" data-aos="fade-up" data-aos-delay="100">Proyectos</h2>
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
