import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import DarkMode from '../darkMode/darkMode';
import { useTranslation } from '../../Context/Languaje-context';
import './Header.css';
import logo from '../../img/logo/54345976_transparent_edit.png';
import logoDark from '../../img/logo/9003b4f9-9098-4311-8259-c27f188b937a.png';

const Header = () => {
    const [logoSrc, setLogoSrc] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme === 'light' ? logo : logoDark;
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { translate, switchLanguage } = useTranslation();

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
        { to: 'inicio', label: translate('home') },
        { to: 'about-me', label: translate('aboutMe') },
        { to: 'build', label: translate('services') },
        { to: 'stack', label: translate('stack') },
        { to: 'project', label: translate('projects') },
        { to: 'contact', label: translate('contact') },
    ];

    return (
        <header className={`site-header ${isScrolled ? 'activar' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <button
                id="menu-btn"
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                aria-controls="site-navigation"
            >
                <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>

            <div className="header-brand">
                <Link className="logo" to="inicio" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                    <Image src={logoSrc} alt="FIGUEDEV logo" className="header-image" fluid />
                </Link>
            </div>

            <nav id="site-navigation" className={`navbar ${menuOpen ? 'activar' : ''}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        className="nav-link"
                        activeClass="active-link"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="header-controls">
                <div id="buttons">
                    <img
                        onClick={() => switchLanguage('en')}
                        src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png"
                        alt="English"
                    />
                    <img
                        onClick={() => switchLanguage('es')}
                        src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png"
                        alt="Español"
                    />
                </div>

                <div className="switch" id="switch">
                    <DarkMode onThemeChange={handleThemeChange} />
                </div>
            </div>
        </header>
    );
};

export default Header;
