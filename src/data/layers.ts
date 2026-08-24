import type { Translations } from '../i18n/types';

export interface Component {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
  details: string;
  useCases: string[];
  docUrl: string;
  docLabel?: string;
  altDocUrl?: string;
  altDocLabel?: string;
  awesomeUrl?: string;
}

export interface Layer {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  components: Component[];
}

interface ComponentMeta {
  id: string;
  path: string;
  icon: string;
  docUrl: string;
  docLabel?: string;
  altDocUrl?: string;
  altDocLabel?: string;
  awesomeUrl?: string;
}

const COMPONENT_META: Record<string, ComponentMeta> = {
  instructions: {
    id: 'instructions',
    path: '.github/copilot-instructions.md\n.github/instructions/<name>.instructions.md',
    icon: '🧠',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/customization-cheat-sheet',
    awesomeUrl: 'https://awesome-copilot.github.com/instructions/',
  },
  'custom-agents': {
    id: 'custom-agents',
    path: '.github/agents/<name>.md',
    icon: '🤖',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/about-custom-agents',
    awesomeUrl: 'https://awesome-copilot.github.com/agents/',
  },
  skills: {
    id: 'skills',
    path: '.github/skills/<name>/SKILL.md\n.agents/skills/<name>/SKILL.md\n.claude/skills/<name>/SKILL.md',
    icon: '🧩',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-agent-skills',
    awesomeUrl: 'https://awesome-copilot.github.com/skills/',
  },
  hooks: {
    id: 'hooks',
    path: '.github/hooks/<name>.json',
    icon: '🔒',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/hooks-reference',
    altDocUrl: 'https://code.visualstudio.com/docs/agent-customization/hooks',
    altDocLabel: 'VS Code Hooks Guide',
  },
  'agentic-workflows': {
    id: 'agentic-workflows',
    path: '.github/workflows/<name>.md',
    icon: '⚙️',
    docUrl: 'https://github.github.com/gh-aw/',
    docLabel: 'gh-aw docs',
  },
  'copilot-setup-steps': {
    id: 'copilot-setup-steps',
    path: '.github/workflows/copilot-setup-steps.yml',
    icon: '🏗️',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment',
  },
  mcp: {
    id: 'mcp',
    path: 'Repository settings > Copilot > MCP servers\nmcp.json (IDE)',
    icon: '🔌',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers',
    altDocUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/context/mcp',
    altDocLabel: 'About MCP',
    awesomeUrl: 'https://github.com/mcp',
  },
  plugins: {
    id: 'plugins',
    path: 'plugin.json\nagents/\nskills/\nhooks.json\n.mcp.json\nlsp.json',
    icon: '📦',
    docUrl: 'https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/about-plugins',
    altDocUrl: 'https://agent-plugins.org/specification',
    altDocLabel: 'Agent Plugins 1.0 standard',
    awesomeUrl: 'https://awesome-copilot.github.com/plugins/',
  },
};

function buildComponent(id: string, t: Translations): Component {
  const meta = COMPONENT_META[id];
  const text = t.components[id];
  return {
    ...meta,
    path: text.path ?? meta.path,
    name: text.name,
    description: text.description,
    details: text.details,
    useCases: text.useCases,
    docLabel: text.docLabel ?? meta.docLabel,
    altDocLabel: text.altDocLabel ?? meta.altDocLabel,
  };
}

interface LayerDef {
  id: string;
  number: number;
  color: string;
  componentIds: string[];
}

const LAYER_DEFS: LayerDef[] = [
  { id: 'always-on-context', number: 1, color: '#58a6ff', componentIds: ['instructions'] },
  { id: 'on-demand-capabilities', number: 2, color: '#3fb950', componentIds: ['custom-agents', 'skills', 'mcp'] },
  { id: 'enforcement-automation', number: 3, color: '#d29922', componentIds: ['hooks', 'agentic-workflows', 'copilot-setup-steps'] },
  { id: 'distribution', number: 4, color: '#bc8cff', componentIds: ['plugins'] },
];

export function getLayers(t: Translations): Layer[] {
  return LAYER_DEFS.map((def) => ({
    id: def.id,
    number: def.number,
    color: def.color,
    title: t.layers[def.id].title,
    subtitle: t.layers[def.id].subtitle,
    components: def.componentIds.map((cid) => buildComponent(cid, t)),
  }));
}
