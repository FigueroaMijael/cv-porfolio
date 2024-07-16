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
  <div className="experience-timeline" >
    <h2 className="timeline-title" data-aos="fade-up" data-aos-delay="200"><i class="bi bi-briefcase-fill"></i>Experiencia Profesional</h2>
    <div className="timeline-line" data-aos="fade-up" data-aos-delay="300"></div>
    <ol className="timeline-list" data-aos="fade-up" data-aos-delay="400">
      {EXPERIENCE.map((experience, index) => (
        <li key={index} className="timeline-item">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  </div>
);

export default ExperienceList;
