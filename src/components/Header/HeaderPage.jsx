import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DarkMode from '../darkMode/darkMode';
import { useTranslation } from '../../Context/Languaje-context';
import './Header.css';
import logo from '../../img/logo/54345976_transparent_edit.png';
import logoDark from '../../img/logo/9003b4f9-9098-4311-8259-c27f188b937a.png';

const HeaderPage = () => {
  const [logoSrc, setLogoSrc] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme === 'light' ? logo : logoDark;
  });
  const { translate, switchLanguage } = useTranslation();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLogoSrc(theme === 'light' ? logo : logoDark);
  }, []);

  const handleThemeChange = (theme) => {
    setLogoSrc(theme === 'dark' ? logoDark : logo);
  };

  const toggleMenu = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('activar');

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector('.site-header').classList.add('activar');
      } else {
        document.querySelector('.site-header').classList.remove('activar');
      }

      navbar.classList.remove('activar');
    };
  };

  return (
    <header className="site-header">
      <div id="menu-btn" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>

      <Link className="logo" to="/#inicio">
        <Image src={logoSrc} alt="logo" className="header-image" fluid />
      </Link>

      <nav className="navbar">
        <Link to="/#inicio">
          <p>{translate('home')}</p>
        </Link>
        <Link to="/#about-me">
          <p>{translate('aboutMe')}</p>
        </Link>
        <Link to="/#services">
          <p>{translate('services')}</p>
        </Link>
        <Link to="/#project">
          <p>{translate('projects')}</p>
        </Link>
        <Link to="/#contact">
          <p>{translate('contact')}</p>
        </Link>
        <div id="buttons">
          <img
            onClick={() => switchLanguage('en')}
            src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png"
            alt="English"
          />
          <img
            onClick={() => switchLanguage('es')}
            src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png"
            alt="Spanish"
          />
        </div>
      </nav>

      <div className="switch" id="switch">
        <DarkMode onThemeChange={handleThemeChange} />
      </div>
    </header>
  );
};

export default HeaderPage;
