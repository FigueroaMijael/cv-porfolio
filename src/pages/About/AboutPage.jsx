import React from 'react';
import HeaderPage from '../../components/Header/HeaderPage';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';
import cv from '../../cv/MiCV.pdf';
import photo from '../../img/me/me-photo.pdf';
import '../../pages/About/AboutPage.css';
import DW from '../../img/certificated/649f245b4268360002c60e46.png'
import JS from '../../img/certificated/64f09acf8278ce9cace9ede1.png'
import RJS from '../../img/certificated/65548694b4768ce51454cd11.png'
import PB from '../../img/certificated/663b8342bccd557071499eb8.png'

const AboutPage = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");
    parrafoActive.classList.toggle("show");
    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  const placeholderImages = [
    DW,
    JS,
    RJS,
    PB
  ];

  return (
    <div>

      <HeaderPage />

      <ParticlesBackground />

      <main>
        <section className="sobre-mi-seccion">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={photo} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="MiCV.pdf" className="btn-codigo cv buttonDownload2">
              Download CV
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
              Hi, I'm Esteban Nahuel Carrizo, a student at the Technological University of Tucumán; I consider myself a person passionate about programming and web development since in 2020 I had the opportunity to get to know this world of the front-end and I was able to create my first web page only using HTML and CSS from there, I felt a great passion for web development, since you can do amazing things knowing how to use HTML, CSS, JavaScript and to this day I still feel that same passion when I create a web page.
              </p>

              <div className="hide parrafo-active">
                <p>
                I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.
                </p>

                <p>
                I have experience working as a freelance web designer and developer, which gave me the opportunity to work on many interesting projects, adapting to the client's needs and budget, which allowed me to improve my skills and knowledge; Additionally, I have also had the opportunity to be part of some online and face-to-face courses that helped me enrich my skills and learn a little more about this beautiful world of web development.
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                More than a year of professional experience in this language, allows me to perform without problems in the industry.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                More than a year of work experience in this language, I use it daily to develop web designs and interfaces.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
                <h2 className="skill-name">Sass</h2>
                <p className="skill-info">
                One year using this preprocessor in the professional field, I include it in many of my projects since it allows me a better structured code.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.
                </p>
              </div>
              
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="jQuery" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                More than a year using this JavaScript framework, carrying out multiple personal and work projects.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="jQuery" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                It is the cross-platform runtime environment that I use to make my web applications scalable.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="jQuery" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <svg className="skills-img" viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid">
                  <path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"/>
                </svg>
                <h2 className="skill-name">MongodDB</h2>
                <p className="skill-info">
                It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <svg className="skills-img" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                  <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/>
                </svg>
                <h2 className="skill-name"> Git</h2>
                <p className="skill-info">
                It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.
                </p>
              </div>
            </div>
          </div>
          <div className="certificados">
      <h3 className="heading">Certificados</h3>
      <div className="certificados-grid" data-aos="flip-up" data-aos-delay="300">
        {placeholderImages.map((src, index) => (
          <img  key={index} src={src} alt={`Certificado ${index + 1}`} />
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
