import '../../pages/Contact/ContactPage.css';
import Typical from 'react-typical';
import { useTranslation } from '../../Context/Languaje-context';

const Contact = () => {
  const { translate } = useTranslation();
  const contactChannels = translate('contactChannels');
  const typingSteps = contactChannels.flatMap((channel) => [channel, 2500]);
  const contactLinks = [
    {
      href: 'mailto:figueroamijael86@gmail.com',
      label: contactChannels[0],
      iconClass: 'bi bi-envelope-at-fill',
      wrapperClass: 'fab fas fa-envelope',
    },
    {
      href: 'https://api.whatsapp.com/send?phone=1136817159',
      label: contactChannels[1],
      iconClass: 'bi bi-whatsapp',
      wrapperClass: 'fab fa-whatsapp',
    },
    {
      href: 'https://www.instagram.com/figuee15_/',
      label: contactChannels[2],
      iconClass: 'bi bi-instagram',
      wrapperClass: 'fab fa-instagram',
    },
    {
      href: 'https://t.me/1136817159',
      label: contactChannels[3],
      iconClass: 'bi bi-telegram',
      wrapperClass: 'fab fa-telegram',
    },
    {
      href: 'https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info',
      label: contactChannels[4],
      iconClass: 'bi bi-linkedin',
      wrapperClass: 'fab fa-linkedin-in',
    },
    {
      href: 'https://github.com/FigueroaMijael',
      label: contactChannels[5],
      iconClass: 'bi bi-github',
      wrapperClass: 'fab fa-github-square',
    },
  ];

  return (
    <section className="contactos" id="contact">
      <h2 className="heading">{translate('contact')}</h2>
      <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
        {translate('medioContact')}{' '}
        <Typical className="site-contacto" loop={Infinity} wrapper="b" steps={typingSteps} />
      </h3>

      <div className="icons">
        {contactLinks.map((contactLink) => (
          <a
            key={contactLink.label}
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
            <div className="text">{contactLink.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
