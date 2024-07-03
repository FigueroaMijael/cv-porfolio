import React from 'react';
import './Experience.css'

const LinkInline = ({ href, children }) => (
  <a
    href={href}
    role="link"
    className="link-inline"
  >
    {children}
  </a>
);

export default LinkInline;
