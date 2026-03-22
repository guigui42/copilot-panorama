import React, { useState, useMemo, useEffect, useCallback, useRef, createContext } from 'react';
import { getLayers } from './data/layers';
import { getToolsLayers } from './data/tools';
import type { Component } from './data/layers';
import type { PageId } from './i18n/types';
import { useTheme } from './hooks/useTheme';
import { I18nContext, translationsMap, getInitialLocale, persistLocale, updateDocumentMeta, useI18n } from './i18n';
import type { Locale } from './i18n';
import Header from './components/Header';
import LayerSection from './components/LayerSection';
import DetailPanel from './components/DetailPanel';
import { GitHubMark } from './components/GitHubIcons';

function getInitialPage(): PageId {
  const urlParams = new URLSearchParams(window.location.search);
  const p = urlParams.get('page');
  if (p === 'tools') return 'tools';
  return 'stack';
}

function persistPage(page: PageId) {
  const url = new URL(window.location.href);
  if (page === 'stack') {
    url.searchParams.delete('page');
  } else {
    url.searchParams.set('page', page);
  }
  window.history.replaceState({}, '', url.toString());
}

export const LocaleContext = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({
  locale: 'en',
  setLocale: () => {},
});

export const PageContext = createContext<{ page: PageId; setPage: (p: PageId) => void }>({
  page: 'stack',
  setPage: () => {},
});

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const t = useI18n();
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [selectedLayerColor, setSelectedLayerColor] = useState<string | null>(null);
  const [focusedLayerId, setFocusedLayerId] = useState<string | null>(null);
  const [insightsFocused, setInsightsFocused] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const { page, setPage: handlePageChange } = React.useContext(PageContext);

  const resetViewState = useCallback(() => {
    setSelectedComponent(null);
    setSelectedLayerColor(null);
    setFocusedLayerId(null);
    setInsightsFocused(false);
  }, []);

  const handleExportPng = useCallback(async () => {
    if (!exportRef.current || exporting) return;
    setExporting(true);
    try {
      const { toCanvas } = await import('html-to-image');
      const container = exportRef.current;

      // Force all layers visible for capture (they may be hidden by intersection observer)
      const hiddenEls = container.querySelectorAll('.animate-hidden');
      hiddenEls.forEach((el) => {
        el.classList.remove('animate-hidden');
        el.classList.add('animate-visible');
      });

      // Show the export banner
      const banner = container.querySelector('.export-banner') as HTMLElement | null;
      if (banner) banner.style.display = 'block';

      // Let layout settle after DOM changes
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

      const pixelRatio = 2;
      const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-primary').trim() || '#0d1117';

      const fullCanvas = await toCanvas(container, {
        backgroundColor: bgColor,
        pixelRatio,
      });

      // Crop to content area (poster is max-width 1100px + 24px padding each side = 1148px)
      const poster = container.querySelector('.poster') as HTMLElement | null;
      const containerRect = container.getBoundingClientRect();
      const contentRect = poster ? poster.getBoundingClientRect() : containerRect;

      const cropX = (contentRect.left - containerRect.left) * pixelRatio;
      const cropW = contentRect.width * pixelRatio;
      const cropH = fullCanvas.height;

      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = cropW;
      croppedCanvas.height = cropH;
      const ctx = croppedCanvas.getContext('2d')!;
      // Fill background first (for banner area above poster)
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cropW, cropH);
      ctx.drawImage(fullCanvas, cropX, 0, cropW, cropH, 0, 0, cropW, cropH);

      // Restore DOM
      hiddenEls.forEach((el) => {
        el.classList.remove('animate-visible');
        el.classList.add('animate-hidden');
      });
      if (banner) banner.style.display = 'none';

      const link = document.createElement('a');
      link.download = `copilot-panorama-${page}.png`;
      link.href = croppedCanvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setExporting(false);
    }
  }, [page, exporting]);

  const onPageChange = useCallback((newPage: PageId) => {
    handlePageChange(newPage);
    resetViewState();
  }, [handlePageChange, resetViewState]);

  const stackLayers = useMemo(() => getLayers(t), [t]);
  const toolsLayers = useMemo(() => getToolsLayers(t), [t]);
  const layers = page === 'tools' ? toolsLayers : stackLayers;
  const layerColors = layers.map((l) => l.color);

  const currentInsights = page === 'tools' ? t.toolsInsights : t.insights;
  const currentInsightsTitle = page === 'tools' ? t.toolsUi.insightsTitle : t.ui.insightsTitle;
  const currentInsightsSubtitle = page === 'tools' ? t.toolsUi.insightsSubtitle : t.ui.insightsSubtitle;
  const currentFooterBuiltFor = page === 'tools' ? t.toolsUi.footerBuiltFor : t.ui.footerBuiltFor;
  const currentFooterDocsLink = page === 'tools' ? t.toolsUi.footerDocsLink : t.ui.footerDocsLink;
  const footerDocsUrl = page === 'tools'
    ? 'https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features'
    : 'https://docs.github.com/en/copilot/concepts/agents';

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
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} page={page} onPageChange={onPageChange} onExportPng={handleExportPng} exporting={exporting} />

      <div ref={exportRef}>
      <div className="export-banner" aria-hidden="true">
        <span className="export-banner-brand">Copilot Panorama</span>
        <span className="export-banner-page">
          {page === 'stack' ? (
            <><code>.github/</code> {t.ui.heroTitle}</>
          ) : (
            t.toolsUi.heroTitle
          )}
        </span>
        <span className="export-banner-url">gh.io/copilot-panorama</span>
      </div>
      <main id="main-content" className="poster">
        {layers.map((layer, i) => (
          <div key={layer.id}>
            <LayerSection
              layer={layer}
              onComponentClick={(comp) => {
                setSelectedComponent(comp);
                setSelectedLayerColor(layer.color);
              }}
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
                aria-hidden="true"
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
        <div className="layer-focus-overlay" onClick={() => setInsightsFocused(false)} aria-hidden="true" />
      )}
      <section
        className={`insights ${insightsFocused ? 'insights-focused' : ''}`}
        aria-label={currentInsightsTitle}
        tabIndex={insightsFocused ? undefined : 0}
        role={insightsFocused ? undefined : 'button'}
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest('.insight-card') && !insightsFocused) {
            setInsightsFocused(true);
          }
        }}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !insightsFocused) {
            e.preventDefault();
            setInsightsFocused(true);
          }
          if (e.key === 'Escape' && insightsFocused) {
            setInsightsFocused(false);
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
          <h2 className="insights-title">{currentInsightsTitle}</h2>
          <p className="insights-subtitle">{currentInsightsSubtitle}</p>
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
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M1.75 10a.75.75 0 01.75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 011 13.25v-2.5A.75.75 0 011.75 10zm12.5 0a.75.75 0 01.75.75v2.5A1.75 1.75 0 0113.25 15h-2.5a.75.75 0 010-1.5h2.5a.25.25 0 00.25-.25v-2.5a.75.75 0 01.75-.75zM2.75 1.5a.25.25 0 00-.25.25v2.5a.75.75 0 01-1.5 0v-2.5C1 .784 1.784 0 2.75 0h2.5a.75.75 0 010 1.5h-2.5zm10.5 0h-2.5a.75.75 0 010-1.5h2.5C14.216 0 15 .784 15 1.75v2.5a.75.75 0 01-1.5 0v-2.5a.25.25 0 00-.25-.25z"/>
              </svg>
            </button>
          )}
        </div>
        <div className="insights-grid">
          {currentInsights.map((insight, i) => (
            <div key={i} className="insight-card">
              <span className="insight-icon" aria-hidden="true">{insight.icon}</span>
              <span dangerouslySetInnerHTML={{ __html: insight.content }} />
            </div>
          ))}
        </div>
      </section>
      </div>

      <footer className="footer">
        <p>
          <GitHubMark size={18} className="footer-github-mark" />{' '}
          {currentFooterBuiltFor} ·{' '}
          <a
            href={footerDocsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentFooterDocsLink} ↗
          </a>
        </p>
        {page === 'stack' && (
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
        )}
      </footer>

      <DetailPanel
        component={selectedComponent}
        layerColor={selectedLayerColor}
        onClose={() => setSelectedComponent(null)}
      />
    </>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [page, setPage] = useState<PageId>(getInitialPage);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    persistLocale(newLocale);
  };

  const handlePageChange = useCallback((newPage: PageId) => {
    setPage(newPage);
    persistPage(newPage);
  }, []);

  useEffect(() => {
    updateDocumentMeta(translationsMap[locale], page);
    persistLocale(locale);
  }, [locale, page]);

  return (
    <I18nContext.Provider value={translationsMap[locale]}>
      <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange }}>
        <PageContext.Provider value={{ page, setPage: handlePageChange }}>
          <AppContent />
        </PageContext.Provider>
      </LocaleContext.Provider>
    </I18nContext.Provider>
  );
}

export default App;
