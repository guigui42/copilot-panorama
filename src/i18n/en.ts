import type { Translations } from './types';

export const en: Translations = {
  locale: 'en',
  seo: {
    title: 'Copilot Panorama — .github/ Stack',
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
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Share link',
    shareCopied: 'Copied!',
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
      description: 'Self-contained folders of instructions, scripts & resources — automatically loaded by the LLM when relevant',
      details:
        'Unlike other on-demand features that are invoked by the user, skills are ' +
        'autonomously selected by the LLM. Each skill is a folder with a `SKILL.md` ' +
        'file (name + description in YAML frontmatter, instructions in Markdown body) ' +
        'plus optional scripts and resources. The model reads skill descriptions to ' +
        'decide which ones to activate — only then is the full `SKILL.md` injected ' +
        'into context. No user action required. Store project skills in ' +
        '`.github/skills/<name>/` and personal skills in `~/.copilot/skills/<name>/`.',
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
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'GitHub Actions workflow that pre-configures the cloud agent\'s environment',
      details:
        'Copilot Setup Steps is a special GitHub Actions workflow at ' +
        '`.github/workflows/copilot-setup-steps.yml` that runs before the cloud agent ' +
        'starts working. Use it to deterministically install tools, dependencies, or ' +
        'configure the runner — so the agent can immediately build, test and lint without ' +
        'trial-and-error discovery. You can also upgrade to larger runners, switch to ' +
        'Windows, enable Git LFS, or set environment variables via the `copilot` ' +
        'Actions environment. The workflow must contain a single `copilot-setup-steps` job ' +
        'and only takes effect when present on the default branch.',
      useCases: ['Preinstall Dependencies', 'Larger Runners', 'Environment Variables'],
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

  /* ── Tools page ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Interactive visual guide to GitHub Copilot tools across three layers: Terminal (CLI), IDE (Autocomplete, Chat, Agent Mode, 3rd-Party Agents), and Cloud (Cloud Agent, Review Agent, 3rd-Party Agents).',
  },
  toolsUi: {
    heroTitle: 'Copilot Everywhere',
    insightsTitle: 'Key distinctions most developers miss',
    insightsSubtitle: 'Architectural insights across the three layers',
    footerBuiltFor: 'Built for GitHub Copilot users',
    footerDocsLink: 'Full docs on Copilot features',
  },
  toolsViz: {
    interactive: 'Interactive',
    programmatic: 'Programmatic',
    ghostText: 'ghost text',
    tabToAccept: 'Tab to accept',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: 'Analyze',
    edit: 'Edit',
    run: 'Run',
    fix: 'Fix',
    local: 'Local',
    cloud: 'Cloud',
    issueAssigned: 'Issue assigned',
    agentCodes: 'Agent codes',
    prCreated: 'PR created',
    securityChecks: 'Security checks',
    addReviewer: 'Add reviewer',
    reviewComments: 'Review comments',
    suggestedFixes: 'Suggested fixes',
    selectAgent: 'Select agent',
    askAnything: 'Ask anything',
    repoContext: 'Repo context',
    webSearch: 'Web search',
  },
  toolsLayers: {
    terminal: {
      title: 'Terminal',
      subtitle: 'AI-powered coding agent right in your command line',
    },
    ide: {
      title: 'IDE',
      subtitle: 'Inline suggestions, chat, autonomous editing, and 3rd-party agents in your editor',
    },
    cloud: {
      title: 'Cloud',
      subtitle: 'Autonomous agents on the GitHub platform — coding, reviewing, and 3rd-party',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      description: 'A full AI agent in your terminal — interactive sessions, file editing, and GitHub integration',
      details:
        'GitHub Copilot CLI lets you use Copilot directly from your terminal. Start an ' +
        'interactive session with `copilot` or pass a single prompt with `copilot -p "..."`. ' +
        'It can edit local files, run shell commands, interact with GitHub.com (create PRs, ' +
        'issues, manage workflows), and work iteratively with you. Supports Plan Mode ' +
        '(Shift+Tab) for structured implementation, MCP servers, custom agents, skills, ' +
        'hooks, and automatic context compaction for infinite sessions.',
      useCases: ['Issue-to-PR Delivery', 'Legacy Code Modernization', 'Parallel Fleet Execution', 'Backlog Triage & Planning', 'Editor-Agnostic Development', 'Automation'],
    },
    autocomplete: {
      name: 'Autocomplete',
      description: 'Ghost-text code suggestions that appear inline as you type',
      details:
        'Copilot offers autocomplete-style suggestions as you type — full function bodies, ' +
        'loops, conditionals, and more based on your code context. Browse alternatives with ' +
        'Alt+] / Alt+[, accept word-by-word with Ctrl+→, or accept full suggestions with Tab. ' +
        'Next Edit Suggestions (NES) predict the location of your next edit and suggest ' +
        'completions for it. Available in VS Code, Visual Studio, JetBrains IDEs, Azure Data ' +
        'Studio, Xcode, Vim/Neovim, and Eclipse.',
      useCases: ['Code Completion', 'Boilerplate Generation', 'Pattern Completion', 'Comment-to-Code'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      description: 'Conversational AI chat for code questions, explanations, and generation',
      details:
        'Copilot Chat provides a conversational interface for asking coding questions. Use ' +
        'chat participants (@workspace, @github, @terminal), slash commands (/fix, /explain, ' +
        '/tests, /doc), and chat variables (#file, #selection, #web) for precise context. ' +
        'The @github participant enables web search, issue lookup, and PR analysis. Supports ' +
        'multiple AI models — switch mid-conversation via the model picker. Available in ' +
        'VS Code, Visual Studio, JetBrains, Eclipse, Xcode, GitHub.com, and GitHub Mobile.',
      useCases: ['Code Explanation', 'Debugging', 'Test Generation', 'Code Refactoring', 'Learning'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      description: 'Autonomous local coding — Copilot determines files, makes edits, runs commands, and iterates',
      details:
        'Agent Mode lets Copilot autonomously edit your code within the IDE. It determines ' +
        'which files to change, makes multi-file edits, suggests and runs terminal commands, ' +
        'and iterates to fix errors until the task is complete. Supports MCP server ' +
        'integration, subagents for delegated subtasks, and custom agents. Only your prompts ' +
        'are billed — follow-up tool calls are free. Distinct from Copilot cloud agent ' +
        '(Cloud layer), which runs on GitHub Actions.',
      useCases: ['Complex Tasks', 'Multi-Step Implementation', 'Error Resolution', 'Build Automation'],
    },
    'third-party-agents-ide': {
      name: '3rd-Party Agents',
      description: 'Claude and Codex agents running in VS Code with their native SDKs',
      details:
        'Third-party agents by Anthropic (Claude) and OpenAI (Codex) run directly in VS Code ' +
        'using each provider\'s native SDK and agent harness. Choose between local sessions ' +
        '(running in your workspace) or cloud sessions (remote environment). Claude supports ' +
        'slash commands (/agents, /hooks, /memory, /review, /security-review), permission ' +
        'modes (edit automatically, request approval, plan), and persistent context via ' +
        'CLAUDE.md. All billed through your Copilot subscription — no separate provider setup.',
      useCases: ['Autonomous Coding', 'Security Review', 'Provider-Specific Features', 'Background Tasks'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      description: 'Conversational AI on GitHub.com — ask about repos, issues, PRs, and the web',
      details:
        'Copilot Chat on GitHub.com lets you ask questions from any page — about a repo, ' +
        'an issue, a PR, or general software topics. It uses skills to fetch context from ' +
        'GitHub (code search, commit history, issue details) and optionally Bing web search ' +
        'for up-to-date information. Supports multi-model selection, subthreads for branching ' +
        'conversations, file generation with preview, and conversation history (up to 100 ' +
        'threads, 28-day retention). Also available on GitHub Mobile.',
      useCases: ['Repo Q&A', 'Issue Analysis', 'PR Understanding', 'Web Search', 'Code Generation'],
    },
    'coding-agent': {
      name: 'Cloud Agent',
      description: 'Autonomous cloud agent — assign an issue, get a PR with security checks',
      details:
        'Copilot cloud agent works independently in a GitHub Actions-powered environment. ' +
        'Assign an issue to @copilot, mention it on a PR, or ask from Chat — it evaluates ' +
        'the task, makes changes, runs tests and linters, performs CodeQL security analysis, ' +
        'checks for secrets, and creates a draft PR for review. Supports custom instructions, ' +
        'MCP servers, custom agents, hooks, skills, and Copilot Memory. Only pushes to ' +
        '`copilot/` branches. Available on Pro, Pro+, Business, Enterprise.',
      useCases: ['Bug Fixes', 'Feature Implementation', 'Test Coverage', 'Technical Debt', 'Security Campaigns'],
    },
    'review-agent': {
      name: 'Review Agent',
      description: 'AI code reviewer with full project context and suggested fixes',
      details:
        'Copilot code review analyzes pull requests and provides feedback with suggested ' +
        'changes you can apply with a click. Uses agentic capabilities for full project ' +
        'context gathering — it analyzes your entire repository to understand code changes. ' +
        'Can be configured for automatic reviews on all PRs. Supports custom instructions ' +
        'via .github/copilot-instructions.md and path-specific rules. Available on GitHub.com, ' +
        'GitHub Mobile, VS Code, Visual Studio, Xcode, and JetBrains.',
      useCases: ['Code Quality', 'Security Review', 'Best Practices', 'PR Workflow', 'Team Governance'],
    },
    'third-party-agents-cloud': {
      name: '3rd-Party Agents',
      description: 'Anthropic Claude and OpenAI Codex as cloud coding agents on GitHub',
      details:
        'Third-party coding agents work alongside Copilot cloud agent on the GitHub platform. ' +
        'Currently supports Anthropic Claude (Claude Agent SDK) and OpenAI Codex (Codex SDK). ' +
        'Assign issues, kick off tasks from the Agents tab, mention @AGENT_NAME on PRs, or ' +
        'start sessions from VS Code and GitHub Mobile. Subject to the same security ' +
        'protections as Copilot cloud agent. Each session consumes one premium request plus ' +
        'GitHub Actions minutes. Currently in public preview.',
      useCases: ['Multi-Agent Workflows', 'Agent Comparison', 'Specialized Tasks', 'Parallel Development'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Cloud Agent.</strong> Agent Mode runs locally in your IDE — ' +
        'you stay in the loop. Cloud Agent runs on GitHub Actions in the cloud — it works ' +
        'independently and creates a PR when done.',
    },
    {
      icon: '🧠',
      content:
        '<strong>3rd-party agents exist in both IDE and Cloud.</strong> In VS Code, Claude ' +
        'and Codex use their native SDKs locally. On GitHub, they run as cloud agents ' +
        'alongside Copilot cloud agent.',
    },
    {
      icon: '💬',
      content:
        '<strong>Ask mode is the starting point.</strong> Chat participants (@workspace), ' +
        'slash commands (/fix), and variables (#file) let you precisely scope your questions ' +
        'before escalating to Agent Mode for autonomous work.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Cloud agents have built-in security.</strong> Cloud agent runs CodeQL, ' +
        'secret scanning, and dependency checks automatically. It can only push to ' +
        '<code>copilot/</code> branches and always creates draft PRs.',
    },
  ],
};
