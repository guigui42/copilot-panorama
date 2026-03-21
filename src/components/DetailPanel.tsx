import React, { useEffect, useRef } from 'react';
import type { Component } from '../data/layers';
import { useI18n } from '../i18n';

interface DetailPanelProps {
  component: Component | null;
  onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ component, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const t = useI18n();

  useEffect(() => {
    if (!component) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll when panel is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [component, onClose]);

  if (!component) return null;

  return (
    <>
      <div className="detail-overlay" onClick={onClose} />
      <div className="detail-panel" role="dialog" aria-label={component.name}>
        <div className="detail-header">
          <div className="detail-header-left">
            <span className="detail-icon">{component.icon}</span>
            <h2 className="detail-name">{component.name}</h2>
          </div>
          <button
            ref={closeBtnRef}
            className="detail-close"
            onClick={onClose}
            aria-label="Close detail panel"
          >
            ✕
          </button>
        </div>

        <code className="detail-path">{component.path}</code>

        <p className="detail-description">{component.description}</p>

        <div className="detail-section">
          <h3 className="detail-section-title">{t.ui.detailsLabel}</h3>
          <p className="detail-section-text">{component.details}</p>
        </div>

        <div className="detail-section">
          <h3 className="detail-section-title">{t.ui.useCasesLabel}</h3>
          <div className="usecases">
            {component.useCases.map((useCase) => (
              <span key={useCase} className="usecase">
                {useCase}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <a
            className="detail-doc-link"
            href={component.docUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            📖 {t.ui.documentationLabel}
          </a>
          {component.altDocUrl && (
            <>
              {' '}
              <a
                className="detail-doc-link"
                href={component.altDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 'var(--space-2)' }}
              >
                📖 {component.altDocLabel || t.ui.documentationLabel}
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPanel;
