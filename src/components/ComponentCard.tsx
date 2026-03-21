import React from 'react';
import type { Component } from '../data/layers';

interface ComponentCardProps {
  component: Component;
  layerColor: string;
  onClick: (component: Component) => void;
}

/* ── Per-component visualizations ── */

const InstructionsViz: React.FC = () => (
  <div className="viz viz-always-on">
    <span className="always-on-dot" />
    <span className="always-on-label">Always active</span>
    <span>— loads into every conversation automatically</span>
  </div>
);

const PromptFilesViz: React.FC = () => (
  <div className="viz viz-slash-commands">
    <span className="slash-cmd">/security-review</span>
    <span className="slash-cmd">/release-notes</span>
    <span className="slash-cmd">/changelog</span>
  </div>
);

const AgentFlowViz: React.FC = () => (
  <div className="viz viz-agent-flow">
    <span className="agent-step">
      <span className="agent-step-emoji">📋</span> Planning
    </span>
    <span className="agent-arrow">→</span>
    <span className="agent-step">
      <span className="agent-step-emoji">🔨</span> Implementation
    </span>
    <span className="agent-arrow">→</span>
    <span className="agent-step">
      <span className="agent-step-emoji">✅</span> Review
    </span>
  </div>
);

const SkillsViz: React.FC = () => (
  <div className="viz viz-progressive">
    <div className="progressive-step">
      <span className="progressive-num">1</span>
      <span className="progressive-text">
        Description <em>indexed</em> from SKILL.md frontmatter
      </span>
    </div>
    <div className="progressive-step">
      <span className="progressive-num">2</span>
      <span className="progressive-text">
        Full body <em>injected</em> only when prompt matches
      </span>
    </div>
  </div>
);

const HooksViz: React.FC = () => (
  <div className="viz viz-lifecycle">
    <div className="lifecycle-item lifecycle-item--active">
      preToolUse
      <span className="lifecycle-badge">approve / deny</span>
    </div>
    <div className="lifecycle-item">postToolUse</div>
    <div className="lifecycle-item">errorOccurred</div>
  </div>
);

const WorkflowsViz: React.FC = () => (
  <div className="viz viz-terminal">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-prompt">$ </span>
      <span className="terminal-cmd">gh aw</span>
    </div>
    <span className="terminal-comment"># Markdown → GitHub Actions YAML</span>
  </div>
);

const PluginsViz: React.FC = () => (
  <div className="viz viz-distribution">
    <span className="dist-source">📦 Your Plugin</span>
    <span className="dist-arrow">→</span>
    <div className="dist-targets">
      <span className="dist-target">🏢 Your Repo</span>
      <span className="dist-target">🏪 Marketplace</span>
    </div>
  </div>
);

const VISUALIZATIONS: Record<string, React.FC> = {
  instructions: InstructionsViz,
  'prompt-files': PromptFilesViz,
  'custom-agents': AgentFlowViz,
  skills: SkillsViz,
  hooks: HooksViz,
  'agentic-workflows': WorkflowsViz,
  plugins: PluginsViz,
};

/* ── Card ── */

const ComponentCard: React.FC<ComponentCardProps> = ({ component, layerColor, onClick }) => {
  const Viz = VISUALIZATIONS[component.id];

  return (
    <div
      className="component-section"
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
      <div className="component-section-header">
        <span className="component-section-icon">{component.icon}</span>
        <div className="component-section-meta">
          <h3 className="component-section-name">{component.name}</h3>
          <code className="component-section-path">{component.path}</code>
        </div>
      </div>

      <p className="component-section-desc">{component.description}</p>

      {Viz && <Viz />}

      <div className="usecases">
        {component.useCases.map((uc) => (
          <span key={uc} className="usecase">
            {uc}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ComponentCard;
