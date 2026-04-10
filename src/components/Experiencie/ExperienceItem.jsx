import './Experience.css';
import { useTranslation } from '../../Context/Languaje-context';

const ExperienceItem = ({ title, company, description, highlights = [], link, date }) => {
  const { translate } = useTranslation();

  return (
    <article className="experience-item">
      <header className="experience-header">
        <h3 className="experience-title">{title}</h3>
        {company && <h4 className="experience-company">{company}</h4>}
        {date && <time className="experience-date">{date}</time>}
      </header>
      {(description || link) && (
        <div className="experience-description">
          {description && <p>{description}</p>}
          {highlights.length > 0 && (
            <ul className="experience-highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {link && (
            <a className="link-inline" href={link} target="_blank" rel="noopener noreferrer">
              {translate('readmore')}
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ExperienceItem;
