import React from 'react';
import LinkInline from './LinkInLine';
import './Experience.css'

const ExperienceItem = ({ title, company, description, link, date }) => (
  <div className="experience-item">
    <div className="experience-content">
      <div className="experience-header">
        <span className="experience-point">&bull;</span>
        <h3 className="experience-title">{title}</h3>
        <h4 className="experience-company">{company}</h4>
        <time className="experience-date">{date}</time>
      </div>
    </div>
    <div className="experience-description">
      <p>{description}</p>
      {link && (
        <LinkInline href={link}>
          Saber más{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="experience-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6-6 6" />
          </svg>
        </LinkInline>
      )}
    </div>
  </div>
);

export default ExperienceItem;
