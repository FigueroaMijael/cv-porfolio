import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    home: 'Home',
    aboutMe: 'About Me',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    hello: 'Hello',
    iam: "I'm Mijael Figueroa",
    occupation: 'Full-Stack Developer',
    aboutme: 'ABOUT ME',
    who: 'Who I am',
    am: 'My name is Mijael Figueroa and I am a developer.',
    description:
      'I focus on web design and development, continuously strengthening the technologies I already use while learning new ones to improve my skills and development practices.',
    age: 'Age:',
    from: 'Location:',
    downloadcv: 'Download CV',
    downloadFileName: 'Mijael-Figueroa-CV.pdf',
    readmore: 'Read more',
    showLess: 'Show less',
    tools: 'Tools',
    design: 'UX/UI Design',
    designtxt:
      'I design engaging interfaces for web and mobile experiences, aligning each visual decision with the brand or product goals.',
    development: 'Web Development',
    developmentxt:
      'I build well-structured, responsive websites with polished visual design and interactions that feel intuitive to users.',
    marketing: 'Digital Marketing',
    marketingtxt:
      'I define strategies and objectives to promote your brand across the internet and other digital platforms.',
    maintenance: 'Website Maintenance',
    maintenancetxt:
      'I handle full website maintenance, from fixing errors and updating content to improving design assets and adding new features.',
    positioning: 'SEO Positioning',
    positioningtxt:
      'I improve website visibility through SEO so your business can appear in relevant search results across Google, Bing, and other search engines.',
    optimization: 'Website Optimization',
    optimizationtxt:
      'I optimize performance, images, and structure to improve loading speed and deliver a better browsing experience.',
    experience: 'Professional Experience',
    experiences: 'No professional experience yet',
    experienceAvailability: 'Open to work',
    experienceFocus: 'Junior roles, freelance work, and collaborative teams',
    experienceDescription:
      'My professional career is just getting started, but I already build complete web projects, improve my stack every day, and I am ready to contribute with commitment, fast learning, and strong teamwork.',
    createPage: 'Website created by Mijael Figueroa',
    project: 'PROJECTS',
    contacts: 'CONTACT',
    medioContact: 'Contact me via:',
    skillsTitle: 'Skills',
    certificatesTitle: 'Certificates',
    code: 'Code',
    preview: 'View',
    aboutPageBio: [
      'Hi, my name is Mijael Figueroa. I am 21 years old and I study Web Development at the Public University of Ezeiza (UPE). I completed a year and a half of training at Coderhouse, where I earned certifications in Web Development, JavaScript, React JS, and Backend, building a strong foundation in both front-end and back-end development.',
      'I also completed a Cybersecurity course at Coderhouse to strengthen my technical skills even further. Although I do not yet have professional experience in software development, I rely on my problem-solving ability, fast learning pace, and commitment to deliver meaningful value to any team or project.',
      'I enjoy collaborative work, constant learning, and exploring new tools and techniques that help me become more effective. My goal is to grow into a well-rounded developer, contribute across multiple areas, and keep evolving in the world of programming and web development.',
    ],
    aboutSkills: [
      {
        name: 'HTML',
        description:
          'I have a solid understanding of HTML fundamentals and use them to build clean, well-organized web structures that integrate smoothly with CSS and JavaScript.',
      },
      {
        name: 'CSS',
        description:
          'I work with CSS to create responsive interfaces and smooth animations, and I integrate styles into React projects using tools such as Sass and Bootstrap.',
      },
      {
        name: 'JavaScript',
        description:
          'I build dynamic functionality with JavaScript, manipulate the DOM efficiently, handle events, integrate REST APIs, and apply good practices to improve performance and maintainability.',
      },
      {
        name: 'Bootstrap',
        description:
          'I use Bootstrap to build responsive, modern interfaces quickly by taking advantage of its components, utility classes, and grid system.',
      },
      {
        name: 'ReactJs',
        description:
          'I build reusable React.js components and manage application state to create dynamic user interfaces, using Vite to keep development fast and efficient.',
      },
      {
        name: 'NodeJs',
        description:
          'I develop backend applications with Node.js, working with asynchronous flows, modern modules, and scalable architectures such as microservices and event-driven patterns.',
      },
      {
        name: 'Express',
        description:
          'I use Express to build REST APIs and web applications, handling routes, middleware, validation, authentication, and clear project structures such as MVC.',
      },
      {
        name: 'MongoDB',
        description:
          'I work with MongoDB and Mongoose to model flexible NoSQL databases, perform CRUD operations, and improve performance with indexes and advanced queries.',
      },
      {
        name: 'Git',
        description:
          'I use Git for version control and team collaboration, managing branches, merges, conflicts, pull requests, and clear change history across projects.',
      },
      {
        name: 'SQL',
        description:
          'I work with relational databases using SQL, writing and optimizing CRUD queries, modeling schemas, and using joins, subqueries, and aggregate functions for deeper analysis.',
      },
    ],
    projectList: [
      {
        title: 'Guadalupe Lizarazo | Labor, Civil, Family, and Health Protection Law',
        description:
          'A professional legal website for Guadalupe Lizarazo focused on labor, civil, family, and health protection law. The project highlights clear service communication, trust, and direct contact through a polished and informative interface.',
        link: 'https://draguadalupelizarazo.com',
        github:
          'https://github.com/FigueroaMijael/bogada-Guadalupe-Lizarazo-Derecho-Laboral-Civil-Familia-y-Amparos-de-Salud.git',
        imageKey: 'lawfirm',
        tagKeys: ['HTML5', 'CSS', 'JAVASCRIPT', 'SCSS'],
      },
      {
        title: 'Nautica El Anzuelo | E-commerce',
        description:
          'I designed and developed Nautica El Anzuelo from scratch as a full e-commerce platform focused on nautical, fishing, and outdoor products. The project combines a modern shopping experience with a solid backend architecture, product management, checkout flow, and integrations for real business operations. Key tools and technologies include React.js, Node.js, Express, MongoDB, Tailwind CSS, Mercado Pago, Axios, and webhooks for external platform synchronization.',
        link: 'https://nauticaelanzuelo.com',
        github: '',
        imageKey: 'anzuelo',
        tagKeys: ['REACT', 'NODE', 'EXPRESS', 'Tailwind', 'MONGODB', 'MERCADO_PAGO', 'WEBHOOKS', 'AXIOS'],
      },
    ],
    servicePlansTitle: 'Pricing',
    servicePlans: [
      {
        name: 'BASIC',
        subtitle: 'Perfect for new businesses',
        price: '850',
        features: [
          '1 responsive page',
          '3+ sections per page',
          'Contact form',
          'Domain for 1 year',
          'Hosting for 1 year',
          'Delivered in 7 business days',
        ],
      },
      {
        name: 'PROFESSIONAL',
        subtitle: 'Designed for growing businesses',
        price: '1,500',
        features: [
          'Up to 5 responsive pages',
          '3+ sections per page',
          'Contact form',
          'Domain for 1 year',
          'Hosting for 1 year',
          'Animations',
          'Free maintenance for 6 months',
          'Delivered in 15 business days',
        ],
      },
      {
        name: 'PREMIUM',
        subtitle: 'Ideal for large websites',
        price: '2,500',
        features: [
          '10+ responsive pages',
          '3+ sections per page',
          'Contact form',
          'Domain for 1 year',
          'Hosting for 1 year',
          'Animations',
          'Free maintenance for 1 year',
          'Delivered in 30 business days',
        ],
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqItems: [
      {
        title: 'What is a responsive website?',
        content:
          'A responsive website adapts to different screen sizes and devices, including phones, tablets, and laptops, without losing usability or visual consistency.',
      },
      {
        title: 'What are a domain and hosting?',
        content:
          'Both are essential parts of a website. The domain is the web address, while hosting provides the space and resources needed to publish the site online.',
      },
      {
        title: 'Is monthly maintenance necessary?',
        content:
          'Regular maintenance helps keep your site updated, improves trust, supports SEO, and ensures users continue finding relevant information, products, and services.',
      },
      {
        title: 'How can I pay?',
        content:
          'Payments can be made online with credit or debit cards, or through bank transfer.',
      },
    ],
    contactChannels: ['Gmail', 'WhatsApp', 'Instagram', 'Telegram', 'LinkedIn', 'GitHub'],
  },
  es: {
    home: 'Inicio',
    aboutMe: 'Sobre mi',
    services: 'Servicios',
    projects: 'Proyectos',
    contact: 'Contacto',
    hello: 'Hola',
    iam: 'Soy Mijael Figueroa',
    occupation: 'Full-Stack Developer',
    aboutme: 'SOBRE MI',
    who: 'Quien soy',
    am: 'Mi nombre es Mijael Figueroa y soy desarrollador.',
    description:
      'Me enfoco en el diseño y desarrollo web, fortaleciendo constantemente las tecnologias que ya utilizo y aprendiendo nuevas para mejorar mis habilidades y practicas de desarrollo.',
    age: 'Edad:',
    from: 'Ubicacion:',
    downloadcv: 'Descargar CV',
    downloadFileName: 'CV-Mijael-Figueroa.pdf',
    readmore: 'Leer mas',
    showLess: 'Ver menos',
    tools: 'Herramientas',
    design: 'Diseno UX/UI',
    designtxt:
      'Diseno interfaces atractivas para experiencias web y moviles, alineando cada decision visual con los objetivos de la marca o producto.',
    development: 'Desarrollo Web',
    developmentxt:
      'Desarrollo sitios web bien estructurados y responsivos, con una presentacion cuidada e interacciones intuitivas para el usuario.',
    marketing: 'Marketing Digital',
    marketingtxt:
      'Defino estrategias y objetivos para promocionar tu marca en internet y otras plataformas digitales.',
    maintenance: 'Mantenimiento Web',
    maintenancetxt:
      'Realizo mantenimiento integral de sitios web: corrijo errores, actualizo contenido, mejoro elementos visuales y agrego nuevas funcionalidades.',
    positioning: 'Posicionamiento SEO',
    positioningtxt:
      'Mejoro la visibilidad del sitio mediante SEO para que tu negocio aparezca en resultados relevantes de Google, Bing y otros buscadores.',
    optimization: 'Optimizacion Web',
    optimizationtxt:
      'Optimizo rendimiento, imagenes y estructura para mejorar la velocidad de carga y brindar una mejor experiencia de navegacion.',
    experience: 'Experiencia profesional',
    experiences: 'Aun no cuento con experiencia profesional',
    experienceAvailability: 'Disponible para trabajar',
    experienceFocus: 'Busco oportunidades junior, freelance o colaborativas',
    experienceDescription:
      'Mi recorrido profesional recien comienza, pero ya construyo proyectos web completos, fortalezco mi stack de forma constante y estoy listo para aportar compromiso, aprendizaje rapido y trabajo en equipo.',
    createPage: 'Sitio creado por Mijael Figueroa',
    project: 'PROYECTOS',
    contacts: 'CONTACTO',
    medioContact: 'Contactame por:',
    skillsTitle: 'Habilidades',
    certificatesTitle: 'Certificados',
    code: 'Codigo',
    preview: 'View',
    aboutPageBio: [
      'Hola, mi nombre es Mijael Figueroa. Tengo 21 anos y estudio Desarrollo Web en la Universidad Publica de Ezeiza (UPE). Complete un ano y medio de formacion en Coderhouse, donde me certifique en Desarrollo Web, JavaScript, React JS y Backend, construyendo una base solida tanto en front-end como en back-end.',
      'Tambien realice un curso de Ciberseguridad en Coderhouse para seguir fortaleciendo mis habilidades tecnicas. Aunque todavia no cuento con experiencia laboral en programacion, confio en mi capacidad para resolver problemas, aprender rapido y aportar valor real a cualquier equipo o proyecto.',
      'Disfruto trabajar en equipo, mantenerme en aprendizaje constante y explorar nuevas herramientas y tecnicas que me ayuden a ser mas efectivo. Mi objetivo es crecer como desarrollador integral, aportar en diferentes areas y seguir evolucionando dentro del mundo de la programacion y el desarrollo web.',
    ],
    aboutSkills: [
      {
        name: 'HTML',
        description:
          'Tengo una comprension solida de los fundamentos de HTML y la utilizo para crear estructuras web limpias y bien organizadas que se integran correctamente con CSS y JavaScript.',
      },
      {
        name: 'CSS',
        description:
          'Trabajo con CSS para crear interfaces responsivas y animaciones suaves, integrando estilos en proyectos React con herramientas como Sass y Bootstrap.',
      },
      {
        name: 'JavaScript',
        description:
          'Desarrollo funcionalidades dinamicas con JavaScript, manipulo el DOM de forma eficiente, manejo eventos, integro APIs REST y aplico buenas practicas para mejorar rendimiento y mantenimiento.',
      },
      {
        name: 'Bootstrap',
        description:
          'Utilizo Bootstrap para construir interfaces modernas y responsivas de forma rapida, aprovechando sus componentes, utilidades y sistema de grillas.',
      },
      {
        name: 'ReactJs',
        description:
          'Desarrollo componentes reutilizables con React.js y gestiono estado para crear interfaces dinamicas, utilizando Vite para mantener un flujo de trabajo agil.',
      },
      {
        name: 'NodeJs',
        description:
          'Desarrollo aplicaciones backend con Node.js, trabajando con flujos asincronicos, modulos modernos y arquitecturas escalables como microservicios y eventos.',
      },
      {
        name: 'Express',
        description:
          'Uso Express para construir APIs REST y aplicaciones web, manejando rutas, middleware, validaciones, autenticacion y estructuras claras como MVC.',
      },
      {
        name: 'MongoDB',
        description:
          'Trabajo con MongoDB y Mongoose para modelar bases de datos NoSQL flexibles, realizar operaciones CRUD y mejorar el rendimiento mediante indices y consultas avanzadas.',
      },
      {
        name: 'Git',
        description:
          'Utilizo Git para control de versiones y trabajo colaborativo, gestionando ramas, merges, conflictos, pull requests e historial claro de cambios.',
      },
      {
        name: 'SQL',
        description:
          'Trabajo con bases de datos relacionales usando SQL, escribiendo y optimizando consultas CRUD, modelando esquemas y utilizando joins, subconsultas y funciones agregadas.',
      },
    ],
    projectList: [
      {
        title: 'Guadalupe Lizarazo | Derecho laboral, civil, familia y amparos de salud',
        description:
          'Sitio web profesional para Guadalupe Lizarazo enfocado en derecho laboral, civil, de familia y amparos de salud. El proyecto prioriza una comunicacion clara de servicios, confianza y contacto directo a traves de una interfaz informativa y cuidada.',
        link: 'https://draguadalupelizarazo.com',
        github:
          'https://github.com/FigueroaMijael/bogada-Guadalupe-Lizarazo-Derecho-Laboral-Civil-Familia-y-Amparos-de-Salud.git',
        imageKey: 'lawfirm',
        tagKeys: ['HTML5', 'CSS', 'JAVASCRIPT', 'SCSS'],
      },
      {
        title: 'Nautica El Anzuelo | E-commerce',
        description:
          'Disene y desarrolle Nautica El Anzuelo desde cero como una plataforma e-commerce completa orientada a productos de nautica, pesca y outdoor. El proyecto combina una experiencia de compra moderna con una arquitectura backend solida, gestion de productos, flujo de checkout e integraciones pensadas para una operacion comercial real. Entre las herramientas y tecnologias principales se utilizaron React.js, Node.js, Express, MongoDB, Tailwind CSS, Mercado Pago, Axios y webhooks para sincronizacion con plataformas externas.',
        link: 'https://nauticaelanzuelo.com',
        github: '',
        imageKey: 'anzuelo',
        tagKeys: ['REACT', 'NODE', 'EXPRESS', 'Tailwind', 'MONGODB', 'MERCADO_PAGO', 'WEBHOOKS', 'AXIOS'],
      },
    ],
    servicePlansTitle: 'Precios',
    servicePlans: [
      {
        name: 'BASICO',
        subtitle: 'Perfecto para nuevos negocios',
        price: '850',
        features: [
          '1 pagina responsive',
          '3 o mas secciones por pagina',
          'Formulario de contacto',
          'Dominio por 1 ano',
          'Hosting por 1 ano',
          'Entrega en 7 dias habiles',
        ],
      },
      {
        name: 'PROFESIONAL',
        subtitle: 'Disenado para negocios en crecimiento',
        price: '1.500',
        features: [
          'Hasta 5 paginas responsive',
          '3 o mas secciones por pagina',
          'Formulario de contacto',
          'Dominio por 1 ano',
          'Hosting por 1 ano',
          'Animaciones',
          'Mantenimiento gratis por 6 meses',
          'Entrega en 15 dias habiles',
        ],
      },
      {
        name: 'PREMIUM',
        subtitle: 'Ideal para sitios web grandes',
        price: '2.500',
        features: [
          '10 o mas paginas responsive',
          '3 o mas secciones por pagina',
          'Formulario de contacto',
          'Dominio por 1 ano',
          'Hosting por 1 ano',
          'Animaciones',
          'Mantenimiento gratis por 1 ano',
          'Entrega en 30 dias habiles',
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faqItems: [
      {
        title: 'Que es un sitio web responsive?',
        content:
          'Un sitio web responsive se adapta a distintos tamanos de pantalla y dispositivos, como celulares, tabletas y laptops, sin perder usabilidad ni consistencia visual.',
      },
      {
        title: 'Que son un dominio y un hosting?',
        content:
          'Ambos son partes esenciales de un sitio web. El dominio es la direccion web y el hosting es el espacio y los recursos necesarios para publicar el sitio en internet.',
      },
      {
        title: 'Es necesario un mantenimiento mensual?',
        content:
          'El mantenimiento regular ayuda a mantener el sitio actualizado, mejora la confianza, favorece el SEO y asegura que los usuarios sigan encontrando informacion, productos y servicios relevantes.',
      },
      {
        title: 'Como puedo pagar?',
        content:
          'Los pagos pueden realizarse online con tarjeta de credito o debito, o mediante transferencia bancaria.',
      },
    ],
    contactChannels: ['Gmail', 'WhatsApp', 'Instagram', 'Telegram', 'LinkedIn', 'GitHub'],
  },
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    return translations[storedLanguage] ? storedLanguage : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const translate = (key) => {
    const localizedValue = translations[language]?.[key];
    if (localizedValue !== undefined) {
      return localizedValue;
    }

    const fallbackValue = translations[DEFAULT_LANGUAGE]?.[key];
    return fallbackValue !== undefined ? fallbackValue : key;
  };

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <TranslationContext.Provider value={{ translate, switchLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
