import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const body = document.body;
        body.className = theme;
    }, [theme]);

    return { theme, toggleTheme };
};

export default useDarkMode;