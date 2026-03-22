import React, { useContext } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { CopilotIcon } from './GitHubIcons';
import { useI18n } from '../i18n';
import { LocaleContext } from '../App';
import type { PageId } from '../i18n/types';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  page: PageId;
  onPageChange: (page: PageId) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, page, onPageChange }) => {
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
        <nav className="page-switcher" aria-label={`${t.ui.pageStack} / ${t.ui.pageTools}`}>
          <button
            className={`page-switcher-btn ${page === 'stack' ? 'page-switcher-btn--active' : ''}`}
            onClick={() => onPageChange('stack')}
            aria-current={page === 'stack' ? 'page' : undefined}
          >
            <code>.github/</code> <CopilotIcon size={18} className="page-switcher-icon" /> {t.ui.pageStack}
          </button>
          <button
            className={`page-switcher-btn ${page === 'tools' ? 'page-switcher-btn--active' : ''}`}
            onClick={() => onPageChange('tools')}
            aria-current={page === 'tools' ? 'page' : undefined}
          >
            <CopilotIcon size={18} className="page-switcher-icon" /> {t.ui.pageTools}
          </button>
        </nav>
        <h1 className="hero-title">
          {page === 'stack' ? (
            <>
              <code>.github/</code> <CopilotIcon size={40} className="hero-copilot-icon" /> {t.ui.heroTitle}
            </>
          ) : (
            <>
              <CopilotIcon size={40} className="hero-copilot-icon" /> {t.toolsUi.heroTitle}
            </>
          )}
        </h1>
      </div>
    </header>
  );
};

export default Header;
