import React from 'react';
import type { Component } from '../data/layers';
import { useI18n } from '../i18n';
import type { Translations } from '../i18n';

interface ComponentCardProps {
  component: Component;
  layerColor: string;
  onClick: (component: Component) => void;
}

/* ── Per-component visualizations ── */

const InstructionsViz: React.FC<{ v: Translations['viz'] }> = ({ v }) => (
  <div className="viz viz-always-on">
    <span className="always-on-dot" />
    <span className="always-on-label">{v.alwaysActive}</span>
    <span>{v.loadsAutomatically}</span>
  </div>
);

const PromptFilesViz: React.FC = () => (
  <div className="viz viz-slash-commands">
    <span className="slash-cmd">/security-review</span>
    <span className="slash-cmd">/release-notes</span>
    <span className="slash-cmd">/changelog</span>
  </div>
);

const AgentFlowViz: React.FC<{ v: Translations['viz'] }> = ({ v }) => (
  <div className="viz viz-agent-flow">
    <span className="agent-step">
      <span className="agent-step-emoji">📋</span> {v.planning}
    </span>
    <span className="agent-step">
      <span className="agent-step-emoji">🔨</span> {v.implementation}
    </span>
    <span className="agent-step">
      <span className="agent-step-emoji">✅</span> {v.review}
    </span>
  </div>
);

const SkillsViz: React.FC<{ v: Translations['viz'] }> = ({ v }) => (
  <div className="viz viz-progressive">
    <div className="progressive-step">
      <span className="progressive-num">1</span>
      <span className="progressive-text">
        <em>description</em> {v.descriptionRead}
      </span>
    </div>
    <div className="progressive-step">
      <span className="progressive-num">2</span>
      <span className="progressive-text">{v.fullSkillInjected}</span>
    </div>
  </div>
);

const HooksViz: React.FC<{ v: Translations['viz'] }> = ({ v }) => (
  <div className="viz viz-lifecycle">
    <div className="lifecycle-item">sessionStart</div>
    <div className="lifecycle-item">userPromptSubmitted</div>
    <div className="lifecycle-item lifecycle-item--active">
      preToolUse
      <span className="lifecycle-badge">{v.approveDeny}</span>
    </div>
    <div className="lifecycle-item">postToolUse</div>
    <div className="lifecycle-item">errorOccurred</div>
    <div className="lifecycle-item">sessionEnd</div>
  </div>
);

const WorkflowsViz: React.FC<{ v: Translations['viz'] }> = ({ v }) => (
  <div className="viz viz-workflows-stack" aria-hidden="true">
    <div className="viz-terminal viz-terminal--file">
      <div className="terminal-bar">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--yellow" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-filename">triage.md</span>
      </div>
      <div className="terminal-line">
        <span className="terminal-keyword">---</span>
      </div>
      <div className="terminal-line">
        <span className="terminal-keyword">triggers: </span>
        <span className="terminal-cmd">issues.opened</span>
      </div>
      <div className="terminal-line">
        <span className="terminal-keyword">---</span>
      </div>
      <div className="terminal-line">
        <span className="terminal-comment">Label and assign new issues</span>
      </div>
    </div>
    <div className="workflows-arrow">↓</div>
    <div className="viz-terminal">
      <div className="terminal-line">
        <span className="terminal-prompt">$ </span>
        <span className="terminal-cmd">gh aw compile</span>
      </div>
      <span className="terminal-comment">{v.markdownToActions}</span>
    </div>
  </div>
);

const SetupStepsViz: React.FC = () => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-comment">{'# copilot-setup-steps.yml'}</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-keyword">- uses: </span>
      <span className="terminal-cmd">actions/setup-node@v4</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-keyword">- run: </span>
      <span className="terminal-cmd">npm ci</span>
    </div>
  </div>
);

const PluginsViz: React.FC<{ v: Translations['viz'] }> = ({ v }) => (
  <div className="viz viz-distribution">
    <span className="dist-source">📦 {v.pluginJson}</span>
    <span className="dist-arrow">→</span>
    <div className="dist-targets">
      <span className="dist-target">🏪 {v.marketplace}</span>
      <span className="dist-target">🔗 {v.gitRepo}</span>
      <span className="dist-target">📁 {v.localPath}</span>
    </div>
  </div>
);

/* ── Card ── */

const ComponentCard: React.FC<ComponentCardProps> = ({ component, layerColor, onClick }) => {
  const t = useI18n();
  const v = t.viz;

  const renderViz = () => {
    switch (component.id) {
      case 'instructions': return <InstructionsViz v={v} />;
      case 'prompt-files': return <PromptFilesViz />;
      case 'custom-agents': return <AgentFlowViz v={v} />;
      case 'skills': return <SkillsViz v={v} />;
      case 'hooks': return <HooksViz v={v} />;
      case 'agentic-workflows': return <WorkflowsViz v={v} />;
      case 'copilot-setup-steps': return <SetupStepsViz />;
      case 'plugins': return <PluginsViz v={v} />;
      default: return null;
    }
  };

  return (
    <div
      className="component-section"
      style={{ '--layer-color': layerColor } as React.CSSProperties}
      onClick={() => onClick(component)}
      role="button"
      tabIndex={0}
      aria-label={`${component.name} — ${component.description}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(component);
        }
      }}
    >
      <div className="component-section-header">
        <span className="component-section-icon" aria-hidden="true">{component.icon}</span>
        <div className="component-section-meta">
          <h3 className="component-section-name">{component.name}</h3>
          <code className="component-section-path">{component.path}</code>
        </div>
      </div>

      <p className="component-section-desc">{component.description}</p>

      {renderViz()}

      <div className="usecases">
        {component.useCases.map((uc) => (
          <span key={uc} className="usecase">
            {uc}
          </span>
        ))}
      </div>

      {component.awesomeUrl && (
        <a
          href={component.awesomeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="awesome-link"
          onClick={(e) => e.stopPropagation()}
        >
          ✨ Browse community examples
        </a>
      )}
    </div>
  );
};

export default ComponentCard;
