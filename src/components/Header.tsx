import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  return (
    <header className="hero">
      <div className="hero-toggle">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <code>.github/</code> folder evolution
        </h1>
        <p className="hero-subtitle">
          The composable Copilot customization stack
        </p>
      </div>
    </header>
  );
};

export default Header;
