import React, { useEffect, useRef } from 'react';
import type { Component } from '../data/layers';
import { useI18n } from '../i18n';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useTrackEvent } from '../hooks/useAnalytics';

interface DetailPanelProps {
  component: Component | null;
  layerColor?: string | null;
  onClose: () => void;
}

type ResourceKind = 'documentation' | 'community' | 'learning';

interface DetailResource {
  key: string;
  url: string;
  label: string;
  kind: ResourceKind;
  analyticsAction: string;
}

function segmentDetails(text: string, locale: string): string[] {
  return Array.from(
    new Intl.Segmenter(locale, { granularity: 'sentence' }).segment(text),
    ({ segment }) => segment.trim(),
  ).filter(Boolean);
}

function renderInlineCode(text: string): React.ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index} className="detail-inline-code">{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M11 4h5v5" />
    <path d="m9 11 7-7" />
    <path d="M16 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
  </svg>
);

const ResourceIcon: React.FC<{ kind: ResourceKind }> = ({ kind }) => {
  if (kind === 'community') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (kind === 'learning') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12.5V17c2.8 2 7.2 2 10 0v-4.5" />
        <path d="M21 10v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </svg>
  );
};

const DetailPanel: React.FC<DetailPanelProps> = ({ component, layerColor, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const trapRef = useFocusTrap(!!component);
  const t = useI18n();
  const trackEvent = useTrackEvent();

  useEffect(() => {
    if (!component) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [component, onClose]);

  if (!component) return null;

  const resources: DetailResource[] = [
    ...(component.docUrl
      ? [{
          key: 'documentation',
          url: component.docUrl,
          label: component.docLabel || t.ui.documentationLabel,
          kind: 'documentation' as const,
          analyticsAction: 'doc_link',
        }]
      : []),
    ...(component.altDocUrl
      ? [{
          key: 'alternate-documentation',
          url: component.altDocUrl,
          label: component.altDocLabel || t.ui.documentationLabel,
          kind: 'documentation' as const,
          analyticsAction: 'alt_doc_link',
        }]
      : []),
    ...(component.awesomeUrl
      ? [{
          key: 'community',
          url: component.awesomeUrl,
          label: t.ui.communityExamplesLabel,
          kind: 'community' as const,
          analyticsAction: 'awesome_link',
        }]
      : []),
    ...(component.learningUrl
      ? [{
          key: 'learning',
          url: component.learningUrl,
          label: t.ui.learningHubLabel,
          kind: 'learning' as const,
          analyticsAction: 'learning_hub_link',
        }]
      : []),
  ];
  const detailParagraphs = segmentDetails(component.details, t.locale);
  const titleId = `detail-title-${component.id}`;
  const descriptionId = `detail-description-${component.id}`;

  return (
    <>
      <div className="detail-overlay" onClick={onClose} aria-hidden="true" />
      <div
        ref={trapRef}
        className="detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        style={layerColor ? { '--layer-color': layerColor } as React.CSSProperties : undefined}
      >
        <div className="detail-header">
          <div className="detail-header-left">
            <span className="detail-icon" aria-hidden="true">{component.icon}</span>
            <div>
              <h2 id={titleId} className="detail-name">{component.name}</h2>
              <code className="detail-path">{component.path}</code>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="detail-close"
            onClick={onClose}
            aria-label={t.ui.closeDetailsLabel}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l12 12" />
              <path d="M16 4 4 16" />
            </svg>
          </button>
        </div>

        <div className="detail-content">
          <p id={descriptionId} className="detail-description">{component.description}</p>

          <div className="detail-grid">
            <div className="detail-main">
              <section className="detail-section">
                <h3 className="detail-section-title">{t.ui.detailsLabel}</h3>
                <div className="detail-section-copy">
                  {detailParagraphs.map((paragraph, index) => (
                    <p key={`${component.id}-${index}`} className="detail-section-text">
                      {renderInlineCode(paragraph)}
                    </p>
                  ))}
                </div>
              </section>

              {component.useCases.length > 0 && (
                <section className="detail-section">
                  <h3 className="detail-section-title">{t.ui.useCasesLabel}</h3>
                  <ul className="detail-usecases">
                    {component.useCases.map((useCase) => (
                      <li key={useCase}>{useCase}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {resources.length > 0 && (
              <section className="detail-section detail-resources-section">
                <h3 className="detail-section-title">{t.ui.resourcesLabel}</h3>
                <div className="detail-resources">
                  {resources.map((resource) => {
                    const hostname = new URL(resource.url).hostname.replace(/^www\./, '');
                    return (
                      <a
                        key={resource.key}
                        className="detail-resource-card"
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${resource.label}. ${t.ui.opensNewTabLabel}`}
                        onClick={() => trackEvent('analytics.click', {
                          category: 'outbound',
                          action: resource.analyticsAction,
                          label: component.id,
                        })}
                      >
                        <span className="detail-resource-icon">
                          <ResourceIcon kind={resource.kind} />
                        </span>
                        <span className="detail-resource-copy">
                          <span className="detail-resource-label">{resource.label}</span>
                          <span className="detail-resource-source">{hostname}</span>
                        </span>
                        <span className="detail-resource-external">
                          <ExternalLinkIcon />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPanel;
