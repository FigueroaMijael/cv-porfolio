import { Link } from 'react-scroll';
import { useTranslation } from '../../Context/Languaje-context';
import micv from '../../cv/Cv.pdf';
import './About.css';

const ABOUT_CONTENT = {
  en: {
    eyebrow: 'About',
    title: 'Full Stack developer focused on building products that solve real business needs.',
    paragraphs: [
      'I build web applications that help businesses sell, manage operations, and improve internal workflows, not just visual demos.',
      'My work combines frontend execution, backend logic, database design, authentication, third-party integrations, and deployment with a strong focus on maintainability.',
      'I am looking for teams and clients where I can contribute product thinking, reliable delivery, and the ability to turn complex requirements into usable software.',
    ],
    meta: [
      { label: 'Location', value: 'Buenos Aires, Argentina' },
      { label: 'Availability', value: 'Freelance and full-time opportunities' },
      { label: 'Core stack', value: 'React, Node.js, Express, MongoDB' },
    ],
    highlights: [
      {
        title: 'End-to-end delivery',
        text: 'I can take a product from initial structure and UI to backend flows, integrations, testing, and deployment.',
      },
      {
        title: 'Business-oriented execution',
        text: 'I prioritize flows that matter in production: checkout, admin operations, user management, and content updates.',
      },
      {
        title: 'Readable, scalable code',
        text: 'I work with reusable components, clear APIs, and maintainable structure so projects can grow without collapsing.',
      },
    ],
    projectsCta: 'View projects',
  },
  es: {
    eyebrow: 'Sobre mí',
    title: 'Full Stack Developer enfocado en construir productos que resuelven necesidades reales de negocio.',
    paragraphs: [
      'Desarrollo aplicaciones web que ayudan a vender, operar y gestionar procesos, no solo proyectos visuales para mostrar.',
      'Mi trabajo combina frontend, backend, bases de datos, autenticación, integraciones con terceros y deployment, con foco en mantenibilidad y claridad técnica.',
      'Busco equipos y clientes donde pueda aportar criterio de producto, ejecución confiable y capacidad para convertir requerimientos complejos en software usable.',
    ],
    meta: [
      { label: 'Ubicación', value: 'Buenos Aires, Argentina' },
      { label: 'Disponibilidad', value: 'Freelance y oportunidades full-time' },
      { label: 'Stack principal', value: 'React, Node.js, Express, MongoDB' },
    ],
    highlights: [
      {
        title: 'Entrega end-to-end',
        text: 'Puedo llevar un producto desde la estructura inicial y la UI hasta la lógica backend, integraciones, testing y deploy.',
      },
      {
        title: 'Ejecución orientada al negocio',
        text: 'Priorizo flujos que importan en producción: checkout, operación interna, gestión de usuarios y administración de contenido.',
      },
      {
        title: 'Código legible y escalable',
        text: 'Trabajo con componentes reutilizables, APIs claras y estructura mantenible para que el proyecto pueda crecer sin volverse frágil.',
      },
    ],
    projectsCta: 'Ver proyectos',
  },
};

const About = () => {
  const { language, translate } = useTranslation();
  const content = ABOUT_CONTENT[language] || ABOUT_CONTENT.en;

  return (
    <section className="about-section" id="about-me">
      <div className="about-grid">
        <div className="about-copy-card" data-aos="fade-right" data-aos-delay="200">
          <p className="about-eyebrow">{content.eyebrow}</p>
          <h2 className="about-title">{content.title}</h2>

          <div className="about-paragraphs">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-meta">
            {content.meta.map((item) => (
              <div className="about-meta-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a
              href={micv}
              download="Mijael-Figueroa-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about-button about-button-primary"
            >
              {translate('downloadcv')}
            </a>
            <Link className="about-button about-button-secondary" to="project" smooth={true} duration={500}>
              {content.projectsCta}
            </Link>
          </div>
        </div>

        <div className="about-highlights" data-aos="fade-left" data-aos-delay="300">
          {content.highlights.map((item, index) => (
            <article className="about-highlight-card" key={item.title}>
              <span className="about-highlight-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
