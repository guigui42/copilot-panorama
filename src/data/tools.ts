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

const TOOLS_COMPONENT_META: Record<string, ComponentMeta> = {
  'copilot-cli': {
    id: 'copilot-cli',
    path: 'copilot',
    icon: '💻',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/copilot-cli/about-copilot-cli',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/about-cloud-and-local-sandboxes',
    altDocLabel: 'CLI How-To',
  },
  'copilot-app': {
    id: 'copilot-app',
    path: 'GitHub Copilot App',
    icon: '🖥️',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/github-copilot-app',
    altDocUrl: 'https://github.com/github/app',
    altDocLabel: 'App Repository',
  },
  autocomplete: {
    id: 'autocomplete',
    path: 'IDE inline suggestions',
    icon: '✨',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions',
  },
  ask: {
    id: 'ask',
    path: 'Copilot Chat',
    icon: '💬',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/chat-with-copilot/chat-in-ide',
  },
  'agent-mode': {
    id: 'agent-mode',
    path: 'Agent Mode in IDE',
    icon: '🤖',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/get-started/features',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/get-started/features',
    altDocLabel: 'Features Overview',
  },
  'third-party-agents-ide': {
    id: 'third-party-agents-ide',
    path: 'VS Code 3rd-Party Agents',
    icon: '🧠',
    docUrl: 'https://code.visualstudio.com/docs/agents/run/agent-harnesses',
    altDocUrl: 'https://code.visualstudio.com/docs/agents/overview',
    altDocLabel: 'Agents Overview',
  },
  'copilot-chat-cloud': {
    id: 'copilot-chat-cloud',
    path: 'GitHub.com & Mobile',
    icon: '💬',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/chat',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github',
    altDocLabel: 'Features Overview',
  },
  'coding-agent': {
    id: 'coding-agent',
    path: 'GitHub Actions',
    icon: '🔧',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/about-cloud-agent',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/cloud-agent',
    altDocLabel: 'How-To Guide',
  },
  'review-agent': {
    id: 'review-agent',
    path: 'Pull Requests',
    icon: '👀',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/code-review',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review',
    altDocLabel: 'Using Code Review',
  },
  'third-party-agents-cloud': {
    id: 'third-party-agents-cloud',
    path: 'GitHub Platform',
    icon: '🔌',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/about-third-party-coding-agents',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/anthropic-claude',
    altDocLabel: 'Anthropic Claude',
  },
  'slack-teams': {
    id: 'slack-teams',
    path: 'Slack\nMicrosoft Teams',
    icon: '🤝',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack',
    docLabel: 'Slack integration',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams',
    altDocLabel: 'Teams integration',
  },
};

function buildToolComponent(id: string, t: Translations): Component {
  const meta = TOOLS_COMPONENT_META[id];
  const text = t.toolsComponents[id];
  return {
    ...meta,
    path: text.path ?? meta.path,
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
  { id: 'ide', number: 1, color: '#3fb950', componentIds: ['autocomplete', 'ask', 'agent-mode', 'third-party-agents-ide'] },
  { id: 'standalone-apps', number: 2, color: '#8b949e', componentIds: ['copilot-cli', 'copilot-app'] },
  { id: 'cloud', number: 3, color: '#58a6ff', componentIds: ['copilot-chat-cloud', 'coding-agent', 'review-agent', 'third-party-agents-cloud', 'slack-teams'] },
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
