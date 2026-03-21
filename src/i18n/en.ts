import type { Translations } from './types';

export const en: Translations = {
  locale: 'en',
  seo: {
    title: '.github/ composable stack — Copilot Composable System',
    description: 'Interactive visual guide to the GitHub Copilot composable system — explore the 4 layers: Always-On Context, On-Demand Capabilities, Enforcement & Automation, and Distribution.',
  },
  ui: {
    heroTitle: 'composable stack',
    layerPrefix: 'LAYER',
    insightsTitle: 'How the system actually works',
    insightsSubtitle: 'Key architectural insights most teams miss',
    detailsLabel: 'Details',
    useCasesLabel: 'Use Cases',
    documentationLabel: 'Documentation',
    footerBuiltFor: 'Built for GitHub Copilot users',
    footerDocsLink: 'Full docs on the composable system',
  },
  viz: {
    alwaysActive: 'Always active',
    loadsAutomatically: '— loads into every conversation automatically',
    planning: 'Planning',
    implementation: 'Implementation',
    review: 'Review',
    descriptionRead: 'description read from SKILL.md frontmatter',
    fullSkillInjected: 'Full SKILL.md injected into context when relevant',
    approveDeny: 'approve / deny',
    markdownToActions: '# Markdown → GitHub Actions YAML',
    pluginJson: 'plugin.json',
    marketplace: 'Marketplace',
    gitRepo: 'Git Repo',
    localPath: 'Local Path',
  },
  layers: {
    'always-on-context': {
      title: 'Always-On Context',
      subtitle: 'Passive memory loaded into every conversation automatically',
    },
    'on-demand-capabilities': {
      title: 'On-Demand Capabilities',
      subtitle: 'Invoked explicitly by the developer or selected by the model',
    },
    'enforcement-automation': {
      title: 'Enforcement & Automation',
      subtitle: 'Deterministic guardrails and CI/CD-level orchestration',
    },
    distribution: {
      title: 'Distribution',
      subtitle: 'Package and share agent stacks across teams and repos',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Passive memory that automatically applies to every prompt',
      details:
        'Instructions are the foundation of Copilot customization. They load FIRST ' +
        'and are always-on passive memory. Place repo-wide conventions in ' +
        '`.github/copilot-instructions.md` and path-specific instructions in ' +
        '`.github/instructions/NAME.instructions.md` (with `applyTo` glob frontmatter). ' +
        'These are advisory — they guide the model but don\'t enforce behavior ' +
        'deterministically.',
      useCases: ['Coding Standards', 'Framework Rules', 'Repo Conventions'],
    },
    'prompt-files': {
      name: 'Prompt Files',
      description: 'Manually invoked via slash commands',
      details:
        'Prompt files are reusable prompt templates invoked with slash commands ' +
        '(e.g., `/security-review`, `/release-notes`). They let teams standardize ' +
        'common prompts so every developer gets consistent, high-quality outputs ' +
        'for recurring tasks.',
      useCases: ['API Review', 'Perf Audit', 'Onboarding Guide'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Specialist personas with their own tools and MCP servers',
      details:
        'Custom agents are specialist personas defined in Markdown with YAML ' +
        'frontmatter. Each profile specifies a `description`, `tools` list, ' +
        'optional `mcp-servers`, and a `model` preference. Agents can be chained ' +
        'via the `handoffs` property — e.g., a planning agent hands off to an ' +
        'implementation agent, which hands off to a review agent. The LLM reads ' +
        'agent descriptions to decide which to activate.',
      useCases: ['Security Auditor', 'Database Specialist', 'API Designer'],
    },
    skills: {
      name: 'Skills',
      description: 'Self-contained folders of instructions, scripts & resources — loaded on demand',
      details:
        'Skills are folders with a `SKILL.md` file (name + description in YAML ' +
        'frontmatter, instructions in Markdown body) plus optional scripts and ' +
        'resources. Copilot decides when to use a skill based on its `description` ' +
        'field — only then is the full `SKILL.md` injected into the agent\'s context. ' +
        'Store project skills in `.github/skills/<name>/` and personal skills in ' +
        '`~/.copilot/skills/<name>/`.',
      useCases: ['Terraform Modules', 'K8s Manifests', 'Observability Stack'],
    },
    hooks: {
      name: 'Hooks',
      description: 'Deterministic shell commands at 6 lifecycle events',
      details:
        'Hooks are the ONLY deterministic primitive in the Copilot system. They ' +
        'fire at six lifecycle points: `sessionStart`, `sessionEnd`, ' +
        '`userPromptSubmitted`, `preToolUse`, `postToolUse`, and `errorOccurred`. ' +
        'The `preToolUse` hook can approve or deny tool executions before they ' +
        'happen. Define hooks in a JSON file in `.github/hooks/` with `version: 1`. ' +
        'Unlike instructions (which are advisory), hooks are enforcement.',
      useCases: ['Policy Gates', 'File Access Controls', 'Audit Logging'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Repository automation powered by AI coding agents, running in GitHub Actions with guardrails',
      details:
        'Agentic workflows are Markdown files with YAML frontmatter (permissions, ' +
        'safe-outputs, triggers) compiled to GitHub Actions via the `gh aw` CLI ' +
        'extension. Define automation in natural language — schedule daily reports, ' +
        'triage issues, analyze CI failures, or maintain docs. Agents run with ' +
        'read-only permissions by default; write operations require explicit ' +
        'safe-output approval. Execution is sandboxed with tool allowlisting ' +
        'and network isolation. Works with GitHub Copilot, Claude, or OpenAI Codex.',
      useCases: ['Issue Triage', 'CI Failure Analysis', 'Daily Status Reports'],
    },
    plugins: {
      name: 'Plugins',
      description: 'Installable packages bundling agents, skills, hooks & MCP configs',
      details:
        'Plugins are distributable packages that extend Copilot CLI. Each plugin ' +
        'can contain custom agents, skills, hooks, MCP server configs, and LSP ' +
        'server configs. Install from registered marketplaces (like `copilot-plugins` ' +
        'or `awesome-copilot`), directly from a Git repo, or from a local path. ' +
        'Create your own marketplace to share team-specific stacks.',
      useCases: ['Reuse Across Projects', 'Team Standardization', 'Marketplace Distribution'],
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Instructions load FIRST</strong> — they\'re always-on passive memory. ' +
        'Every prompt sees them before anything else fires.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skills are loaded on demand</strong> — Copilot reads only the <code>description</code> in ' +
        'SKILL.md frontmatter first. The full file is injected into the agent\'s context only when ' +
        'the model decides the skill is relevant to your prompt.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hooks are the only deterministic primitive.</strong> Instructions are ' +
        'advisory. Hooks are enforcement — 6 lifecycle events including <code>preToolUse</code> which ' +
        'can approve or deny tool executions before they happen.',
    },
    {
      icon: '🔀',
      content:
        '<strong>The LLM is the router.</strong> There\'s no separate orchestrator — the ' +
        'model reads indexed agent descriptions and skill frontmatter to decide what to ' +
        'activate. That\'s why writing good descriptions matters.',
    },
  ],
};
