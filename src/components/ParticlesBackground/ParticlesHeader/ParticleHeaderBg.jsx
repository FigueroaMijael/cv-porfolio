import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleHeaderBg = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadFull();
      setInit(true);
    };
    initParticles();
  }, []);

  const options = useMemo(() => ({
    background: {
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      color: "#000",
    },
    fullScreen: {
      enable: false,
    },
    interactivity: {
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 10,
        },
        grab: {
          distance: 400,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: {
          value: "#000",
        },
        distance: 150,
        opacity: 0.4,
      },
      move: {
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: 24,
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
        },
      },
      rotate: {
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 5,
        },
      },
      shape: {
        type: "image",
        options: {
          image: [
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", width: 30, height: 30 },
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", width: 30, height: 30 },
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg", width: 30, height: 30 },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 30, height: 30 },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", width: 30, height: 30 },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 30, height: 30 },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg", width: 30, height: 30 },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", width: 30, height: 30 },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 30, height: 30 },
          ],
        },
      },
      size: {
        value: 50,
        animation: {
          speed: 40,
          minimumValue: 0.1,
        },
      },
      stroke: {
        width: 0,
        color: {
          value: "#000000",
        },
      },
    },
  }), []);

  return <Particles className="particles-2-css" id={props.id} options={options} />;
};

export default ParticleHeaderBg;
