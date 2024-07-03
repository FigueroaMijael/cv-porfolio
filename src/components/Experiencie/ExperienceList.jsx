import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css'

const EXPERIENCE = [
  {
    date: '',
    title: 'SIN EXPERIENCIA EN EL RUBRO',
    company: '',
    description:
      '',
    link: '',
  },
];

const ExperienceList = () => (
  <div className="experience-timeline">
    <h2 className="timeline-title"><i class="bi bi-briefcase-fill"></i>Experiencia Profesional</h2>
    <div className="timeline-line"></div>
    <ol className="timeline-list">
      {EXPERIENCE.map((experience, index) => (
        <li key={index} className="timeline-item">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  </div>
);

export default ExperienceList;
