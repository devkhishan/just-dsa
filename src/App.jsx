import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { LandingPage } from './components/LandingPage';

function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark mode

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className="app-header">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <LandingPage />
    </>
  );
}

export default App;
