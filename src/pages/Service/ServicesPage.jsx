import React from 'react'
import './ServicesPage.css'
import HeaderPage from  '../../components/Header/HeaderPage'
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Accordion from './Accordion'

const ServicesPage = () => {
  return (
    <div>
        <HeaderPage />

        <ParticlesBackground />

        <main className="service-page">
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
    </section>

    <section className="site-services">
          <h2>Precios</h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <h3>BÁSICO</h3>
              <h4 className="sub-title">Perfecto para nuevos negocios</h4>
              <p className="numero"><span>$</span>150</p>
              <ul className="ul-cards-services">
                <li>
                <i class="bi bi-check-lg"></i>
                  <span>1 Página Responsive</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>+3 Secciones Por Página</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Formulario De Contacto</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Dominio Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Hosting Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Se Entrega En 7 Dias Habiles</span>
                </li>
              </ul>
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">Comprar Ahora</a>
              </div> */}
            </div>

            <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
              <h3>PROFESIONAL</h3>
              <h4 className="sub-title">Diseñado para medianas Empresas</h4>
              <p className="numero"><span>$</span>400</p>
              <ul className="ul-cards-services">
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>5 Paginas Responsive</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>+3 Secciones Por Pagina</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Formulario De Contacto</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Dominio Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Hostinf Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Animaciones</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Mantenimiento Gratis Por 6 Meses</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Se Entrega En 15 Dias Habiles </span>
                </li>
              </ul>
              
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn ">Comprar Ahora</a> 
              </div> */}
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <h3>PREMIUN</h3>
              <h4 className="sub-title">Excelente para sitios web grandes</h4>
              <p className="numero"><span>$</span>700</p>
              <ul className="ul-cards-services">
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>+10 Páginas Responsive</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>+3 Secciones Por Página</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Formulario De Contacto</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Dominio Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Hosting Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Animaciones</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Mantenimiento Gratis Por 1 Año</span>
                </li>
                <li>
                  <i class="bi bi-check-lg"></i>
                  <span>Se Entrega En 30 Días Hábiles</span>
                </li>
              </ul>
              
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">Comprar Ahora</a>
              </div> */}
            </div>
          </div>
        </section>

    <section className="preguntas">
          <h2 className="heading">Preguntas Frecuentes</h2>
          <div className="accordion-container">
            <Accordion
              title={'¿Que es una páginas web responsive?'}
              content={'Es aquella página que es capaz de adaptarse a cualquier dispositivo donde se visualice, tanto como en celulares, tabletas, laptops, sin perder la apariencia ni la usabilidad.'}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={'¿Que es un Dominio y un Hosting?'}
              content={'Ambos son elementos esenciales de un sitio web. En síntesis, el nombre de dominio es la dirección de la página web, mientras que el hosting proporciona el espacio y los recursos necesarios para poner en marcha el sitio web.'}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={'¿Es necesario un mantenimiento mensual?'}
              content={'Hacer un mantenimiento regular de tu sitio web permite, atraer y retener clientes con nueva información, nuevos productos y servicios, además de ayudarte a mantener, o a mejorar tu ranking en Google.'}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={'¿Cómo pagar?'}
              content={'Se puede pagar online mediante tarjetas de crédito o débito y pagos mediante transferencias.'}
              dataAos="fade-left"
              dataAosDelay="300"
            />

          </div>
        </section>
    </main>

    <ScrollToTop />
    </div>
  )
}

export default ServicesPage