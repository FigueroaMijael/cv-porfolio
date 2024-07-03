import React from 'react';
import '../../pages/Contact/ContactPage.css'
import Typical from 'react-typical';

const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">CONTACTO</h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            Contactame por: 
            <Typical
                className="site-contacto"
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Gmail', 2500,
                    'WhatsApp', 2500,
                    'Instragram', 2500,
                    'Telegram', 2500,
                    'Linkedin', 2500,
                    'Github', 2500,
                ]}
            />
        </h3>

        <div className="icons">
            <a href="mail to:figueroamijael86@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"><i class="bi bi-envelope-at-fill"></i></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"><i className="bi bi-whatsapp"></i></span>
                </div>
                <div className="text">
                    Whatsapp
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"><i className="bi bi-instagram"></i></span>
                </div>
                <div className="text">
                    Instagram
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-telegram"><i class="bi bi-telegram"></i></span>
                </div>
                <div className="text">
                    telegram
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"><i className="bi bi-linkedin"></i></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"><i className="bi bi-github"></i></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);

export default Contact;