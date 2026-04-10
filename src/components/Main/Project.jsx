import '../../pages/Project/ProjectPage.css';
import featuredImage from '../../img/project/Anzuelo.png';
import commerceImage from '../../img/project/E-ecommersBackend.png';
import lawyerImage from '../../img/project/draguada.png';
import { useTranslation } from '../../Context/Languaje-context';

const PROJECTS_CONTENT = {
  en: {
    heading: 'Projects',
    intro:
      'A selection of full stack work focused on business use cases, operational flows, and applications designed to be used beyond the demo stage.',
    featured: {
      label: 'Featured project',
      title: 'Nautica del Anzuelo',
      summary:
        'Full Stack e-commerce platform built for a nautical and fishing business, designed to centralize catalog, sales flow, and operational management.',
      description:
        'This build goes beyond a storefront. It is structured as an operational product where customers can browse and buy, while the business can manage products, orders, and critical backend events from a practical workflow.',
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mercado Pago', 'Webhooks'],
      features: [
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
    secondary: [
      {
        title: 'Back-Commerse',
        description:
          'End-to-end e-commerce application with user registration, login, cart flow, role-based behavior, profile configuration, and payment processing support.',
        stack: ['React', 'JavaScript', 'MongoDB'],
        link: 'https://myproyectfinals-production.up.railway.app',
        github: 'https://github.com/FigueroaMijael/MyProyectFinals',
        image: commerceImage,
      },
      {
        title: 'Abogada Guadalupe Lizarazo',
        description:
          'Professional service website structured to communicate legal services clearly, reinforce trust, and convert visits into contact opportunities.',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://draguadalupelizarazo.com',
        github: 'https://github.com/FigueroaMijael/bogada-Guadalupe-Lizarazo-Derecho-Laboral-Civil-Familia-y-Amparos-de-Salud',
        image: lawyerImage,
      },
    ],
    preview: 'Preview',
    code: 'Code',
  },
  es: {
    heading: 'Proyectos',
    intro:
      'Una selección de trabajo full stack orientado a casos de uso reales, flujos operativos y aplicaciones pensadas para usarse mas allá de la demo.',
    featured: {
      label: 'Proyecto destacado',
      title: 'Nautica del Anzuelo',
      summary:
        'Plataforma e-commerce full stack construida para una marca de náutica y pesca, pensada para centralizar catálogo, ventas y operación diaria.',
      description:
        'Este desarrollo va mas allá de una tienda visual. Está planteado como un producto operativo donde el usuario puede comprar y el negocio puede administrar productos, pedidos y eventos críticos desde un flujo de trabajo concreto.',
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mercado Pago', 'Webhooks'],
      features: [
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
    secondary: [
      {
        title: 'Back-Commerse',
        description:
          'Aplicación e-commerce de punta a punta con registro y login de usuarios, carrito, comportamiento por roles, configuración de perfil y soporte para checkout con pagos.',
        stack: ['React', 'JavaScript', 'MongoDB'],
        link: 'https://myproyectfinals-production.up.railway.app',
        github: 'https://github.com/FigueroaMijael/MyProyectFinals',
        image: commerceImage,
      },
      {
        title: 'Abogada Guadalupe Lizarazo',
        description:
          'Sitio profesional de servicios diseñado para comunicar especialidades legales con claridad, reforzar confianza y convertir visitas en oportunidades de contacto.',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://draguadalupelizarazo.com',
        github: 'https://github.com/FigueroaMijael/bogada-Guadalupe-Lizarazo-Derecho-Laboral-Civil-Familia-y-Amparos-de-Salud',
        image: lawyerImage,
      },
    ],
    preview: 'Preview',
    code: 'Code',
  },
};

const Projects = () => {
  const { language } = useTranslation();
  const content = PROJECTS_CONTENT[language] || PROJECTS_CONTENT.en;
  const { featured, secondary } = content;

  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        <div className="projects-copy" data-aos="fade-up" data-aos-delay="100">
          <h2 className="projects-title">{content.heading}</h2>
          <p className="projects-intro">{content.intro}</p>
        </div>

        <article className="project-featured-card">
          <div className="project-featured-media" data-aos="fade-right" data-aos-delay="180">
            <img alt={featured.title} className="project-featured-image" loading="lazy" src={featuredImage} />
          </div>

          <div className="project-featured-content" data-aos="fade-left" data-aos-delay="220">
            <span className="project-featured-label">{featured.label}</span>
            <h3 className="project-featured-title">{featured.title}</h3>
            <p className="project-featured-summary">{featured.summary}</p>
            <p className="project-featured-description">{featured.description}</p>

            <div className="project-stack-list">
              {featured.stack.map((item) => (
                <span className="project-stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-feature-grid">
              {featured.features.map((feature) => (
                <article className="project-feature-item" key={feature.title}>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </article>

        <div className="project-grid">
          {secondary.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={220 + index * 90}
            >
              <div className="project-image-container">
                <img alt={project.title} className="project-image" loading="lazy" src={project.image} />
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack-list">
                  {project.stack.map((item) => (
                    <span className="project-stack-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <footer className="project-footer">
                  {project.github && (
                    <a href={project.github} className="project-link-button" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                      {content.code}
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="project-link-button" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-box-arrow-up-right"></i>
                      {content.preview}
                    </a>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
