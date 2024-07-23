import React from 'react'
import './Footer.css'


const Footer = () =>{
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>Pagina creada por: 'Figueroa Mijael'</p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/mijael-figueroa-019952249/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/FigueroaMijael" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/figuee15_/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=541141974731" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer