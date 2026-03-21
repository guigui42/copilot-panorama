import React from 'react';
import type { Layer, Component } from '../data/layers';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useI18n } from '../i18n';
import ComponentCard from './ComponentCard';

interface LayerSectionProps {
  layer: Layer;
  onComponentClick: (component: Component) => void;
}

const LayerSection: React.FC<LayerSectionProps> = ({ layer, onComponentClick }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });
  const t = useI18n();

  const gridClass = `layer-components layer-components-${Math.min(layer.components.length, 3)}`;

  return (
    <section
      ref={ref}
      className={`layer-band ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
      style={{
        '--layer-color': layer.color,
        '--delay': `${(layer.number - 1) * 0.1}s`,
      } as React.CSSProperties}
    >
      <div className="layer-band-header">
        <span className="layer-num">{layer.number}</span>
        <div className="layer-band-titles">
          <span className="layer-label">{t.ui.layerPrefix} {layer.number}</span>
          <h2 className="layer-band-title">{layer.title}</h2>
          <p className="layer-band-subtitle">{layer.subtitle}</p>
        </div>
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
  );
};

export default LayerSection;
