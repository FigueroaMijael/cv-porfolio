import { useState, useEffect } from 'react';
import DarkMode from '../darkMode/darkMode';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from '../../Context/Languaje-context';
import "./Header.css";
import logo from '../../img/logo/54345976_transparent_edit.png';
import logoDark from "../../img/logo/9003b4f9-9098-4311-8259-c27f188b937a.png";

const Header = () => {
    const [logoSrc, setLogoSrc] = useState(logo);

    const { translate, switchLanguage } = useTranslation(); // Usa el contexto

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setLogoSrc(logoDark);
        }
    }, []);

    const handleThemeChange = (theme) => {
        if (theme === "dark") {
            setLogoSrc(logoDark);
        } else {
            setLogoSrc(logo);
        }
    };

    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar");
            } else {
                document.querySelector(".site-header").classList.remove("activar");
            }
            navbar.classList.remove("activar");
        };
    };

    return (
        <header className="site-header">
            <div id="menu-btn" onClick={menuDesplegable}><i className="bi bi-list"></i></div>
            <Link className="logo" to="inicio">
                <Image src={logoSrc} alt="logo" className="header-image" fluid />
            </Link>
            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150}>
                    <p>{translate('home')}</p>
                </Link>
                <Link to="about-me" spy={true} offset={-150}>
                    <p>{translate('aboutMe')}</p>
                </Link>
                <Link to="services" spy={true} offset={-150}>
                    <p>{translate('services')}</p>
                </Link>
                <Link to="project" spy={true} offset={-150}>
                    <p>{translate('projects')}</p>
                </Link>
                <Link to="contact" spy={true} offset={-150}>
                    <p>{translate('contact')}</p>
                </Link>
                <div id="buttons">
                    <img
                        onClick={() => switchLanguage('en')}
                        src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png"
                        alt="EEUU"
                    />
                    <img
                        onClick={() => switchLanguage('es')}
                        src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png"
                        alt="España"
                    />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode onThemeChange={handleThemeChange} />
            </div>
        </header>
    );
};

export default Header;
