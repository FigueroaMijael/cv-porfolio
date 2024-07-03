import React from 'react'
import './Footer.css'


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>Pagina creada por: 'Figueroa Mijael'</p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer