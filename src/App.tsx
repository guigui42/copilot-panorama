import { useState, useMemo, useEffect } from 'react';
import { getLayers } from './data/layers';
import type { Component } from './data/layers';
import { useTheme } from './hooks/useTheme';
import { I18nContext, translationsMap, getInitialLocale, persistLocale, updateDocumentMeta, useI18n } from './i18n';
import type { Locale } from './i18n';
import Header from './components/Header';
import LayerSection from './components/LayerSection';
import DetailPanel from './components/DetailPanel';
import { GitHubMark } from './components/GitHubIcons';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const t = useI18n();
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [focusedLayerId, setFocusedLayerId] = useState<string | null>(null);
  const [insightsFocused, setInsightsFocused] = useState(false);

  const layers = useMemo(() => getLayers(t), [t]);
  const layerColors = layers.map((l) => l.color);

  useEffect(() => {
    if (focusedLayerId || insightsFocused) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-layer-focused', '');
    } else {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-layer-focused');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-layer-focused');
    };
  }, [focusedLayerId, insightsFocused]);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="poster">
        {layers.map((layer, i) => (
          <div key={layer.id}>
            <LayerSection
              layer={layer}
              onComponentClick={setSelectedComponent}
              isFocused={focusedLayerId === layer.id}
              onToggleFocus={() =>
                setFocusedLayerId((prev) => (prev === layer.id ? null : layer.id))
              }
              onDismissAll={() => {
                setFocusedLayerId(null);
                setSelectedComponent(null);
              }}
            />
            {i < layers.length - 1 ? (
              <div
                className="layer-connector"
                style={{
                  '--connector-from': layerColors[i],
                  '--connector-to': layerColors[i + 1],
                } as React.CSSProperties}
              />
            ) : null}
          </div>
        ))}
      </main>

      {insightsFocused && (
        <div className="layer-focus-overlay" onClick={() => setInsightsFocused(false)} />
      )}
      <section
        className={`insights ${insightsFocused ? 'insights-focused' : ''}`}
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest('.insight-card') && !insightsFocused) {
            setInsightsFocused(true);
          }
        }}
      >
        {insightsFocused && (
          <button
            className="layer-focus-close"
            onClick={(e) => {
              e.stopPropagation();
              setInsightsFocused(false);
            }}
            aria-label="Exit fullscreen"
          >
            ✕
          </button>
        )}
        <div className="insights-header">
          <h2 className="insights-title">{t.ui.insightsTitle}</h2>
          <p className="insights-subtitle">{t.ui.insightsSubtitle}</p>
          {!insightsFocused && (
            <button
              className="layer-expand-btn insights-expand-btn"
              onClick={(e) => {
                e.stopPropagation();
                setInsightsFocused(true);
              }}
              aria-label="Focus this section fullscreen"
              title="Focus this section"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1.75 10a.75.75 0 01.75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 011 13.25v-2.5A.75.75 0 011.75 10zm12.5 0a.75.75 0 01.75.75v2.5A1.75 1.75 0 0113.25 15h-2.5a.75.75 0 010-1.5h2.5a.25.25 0 00.25-.25v-2.5a.75.75 0 01.75-.75zM2.75 1.5a.25.25 0 00-.25.25v2.5a.75.75 0 01-1.5 0v-2.5C1 .784 1.784 0 2.75 0h2.5a.75.75 0 010 1.5h-2.5zm10.5 0h-2.5a.75.75 0 010-1.5h2.5C14.216 0 15 .784 15 1.75v2.5a.75.75 0 01-1.5 0v-2.5a.25.25 0 00-.25-.25z"/>
              </svg>
            </button>
          )}
        </div>
        <div className="insights-grid">
          {t.insights.map((insight, i) => (
            <div key={i} className="insight-card">
              <span className="insight-icon">{insight.icon}</span>
              <span dangerouslySetInnerHTML={{ __html: insight.content }} />
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          <GitHubMark size={18} className="footer-github-mark" />{' '}
          {t.ui.footerBuiltFor} ·{' '}
          <a
            href="https://docs.github.com/en/copilot/concepts/agents"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.ui.footerDocsLink} ↗
          </a>
        </p>
        <p className="footer-credit">
          Inspired by{' '}
          <a
            href="https://www.linkedin.com/in/ashishkhichi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ashish S K
          </a>
        </p>
      </footer>

      <DetailPanel
        component={selectedComponent}
        onClose={() => setSelectedComponent(null)}
      />
    </>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    persistLocale(newLocale);
  };

  useEffect(() => {
    updateDocumentMeta(translationsMap[locale]);
    persistLocale(locale);
  }, [locale]);

  return (
    <I18nContext.Provider value={translationsMap[locale]}>
      <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange }}>
        <AppContent />
      </LocaleContext.Provider>
    </I18nContext.Provider>
  );
}

import { createContext } from 'react';
export const LocaleContext = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({
  locale: 'en',
  setLocale: () => {},
});

export default App;
