import React from 'react';

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-switch" onClick={toggleTheme} aria-label="Toggle Dark Mode" role="switch" aria-checked={theme === 'dark'}>
      <div className="theme-switch-icon">
        {/* Sun Icon */}
        <svg className="icon-sun" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {/* Moon Icon */}
        <svg className="icon-moon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};
