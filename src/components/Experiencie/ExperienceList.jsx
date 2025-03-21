import ExperienceItem from './ExperienceItem';
import './Experience.css'
import { useTranslation } from '../../Context/Languaje-context';

const ExperienceList = () => {

    const { translate } = useTranslation(); // Usa el contexto

  const EXPERIENCE = [
    {
      date: '',
      title: translate("experiences"),
      company: '',
      description:
        '',
      link: '',
    },
  ];

  return (
  <div className="experience-timeline" >
    <h2 className="timeline-title" data-aos="fade-up" data-aos-delay="200"><i class="bi bi-briefcase-fill"></i>{translate("experience")}</h2>
    <div className="timeline-line" data-aos="fade-up" data-aos-delay="300"></div>
    <ol className="timeline-list" data-aos="fade-up" data-aos-delay="400">
      {EXPERIENCE.map((experience, index) => (
        <li key={index} className="timeline-item">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  </div>
  )
};

export default ExperienceList;
