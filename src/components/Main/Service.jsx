import React from 'react'
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-scroll'
import ButtomGet from '../ButtonGet/ButtomGet'

const Service = () => {
  return (
        <section className="servicios" id="servicios">
        <h2 className="heading">Services</h2>
        <div className="row">

            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <img src="./src/img/icons/geometric_7568806.png" alt="" srcset="" />
                <h3>Diseño UX/UI</h3>
                <p>Diseño de interfaz atractivas para usuarios tanto en web como en móvil, aprovechando al máximo la marca o el producto que el cliente dese explotar en su sitio web</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <img src="./src/img/icons/computer_11625653.png" alt="" srcset="" />
                <h3>Desarrollo WEB</h3>
                <p>Creación de páginas web, bien estructuradas, buen diseño responsivo, paleta de colores atractivas, con interacciones que le den al usuario satisfacción cuando navegue por el sitio web.</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="400">
            <img src="./src/img/icons/statistic_2931759.png" alt="" srcset="" />
            <h3>Marketing Digitals</h3>
                <p>Preparar una estrategia y objetivos para la promoción de la marca que nos proporcione el cliente, utilizando internet u otras plataformas para promover productos y servicios de la marca en cuestión.</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="500">
            <img src="./src/img/icons/spanner_9482263.png" alt="" srcset="" />
                <h3>Mantenimiento Web</h3>
                <p>Mantenimiento completo de páginas web para detectar y solucionar errores, actualización de contenido ya sean textos, fotos, elementos de diseño web, añadir nuevas funciones, etc.</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="600">
            <img src="./src/img/icons/search_9301762.png" alt="" srcset="" />
                <h3>Posicionamiento Web (SEO)</h3>
                <p>Posicionamiento web mediante SEO, así tu pagina web aparezca en los principales resultados de búsqueda acorde a tu negocio, tanto en Google, Bing, u otros buscadores de internet</p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="700">
            <img src="./src/img/icons/speedometer-simple-symbol_41402.png" alt="" srcset="" />
                <h3>Optimización Web</h3>
                <p>Optimización completa de tu pagina web, mejorando la velocidad de carga, usando imágenes optimizadas,, un buen URL, para dar una mejor experiencia a los usuarios que visiten el sitio web</p>
            </div>

        </div>
        <div className='portafolio-btn'>
            <Link to="/Services">
                <ButtomGet/>
            </Link>
        </div>
    </section>
  )
}

export default Service