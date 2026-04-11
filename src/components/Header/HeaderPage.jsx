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

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        handleScroll();
        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
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

    const navItems = [
        { to: '/#inicio', label: 'Inicio' },
        { to: '/#about-me', label: 'Sobre mí' },
        { to: '/#build', label: 'Lo que construyo' },
        { to: '/#stack', label: 'Tecnologías' },
        { to: '/#project', label: 'Proyectos' },
        { to: '/#contact', label: 'Contacto' },
    ];

    return (
        <header className={`site-header ${isScrolled ? 'activar' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <button
                id="menu-btn"
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                aria-controls="site-navigation-page"
            >
                <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>

            <div className="header-brand">
                <Link className="logo" to="/#inicio" onClick={closeMenu}>
                    <Image src={logoSrc} alt="FIGUEDEV logo" className="header-image" fluid />
                </Link>
            </div>

            <nav id="site-navigation-page" className={`site-nav ${menuOpen ? 'activar' : ''}`}>
                {navItems.map((item) => (
                    <Link key={item.to} className="nav-link" to={item.to} onClick={closeMenu}>
                        {item.label}
                    </Link>
                ))}
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
