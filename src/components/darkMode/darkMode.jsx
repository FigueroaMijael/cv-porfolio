import React, { useEffect, useState } from 'react';
import './DarkMode.css';

const THEME_KEY = 'theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);

  if (storedTheme === LIGHT_THEME || storedTheme === DARK_THEME) {
    return storedTheme;
  }

  return DARK_THEME;
};

const DarkMode = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove(LIGHT_THEME, DARK_THEME);
    document.body.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);

    if (onThemeChange) {
      onThemeChange(theme);
    }
  }, [theme, onThemeChange]);

  useEffect(() => {
    const syncThemeAcrossTabs = (event) => {
      if (event.key === THEME_KEY && (event.newValue === LIGHT_THEME || event.newValue === DARK_THEME)) {
        setTheme(event.newValue);
      }
    };

    window.addEventListener('storage', syncThemeAcrossTabs);

    return () => {
      window.removeEventListener('storage', syncThemeAcrossTabs);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME));
  };

  return (
    <div>
      <button
        type="button"
        className={theme === DARK_THEME ? 'clicked' : ''}
        id="darkMode"
        onClick={toggleTheme}
        aria-label={theme === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={theme === DARK_THEME}
      >
        <span>
          <i className="bi bi-brightness-high-fill"></i>
        </span>
        <span>
          <i className="bi bi-moon-fill"></i>
        </span>
      </button>
    </div>
  );
};

export default DarkMode;
