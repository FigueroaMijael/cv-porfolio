import { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedinIcon from 'bootstrap-icons/icons/linkedin.svg?url';
import githubIcon from 'bootstrap-icons/icons/github.svg?url';
import instagramIcon from 'bootstrap-icons/icons/instagram.svg?url';
import whatsappIcon from 'bootstrap-icons/icons/whatsapp.svg?url';
import ParticleHeaderBg from '../ParticlesBackground/ParticlesHeader/ParticleHeaderBg';
import { useTranslation } from '../../Context/Languaje-context';
import './Content.css';

const HERO_CONTENT = {
  en: {
    eyebrow: 'Full Stack Developer',
    title: 'I build real-world web applications that help businesses sell, operate, and grow.',
    description:
      'From e-commerce platforms and admin dashboards to API integrations and custom workflows, I focus on products that can be used in production, not just shown in a portfolio.',
    badges: ['Real business flows', 'Admin + operations', 'Payments + integrations', 'Freelance delivery'],
    primaryCta: 'View projects',
    secondaryCta: 'Contact me',
  },
  es: {
    eyebrow: 'Full Stack Developer',
    title: 'Construyo aplicaciones web reales para vender, operar y hacer crecer negocios.',
    description:
      'Desde e-commerce y paneles de administración hasta integraciones con APIs y flujos a medida, trabajo sobre productos pensados para usarse en producción, no solo para mostrarse en un portfolio.',
    badges: ['Flujos reales de negocio', 'Admin + operación', 'Pagos + integraciones', 'Entrega freelance'],
    primaryCta: 'Ver proyectos',
    secondaryCta: 'Contactarme',
  },
};

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info',
    label: 'LinkedIn',
    icon: linkedinIcon,
  },
  {
    href: 'https://github.com/FigueroaMijael',
    label: 'GitHub',
    icon: githubIcon,
  },
  {
    href: 'https://www.instagram.com/figuee15_/',
    label: 'Figwebs',
    icon: instagramIcon,
  },
  {
    href: 'https://api.whatsapp.com/send?phone=541136817159',
    label: 'WhatsApp',
    icon: whatsappIcon,
  },
];

const Content = () => {
  const { language } = useTranslation();
  const content = HERO_CONTENT[language] || HERO_CONTENT.en;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="contenido">
      <ParticleHeaderBg id="particles-js" />

      <section className="inicio" id="inicio">
        <div className="titulo">
          <p className="hero-eyebrow" data-aos="fade-up" data-aos-delay="500">
            {content.eyebrow}
          </p>
          <h1 data-aos="fade-up" data-aos-delay="650">
            {content.title}
          </h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="800">
            {content.description}
          </p>

          <div className="hero-badges" data-aos="fade-up" data-aos-delay="950">
            {content.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="1100">
            <Link className="hero-button hero-button-primary" to="project" smooth={true} duration={500}>
              {content.primaryCta}
            </Link>
            <Link className="hero-button hero-button-secondary" to="contact" smooth={true} duration={500}>
              {content.secondaryCta}
            </Link>
          </div>

          <div className="redes-sociales">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={1250 + index * 120}
                aria-label={link.label}
              >
                <img src={link.icon} alt={link.label} />
              </a>
            ))}
          </div>

          <div className="wrapper">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={link.label}
                className="button"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={1250 + index * 120}
              >
                <div className="icon">
                  <img src={link.icon} alt={link.label} />
                </div>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <Link to="about-me" smooth={true} duration={500}>
            <div className="scroll-down"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Content;
