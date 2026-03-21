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
  altDocUrl?: string;
  altDocLabel?: string;
  awesomeUrl?: string;
}

const COMPONENT_META: Record<string, ComponentMeta> = {
  instructions: {
    id: 'instructions',
    path: '.github/copilot-instructions.md + .github/instructions/*.instructions.md',
    icon: '🧠',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=vscode',
    awesomeUrl: 'https://awesome-copilot.github.com/instructions/',
  },
  'prompt-files': {
    id: 'prompt-files',
    path: '.github/prompts/*.prompt.md',
    icon: '📋',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=vscode&search-overlay-input=copilot+custom+prompts&search-overlay-ask-ai=true#enabling-and-using-prompt-files',
    awesomeUrl: 'https://awesome-copilot.github.com/skills/',
  },
  'custom-agents': {
    id: 'custom-agents',
    path: '.github/agents/*.agent.md',
    icon: '🤖',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents',
    awesomeUrl: 'https://awesome-copilot.github.com/agents/',
  },
  skills: {
    id: 'skills',
    path: '.github/skills/<name>/SKILL.md',
    icon: '🧩',
    docUrl: 'https://docs.github.com/en/copilot/concepts/agents/about-agent-skills',
    awesomeUrl: 'https://awesome-copilot.github.com/skills/',
  },
  hooks: {
    id: 'hooks',
    path: '.github/hooks/*.json',
    icon: '🔒',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks',
    altDocUrl: 'https://code.visualstudio.com/docs/copilot/customization/hooks',
    altDocLabel: 'VS Code Hooks Guide',
    awesomeUrl: 'https://awesome-copilot.github.com/hooks/',
  },
  'agentic-workflows': {
    id: 'agentic-workflows',
    path: '.github/workflows/ (Markdown .md sources)',
    icon: '⚙️',
    docUrl: 'https://github.github.com/gh-aw/',
    awesomeUrl: 'https://awesome-copilot.github.com/workflows/',
  },
  plugins: {
    id: 'plugins',
    path: '.github/plugin/plugin.json',
    icon: '📦',
    docUrl: 'https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing',
    awesomeUrl: 'https://awesome-copilot.github.com/plugins/',
  },
};

function buildComponent(id: string, t: Translations): Component {
  const meta = COMPONENT_META[id];
  const text = t.components[id];
  return { ...meta, name: text.name, description: text.description, details: text.details, useCases: text.useCases };
}

interface LayerDef {
  id: string;
  number: number;
  color: string;
  componentIds: string[];
}

const LAYER_DEFS: LayerDef[] = [
  { id: 'always-on-context', number: 1, color: '#58a6ff', componentIds: ['instructions'] },
  { id: 'on-demand-capabilities', number: 2, color: '#3fb950', componentIds: ['prompt-files', 'custom-agents', 'skills'] },
  { id: 'enforcement-automation', number: 3, color: '#d29922', componentIds: ['hooks', 'agentic-workflows'] },
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
