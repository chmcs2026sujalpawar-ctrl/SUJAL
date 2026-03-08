import React, { useEffect, useState } from 'react';

const themes = [
    { label: "Light", value: "corporate" },
    { label: "Forest", value: "forest" }
];

const ThemeController = () => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme === 'corporate' ? 'corporate' : 'forest';
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 overflow-y-auto max-h-96">
                {themes.map((t) => (
                    <li key={t.value}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={t.label}
                            value={t.value}
                            checked={theme === t.value}
                            onChange={(e) => setTheme(e.target.value)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeController;
