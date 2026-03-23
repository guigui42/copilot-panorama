import React, { useEffect, useCallback } from 'react';
import type { Layer, Component } from '../data/layers';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useI18n } from '../i18n';
import ComponentCard from './ComponentCard';

interface LayerSectionProps {
  layer: Layer;
  onComponentClick: (component: Component) => void;
  isFocused?: boolean;
  onToggleFocus?: () => void;
  onDismissAll?: () => void;
}

const LayerSection: React.FC<LayerSectionProps> = ({
  layer,
  onComponentClick,
  isFocused = false,
  onToggleFocus,
  onDismissAll,
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });
  const t = useI18n();

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocused) {
        if (onDismissAll) {
          onDismissAll();
        } else {
          onToggleFocus?.();
        }
      }
    },
    [isFocused, onDismissAll, onToggleFocus],
  );

  useEffect(() => {
    if (isFocused) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isFocused, handleEscape]);

  const gridClass = `layer-components layer-components-${Math.min(layer.components.length, 3)}`;

  const handleHeaderClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.component-section')) return;
    if (isFocused) {
      if (onDismissAll) {
        onDismissAll();
      } else {
        onToggleFocus?.();
      }
    } else {
      onToggleFocus?.();
    }
  };

  return (
    <>
      {isFocused && (
        <div className="layer-focus-overlay" onClick={onDismissAll ?? onToggleFocus} aria-hidden="true" />
      )}
      <section
        ref={ref}
        className={`layer-band ${isVisible ? 'animate-visible' : 'animate-hidden'} ${isFocused ? 'layer-focused' : ''}`}
        style={{
          '--layer-color': layer.color,
          '--delay': `${(layer.number - 1) * 0.1}s`,
        } as React.CSSProperties}
        aria-label={`${t.ui.layerPrefix} ${layer.number}: ${layer.title}`}
        tabIndex={0}
        onClick={handleHeaderClick}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleHeaderClick(e as unknown as React.MouseEvent);
          }
        }}
      >
        {isFocused && (
          <button
            className="layer-focus-close"
            onClick={(e) => {
              e.stopPropagation();
              if (onDismissAll) {
                onDismissAll();
              } else {
                onToggleFocus?.();
              }
            }}
            aria-label="Exit fullscreen"
          >
            ✕
          </button>
        )}

        <div className="layer-band-header">
          <span className="layer-num" aria-hidden="true">{layer.number}</span>
          <div className="layer-band-titles">
            <span className="layer-label">{t.ui.layerPrefix} {layer.number}</span>
            <h2 className="layer-band-title" data-layer-num={layer.number}>{layer.title}</h2>
            <p className="layer-band-subtitle">{layer.subtitle}</p>
          </div>
          {!isFocused && (
            <button
              className="layer-expand-btn"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFocus?.();
              }}
              aria-label="Focus this layer fullscreen"
              title="Focus this layer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M1.75 10a.75.75 0 01.75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 011 13.25v-2.5A.75.75 0 011.75 10zm12.5 0a.75.75 0 01.75.75v2.5A1.75 1.75 0 0113.25 15h-2.5a.75.75 0 010-1.5h2.5a.25.25 0 00.25-.25v-2.5a.75.75 0 01.75-.75zM2.75 1.5a.25.25 0 00-.25.25v2.5a.75.75 0 01-1.5 0v-2.5C1 .784 1.784 0 2.75 0h2.5a.75.75 0 010 1.5h-2.5zm10.5 0h-2.5a.75.75 0 010-1.5h2.5C14.216 0 15 .784 15 1.75v2.5a.75.75 0 01-1.5 0v-2.5a.25.25 0 00-.25-.25z"/>
              </svg>
            </button>
          )}
        </div>

        <div className={gridClass}>
          {layer.components.map((component) => (
            <ComponentCard
              key={component.id}
              component={component}
              layerColor={layer.color}
              onClick={onComponentClick}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default LayerSection;
