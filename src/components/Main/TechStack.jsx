import { useTranslation } from '../../Context/Languaje-context';
import './TechStack.css';

const STACK_CONTENT = {
  en: {
    heading: 'Technologies',
    intro:
      'My stack is focused on shipping modern web applications with solid frontend foundations, backend workflows, and practical delivery tooling.',
    categories: [
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive UI'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'Authentication', 'Webhooks'],
      },
      {
        title: 'Tools',
        items: ['Git', 'GitHub', 'Vite', 'Postman', 'npm', 'GitHub Pages', 'Railway'],
      },
      {
        title: 'AI Tools',
        items: ['ChatGPT', 'OpenAI API', 'Codex', 'Prompt workflows'],
      },
    ],
  },
  es: {
    heading: 'Tecnologías',
    intro:
      'Mi stack está enfocado en entregar aplicaciones web modernas con una base sólida en frontend, flujos backend y tooling práctico para producción.',
    categories: [
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive UI'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'Authentication', 'Webhooks'],
      },
      {
        title: 'Tools',
        items: ['Git', 'GitHub', 'Vite', 'Postman', 'npm', 'GitHub Pages', 'Railway'],
      },
      {
        title: 'AI Tools',
        items: ['ChatGPT', 'OpenAI API', 'Codex', 'Prompt workflows'],
      },
    ],
  },
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
            <div className="stack-badges">
              {category.items.map((item) => (
                <span className="stack-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
