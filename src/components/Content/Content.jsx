import { useEffect } from 'react';
import ParticleHeaderBg from '../ParticlesBackground/ParticlesHeader/ParticleHeaderBg';
import './Content.css';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '../../Context/Languaje-context';
import linkedinIcon from 'bootstrap-icons/icons/linkedin.svg?url';
import githubIcon from 'bootstrap-icons/icons/github.svg?url';
import instagramIcon from 'bootstrap-icons/icons/instagram.svg?url';
import whatsappIcon from 'bootstrap-icons/icons/whatsapp.svg?url';

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { translate } = useTranslation(); // Usa el contexto
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info',
      label: 'Linkedin',
      icon: linkedinIcon,
    },
    {
      href: 'https://github.com/FigueroaMijael',
      label: 'Github',
      icon: githubIcon,
    },
    {
      href: 'https://www.instagram.com/figuee15_/',
      label: 'Instagram',
      icon: instagramIcon,
    },
    {
      href: 'https://api.whatsapp.com/send?phone=541136817159',
      label: 'Whatsapp',
      icon: whatsappIcon,
    },
  ];

  return (
    <div className='contenido'>
      <ParticleHeaderBg id="particles-js" />

      <section className="inicio" id="inicio">
        <div className="titulo">
          <p data-aos="fade-up" data-aos-delay="600">{translate('hello')}</p>
          <h1 data-aos="fade-up" data-aos-delay="800">{translate('iam')}</h1>
          <p data-aos="fade-up" data-aos-delay="1000">{translate('occupation')}</p>

          <div className="redes-sociales">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={1800 + index * 200}
              >
                <img src={link.icon} alt={link.label} />
              </a>
            ))}
          </div>

          <div className="wrapper">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                className="button"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={1800 + index * 200}
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
