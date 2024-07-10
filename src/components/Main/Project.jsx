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
    title: "React Weather App",
    description: "A weather forecasting app built with React. Provides real-time weather updates and forecasts for any location. Integrated with OpenWeatherMap API.",
    link: "",
    github: "",
    image: "./src/img/project/FormulawebProject.png",
    tags: [TAGS.HTML5, TAGS.CSS],
  },
  {
    title: "JS Game Collection",
    description: "A collection of simple but fun games built with JavaScript. Includes classic games like Snake, Tetris, and Pong.",
    link: "",
    github: "",
    image: "./src/img/project/ProgrammingProject.png",
    tags: [TAGS.JAVASCRIPT],
  },
  {
    title: "JS Game Collection",
    description: "A collection of simple but fun games built with JavaScript. Includes classic games like Snake, Tetris, and Pong.",
    link: "",
    github: "",
    image: "./src/img/project/E-ecommersBackend.png",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MONGODB],
  },
];

const Projects = () => (
  <div className="projects-container">
    <h2 className="projects-title">{"</>"} Proyectos</h2>
    {PROJECTS.map(({ image, title, description, tags, link, github }) => (
      <article key={title} className="project-card">
        <div className="project-image-container">
          <img alt={title} className="project-image" loading="lazy" src={image} />
        </div>
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <div className="project-tags">
            <ul className="project-tags-list">
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
          <div className="project-description">{description}</div>
          <footer className="project-footer">
            {github && (
              <a href={github} className="project-link">
                <span>🔗</span> {/* Placeholder icon for GitHub */}
                Code
              </a>
            )}
            {link && (
              <a href={link} className="project-link">
                <span>🔗</span> {/* Placeholder icon for Link */}
                Preview
              </a>
            )}
          </footer>
        </div>
      </article>
    ))}
  </div>
);

export default Projects;
