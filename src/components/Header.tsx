import React from 'react';
import ThemeToggle from './ThemeToggle';
import { CopilotIcon } from './GitHubIcons';

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
          <CopilotIcon size={40} className="hero-copilot-icon" />
          <code>.github/</code> composable stack
        </h1>
      </div>
    </header>
  );
};

export default Header;
