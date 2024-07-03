import React from 'react';
import './DarkMode.css'

const DarkMode = ({ onThemeChange }) => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
        if (onThemeChange) {
            onThemeChange(theme);
        }
    };

    return (
        <div>
            <div
                className={theme === "dark" ? clickedClass : ""}
                id="darkMode"
                onClick={(e) => switchTheme(e)}
            >
                <span><i class="bi bi-brightness-high-fill"></i></span>
                <span><i class="bi bi-moon-fill"></i></span>
            </div>
        </div>
    );
};

export default DarkMode;
