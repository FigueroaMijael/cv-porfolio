import { useEffect, useRef, useState } from 'react';
import '../../pages/Project/ProjectPage.css';
import nauticaCompositeImage from '../../img/project/nautica-anzuelo-composite.jpeg';
import lawyerImage from '../../img/project/lizarazo-composite.jpeg';
import { useTranslation } from '../../Context/Languaje-context';

const PROJECTS_CONTENT = {
  en: {
    heading: 'Projects',
    intro:
      'A selection of full stack work focused on business use cases, operational flows, and applications designed to be used beyond the demo stage.',
    actions: {
      preview: 'Live preview',
      code: 'Code',
      details: 'See more details',
      hide: 'Hide details',
    },
    projects: [
      {
        id: 'nautica',
        label: 'E-commerce full stack',
        title: 'Nautica del Anzuelo',
        summary:
          'Full Stack e-commerce platform for a nautical and fishing business, built to centralize catalog, checkout, and daily operations.',
        description:
          'Beyond the storefront, it includes operational flows for payments, internal management, and external integrations.',
        stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mercado Pago', 'Webhooks'],
        previewLink: 'https://www.nauticaelanzuelo.com/',
        previewLabel: 'Official site',
        media: {
          type: 'single',
          image: {
            src: nauticaCompositeImage,
            alt: 'Composite preview of Nautica del Anzuelo on desktop and mobile',
          },
        },
        details: [
          {
            title: 'Admin panel',
            text: 'Centralized management for products, inventory visibility, media, and order updates.',
          },
          {
            title: 'Payment integration',
            text: 'Checkout connected to Mercado Pago to support secure purchase flows and payment confirmation.',
          },
          {
            title: 'Webhooks',
            text: 'Server-side events to synchronize payment status changes and external marketplace actions in real time.',
          },
          {
            title: 'Logistics',
            text: 'Order handling and operational coordination designed to support shipping and post-purchase execution.',
          },
          {
            title: 'Authentication',
            text: 'User access, protected routes, and role-aware flows for both customers and internal management.',
          },
        ],
      },
      {
        id: 'lawyer',
        label: 'Professional website',
        title: 'Abogada Guadalupe Lizarazo',
        summary:
          'Professional service website structured to communicate legal services clearly, reinforce trust, and convert visits into contact opportunities.',
        description:
          'The site focuses on service clarity, professional positioning, and a simple navigation path that leads visitors directly to contact channels.',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        previewLink: 'https://draguadalupelizarazo.com',
        media: {
          type: 'single',
          image: {
            src: lawyerImage,
            alt: 'Preview of Abogada Guadalupe Lizarazo website',
            fit: 'contain',
          },
        },
        details: [
          {
            title: 'Trust-first layout',
            text: 'The structure prioritizes credibility, quick understanding of services, and a professional visual tone for potential clients.',
          },
          {
            title: 'Clear conversion path',
            text: 'Contact entry points are always visible so visitors can move from discovery to inquiry without friction.',
          },
          {
            title: 'Responsive presentation',
            text: 'Content hierarchy and spacing were designed to keep the same clarity across mobile and desktop screens.',
          },
        ],
      },
    ],
  },
  es: {
    heading: 'Proyectos',
    intro:
      'Una selección de trabajo full stack orientado a casos de uso reales, flujos operativos y aplicaciones pensadas para usarse más allá de la demo.',
    actions: {
      preview: 'Sitio online',
      code: 'Código',
      details: 'Ver más detalles',
      hide: 'Ocultar detalles',
    },
    projects: [
      {
        id: 'nautica',
        label: 'E-commerce full stack',
        title: 'Nautica del Anzuelo',
        summary:
          'Plataforma e-commerce full stack para una marca de náutica y pesca, pensada para centralizar catálogo, checkout y operación diaria.',
        description:
          'Además de la tienda, resuelve pagos, administración interna e integraciones necesarias para operar de verdad.',
        stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mercado Pago', 'Webhooks'],
        previewLink: 'https://www.nauticaelanzuelo.com/',
        previewLabel: 'Sitio oficial',
        media: {
          type: 'single',
          image: {
            src: nauticaCompositeImage,
            alt: 'Preview compuesta de Nautica del Anzuelo en desktop y mobile',
          },
        },
        details: [
          {
            title: 'Admin panel',
            text: 'Gestión centralizada de productos, visibilidad de stock, media y actualización de pedidos.',
          },
          {
            title: 'Payment integration',
            text: 'Checkout conectado con Mercado Pago para sostener un proceso de compra seguro y trazable.',
          },
          {
            title: 'Webhooks',
            text: 'Eventos server-side para sincronizar cambios de pago y acciones externas en tiempo real.',
          },
          {
            title: 'Logistics',
            text: 'Manejo de pedidos y coordinación operativa pensada para el despacho y la post-compra.',
          },
          {
            title: 'Authentication',
            text: 'Acceso de usuarios, rutas protegidas y flujos con roles para clientes y administración interna.',
          },
        ],
      },
      {
        id: 'lawyer',
        label: 'Sitio profesional',
        title: 'Abogada Guadalupe Lizarazo',
        summary:
          'Sitio profesional de servicios diseñado para comunicar especialidades legales con claridad, reforzar confianza y convertir visitas en oportunidades de contacto.',
        description:
          'El foco está puesto en ordenar la información, transmitir respaldo profesional y llevar al usuario a una consulta concreta sin fricción.',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        previewLink: 'https://draguadalupelizarazo.com',
        media: {
          type: 'single',
          image: {
            src: lawyerImage,
            alt: 'Preview del sitio Abogada Guadalupe Lizarazo',
            fit: 'contain',
          },
        },
        details: [
          {
            title: 'Jerarquía orientada a confianza',
            text: 'La estructura prioriza credibilidad, comprensión rápida de servicios y una presencia visual profesional.',
          },
          {
            title: 'Conversión directa',
            text: 'Los accesos a contacto están visibles para que el visitante pueda pasar de la lectura a la consulta sin rodeos.',
          },
          {
            title: 'Presentación responsive',
            text: 'La jerarquía y el spacing fueron pensados para sostener la misma claridad en mobile y desktop.',
          },
        ],
      },
    ],
  },
};

const ProjectCard = ({ content, index, isExpanded, project, toggleDetails }) => {
  const cardRef = useRef(null);
  const mediaSurfaceRef = useRef(null);
  const mediaTrackRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const updateMediaOffset = () => {
      frameId = null;

      const card = cardRef.current;
      const mediaSurface = mediaSurfaceRef.current;
      const mediaTrack = mediaTrackRef.current;

      if (!card || !mediaSurface || !mediaTrack) {
        return;
      }

      if (window.innerWidth <= 1024) {
        mediaTrack.style.setProperty('--project-media-offset', '0px');
        return;
      }

      const cardRect = card.getBoundingClientRect();
      const cardStyles = window.getComputedStyle(card);
      const paddingTop = parseFloat(cardStyles.paddingTop) || 0;
      const paddingBottom = parseFloat(cardStyles.paddingBottom) || 0;
      const availableHeight = card.offsetHeight - paddingTop - paddingBottom;
      const maxOffset = Math.max(0, availableHeight - mediaSurface.offsetHeight);
      const topOffset = 112;
      const nextOffset = Math.max(0, Math.min(maxOffset, topOffset - cardRect.top - paddingTop));

      mediaTrack.style.setProperty('--project-media-offset', `${nextOffset}px`);
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateMediaOffset);
    };

    scheduleUpdate();

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isExpanded]);

  return (
    <article
      className="project-showcase-card"
      key={project.id}
      data-aos="fade-up"
      data-aos-delay={170 + index * 80}
      ref={cardRef}
    >
      <div className="project-showcase-sidebar">
        <div className="project-showcase-media-track" ref={mediaTrackRef}>
          <div className="project-showcase-media">
            <div className="project-media-surface" ref={mediaSurfaceRef}>
              {project.media.type === 'composite' ? (
                <div className="project-media-composition">
                  <div className="project-media-desktop-shell">
                    <img
                      alt={project.media.desktop.alt}
                      className="project-media-desktop"
                      loading="lazy"
                      src={project.media.desktop.src}
                    />
                  </div>

                  <div className="project-media-mobile-shell">
                    <img
                      alt={project.media.mobile.alt}
                      className="project-media-mobile"
                      loading="lazy"
                      src={project.media.mobile.src}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`project-media-single-shell${
                    project.media.image.fit === 'contain' ? ' project-media-single-shell-contain' : ''
                  }`}
                >
                  <img
                    alt={project.media.image.alt}
                    className={`project-media-single${
                      project.media.image.fit === 'contain' ? ' project-media-single-contain' : ''
                    }`}
                    loading="lazy"
                    src={project.media.image.src}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="project-showcase-content">
        <span className="project-card-label">{project.label}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-summary">{project.summary}</p>
        <p className="project-card-description">{project.description}</p>

        <div className="project-stack-list">
          {project.stack.map((item) => (
            <span className="project-stack-pill" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.previewLink}
            className="project-link-button project-link-button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            {project.previewLabel || content.actions.preview}
          </a>

          {project.github && (
            <a
              href={project.github}
              className="project-link-button project-link-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
              {content.actions.code}
            </a>
          )}

          {project.details?.length > 0 && (
            <button
              type="button"
              className="project-link-button project-link-button-ghost"
              onClick={() => toggleDetails(project.id)}
              aria-expanded={isExpanded}
              aria-controls={`project-details-${project.id}`}
            >
              <i className={`bi ${isExpanded ? 'bi-dash-circle' : 'bi-plus-circle'}`}></i>
              {isExpanded ? content.actions.hide : content.actions.details}
            </button>
          )}
        </div>

        {project.details?.length > 0 && (
          <div
            className={`project-details ${isExpanded ? 'is-open' : ''}`}
            id={`project-details-${project.id}`}
          >
            {project.details.map((detail) => (
              <article className="project-detail-item" key={detail.title}>
                <h4>{detail.title}</h4>
                <p>{detail.text}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Project = () => {
  const { language } = useTranslation();
  const content = PROJECTS_CONTENT[language] || PROJECTS_CONTENT.en;
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (projectId) => {
    setExpandedProject((current) => (current === projectId ? null : projectId));
  };

  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        <div className="projects-copy" data-aos="fade-up" data-aos-delay="100">
          <h2 className="projects-title">{content.heading}</h2>
          <p className="projects-intro">{content.intro}</p>
        </div>

        <div className="projects-list">
          {content.projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;

            return (
              <ProjectCard
                key={project.id}
                content={content}
                index={index}
                isExpanded={isExpanded}
                project={project}
                toggleDetails={toggleDetails}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
