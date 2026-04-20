import React from 'react';
import type { Component } from '../data/layers';
import { useI18n } from '../i18n';
import type { Translations } from '../i18n';

interface ComponentCardProps {
  component: Component;
  layerColor: string;
  onClick: (component: Component) => void;
}

/* ── Brand icons ── */

const ClaudeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#d97757" d="M234 800l235-132 4-11-4-7h-11l-39-2-134-4-116-5-113-6-28-6-27-35 3-18 24-16 34 3 76 5 113 8 82 5 122 13h19l3-8-6-5-5-5L346 496 220 412l-66-48-36-25-18-23-8-50 33-36 44 3 11 3 44 34 95 73 124 91 18 15 7-5 1-4-9-13-67-122-72-124-32-51-8-31c-3-13-5-23-5-36l37-50 21-7 49 7 21 18 31 70 50 111 77 151 23 44 12 42 4 12h8v-7l6-85 12-104 11-134 4-38 19-45 37-24 29 14 24 34-3 22-15 92-27 145-19 96 11 0 12-12 49-65 82-102 36-41 42-45 27-21 52 0 38 56-17 58-53 67-44 57-62 84-40 68 4 5 9-1 142-30 77-14 91-16 42 20 4 19-16 40-98 25-115 22-170 41-3 1 3 3 77 7 33 2 81 0 150 11 39 26 24 32-4 24-60 31-82-20-190-45-65-16-10 0 0 6 54 53 100 90 125 116 6 29-16 22-17-2-110-83-42-37-96-81-6 0 0 9 22 32 117 175 6 54-9 17-30 11-33-6-68-96-71-108-57-96-7 4-34 161-16 19-36 13-30-23-16-37 16-74 19-95 16-76 14-95 8-31 1-2-7 1-71 98-109 146-85 92-20 8-36-18 3-33 20-30 119-149 72-94 46-46v-8l-3 0L205 929l-56 8-24-23 3-37 11-12 95-65z"/>
  </svg>
);

const OpenAIIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z"/>
  </svg>
);

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

const WorkflowsViz: React.FC = () => (
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

/* ── Tools page visualizations ── */

const CopilotCliViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-prompt">$ </span>
      <span className="terminal-cmd">copilot</span>
      <span className="terminal-comment"> # {v.interactive}</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-prompt">$ </span>
      <span className="terminal-cmd">copilot -p "fix the bug"</span>
      <span className="terminal-comment"> # {v.programmatic}</span>
    </div>
  </div>
);

const AutocompleteViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-autocomplete" aria-hidden="true">
    <div className="autocomplete-line">
      <span className="autocomplete-typed">function sort(</span>
      <span className="autocomplete-ghost">{v.ghostText}</span>
    </div>
    <div className="autocomplete-hint">↹ {v.tabToAccept}</div>
  </div>
);

const AskViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-chat-keywords" aria-hidden="true">
    <span className="chat-keyword chat-keyword--participant">{v.chatParticipants}</span>
    <span className="chat-keyword chat-keyword--command">{v.slashCommands}</span>
    <span className="chat-keyword chat-keyword--variable">{v.chatVariables}</span>
  </div>
);

const AgentModeViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-agent-loop" aria-hidden="true">
    <span className="agent-loop-step">🔍 {v.analyze}</span>
    <span className="agent-loop-arrow">→</span>
    <span className="agent-loop-step">✏️ {v.edit}</span>
    <span className="agent-loop-arrow">→</span>
    <span className="agent-loop-step">▶ {v.run}</span>
    <span className="agent-loop-arrow">→</span>
    <span className="agent-loop-step">🔧 {v.fix}</span>
  </div>
);

const ThirdPartyAgentsIdeViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-session-picker" aria-hidden="true">
    <div className="session-option session-option--active"><ClaudeIcon className="brand-icon" /> Claude <span className="session-badge">{v.local}</span></div>
    <div className="session-option"><OpenAIIcon className="brand-icon" /> Codex <span className="session-badge">{v.local}</span></div>
    <div className="session-option"><ClaudeIcon className="brand-icon" /> Claude <span className="session-badge">{v.cloud}</span></div>
  </div>
);

const CodingAgentViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-agent-flow">
    <span className="agent-step">
      <span className="agent-step-emoji">📋</span> {v.issueAssigned}
    </span>
    <span className="agent-step">
      <span className="agent-step-emoji">🤖</span> {v.agentCodes}
    </span>
    <span className="agent-step">
      <span className="agent-step-emoji">🔒</span> {v.securityChecks}
    </span>
    <span className="agent-step">
      <span className="agent-step-emoji">📬</span> {v.prCreated}
    </span>
  </div>
);

const ReviewAgentViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-review-flow" aria-hidden="true">
    <div className="review-step">👤 {v.addReviewer}</div>
    <div className="review-step review-step--active">💬 {v.reviewComments}</div>
    <div className="review-step">✅ {v.suggestedFixes}</div>
  </div>
);

const ThirdPartyAgentsCloudViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-session-picker" aria-hidden="true">
    <div className="session-option session-option--active"><ClaudeIcon className="brand-icon" /> Anthropic Claude <span className="session-badge">{v.cloud}</span></div>
    <div className="session-option"><OpenAIIcon className="brand-icon" /> OpenAI Codex <span className="session-badge">{v.cloud}</span></div>
    <div className="session-hint">{v.selectAgent}</div>
  </div>
);

const CopilotChatCloudViz: React.FC<{ v: Translations['toolsViz'] }> = ({ v }) => (
  <div className="viz viz-chat-keywords" aria-hidden="true">
    <span className="chat-keyword chat-keyword--participant">{v.askAnything}</span>
    <span className="chat-keyword chat-keyword--variable">{v.repoContext}</span>
    <span className="chat-keyword chat-keyword--command">{v.webSearch}</span>
  </div>
);

/* ── Tips page visualizations ── */

const TokenBillingViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-token-meter" aria-hidden="true">
    <div className="token-bar"><span className="token-bar-fill token-bar-fill--input" style={{ width: '70%' }} /><span className="token-bar-label">{v.inputTokens}</span></div>
    <div className="token-bar"><span className="token-bar-fill token-bar-fill--output" style={{ width: '45%' }} /><span className="token-bar-label">{v.outputTokens}</span></div>
    <div className="token-bar"><span className="token-bar-fill token-bar-fill--cached" style={{ width: '30%' }} /><span className="token-bar-label">{v.cachedTokens}</span></div>
  </div>
);

const AgenticCostViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-agent-chain" aria-hidden="true">
    <span className="agent-chain-call">1</span>
    <span className="agent-chain-arrow">→</span>
    <span className="agent-chain-call">2</span>
    <span className="agent-chain-arrow">→</span>
    <span className="agent-chain-call">…</span>
    <span className="agent-chain-arrow">→</span>
    <span className="agent-chain-call agent-chain-call--many">N</span>
    <span className="agent-chain-label">{v.modelCalls}</span>
  </div>
);

const ContextDisciplineViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-cost-compare" aria-hidden="true">
    <div className="cost-item cost-item--expensive"><span className="cost-label">{v.broad}</span><span className="cost-bar" style={{ width: '90%' }} /></div>
    <div className="cost-item cost-item--cheap"><span className="cost-label">{v.narrow}</span><span className="cost-bar" style={{ width: '25%' }} /></div>
  </div>
);

const QualityOverQuantityViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-before-after" aria-hidden="true">
    <div className="ba-item ba-item--before"><span className="ba-label">✗ {v.before}</span><span className="ba-text">{v.verboseInstructions}</span></div>
    <div className="ba-item ba-item--after"><span className="ba-label">✓ {v.after}</span><span className="ba-text">{v.scopedContext}</span></div>
  </div>
);

const GuardrailsViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-comment"># {v.stopAfterTest}</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-keyword">max_attempts: </span>
      <span className="terminal-cmd">2</span>
    </div>
  </div>
);

const FreshThreadsViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-thread-lifecycle" aria-hidden="true">
    <span className="thread-step">💬 {v.chat}</span>
    <span className="thread-arrow">→</span>
    <span className="thread-step">📋 {v.shipToPr}</span>
    <span className="thread-arrow">→</span>
    <span className="thread-step thread-step--fresh">🆕 {v.freshThread}</span>
  </div>
);

const ConciseInstructionsViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-comment"># copilot-instructions.md</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-cmd">{v.principlesBrief}</span>
    </div>
  </div>
);

const StructureForReuseViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-reuse-flow" aria-hidden="true">
    <div className="reuse-item">📦 {v.heavy} → <strong>{v.skills}</strong></div>
    <div className="reuse-item">🔁 {v.repetitive} → <strong>{v.promptFiles}</strong></div>
  </div>
);

const ConciseAnswersViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-cmd">"{v.minimalDiff}"</span>
    </div>
  </div>
);

const ScopeContextViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-scope-compare" aria-hidden="true">
    <span className="scope-option scope-option--narrow">🔬 #file <span className="scope-badge">{v.narrow}</span></span>
    <span className="scope-option scope-option--broad">🌐 #codebase <span className="scope-badge">{v.broad}</span></span>
  </div>
);

const ConditionalContextViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-reuse-flow" aria-hidden="true">
    <div className="reuse-item">🔴 {v.alwaysOn} → <strong>{v.costly}</strong></div>
    <div className="reuse-item">🟢 {v.onDemand} → <strong>{v.efficient}</strong></div>
  </div>
);

const TargetedRefsViz: React.FC = () => (
  <div className="viz viz-chat-keywords" aria-hidden="true">
    <span className="chat-keyword chat-keyword--variable">#file</span>
    <span className="chat-keyword chat-keyword--variable">#selection</span>
    <span className="chat-keyword chat-keyword--participant">#codebase</span>
  </div>
);

const ApplyToPathsViz: React.FC = () => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-keyword">applyTo: </span>
      <span className="terminal-cmd">"**/*.test.ts"</span>
    </div>
  </div>
);

const SkillsMcpViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-progressive" aria-hidden="true">
    <div className="progressive-step">
      <span className="progressive-num">1</span>
      <span className="progressive-text">{v.modelReads} <em>{v.descriptionLabel}</em></span>
    </div>
    <div className="progressive-step">
      <span className="progressive-num">2</span>
      <span className="progressive-text">{v.loadsIfRelevant}</span>
    </div>
  </div>
);

const ContextCommandViz: React.FC = () => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-prompt">$ </span>
      <span className="terminal-cmd">/context</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-comment">█████████░ 72% used</span>
    </div>
  </div>
);

const ReuseContextViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-reuse-flow" aria-hidden="true">
    <div className="reuse-item">📋 {v.loadOnce}</div>
    <div className="reuse-item">♻️ {v.reuseInQueries}</div>
  </div>
);

const PrefixMatchingViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-cache-indicator" aria-hidden="true">
    <div className="cache-row cache-row--hit"><span className="cache-icon">⚡</span> {v.cacheHit} <span className="cache-badge cache-badge--hit">{v.tokenPrefixMatch}</span></div>
    <div className="cache-row cache-row--miss"><span className="cache-icon">🔄</span> {v.cacheMiss} <span className="cache-badge cache-badge--miss">{v.prefixDiffers}</span></div>
  </div>
);

const ModelPickerViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-model-picker" aria-hidden="true">
    <div className="model-option model-option--premium">🧠 {v.high} <span className="model-cost">$$$</span></div>
    <div className="model-option model-option--standard">⚙️ {v.standard} <span className="model-cost">$$</span></div>
    <div className="model-option model-option--mini">⚡ {v.low} <span className="model-cost">$</span></div>
  </div>
);

const HighEffortViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-chat-keywords" aria-hidden="true">
    <span className="chat-keyword chat-keyword--participant">{v.architecture}</span>
    <span className="chat-keyword chat-keyword--command">{v.debugging}</span>
    <span className="chat-keyword chat-keyword--variable">{v.agentic}</span>
  </div>
);

const LowEffortViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-chat-keywords" aria-hidden="true">
    <span className="chat-keyword chat-keyword--variable">{v.summarize}</span>
    <span className="chat-keyword chat-keyword--variable">{v.qa}</span>
    <span className="chat-keyword chat-keyword--variable">{v.refactorLabel}</span>
  </div>
);

const AutoModeViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-auto-route" aria-hidden="true">
    <span className="auto-badge">{v.auto}</span>
    <span className="auto-arrow">→</span>
    <span className="auto-target auto-target--simple">{v.simpleToMini}</span>
    <span className="auto-target auto-target--complex">{v.complexToPremium}</span>
  </div>
);

const MonitorUsageViz: React.FC<{ v: Translations['tipsViz'] }> = ({ v }) => (
  <div className="viz viz-budget-bars" aria-hidden="true">
    <div className="budget-row"><span className="budget-label">{v.icEng}</span><span className="budget-bar"><span className="budget-fill" style={{ width: '40%' }} /></span></div>
    <div className="budget-row"><span className="budget-label">{v.powerUser}</span><span className="budget-bar"><span className="budget-fill" style={{ width: '75%' }} /></span></div>
    <div className="budget-row"><span className="budget-label">{v.ciAgent}</span><span className="budget-bar"><span className="budget-fill budget-fill--warn" style={{ width: '95%' }} /></span></div>
  </div>
);

const ChronicleTipsViz: React.FC = () => (
  <div className="viz viz-terminal" aria-hidden="true">
    <div className="terminal-bar">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--yellow" />
      <span className="terminal-dot terminal-dot--green" />
    </div>
    <div className="terminal-line">
      <span className="terminal-prompt">$ </span>
      <span className="terminal-cmd">/chronicle improve</span>
    </div>
    <div className="terminal-line">
      <span className="terminal-prompt">$ </span>
      <span className="terminal-cmd">/chronicle tips</span>
    </div>
  </div>
);

/* ── Card ── */

const ComponentCard: React.FC<ComponentCardProps> = ({ component, layerColor, onClick }) => {
  const t = useI18n();
  const v = t.viz;

  const renderViz = () => {
    const tv = t.toolsViz;
    const tip = t.tipsViz;
    switch (component.id) {
      case 'instructions': return <InstructionsViz v={v} />;
      case 'prompt-files': return <PromptFilesViz />;
      case 'custom-agents': return <AgentFlowViz v={v} />;
      case 'skills': return <SkillsViz v={v} />;
      case 'hooks': return <HooksViz v={v} />;
      case 'agentic-workflows': return <WorkflowsViz />;
      case 'copilot-setup-steps': return <SetupStepsViz />;
      case 'plugins': return <PluginsViz v={v} />;
      /* Tools page */
      case 'copilot-cli': return <CopilotCliViz v={tv} />;
      case 'autocomplete': return <AutocompleteViz v={tv} />;
      case 'ask': return <AskViz v={tv} />;
      case 'agent-mode': return <AgentModeViz v={tv} />;
      case 'third-party-agents-ide': return <ThirdPartyAgentsIdeViz v={tv} />;
      case 'coding-agent': return <CodingAgentViz v={tv} />;
      case 'review-agent': return <ReviewAgentViz v={tv} />;
      case 'third-party-agents-cloud': return <ThirdPartyAgentsCloudViz v={tv} />;
      case 'copilot-chat-cloud': return <CopilotChatCloudViz v={tv} />;
      /* Tips page */
      case 'token-billing': return <TokenBillingViz v={tip} />;
      case 'agentic-cost': return <AgenticCostViz v={tip} />;
      case 'context-discipline': return <ContextDisciplineViz v={tip} />;
      case 'quality-over-quantity': return <QualityOverQuantityViz v={tip} />;
      case 'guardrails': return <GuardrailsViz v={tip} />;
      case 'fresh-threads': return <FreshThreadsViz v={tip} />;
      case 'concise-instructions': return <ConciseInstructionsViz v={tip} />;
      case 'structure-for-reuse': return <StructureForReuseViz v={tip} />;
      case 'concise-answers': return <ConciseAnswersViz v={tip} />;
      case 'scope-context': return <ScopeContextViz v={tip} />;
      case 'conditional-context': return <ConditionalContextViz v={tip} />;
      case 'targeted-refs': return <TargetedRefsViz />;
      case 'apply-to-paths': return <ApplyToPathsViz />;
      case 'skills-mcp': return <SkillsMcpViz v={tip} />;
      case 'context-command': return <ContextCommandViz />;
      case 'reuse-context': return <ReuseContextViz v={tip} />;
      case 'prefix-matching': return <PrefixMatchingViz v={tip} />;
      case 'choose-right-model': return <ModelPickerViz v={tip} />;
      case 'high-effort-tasks': return <HighEffortViz v={tip} />;
      case 'low-effort-tasks': return <LowEffortViz v={tip} />;
      case 'auto-mode': return <AutoModeViz v={tip} />;
      case 'monitor-usage': return <MonitorUsageViz v={tip} />;
      case 'chronicle-tips': return <ChronicleTipsViz />;
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
      <div className="component-section-body">
        <div className="component-section-header">
          <span className="component-section-icon" aria-hidden="true">{component.icon}</span>
          <div className="component-section-meta">
            <h3 className="component-section-name">{component.name}</h3>
            <code className="component-section-path">{component.path}</code>
          </div>
        </div>

        <p className="component-section-desc">{component.description}</p>

        {renderViz()}
      </div>

      {component.useCases.length > 0 && (
        <div className="usecases">
          <span className="usecases-label">{t.ui.useCasesLabel}</span>
          {component.useCases.map((uc) => (
            <span key={uc} className="usecase">
              {uc}
            </span>
          ))}
        </div>
      )}

      {component.awesomeUrl && (
        <a
          href={component.awesomeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="awesome-link"
          onClick={(e) => e.stopPropagation()}
        >
          ✨ Browse community examples
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
            <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" />
            <path d="M10 2h4v4" />
            <path d="M14 2 7.5 8.5" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ComponentCard;
