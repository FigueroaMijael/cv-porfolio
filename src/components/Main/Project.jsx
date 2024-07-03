import React from 'react';
import '../../pages/Project/ProjectPage.css'; 

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-blue text-white",
    icon: () => <span>🔵</span>, // Placeholder icon, replace with an actual icon if needed
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-yellow text-black",
    icon: () => <span>💛</span>, // Placeholder icon, replace with an actual icon if needed
  },
};

const PROJECTS = [
  {
    title: "React Weather App",
    description: "A weather forecasting app built with React. Provides real-time weather updates and forecasts for any location. Integrated with OpenWeatherMap API.",
    link: "https://reactweatherapp.com",
    github: "https://github.com/user/react-weather-app",
    image: "https://via.placeholder.com/70", // Placeholder image
    tags: [TAGS.REACT, TAGS.JAVASCRIPT],
  },
  {
    title: "JS Game Collection",
    description: "A collection of simple but fun games built with JavaScript. Includes classic games like Snake, Tetris, and Pong.",
    link: "https://jsgamecollection.com",
    github: "https://github.com/user/js-game-collection",
    image: "https://via.placeholder.com/70", // Placeholder image
    tags: [TAGS.JAVASCRIPT],
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
                    <tag.icon className="project-tag-icon" />
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