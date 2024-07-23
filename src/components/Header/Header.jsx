import React, { useState, useEffect } from 'react';
import DarkMode from '../darkMode/darkMode';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import "./Header.css"
import logo from '../../img/logo/54345976_transparent_edit.png'
import logoDark from "../../img/logo/9003b4f9-9098-4311-8259-c27f188b937a.png"

const Header = () => {
    const [logoSrc, setLogoSrc] = useState(logo);

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
            <div id="menu-btn" onClick={menuDesplegable}><i class="bi bi-list"></i></div>
            <Link className="logo" to="inicio">
                <Image src={logoSrc} alt="logo" className="header-image" fluid />
            </Link>
            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} >
                    <p>Inicio</p>
                </Link>
                <Link to="about-me" spy={true} offset={-150}>
                    <p>Sobre Mi</p>
                </Link>
                <Link to="services" spy={true} offset={-150}>
                    <p>Servicios</p>
                </Link>
                <Link to="project" spy={true} offset={-150} >
                    <p>Proyectos</p>
                </Link>
                <Link to="contact" spy={true} offset={-150} >
                    <p>Contacto</p>
                </Link>
                <div id="buttons">
                    <img onClick={() => idioma.selectLanguage('en-US')} src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png" alt="EEUU" />
                    <img onClick={() => idioma.selectLanguage('es-ES')} src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png" alt="España" />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode onThemeChange={handleThemeChange} />
            </div>
        </header>
    );
};

export default Header;
