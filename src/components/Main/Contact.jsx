import '../../pages/Contact/ContactPage.css';
import { useTranslation } from '../../Context/Languaje-context';

const CONTACT_CONTENT = {
  en: {
    heading: 'Contact',
    intro: 'If you need a Full Stack Developer to build, improve, or scale a product, these are the fastest ways to reach me.',
    channels: [
      {
        label: 'Email',
        value: 'figueroamijael86@gmail.com',
        href: 'mailto:figueroamijael86@gmail.com',
        icon: 'bi bi-envelope-at',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/mijael-figueroa-019952249',
        href: 'https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info',
        icon: 'bi bi-linkedin',
      },
      {
        label: 'GitHub',
        value: 'github.com/FigueroaMijael',
        href: 'https://github.com/FigueroaMijael',
        icon: 'bi bi-github',
      },
      {
        label: 'WhatsApp',
        value: '+54 11 3681-7159',
        href: 'https://api.whatsapp.com/send?phone=541136817159',
        icon: 'bi bi-whatsapp',
      },
    ],
  },
  es: {
    heading: 'Contacto',
    intro: 'Si necesitás un Full Stack Developer para construir, mejorar o escalar un producto, estos son los canales más directos para contactarme.',
    channels: [
      {
        label: 'Email',
        value: 'figueroamijael86@gmail.com',
        href: 'mailto:figueroamijael86@gmail.com',
        icon: 'bi bi-envelope-at',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/mijael-figueroa-019952249',
        href: 'https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info',
        icon: 'bi bi-linkedin',
      },
      {
        label: 'GitHub',
        value: 'github.com/FigueroaMijael',
        href: 'https://github.com/FigueroaMijael',
        icon: 'bi bi-github',
      },
      {
        label: 'WhatsApp',
        value: '+54 11 3681-7159',
        href: 'https://api.whatsapp.com/send?phone=541136817159',
        icon: 'bi bi-whatsapp',
      },
    ],
  },
};

const Contact = () => {
  const { language } = useTranslation();
  const content = CONTACT_CONTENT[language] || CONTACT_CONTENT.en;

  return (
    <section className="contactos" id="contact">
      <div className="contact-copy" data-aos="fade-up" data-aos-delay="150">
        <h2 className="heading">{content.heading}</h2>
        <p>{content.intro}</p>
      </div>

      <div className="contact-grid">
        {content.channels.map((channel, index) => (
          <a
            className="contact-card"
            href={channel.href}
            key={channel.label}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={220 + index * 80}
          >
            <span className="contact-card-icon" aria-hidden="true">
              <i className={channel.icon}></i>
            </span>
            <div className="contact-card-copy">
              <strong>{channel.label}</strong>
              <span>{channel.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
