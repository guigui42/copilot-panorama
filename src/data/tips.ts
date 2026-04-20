import type { Translations } from '../i18n/types';
import type { Component, Layer } from './layers';

interface ComponentMeta {
  id: string;
  path: string;
  icon: string;
  docUrl: string;
  altDocUrl?: string;
  altDocLabel?: string;
}

const TIPS_COMPONENT_META: Record<string, ComponentMeta> = {
  /* ── Mechanics ── */
  'token-billing': {
    id: 'token-billing',
    path: 'Cost Drivers',
    icon: '🪙',
    docUrl: 'https://docs.github.com/en/copilot/managing-copilot/managing-usage-and-billing-for-copilot',
  },
  'agentic-cost': {
    id: 'agentic-cost',
    path: 'Agentic Workflows',
    icon: '🔗',
    docUrl: 'https://docs.github.com/en/copilot/managing-copilot/managing-usage-and-billing-for-copilot',
  },
  'context-discipline': {
    id: 'context-discipline',
    path: 'Workflow Design',
    icon: '🎯',
    docUrl: 'https://docs.github.com/en/copilot/managing-copilot/managing-usage-and-billing-for-copilot',
  },

  /* ── Prompting ── */
  'quality-over-quantity': {
    id: 'quality-over-quantity',
    path: 'Prompt Design',
    icon: '✨',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },
  guardrails: {
    id: 'guardrails',
    path: 'Agentic Bounds',
    icon: '🛡️',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },
  'fresh-threads': {
    id: 'fresh-threads',
    path: 'Session Hygiene',
    icon: '🧹',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },
  'concise-instructions': {
    id: 'concise-instructions',
    path: 'Instructions',
    icon: '📝',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',
  },
  'structure-for-reuse': {
    id: 'structure-for-reuse',
    path: 'Skills & Prompts',
    icon: '📦',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-agent-skills',
  },
  'concise-answers': {
    id: 'concise-answers',
    path: 'Output Control',
    icon: '✂️',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },

  /* ── Context ── */
  'scope-context': {
    id: 'scope-context',
    path: 'Context Strategy',
    icon: '🔬',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },
  'conditional-context': {
    id: 'conditional-context',
    path: 'Conditional Loading',
    icon: '🔀',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',
  },
  'targeted-refs': {
    id: 'targeted-refs',
    path: 'Chat References',
    icon: '📌',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide',
  },
  'apply-to-paths': {
    id: 'apply-to-paths',
    path: 'Path Scoping',
    icon: '📂',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',
  },
  'skills-mcp': {
    id: 'skills-mcp',
    path: 'On-Demand Tools',
    icon: '🧩',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-agent-skills',
  },
  'context-command': {
    id: 'context-command',
    path: 'CLI Context',
    icon: '💻',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli',
  },

  /* ── Caching ── */
  'reuse-context': {
    id: 'reuse-context',
    path: 'Context Reuse',
    icon: '♻️',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },
  'prefix-matching': {
    id: 'prefix-matching',
    path: 'Prompt Caching',
    icon: '⚡',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot',
  },

  /* ── Models ── */
  'choose-right-model': {
    id: 'choose-right-model',
    path: 'Model Selection',
    icon: '🎛️',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#changing-your-ai-model',
  },
  'high-effort-tasks': {
    id: 'high-effort-tasks',
    path: 'Complex Reasoning',
    icon: '🧠',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#changing-your-ai-model',
  },
  'low-effort-tasks': {
    id: 'low-effort-tasks',
    path: 'Quick Tasks',
    icon: '⚡',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#changing-your-ai-model',
  },
  'auto-mode': {
    id: 'auto-mode',
    path: 'Auto Selection',
    icon: '🤖',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#changing-your-ai-model',
  },

  /* ── Governance ── */
  'monitor-usage': {
    id: 'monitor-usage',
    path: 'Budget Controls',
    icon: '📊',
    docUrl: 'https://docs.github.com/en/copilot/managing-copilot/managing-usage-and-billing-for-copilot',
  },
  'chronicle-tips': {
    id: 'chronicle-tips',
    path: 'Workflow Insights',
    icon: '📈',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli',
  },
};

function buildTipComponent(id: string, t: Translations): Component {
  const meta = TIPS_COMPONENT_META[id];
  const text = t.tipsComponents[id];
  return {
    ...meta,
    name: text.name,
    description: text.description,
    details: text.details,
    useCases: text.useCases,
  };
}

interface LayerDef {
  id: string;
  number: number;
  color: string;
  componentIds: string[];
}

const TIPS_LAYER_DEFS: LayerDef[] = [
  { id: 'mechanics', number: 1, color: '#f0883e', componentIds: ['token-billing', 'agentic-cost', 'context-discipline'] },
  { id: 'prompting', number: 2, color: '#3fb950', componentIds: ['quality-over-quantity', 'guardrails', 'fresh-threads', 'concise-instructions', 'structure-for-reuse', 'concise-answers'] },
  { id: 'context', number: 3, color: '#58a6ff', componentIds: ['scope-context', 'conditional-context', 'targeted-refs', 'apply-to-paths', 'skills-mcp', 'context-command'] },
  { id: 'caching', number: 4, color: '#d2a8ff', componentIds: ['reuse-context', 'prefix-matching'] },
  { id: 'models', number: 5, color: '#f778ba', componentIds: ['choose-right-model', 'high-effort-tasks', 'low-effort-tasks', 'auto-mode'] },
  { id: 'governance', number: 6, color: '#8b949e', componentIds: ['monitor-usage', 'chronicle-tips'] },
];

export function getTipsLayers(t: Translations): Layer[] {
  return TIPS_LAYER_DEFS.map((def) => ({
    id: def.id,
    number: def.number,
    color: def.color,
    title: t.tipsLayers[def.id].title,
    subtitle: t.tipsLayers[def.id].subtitle,
    components: def.componentIds.map((cid) => buildTipComponent(cid, t)),
  }));
}
