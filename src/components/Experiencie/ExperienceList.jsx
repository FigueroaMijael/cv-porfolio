import ExperienceItem from './ExperienceItem';
import './Experience.css';
import { useTranslation } from '../../Context/Languaje-context';

const EXPERIENCE_CONTENT = {
  en: [
    {
      date: '2024 - Present',
      title: 'Freelance Full Stack Developer',
      company: 'Independent clients and product-oriented builds',
      description:
        'I work on websites and web applications that need more than design: real workflows, business logic, integrations, and delivery ready for production.',
      highlights: [
        'Built business websites, e-commerce flows, and custom admin experiences for real use cases.',
        'Implemented authentication, role-based permissions, API integrations, and payment-related flows.',
        'Handled discovery, technical decisions, implementation, iteration, and deployment with direct client communication.',
      ],
    },
  ],
  es: [
    {
      date: '2024 - Actualidad',
      title: 'Freelance Full Stack Developer',
      company: 'Clientes independientes y desarrollos orientados a producto',
      description:
        'Trabajo en sitios y aplicaciones web que necesitan algo mas que diseño: flujos reales, lógica de negocio, integraciones y entrega lista para producción.',
      highlights: [
        'Desarrollé sitios de negocio, flujos e-commerce y experiencias de administración para casos de uso reales.',
        'Implementé autenticación, permisos por rol, integraciones con APIs y flujos vinculados a pagos.',
        'Tomé decisiones técnicas, desarrollé, iteré y realicé deploy manteniendo comunicación directa con el cliente.',
      ],
    },
  ],
};

const ExperienceList = () => {
  const { translate, language } = useTranslation();
  const items = EXPERIENCE_CONTENT[language] || EXPERIENCE_CONTENT.en;

  return (
    <section className="experience-timeline">
      <h2 className="timeline-title" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-briefcase-fill"></i>
        {translate('experience')}
      </h2>

      <ol className="timeline-list" data-aos="fade-up" data-aos-delay="280">
        {items.map((experience, index) => (
          <li key={`${experience.title}-${index}`} className="timeline-item">
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceList;
