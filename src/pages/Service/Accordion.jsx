import React, { useState } from 'react';

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div data-aos={props.dataAos} data-aos-delay={props.dataAosDelay}>
      <div className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        <div className="accordion-heading">
          <h3>{props.title}</h3>
          <i className={`fas ${isActive ? 'bi bi-chevron-down' : 'bi bi-chevron-down'}`}></i>
        </div>
        <p className="accordion-content">{props.content}</p>
      </div>
    </div>
  );
}

export default Accordion;
