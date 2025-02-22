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
        </LinkInline>
      )}
    </div>
  </div>
);

export default ExperienceItem;
