import type { Translations } from '../i18n/types';
import type { Component, Layer } from './layers';

interface ComponentMeta {
  id: string;
  path: string;
  icon: string;
  docUrl: string;
  docLabel?: string;
  altDocUrl?: string;
  altDocLabel?: string;
}

const OPT = 'https://docs.github.com/en/enterprise-cloud@latest/copilot/tutorials/optimize-ai-usage';
const OPT_LABEL = 'Optimize AI usage';

const TIPS_COMPONENT_META: Record<string, ComponentMeta> = {
  /* ── Mechanics ── */
  'token-billing': {
    id: 'token-billing',
    path: 'Cost Drivers',
    icon: '🪙',
    docUrl: `${OPT}#4-preserve-the-cache`,
    docLabel: OPT_LABEL,
  },
  'agentic-cost': {
    id: 'agentic-cost',
    path: 'Agentic Workflows',
    icon: '🔗',
    docUrl: `${OPT}#5-research-plan-then-implement`,
    docLabel: OPT_LABEL,
  },
  'context-discipline': {
    id: 'context-discipline',
    path: 'Workflow Design',
    icon: '🎯',
    docUrl: `${OPT}#3-keep-your-context-lean`,
    docLabel: OPT_LABEL,
  },
  'compound-errors': {
    id: 'compound-errors',
    path: 'Quality Math',
    icon: '📉',
    docUrl: `${OPT}#7-add-deterministic-guardrails`,
    docLabel: OPT_LABEL,
  },

  /* ── Prompting ── */
  'quality-over-quantity': {
    id: 'quality-over-quantity',
    path: 'Prompt Design',
    icon: '✨',
    docUrl: `${OPT}#2-provide-clear-guidance-in-your-prompts`,
    docLabel: OPT_LABEL,
  },
  'fresh-threads': {
    id: 'fresh-threads',
    path: 'Session Hygiene',
    icon: '🧹',
    docUrl: `${OPT}#start-a-new-conversation-when-you-switch-problems`,
    docLabel: OPT_LABEL,
  },
  'prompt-anatomy': {
    id: 'prompt-anatomy',
    path: 'Prompt Anatomy',
    icon: '🎯',
    docUrl: `${OPT}#2-provide-clear-guidance-in-your-prompts`,
    docLabel: OPT_LABEL,
  },
  'concise-instructions': {
    id: 'concise-instructions',
    path: 'Instructions',
    icon: '📝',
    docUrl: `${OPT}#keep-the-copilot-instructionsmd-file-specific-and-grounded`,
    docLabel: OPT_LABEL,
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
    docUrl: `${OPT}#2-provide-clear-guidance-in-your-prompts`,
    docLabel: OPT_LABEL,
  },
  /* ── Context ── */
  'scope-context': {
    id: 'scope-context',
    path: 'Context Strategy',
    icon: '🔬',
    docUrl: `${OPT}#3-keep-your-context-lean`,
    docLabel: OPT_LABEL,
  },
  'conditional-context': {
    id: 'conditional-context',
    path: 'Conditional Loading',
    icon: '🔀',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',
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
    docUrl: `${OPT}#bring-in-only-the-tools-you-need`,
    docLabel: OPT_LABEL,
  },
  'context-command': {
    id: 'context-command',
    path: 'CLI Context',
    icon: '💻',
    docUrl: `${OPT}#compact-long-copilot-cli-sessions-that-you-want-to-continue`,
    docLabel: OPT_LABEL,
  },
  'project-map': {
    id: 'project-map',
    path: 'Project Map',
    icon: '🗺️',
    docUrl: `${OPT}#give-copilot-a-map-of-your-project`,
    docLabel: OPT_LABEL,
  },
  'context-rot': {
    id: 'context-rot',
    path: 'Context Decay',
    icon: '🥀',
    docUrl: 'https://www.producttalk.org/context-rot/',
    docLabel: 'Product Talk article',
  },
  'lost-in-middle': {
    id: 'lost-in-middle',
    path: 'Position Bias',
    icon: '🕳️',
    docUrl: 'https://arxiv.org/abs/2307.03172',
    docLabel: 'arXiv paper',
  },
  'think-in-code': {
    id: 'think-in-code',
    path: 'Scripts Over AI',
    icon: '🔧',
    docUrl: '',
  },

  /* ── Workflow Design ── */
  'research-plan-implement': {
    id: 'research-plan-implement',
    path: 'Divide & Conquer',
    icon: '🗺️',
    docUrl: `${OPT}#5-research-plan-then-implement`,
    docLabel: OPT_LABEL,
  },
  'deterministic-guardrails': {
    id: 'deterministic-guardrails',
    path: 'Test-Driven Loops',
    icon: '✅',
    docUrl: `${OPT}#7-add-deterministic-guardrails`,
    docLabel: OPT_LABEL,
  },

  /* ── Caching ── */
  'reuse-context': {
    id: 'reuse-context',
    path: 'Context Reuse',
    icon: '♻️',
    docUrl: `${OPT}#4-preserve-the-cache`,
    docLabel: OPT_LABEL,
  },
  'prefix-matching': {
    id: 'prefix-matching',
    path: 'Prompt Caching',
    icon: '⚡',
    docUrl: `${OPT}#4-preserve-the-cache`,
    docLabel: OPT_LABEL,
  },
  'preserve-cache': {
    id: 'preserve-cache',
    path: 'Cache Invalidation',
    icon: '🧊',
    docUrl: `${OPT}#4-preserve-the-cache`,
    docLabel: OPT_LABEL,
  },
  'trim-shell-outputs': {
    id: 'trim-shell-outputs',
    path: 'Shell Hygiene',
    icon: '🪒',
    docUrl: 'https://github.com/edouard-claude/snip',
    docLabel: 'Snip',
    altDocUrl: 'https://github.com/juliusbrussee/caveman',
    altDocLabel: 'Caveman skill',
  },
  'collapse-tool-calls': {
    id: 'collapse-tool-calls',
    path: 'Batched Tools',
    icon: '🧺',
    docUrl: 'https://github.com/jsturtevant/copilot-codeact-plugin',
    docLabel: 'CodeAct plugin',
  },

  /* ── Models ── */
  'choose-right-model': {
    id: 'choose-right-model',
    path: 'Model Selection',
    icon: '🎛️',
    docUrl: `${OPT}#select-the-right-model`,
    docLabel: OPT_LABEL,
  },
  'high-effort-tasks': {
    id: 'high-effort-tasks',
    path: 'Complex Reasoning',
    icon: '🧠',
    docUrl: `${OPT}#configure-the-reasoning-level-of-the-model`,
    docLabel: OPT_LABEL,
  },
  'low-effort-tasks': {
    id: 'low-effort-tasks',
    path: 'Quick Tasks',
    icon: '⚡',
    docUrl: `${OPT}#select-the-right-model`,
    docLabel: OPT_LABEL,
  },
  'auto-mode': {
    id: 'auto-mode',
    path: 'Auto Selection',
    icon: '🤖',
    docUrl: `${OPT}#use-copilot-auto-model-selection-as-your-default`,
    docLabel: OPT_LABEL,
  },
  'cheaper-subagents': {
    id: 'cheaper-subagents',
    path: 'Subagent Models',
    icon: '🐝',
    docUrl: `${OPT}#use-cheaper-models-for-subagents`,
    docLabel: OPT_LABEL,
  },

  /* ── Governance ── */
  'monitor-usage': {
    id: 'monitor-usage',
    path: 'Budget Controls',
    icon: '📊',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/manage-and-track-spending/monitor-ai-usage',
    docLabel: 'AI usage dashboard',
  },
  'chronicle-insights': {
    id: 'chronicle-insights',
    path: 'Learn From Sessions',
    icon: '📓',
    docUrl: `${OPT}#6-utilize-learnings-to-be-more-efficient-at-every-turn`,
    docLabel: OPT_LABEL,
  },
  'apply-architecture': {
    id: 'apply-architecture',
    path: 'Agent-Friendly Code',
    icon: '🏛️',
    docUrl: '',
  },
  'iterate-configs': {
    id: 'iterate-configs',
    path: 'Misses → Incidents',
    icon: '🔁',
    docUrl: `${OPT}#6-utilize-learnings-to-be-more-efficient-at-every-turn`,
    docLabel: OPT_LABEL,
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
    useCases: [],
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
  { id: 'pitfalls', number: 2, color: '#f85149', componentIds: ['compound-errors', 'context-rot', 'lost-in-middle'] },
  { id: 'prompting', number: 3, color: '#3fb950', componentIds: ['quality-over-quantity', 'prompt-anatomy', 'fresh-threads', 'concise-instructions', 'structure-for-reuse', 'concise-answers'] },
  { id: 'context', number: 4, color: '#58a6ff', componentIds: ['scope-context', 'conditional-context', 'apply-to-paths', 'skills-mcp', 'context-command', 'project-map', 'trim-shell-outputs', 'think-in-code'] },
  { id: 'workflow-design', number: 5, color: '#a371f7', componentIds: ['research-plan-implement', 'deterministic-guardrails', 'apply-architecture', 'iterate-configs'] },
  { id: 'caching', number: 6, color: '#d2a8ff', componentIds: ['reuse-context', 'prefix-matching', 'preserve-cache', 'collapse-tool-calls'] },
  { id: 'models', number: 7, color: '#f778ba', componentIds: ['choose-right-model', 'high-effort-tasks', 'low-effort-tasks', 'auto-mode', 'cheaper-subagents'] },
  { id: 'governance', number: 8, color: '#8b949e', componentIds: ['monitor-usage', 'chronicle-insights'] },
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
