import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { CopilotIcon } from './GitHubIcons';
import { useI18n } from '../i18n';
import { LocaleContext } from '../contexts';
import type { PageId } from '../i18n/types';

const SHARE_URL = 'https://gh.io/copilot-panorama';

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
  const [copied, setCopied] = useState(false);
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

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers / insecure contexts
      const input = document.createElement('input');
      input.value = SHARE_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <header className="hero">
      <div className="hero-bar">
        <button className="hero-brand" onClick={handleCopyLink} title={SHARE_URL}>
          <CopilotIcon size={22} className="hero-brand-icon" />
          <span className="hero-brand-name">Copilot Panorama</span>
          {copied && <span className="hero-brand-copied">{t.ui.shareCopied}</span>}
        </button>

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
          <button
            className={`page-switcher-btn ${page === 'tips' ? 'page-switcher-btn--active' : ''}`}
            onClick={() => onPageChange('tips')}
            aria-current={page === 'tips' ? 'page' : undefined}
          >
            {t.ui.pageTips}
          </button>
        </nav>

        <div className="hero-menu-wrapper" ref={menuRef}>
          <button
            className="hero-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Settings"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
              ) : (
                <path fillRule="evenodd" d="M7.429 1.525a3.5 3.5 0 0 1 1.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 0 1 0 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.03 6.03 0 0 1-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.1.143-.137.146a3.5 3.5 0 0 1-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.013 4.013 0 0 1-.502-.29c-.417-.278-.969-.423-1.529-.27l-1.103.303c-.109.029-.175-.016-.194-.046a6.026 6.026 0 0 1-.574-.989c-.013-.031-.021-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 0 1 0-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.03 6.03 0 0 1 .574-.99c.02-.029.085-.074.194-.045l1.103.303c.56.153 1.112.008 1.53-.27.16-.107.326-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146ZM8 0a4.998 4.998 0 0 0-1.63.267c-.502.163-.863.565-.965 1.062l-.288 1.106c-.03.117-.108.215-.247.284a5.5 5.5 0 0 0-.688.398c-.127.093-.262.133-.378.1L2.7 2.915c-.5-.138-1.028.024-1.343.467a7.528 7.528 0 0 0-.716 1.234c-.2.467-.127 1.007.185 1.315l.816.806c.085.084.148.2.142.353a6.088 6.088 0 0 0 0 .82c.006.153-.057.27-.142.353l-.816.806c-.312.308-.385.848-.185 1.315.2.466.443.9.716 1.234.315.443.843.605 1.343.467l1.104-.303c.116-.033.251.007.378.1.222.148.454.28.688.397.14.07.218.167.247.284l.289 1.106c.102.497.463.9.964 1.062A4.997 4.997 0 0 0 8 16a4.997 4.997 0 0 0 1.63-.267c.501-.163.862-.565.964-1.062l.289-1.106c.03-.117.108-.215.247-.284.234-.118.466-.25.688-.397.127-.093.262-.133.378-.1l1.104.303c.5.138 1.028-.024 1.343-.467.273-.334.516-.768.716-1.234.2-.467.127-1.007-.185-1.315l-.816-.806c-.085-.084-.148-.2-.142-.353a6.1 6.1 0 0 0 0-.82c-.006-.153.057-.27.142-.353l.816-.806c.312-.308.385-.848.185-1.315a7.53 7.53 0 0 0-.716-1.234c-.315-.443-.843-.605-1.343-.467l-1.104.303c-.116.033-.251-.007-.378-.1a5.49 5.49 0 0 0-.688-.397c-.14-.07-.218-.167-.247-.284l-.289-1.106c-.102-.497-.463-.9-.964-1.062A4.998 4.998 0 0 0 8 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
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
              <button
                className={`share-link-btn${copied ? ' share-link-btn--copied' : ''}`}
                onClick={handleCopyLink}
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854.22a.75.75 0 0 1 .896-.152l.152.092 1.188 1.188a.75.75 0 0 1 .092.152.75.75 0 0 1-.092.898l-5.5 5.5a.75.75 0 0 1-.348.2l-2.5.688a.75.75 0 0 1-.918-.918l.688-2.5a.75.75 0 0 1 .2-.348Z" />
                  </svg>
                )}
                {copied ? t.ui.shareCopied : t.ui.shareLink}
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
        ) : page === 'tips' ? (
          <>
            <span className="hero-page-subtitle-accent">Copilot</span> {t.tipsUi.heroTitle}
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
