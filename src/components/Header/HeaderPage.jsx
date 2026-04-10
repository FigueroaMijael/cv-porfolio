import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DarkMode from '../darkMode/darkMode';
import './Header.css';
import logo from '../../img/logo/54345976_transparent_edit.png';
import logoDark from '../../img/logo/9003b4f9-9098-4311-8259-c27f188b937a.png';

const HeaderPage = () => {
    const [logoSrc, setLogoSrc] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme === 'light' ? logo : logoDark;
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        setLogoSrc(theme === 'light' ? logo : logoDark);

        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(scrolled);
            if (scrolled) {
                setMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        };

        handleScroll();
        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle('menu-open', menuOpen);

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

    const handleThemeChange = (theme) => {
        setLogoSrc(theme === 'dark' ? logoDark : logo);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`site-header ${isScrolled ? 'activar' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="header-start">
                <button
                    id="menu-btn"
                    type="button"
                    onClick={() => setMenuOpen((current) => !current)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                >
                    <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>

                <Link className="logo" to="/#inicio" onClick={closeMenu}>
                    <Image src={logoSrc} alt="FIGUEDEV logo" className="header-image" fluid />
                </Link>
            </div>

            <nav className={`navbar ${menuOpen ? 'activar' : ''}`}>
                <Link to="/#inicio" onClick={closeMenu}>
                    <p>Inicio</p>
                </Link>
                <Link to="/#about-me" onClick={closeMenu}>
                    <p>Sobre mí</p>
                </Link>
                <Link to="/#build" onClick={closeMenu}>
                    <p>Lo que construyo</p>
                </Link>
                <Link to="/#stack" onClick={closeMenu}>
                    <p>Tecnologías</p>
                </Link>
                <Link to="/#project" onClick={closeMenu}>
                    <p>Proyectos</p>
                </Link>
                <Link to="/#contact" onClick={closeMenu}>
                    <p>Contacto</p>
                </Link>
            </nav>

            <div className="header-controls">
                <div id="buttons">
                    <img src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png" alt="English" />
                    <img src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png" alt="Español" />
                </div>

                <div className="switch" id="switch">
                    <DarkMode onThemeChange={handleThemeChange} />
                </div>
            </div>
        </header>
    );
};

export default HeaderPage;
