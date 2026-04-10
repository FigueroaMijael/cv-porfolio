import { useTranslation } from '../../Context/Languaje-context';
import './Service.css';

const BUILD_CONTENT = {
  en: {
    heading: 'What I Build',
    intro:
      'I build digital products that need structure, operations, and business logic behind the interface, not just polished screens.',
    cards: [
      {
        icon: 'bi bi-window-stack',
        title: 'Business websites',
        text: 'Corporate and service websites designed to communicate clearly, generate leads, and support real commercial goals.',
      },
      {
        icon: 'bi bi-bag-check',
        title: 'E-commerce platforms',
        text: 'Catalogs, checkout flows, payments, order management, logistics coordination, and integrations that support online sales.',
      },
      {
        icon: 'bi bi-grid-1x2',
        title: 'Admin dashboards',
        text: 'Internal panels to manage products, orders, users, permissions, and operational decisions from one place.',
      },
      {
        icon: 'bi bi-plug',
        title: 'API integrations',
        text: 'Connections with payment gateways, messaging tools, external services, and automation through webhooks and backend flows.',
      },
    ],
  },
  es: {
    heading: 'Lo que construyo',
    intro:
      'Construyo productos digitales que necesitan estructura, operación y lógica de negocio detrás de la interfaz, no solo pantallas bien presentadas.',
    cards: [
      {
        icon: 'bi bi-window-stack',
        title: 'Business websites',
        text: 'Sitios corporativos y de servicios pensados para comunicar con claridad, generar contactos y acompañar objetivos comerciales reales.',
      },
      {
        icon: 'bi bi-bag-check',
        title: 'E-commerce platforms',
        text: 'Catálogos, checkout, pagos, gestión de pedidos, coordinación logística e integraciones que sostienen una operación de venta online.',
      },
      {
        icon: 'bi bi-grid-1x2',
        title: 'Admin dashboards',
        text: 'Paneles internos para administrar productos, pedidos, usuarios, permisos y decisiones operativas desde un solo lugar.',
      },
      {
        icon: 'bi bi-plug',
        title: 'API integrations',
        text: 'Conexiones con pasarelas de pago, mensajería, servicios externos y automatizaciones mediante webhooks y flujos backend.',
      },
    ],
  },
};

const Service = () => {
  const { language } = useTranslation();
  const content = BUILD_CONTENT[language] || BUILD_CONTENT.en;

  return (
    <section className="build-section" id="build">
      <div className="build-header" data-aos="fade-up" data-aos-delay="150">
        <h2 className="heading">{content.heading}</h2>
        <p>{content.intro}</p>
      </div>

      <div className="build-grid">
        {content.cards.map((card, index) => (
          <article
            className="build-card"
            key={card.title}
            data-aos="fade-up"
            data-aos-delay={200 + index * 80}
          >
            <span className="build-card-icon" aria-hidden="true">
              <i className={card.icon}></i>
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;
