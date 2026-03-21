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
        <LanguageSwitcher locale={locale} onChange={setLocale} />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <CopilotIcon size={40} className="hero-copilot-icon" />
          <code>.github/</code> {t.ui.heroTitle}
        </h1>
      </div>
    </header>
  );
};

export default Header;
