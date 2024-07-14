import React from 'react'
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom'
import ButtomGet from '../ButtonGet/ButtomGet'

const Service = () => {
  return (
        <section className="servicios" id="services">
        <h2 className="heading">SERVICES</h2>
        <div className="row">

            <div className="columns" data-aos="fade-up" data-aos-delay="200">
            <svg className="img-logo-service" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-highlighter" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"/>
</svg>
                <h3>Diseño UX/UI</h3>
                <p>Diseño de interfaz atractivas para usuarios tanto en web como en móvil, aprovechando al máximo la marca o el producto que el cliente dese explotar en su sitio web</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
            <svg className="img-logo-service" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>
                <h3>Desarrollo WEB</h3>
                <p>Creación de páginas web, bien estructuradas, buen diseño responsivo, paleta de colores atractivas, con interacciones que le den al usuario satisfacción cuando navegue por el sitio web.</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="400">
            <svg className="img-logo-service"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
</svg>
            <h3>Marketing Digitals</h3>
                <p>Preparar una estrategia y objetivos para la promoción de la marca que nos proporcione el cliente, utilizando internet u otras plataformas para promover productos y servicios de la marca en cuestión.</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="500">
            <svg className="img-logo-service" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg>
                <h3>Mantenimiento Web</h3>
                <p>Mantenimiento completo de páginas web para detectar y solucionar errores, actualización de contenido ya sean textos, fotos, elementos de diseño web, añadir nuevas funciones, etc.</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="600">
            <svg className="img-logo-service" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                <h3>Posicionamiento Web (SEO)</h3>
                <p>Posicionamiento web mediante SEO, así tu pagina web aparezca en los principales resultados de búsqueda acorde a tu negocio, tanto en Google, Bing, u otros buscadores de internet</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="700">
            <svg className="img-logo-service" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
</svg>
                <h3>Optimización Web</h3>
                <p>Optimización completa de tu pagina web, mejorando la velocidad de carga, usando imágenes optimizadas,, un buen URL, para dar una mejor experiencia a los usuarios que visiten el sitio web</p>
            </div>
        </div>
        <div className="portafolio-btn">
            <Link to="/Services">
                <ButtomGet/>
            </Link>
            </div>
    </section>
  )
}

export default Service