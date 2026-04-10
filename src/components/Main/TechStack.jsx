import ReactJS from '../Icons/React';
import JavaScript from '../Icons/JavaScript';
import MongoDB from '../Icons/Mongo';
import tailwindIcon from '../../img/icon/tailwindcss.svg';
import { useTranslation } from '../../Context/Languaje-context';
import './TechStack.css';

const STACK_CONTENT = {
  en: {
    heading: 'Technologies',
    intro:
      'My stack is focused on building modern web products with solid UI, backend logic, integrations, and delivery-oriented tooling.',
    categories: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', kind: 'react' },
          { name: 'JavaScript', kind: 'javascript' },
          { name: 'HTML5', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS3', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          { name: 'Tailwind', kind: 'image', src: tailwindIcon },
          { name: 'Bootstrap', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Express', kind: 'icon', icon: 'bi bi-diagram-3' },
          { name: 'MongoDB', kind: 'mongo' },
          { name: 'REST APIs', kind: 'icon', icon: 'bi bi-link-45deg' },
          { name: 'Auth', kind: 'icon', icon: 'bi bi-shield-lock' },
          { name: 'Webhooks', kind: 'icon', icon: 'bi bi-lightning-charge' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { name: 'Git', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          { name: 'GitHub', kind: 'icon', icon: 'bi bi-github' },
          { name: 'Vite', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
          { name: 'Postman', kind: 'image', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
          { name: 'Railway', kind: 'icon', icon: 'bi bi-train-freight-front' },
          { name: 'Pages', kind: 'icon', icon: 'bi bi-browser-chrome' },
        ],
      },
      {
        title: 'AI Tools',
        items: [
          { name: 'ChatGPT', kind: 'icon', icon: 'bi bi-chat-square-text' },
          { name: 'OpenAI API', kind: 'icon', icon: 'bi bi-stars' },
          { name: 'Codex', kind: 'icon', icon: 'bi bi-code-square' },
          { name: 'Prompts', kind: 'icon', icon: 'bi bi-bezier2' },
        ],
      },
    ],
  },
  es: {
    heading: 'Tecnologías',
    intro:
      'Mi stack está orientado a construir productos web modernos con buena interfaz, lógica backend, integraciones y tooling pensado para entregar.',
    categories: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', kind: 'react' },
          { name: 'JavaScript', kind: 'javascript' },
          { name: 'HTML5', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS3', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          { name: 'Tailwind', kind: 'image', src: tailwindIcon },
          { name: 'Bootstrap', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Express', kind: 'icon', icon: 'bi bi-diagram-3' },
          { name: 'MongoDB', kind: 'mongo' },
          { name: 'REST APIs', kind: 'icon', icon: 'bi bi-link-45deg' },
          { name: 'Auth', kind: 'icon', icon: 'bi bi-shield-lock' },
          { name: 'Webhooks', kind: 'icon', icon: 'bi bi-lightning-charge' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { name: 'Git', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          { name: 'GitHub', kind: 'icon', icon: 'bi bi-github' },
          { name: 'Vite', kind: 'image', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
          { name: 'Postman', kind: 'image', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
          { name: 'Railway', kind: 'icon', icon: 'bi bi-train-freight-front' },
          { name: 'Pages', kind: 'icon', icon: 'bi bi-browser-chrome' },
        ],
      },
      {
        title: 'AI Tools',
        items: [
          { name: 'ChatGPT', kind: 'icon', icon: 'bi bi-chat-square-text' },
          { name: 'OpenAI API', kind: 'icon', icon: 'bi bi-stars' },
          { name: 'Codex', kind: 'icon', icon: 'bi bi-code-square' },
          { name: 'Prompts', kind: 'icon', icon: 'bi bi-bezier2' },
        ],
      },
    ],
  },
};

const TechLogo = ({ item }) => {
  if (item.kind === 'react') {
    return <ReactJS className="stack-item-svg stack-item-react" />;
  }

  if (item.kind === 'javascript') {
    return <JavaScript className="stack-item-svg" />;
  }

  if (item.kind === 'mongo') {
    return <MongoDB className="stack-item-svg stack-item-mongo" />;
  }

  if (item.kind === 'image') {
    return <img src={item.src} alt={item.name} className="stack-item-image" />;
  }

  return <i className={item.icon}></i>;
};

const TechStack = () => {
  const { language } = useTranslation();
  const content = STACK_CONTENT[language] || STACK_CONTENT.en;

  return (
    <section className="stack-section" id="stack">
      <div className="stack-header" data-aos="fade-up" data-aos-delay="150">
        <h2 className="heading">{content.heading}</h2>
        <p>{content.intro}</p>
      </div>

      <div className="stack-grid">
        {content.categories.map((category, index) => (
          <article
            className="stack-card"
            key={category.title}
            data-aos="fade-up"
            data-aos-delay={220 + index * 90}
          >
            <h3>{category.title}</h3>

            <div className="stack-items">
              {category.items.map((item) => (
                <div className="stack-item" key={item.name}>
                  <span className="stack-item-icon">
                    <TechLogo item={item} />
                  </span>
                  <span className="stack-item-label">{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
