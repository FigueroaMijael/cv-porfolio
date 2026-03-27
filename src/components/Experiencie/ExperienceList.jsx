import ExperienceItem from './ExperienceItem';
import './Experience.css';
import { useTranslation } from '../../Context/Languaje-context';

const ExperienceList = () => {
  const { translate } = useTranslation();

  const EXPERIENCE = [
    {
      badge: translate('experienceAvailability'),
      date: '',
      title: translate('experiences'),
      company: translate('experienceFocus'),
      description: translate('experienceDescription'),
      link: '',
    },
  ];

  return (
    <div className="experience-timeline">
      <h2 className="timeline-title" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-briefcase-fill"></i>
        {translate('experience')}
      </h2>
      <ol className="timeline-list" data-aos="fade-up" data-aos-delay="300">
        {EXPERIENCE.map((experience, index) => (
          <li key={index} className="timeline-item">
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceList;
