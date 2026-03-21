import { useState, useMemo } from 'react';
import { getLayers } from './data/layers';
import type { Component } from './data/layers';
import { useTheme } from './hooks/useTheme';
import { I18nContext, translationsMap, getInitialLocale, persistLocale, useI18n } from './i18n';
import type { Locale } from './i18n';
import Header from './components/Header';
import LayerSection from './components/LayerSection';
import DetailPanel from './components/DetailPanel';
import { GitHubMark } from './components/GitHubIcons';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const t = useI18n();
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  const layers = useMemo(() => getLayers(t), [t]);
  const layerColors = layers.map((l) => l.color);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="poster">
        {layers.map((layer, i) => (
          <div key={layer.id}>
            <LayerSection
              layer={layer}
              onComponentClick={setSelectedComponent}
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

      <section className="insights">
        <div className="insights-header">
          <h2 className="insights-title">{t.ui.insightsTitle}</h2>
          <p className="insights-subtitle">{t.ui.insightsSubtitle}</p>
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
