import React, { useContext, useState, useRef, useEffect } from 'react';
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
  onExportPng: () => void;
  exporting: boolean;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, page, onPageChange, onExportPng, exporting }) => {
  const t = useI18n();
  const { locale, setLocale } = useContext(LocaleContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    // Use click (not mousedown) so dropdown items fire before menu closes
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <header className="hero">
      <div className="hero-bar">
        <div className="hero-brand">
          <CopilotIcon size={22} className="hero-brand-icon" />
          <span className="hero-brand-name">Copilot Panorama</span>
        </div>

        <nav className="page-switcher" aria-label={`${t.ui.pageStack} / ${t.ui.pageTools}`}>
          <button
            className={`page-switcher-btn ${page === 'stack' ? 'page-switcher-btn--active' : ''}`}
            onClick={() => onPageChange('stack')}
            aria-current={page === 'stack' ? 'page' : undefined}
          >
            {t.ui.pageStack}
          </button>
          <button
            className={`page-switcher-btn ${page === 'tools' ? 'page-switcher-btn--active' : ''}`}
            onClick={() => onPageChange('tools')}
            aria-current={page === 'tools' ? 'page' : undefined}
          >
            {t.ui.pageTools}
          </button>
        </nav>

        <div className="hero-menu-wrapper" ref={menuRef}>
          <button
            className="hero-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
              ) : (
                <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="hero-menu-dropdown">
              <button
                className="export-png-btn"
                onClick={() => { onExportPng(); }}
                disabled={exporting}
              >
                {exporting ? (
                  <svg className="export-spinner" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="8" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" />
                    <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06Z" />
                  </svg>
                )}
                Export PNG
              </button>
              <a
                href="https://awesome-copilot.github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-menu-link"
              >
                ✨ Awesome Copilot
              </a>
              <div className="hero-menu-section">
                <LanguageSwitcher locale={locale} onChange={setLocale} />
              </div>
              <div className="hero-menu-section">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="hero-page-subtitle">
        {page === 'stack' ? (
          <>
            <code>.github/</code> {t.ui.heroTitle}
          </>
        ) : (
          <>
            <span className="hero-page-subtitle-accent">Copilot</span> Everywhere
          </>
        )}
      </p>
    </header>
  );
};

export default Header;
