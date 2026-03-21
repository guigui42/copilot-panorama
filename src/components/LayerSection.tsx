import React, { useState } from 'react';
import type { Layer, Component } from '../data/layers';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ComponentCard from './ComponentCard';

interface LayerSectionProps {
  layer: Layer;
  onComponentClick: (component: Component) => void;
  defaultExpanded?: boolean;
}

const LayerSection: React.FC<LayerSectionProps> = ({
  layer,
  onComponentClick,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const gridClass =
    layer.components.length === 1
      ? 'layer-grid layer-grid-1'
      : layer.components.length === 2
        ? 'layer-grid layer-grid-2'
        : 'layer-grid layer-grid-3';

  return (
    <div
      ref={ref}
      className={`layer animate-fade-in-up ${isVisible ? 'animate-visible' : ''}`}
      style={{
        '--layer-color': layer.color,
        '--delay': `${(layer.number - 1) * 0.15}s`,
      } as React.CSSProperties}
    >
      <button
        className="layer-header"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        <div className="layer-header-left">
          <span
            className="layer-badge"
            style={{ '--layer-color': layer.color } as React.CSSProperties}
          >
            {layer.number}
          </span>
          <div className="layer-titles">
            <h2 className="layer-title">{layer.title}</h2>
            <p className="layer-subtitle">{layer.subtitle}</p>
          </div>
        </div>
        <span className={`layer-chevron ${expanded ? 'layer-chevron-expanded' : ''}`}>
          ▶
        </span>
      </button>

      <div className={`layer-content ${expanded ? 'layer-content-expanded' : ''}`}>
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
      </div>
    </div>
  );
};

export default LayerSection;
