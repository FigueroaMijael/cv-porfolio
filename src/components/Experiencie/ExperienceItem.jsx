import './Experience.css';
import { useTranslation } from '../../Context/Languaje-context';

const ExperienceItem = ({ title, company, description, link, date, badge }) => {
  const { translate } = useTranslation();

  return (
    <article className="experience-item">
      <header className="experience-header">
        <div className="experience-heading">
          <h3 className="experience-title">{title}</h3>
          {company && <h4 className="experience-company">{company}</h4>}
        </div>
        {(badge || date) && (
          <div className="experience-meta">
            {badge && <span className="experience-badge">{badge}</span>}
            {date && <time className="experience-date">{date}</time>}
          </div>
        )}
      </header>
      {(description || link) && (
        <div className="experience-description">
          {description && <p>{description}</p>}
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
