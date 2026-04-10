import Typical from 'react-typical';
import '../../pages/Contact/ContactPage.css';
import { useTranslation } from '../../Context/Languaje-context';

const CONTACT_CONTENT = {
  en: {
    channels: ['Email', 'WhatsApp', 'LinkedIn', 'GitHub'],
  },
  es: {
    channels: ['Email', 'WhatsApp', 'LinkedIn', 'GitHub'],
  },
};

const CONTACT_LINKS = {
  Email: {
    href: 'mailto:figueroamijael86@gmail.com',
    iconClass: 'bi bi-envelope-at-fill',
    wrapperClass: 'fab fas fa-envelope',
  },
  WhatsApp: {
    href: 'https://api.whatsapp.com/send?phone=541136817159',
    iconClass: 'bi bi-whatsapp',
    wrapperClass: 'fab fa-whatsapp',
  },
  LinkedIn: {
    href: 'https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info',
    iconClass: 'bi bi-linkedin',
    wrapperClass: 'fab fa-linkedin-in',
  },
  GitHub: {
    href: 'https://github.com/FigueroaMijael',
    iconClass: 'bi bi-github',
    wrapperClass: 'fab fa-github-square',
  },
};

const Contact = () => {
  const { translate, language } = useTranslation();
  const content = CONTACT_CONTENT[language] || CONTACT_CONTENT.en;
  const typingSteps = content.channels.flatMap((channel) => [channel, 2500]);

  return (
    <section className="contactos" id="contact">
      <h2 className="heading">{translate('contact')}</h2>
      <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
        {translate('medioContact')}{' '}
        <Typical className="site-contacto" loop={Infinity} wrapper="b" steps={typingSteps} />
      </h3>

      <div className="icons">
        {content.channels.map((channel) => {
          const contactLink = CONTACT_LINKS[channel];

          return (
            <a
              key={channel}
              href={contactLink.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className={contactLink.wrapperClass}>
                  <i className={contactLink.iconClass}></i>
                </span>
              </div>
              <div className="text">{channel}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
