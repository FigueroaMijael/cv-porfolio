import '../../pages/Project/ProjectPage.css'; 
import JavaScript from '../Icons/JavaScript';
import ReactJS from '../Icons/React';
import MongoDB from '../Icons/Mongo';
import proyectoTres from '../../img/project/E-ecommersBackend.png'
import proyectoCuatro from '../../img/project/draguada.png'
import proyectoSeis from '../../img/project/Anzuelo.png'
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
    VUE: {
    name: "VUE",
    class: "bg-green text-white",
    icon: () => (
      <svg className="project-tag-icon" viewBox="0 0 256 221" width="256" height="221" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>
    )
  },
    Tailwind: {
    name: "Tailwind CSS",
    class: "bg-blue text-white",
    icon: () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 262 33"><path fill="#38BDF8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2Z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M80.996 13.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V28.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V9.7h3.496V4.596l4.104-1.216V9.7h4.712v3.952ZM98.958 9.7h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V9.7Zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08Zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 0 1 2.622-2.622 2.629 2.629 0 0 1 2.622 2.622c0 1.406-1.178 2.622-2.622 2.622ZM107.85 28.7v-19h4.104v19h-4.104Zm8.854 0V.96h4.104V28.7h-4.104Zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11Zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 0 1 2.622-2.622 2.629 2.629 0 0 1 2.622 2.622c0 1.406-1.178 2.622-2.622 2.622Zm-2.052 21.85v-19h4.104v19h-4.104Zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V28.7h-4.104V17.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V28.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926ZM200.418 2.1h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V2.1Zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08Zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94Zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014Zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014Z" clip-rule="evenodd"/></svg>
    )
  },
  NODE: {
    name: "NodeJs",
    class: "bg-green text-white",
    icon: () => (
                          <svg className="project-tag-icon" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Node.js">
        <path fill="#3C873A" d="m63.9 1.6 52.3 30.2a12 12 0 0 1 6 10.4v60.4a12 12 0 0 1-6 10.4l-52.3 30.7a12 12 0 0 1-11.8 0L-0.2 113a12 12 0 0 1-6-10.4V42.2a12 12 0 0 1 6-10.4L52 1.6a12 12 0 0 1 11.9 0Z"/>
        <path fill="#fff" d="M64 22.8a3 3 0 0 0-1.5.4L22.7 46.2c-.9.5-1.5 1.5-1.5 2.5v31c0 1.1.6 2 1.5 2.6l39.8 23a3 3 0 0 0 3 0l39.8-23c1-.5 1.6-1.5 1.6-2.6v-31c0-1.1-.6-2-1.6-2.5L65.5 23.2c-.4-.3-1-.4-1.5-.4Zm-10 23.6c1 0 1.7.3 1.7 1.4v21.2c0 3.7-2 6.6-7 6.6-3 0-5.3-.8-7.2-2.4-.6-.5-.7-1.3-.3-1.9l1.7-2.6c.5-.7 1.3-.8 1.9-.3.9.7 1.9 1.2 3.2 1.2 1.6 0 2.5-.6 2.5-2v-19c0-1 .7-1.4 1.7-1.4h1.8Zm29.4.3c6.5 0 9.7 3.2 9.7 7.8 0 5.3-3.1 8-9.1 8.5l-2.9.2c-2 .2-2.5.7-2.5 1.7 0 1 1 1.6 3 1.6 1.6 0 3.5-.4 5.2-1.4.7-.5 1.5-.3 1.9.4l1.4 2.4c.4.7.3 1.5-.4 2-2.3 1.5-5.2 2.4-8.6 2.4-6.2 0-10.1-3-10.1-8 0-5.3 3.2-7.9 9.2-8.4l2.8-.3c2-.1 2.4-.6 2.4-1.6 0-1-1-1.6-3-1.6-2.5 0-4.7.9-6.3 2-.7.5-1.5.3-1.9-.4l-1.4-2.5c-.4-.7-.2-1.5.4-2 2-1.7 5.3-2.9 8.7-2.9Z"/>
      </svg>
    )
  }
};

const PROJECTS = [

  {
    title: "Back-Commerse",
    description: "'Back-Commerse' es un E-commerse de flujo completo. Este permite registrar y loguear usuarios guardando cada movimiento en la base de dato (nuevo usuario, rol, ultimo inicio, etc). Posee vista de perfil del usuario con su custom de configuracion y un chat para que interactuen los usuarios en tiempo real. Los diferentes roles permiten distintas funciones segun el usuario. Permite visualizar productos, ver su detalle, agregar al carrito, visualizar el carrito, finalizar el proceso de compras mediante el check-in de Mercado pago, recibe un comprobante con el id y detalle de la compra. ES UN ECOMMERCE FEO PERO ME RECUERDA MIS INICIOS POR ESO LO DEJO!!",
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
    title: "NauticaElAnzuelo | e-commers",
    description: "Diseñé y desarrollé desde cero Náutica del Anzuelo, plataforma e-commerce de productos de náutica y pesca. Implementé arquitectura Full Stack JavaScript con Node.js + Express, MongoDB y React.js. Integré MercadoPago, sincronización con MercadoLibre mediante webhooks, y manejo de Axios, Multer, Nodemailer y Commander. El frontend usa Tailwind CSS, PostCSS y Bootwatch, priorizando diseño moderno, modular y responsive. Frontend: React.js,Tailwind CSS y diseño responsive. Backend: Node.js,Express,Webhooks,Axios y CORS. Base de datos:MongoDB,Mongoose Ot. habilidades:Integración de APIs,Git y Github",
    link: "",
    github: "https://github.com/FigueroaMijael/",
    image: proyectoSeis,
    tags: [TAGS.REACT, TAGS.NODE, TAGS.Tailwind, TAGS.MONGODB],
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
