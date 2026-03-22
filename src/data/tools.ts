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

const TOOLS_COMPONENT_META: Record<string, ComponentMeta> = {
  'copilot-cli': {
    id: 'copilot-cli',
    path: 'copilot',
    icon: '💻',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli',
    altDocUrl: 'https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line',
    altDocLabel: 'CLI How-To',
  },
  autocomplete: {
    id: 'autocomplete',
    path: 'IDE inline suggestions',
    icon: '✨',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot',
  },
  ask: {
    id: 'ask',
    path: 'Copilot Chat',
    icon: '💬',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide',
  },
  'agent-mode': {
    id: 'agent-mode',
    path: 'Agent Mode in IDE',
    icon: '🤖',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#agent-mode',
    altDocUrl: 'https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features#agent-mode',
    altDocLabel: 'Features Overview',
  },
  'third-party-agents-ide': {
    id: 'third-party-agents-ide',
    path: 'VS Code 3rd-Party Agents',
    icon: '🧠',
    docUrl: 'https://code.visualstudio.com/docs/copilot/agents/third-party-agents',
    altDocUrl: 'https://code.visualstudio.com/docs/copilot/agents/overview',
    altDocLabel: 'Agents Overview',
  },
  'copilot-chat-cloud': {
    id: 'copilot-chat-cloud',
    path: 'GitHub.com & Mobile',
    icon: '💬',
    docUrl: 'https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github',
    altDocUrl: 'https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features#copilot-chat',
    altDocLabel: 'Features Overview',
  },
  'coding-agent': {
    id: 'coding-agent',
    path: 'GitHub Actions',
    icon: '🔧',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent',
    altDocUrl: 'https://docs.github.com/en/copilot/using-github-copilot/coding-agent',
    altDocLabel: 'How-To Guide',
  },
  'review-agent': {
    id: 'review-agent',
    path: 'Pull Requests',
    icon: '👀',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/code-review',
    altDocUrl: 'https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review',
    altDocLabel: 'Using Code Review',
  },
  'third-party-agents-cloud': {
    id: 'third-party-agents-cloud',
    path: 'GitHub Platform',
    icon: '🔌',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents',
    altDocUrl: 'https://docs.github.com/en/copilot/concepts/agents/anthropic-claude',
    altDocLabel: 'Anthropic Claude',
  },
};

function buildToolComponent(id: string, t: Translations): Component {
  const meta = TOOLS_COMPONENT_META[id];
  const text = t.toolsComponents[id];
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

const TOOLS_LAYER_DEFS: LayerDef[] = [
  { id: 'terminal', number: 1, color: '#8b949e', componentIds: ['copilot-cli'] },
  { id: 'ide', number: 2, color: '#3fb950', componentIds: ['autocomplete', 'ask', 'agent-mode', 'third-party-agents-ide'] },
  { id: 'cloud', number: 3, color: '#58a6ff', componentIds: ['copilot-chat-cloud', 'coding-agent', 'review-agent', 'third-party-agents-cloud'] },
];

export function getToolsLayers(t: Translations): Layer[] {
  return TOOLS_LAYER_DEFS.map((def) => ({
    id: def.id,
    number: def.number,
    color: def.color,
    title: t.toolsLayers[def.id].title,
    subtitle: t.toolsLayers[def.id].subtitle,
    components: def.componentIds.map((cid) => buildToolComponent(cid, t)),
  }));
}
