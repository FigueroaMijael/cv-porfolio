import React, { useState } from 'react';
import HeaderPage from '../../components/Header/HeaderPage';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from '../../Context/Languaje-context';
import cv from '../../cv/Cv.pdf';
import photo from '../../img/me/me-photo.pdf';
import '../../pages/About/AboutPage.css';
import DW from '../../img/certificated/649f245b4268360002c60e46.png';
import JS from '../../img/certificated/64f09acf8278ce9cace9ede1.png';
import RJS from '../../img/certificated/65548694b4768ce51454cd11.png';
import PB from '../../img/certificated/663b8342bccd557071499eb8.png';
import CS from '../../img/certificated/66fc99343ff0c813c7212038.png';

const AboutPage = () => {
  const { translate } = useTranslation();
  const [visibleSkills, setVisibleSkills] = useState({});
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const placeholderImages = [DW, JS, RJS, PB, CS];
  const bio = translate('aboutPageBio');
  const skillIcons = {
    HTML: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    CSS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    JavaScript: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
    Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    ReactJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    NodeJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  };
  const skills = translate('aboutSkills').map((skill) => ({
    ...skill,
    img: skillIcons[skill.name],
  }));

  const toggleSkillInfo = (skill) => {
    setVisibleSkills((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill],
    }));
  };

  return (
    <div>
      <HeaderPage />
      <ParticlesBackground />

      <main>
        <section className="sobre-mi-seccion">
          <div className="sobre-mi-container">
            <aside className="sobre-mi-sidebar">
              <div className="sobre-mi-img-container">
                <div className="sobre-mi-img-glow"></div>
                <img src={photo} alt="Mijael Figueroa" className="sobre-mi-img" />
                <div className="sobre-mi-photo-details">
                  <span className="sobre-mi-badge">{translate('occupation')}</span>
                </div>
              </div>
            </aside>

            <div className="sobre-mi-info">
              <div className="sobre-mi-copy-card">
                <div className="sobre-mi-copy-head">
                  <span className="sobre-mi-kicker">{translate('aboutMe')}</span>
                  <h1 className="sobre-mi-title">{translate('iam')}</h1>
                  <p className="sobre-mi-role">{translate('occupation')}</p>
                </div>

                <div className="sobre-mi-meta-grid">
                  <div className="sobre-mi-meta-item">
                    <span>{translate('age')}</span>
                    <strong>21</strong>
                  </div>
                  <div className="sobre-mi-meta-item">
                    <span>{translate('from')}</span>
                    <strong>Buenos Aires, Argentina</strong>
                  </div>
                  <div className="sobre-mi-meta-item">
                    <span>Email</span>
                    <strong>figueroamijael86@gmail.com</strong>
                  </div>
                </div>

                <div className="sobre-mi-copy-body">
                  <p className="sobre-mi-lead">{bio[0]}</p>

                  <div className={`parrafo-active ${isBioExpanded ? 'show' : 'hide'}`}>
                    {bio.slice(1).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="about-actions">
                  <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={translate('downloadFileName')}
                    className="btn-codigo cv buttonDownload2"
                  >
                    {translate('downloadcv')}
                  </a>

                  <div className="btn-info">
                    <button
                      type="button"
                      className="custom-btn btn-codigo"
                      id="btn-hide"
                      onClick={() => setIsBioExpanded((currentValue) => !currentValue)}
                    >
                      <span>{isBioExpanded ? translate('showLess') : translate('readmore')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">{translate('skillsTitle')}</h1>
            <div className="skill-container">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill.name} data-aos="flip-left" data-aos-delay="300">
                  <img alt={skill.name} className="skills-img icon-li" src={skill.img} title={skill.name} />
                  <h2 className="skill-name">
                    {skill.name}
                    <button onClick={() => toggleSkillInfo(skill.name)} className="toggle-button">
                      {visibleSkills[skill.name] ? '▲' : '▼'}
                    </button>
                  </h2>
                  {visibleSkills[skill.name] && <p className="skill-info">{skill.description}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="certificados">
            <h3 className="heading">{translate('certificatesTitle')}</h3>
            <div className="certificados-grid" data-aos="flip-up" data-aos-delay="300">
              {placeholderImages.map((src, index) => (
                <img key={src} src={src} alt={`${translate('certificatesTitle')} ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default AboutPage;
