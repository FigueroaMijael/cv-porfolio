import { createContext, useState, useContext } from 'react';

// Traducciones
const translations = {
    en: {
      home: "Home",
      aboutMe: "About Me",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      hello: "Hello",
      iam: "I am Mijael figueroa",
      occupation: "Full-Stack Developer",
      aboutme: "ABOUT ME",
      who: "Who am i",
      am: "My name is Mijael Figueroa and I am a full stack developer",
      description: "I have been dedicated to web design and development for 1 year, I am constantly learning the technologies that I already master, and I also seek to learn new technologies to improve my skills and improve my practices as a developer.",
      age: "Age:",
      from: "From:",
      downloadcv: "Download CV",
      readmore: "Read more",
      tools: "Tools",
      service: "SERVICES",
      design: "UX/UI Design",
      designtxt: "Attractive interface design for users on both web and mobile, making the most of the brand or product that the client wishes to exploit on their website",
      development: "web development",
      developmentxt: "Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.",
      marketing: "Marketing Digitals",
      marketingtxt: "Prepare a strategy and objectives for the promotion of the brand provided by the client, using the internet or other platforms to promote products and services of the brand in question.", 
      maintenance: "Web Maintenance",
      maintenancetxt: "Complete maintenance of web pages to detect and solve errors, updating content whether texts, photos, web design elements, adding new functions, etc.",
      positioning: "Web Positioning (SEO)",
      positioningtxt: "Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines.",
      optimization: "Web Optimization",
      optimizationtxt: "Complete optimization of your website, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website.",
      experience: "Professional experience",
      experiences: "No experience in the field",
      createPage: "page created by: 'Figueroa Mijael'",
      project: "PROJECTS",
      formulaweb: "Sports Information Website Number One in Motorsports. Where You Can Find Out The Latest News About Your Favorite Driver Or Team In The Championship. Created from scratch with only HTML and CSS.",
      programming: "'Programming' Is An E-Commerse Designed Purely With Java Script. Which Lets You Simulate A Simple Purchase Process.",
      backcommerse: "'Back-Commerse' Is A Full Flow E-Commerse. This allows you to register and log in users, saving each movement in the database (new user, role, last start, etc.). It has a user profile view with its custom configuration and a chat for users to interact in real time. Different Roles Allow Different Functions Depending on the User. It allows you to view products, see their details, add to cart, view the cart, complete the purchasing process through the Mercado Pago Check-In, and receive a receipt with the ID and details of the purchase.",
      contacts: "CONTACT",
      medioContact: "Contact me by:",

    },
    es: {
      home: "Inicio",
      aboutMe: "Sobre Mi",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      hello: "Hola",
      iam: "Soy Mijael figueroa",
      occupation: "Full-Stack Developer",
      aboutme: "SOBRE MI",
      who: "Quien soy",
      am: "Mi nombre es Mijael Figueroa y soy full stack developer",
      description: "Me dedico desde hace 1 año al diseño y desarrollo web, me encuentro en constante aprendizaje de las tecnologías que ya domino, así mismo busco aprender nuevas tecnologías para mejorar mis habilidades y mejorar mis prácticas como desarrollador.",
      age: "Edad:",
      from: "Desde:",
      downloadcv: "Descargar CV",
      readmore: "Leer mas",
      tools: "Herramientas",
      service: "SERVICIOS",
      design: "Diseño UX/UI",
      designtxt: "Diseño de interfaz atractivas para usuarios tanto en web como en móvil, aprovechando al máximo la marca o el producto que el cliente dese explotar en su sitio web",
      development: "Desarrollo WEB",
      developmentxt: "Creación de páginas web, bien estructuradas, buen diseño responsivo, paleta de colores atractivas, con interacciones que le den al usuario satisfacción cuando navegue por el sitio web.",
      marketing: "Marketing Digital",
      marketingtxt: "Preparar una estrategia y objetivos para la promoción de la marca que nos proporcione el cliente, utilizando internet u otras plataformas para promover productos y servicios de la marca en cuestión.", 
      maintenance: "Mantenimiento Web",
      maintenancetxt: "Mantenimiento completo de páginas web para detectar y solucionar errores, actualización de contenido ya sean textos, fotos, elementos de diseño web, añadir nuevas funciones, etc.",
      positioning: "Posicionamiento Web (SEO)",
      positioningtxt: "Posicionamiento web mediante SEO, así tu pagina web aparezca en los principales resultados de búsqueda acorde a tu negocio, tanto en Google, Bing, u otros buscadores de internet.",
      optimization: "Optimización Web",
      optimizationtxt: "Optimización completa de tu sitio web, mejorando la velocidad de carga, utilizando imágenes optimizadas, una buena URL, para dar una mejor experiencia a los usuarios que visitan el sitio web.",
      experience: "Experiencia profecional",
      experiences: "Sin experiencia en el rubro",
      createPage: "Pagina creada por: 'Figueroa Mijael'",
      project: "PROYECTOS",
      formulaweb: "Web Informativa Del Deporte Numero Uno Del Automivilismo. Donde Podes Conocer Las Ultimas Novedades Sobre Tu Piloto U Equipo Favorito Del Campeonato. Creada Desde Cero Con Solo HTML Y CSS.",
      programming: "'Programming' Es Un E-Commerse Diseñado Puramente Con Java Script. El Cual Te Deja Simular Un Proceso Simple De Compra.",
      backcommerse: "'Back-Commerse' Es Un E-Commerse De Flujo Completo. Este Permite Registrar Y Loguear Usuarios Guardando Cada Movimiento En La Base De Dato (Nuevo Usuario, Rol, Ultimo Inicio, Etc). Posee Vista De Perfil Del Usuario Con Su Custom De Configuracion Y Un Chat Para Que Interactuen Los Usuarios En Tiempo Real. Los Diferentes Roles Permiten Distintas Funciones Segun El Usuario. Permite Visualizar Productos, Ver Su Detalle, Agregar Al Carrito, Visualizar El Carrito, Finalizar El Proceso De Compras Mediante El Check-In De Mercado Pago, Recibe Un Comprobante Con El Id Y Detalle De La Compra.",
      contacts: "CONTACTO",
      medioContact: "Contactame por:",
    },
  };  

// Crea el contexto
const TranslationContext = createContext();

// Proveedor del contexto
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (key) => {
    return translations[language][key] || key;
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ translate, switchLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useTranslation = () => {
  return useContext(TranslationContext);
};
