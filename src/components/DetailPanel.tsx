import React, { useEffect, useRef } from 'react';
import type { Component } from '../data/layers';

interface DetailPanelProps {
  component: Component | null;
  onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ component, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!component) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
          <h3 className="detail-section-title">Details</h3>
          <p className="detail-section-text">{component.details}</p>
        </div>

        <div className="detail-section">
          <h3 className="detail-section-title">Use Cases</h3>
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
            📖 Documentation
          </a>
          {component.altDocUrl && (
            <>
              {' '}
              <a
                className="detail-doc-link"
                href={component.altDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 8 }}
              >
                📖 {component.altDocLabel || 'Alt Docs'}
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPanel;
