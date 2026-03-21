import React from 'react';
import type { Component } from '../data/layers';
import Tooltip from './Tooltip';

interface ComponentCardProps {
  component: Component;
  layerColor: string;
  onClick: (component: Component) => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, layerColor, onClick }) => {
  return (
    <div
      className="component-card"
      style={{ '--layer-color': layerColor } as React.CSSProperties}
      onClick={() => onClick(component)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(component);
        }
      }}
    >
      <div className="component-icon">{component.icon}</div>

      <Tooltip content={component.path}>
        <h3 className="component-name">{component.name}</h3>
      </Tooltip>

      <code className="component-path">{component.path}</code>

      <p className="component-description">{component.description}</p>

      {component.id === 'custom-agents' && (
        <div className="component-flow">
          <span className="flow-step">📋 Planning</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">🔨 Implementation</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">✅ Review</span>
        </div>
      )}

      {component.id === 'hooks' && (
        <ul className="component-lifecycle">
          <li className="lifecycle-event lifecycle-event-highlighted">preToolUse</li>
          <li className="lifecycle-event">postToolUse</li>
          <li className="lifecycle-event">errorOccurred</li>
        </ul>
      )}

      <div className="component-tags">
        {component.useCases.map((useCase) => (
          <span key={useCase} className="tag">
            {useCase}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ComponentCard;
