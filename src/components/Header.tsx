import React, { useContext } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { CopilotIcon } from './GitHubIcons';
import { useI18n } from '../i18n';
import { LocaleContext } from '../App';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const t = useI18n();
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <header className="hero">
      <div className="hero-controls">
        <a
          href="https://awesome-copilot.github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="awesome-copilot-link"
          title="Community-contributed agents, instructions, and skills to enhance your GitHub Copilot experience"
        >
          ✨ Awesome Copilot
        </a>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <code>.github/</code> <CopilotIcon size={40} className="hero-copilot-icon" /> {t.ui.heroTitle}
        </h1>
      </div>
    </header>
  );
};

export default Header;
