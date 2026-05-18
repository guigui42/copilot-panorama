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
    description: 'Interactive visual guide to GitHub Copilot tools across three layers: Standalone Apps (CLI, Copilot App), IDE (Autocomplete, Chat, Agent Mode, 3rd-Party Agents), and Cloud (Cloud Agent, Review Agent, 3rd-Party Agents).',
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
    openSession: 'Open session',
    reviewDiff: 'Review diff',
    openPr: 'Open PR',
    inbox: 'Inbox',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'Workflows',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'Standalone Apps',
      subtitle: 'Dedicated desktop and terminal applications for agentic development',
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
    'copilot-app': {
      name: 'GitHub Copilot App',
      description: 'Native desktop app for agentic development — Inbox, Agentic Merge, parallel sessions, and Workflows',
      details:
        'The GitHub Copilot app is a standalone desktop application (macOS, Windows, Linux) that gives ' +
        'developers and dev-adjacent roles (PMs, designers, QA) a GitHub-first experience to direct, ' +
        'monitor, review, and ship agent-driven work. The agentic Inbox surfaces issues, PRs, and sessions ' +
        'across all your repos so you stay on top of what needs attention. Agentic Merge handles the ' +
        '"last mile" — resolving review comments, fixing failing CI, and handling merge conflicts on your ' +
        'behalf. Each session runs in an isolated git worktree for true parallel development. Workflows ' +
        'let you save prompts and run them on demand or on a schedule, turning recurring tasks into ' +
        'reusable automation patterns. Currently in technical preview.',
      useCases: ['Agentic Inbox & Triage', 'Agentic Merge (Last-Mile)', 'Parallel Multi-Session Work', 'Repeatable Workflows', 'Dev-Adjacent Collaboration', 'Cross-Repo Orchestration'],
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

  /* ── Tips page ── */
  tipsSeo: {
    title: 'Copilot Panorama — Efficiency Tips',
    description: 'Practical guide to optimizing GitHub Copilot usage — token management, prompt design, context scoping, model selection, and governance.',
  },
  tipsUi: {
    heroTitle: 'Efficiency Tips',
    insightsTitle: 'The efficiency mindset',
    insightsSubtitle: 'Core principles for getting more value from every token',
    footerBuiltFor: 'Built for GitHub Copilot users',
    footerDocsLink: 'Full docs on Copilot billing',
    pageTips: 'Efficiency Tips',
  },
  tipsViz: {
    inputTokens: 'Input tokens',
    outputTokens: 'Output tokens',
    cachedTokens: 'Cached tokens',
    modelCalls: 'model calls',
    before: 'Before',
    after: 'After',
    expensive: 'Expensive',
    cheap: 'Cheap',
    high: 'High-effort',
    low: 'Low-effort',
    auto: 'Auto',
    cacheHit: 'Cache hit',
    cacheMiss: 'Cache miss',
    narrow: 'Narrow',
    broad: 'Broad',
    verboseInstructions: 'Long verbose instructions…',
    scopedContext: 'Scoped, precise context',
    chat: 'Chat',
    shipToPr: 'Ship to PR',
    freshThread: 'Fresh thread',
    principlesBrief: 'Principles only. Brief.',
    heavy: 'Heavy',
    skills: 'Skills',
    repetitive: 'Repetitive',
    promptFiles: 'Prompt Files',
    minimalDiff: 'Minimal diff + 3 bullets',
    alwaysOn: 'Always-on',
    costly: 'costly',
    onDemand: 'On-demand',
    efficient: 'efficient',
    modelReads: 'Model reads',
    descriptionLabel: 'description',
    loadsIfRelevant: 'Loads full skill if relevant',
    loadOnce: 'Load schema once',
    reuseInQueries: 'Reference in subsequent queries',
    tokenPrefixMatch: '≥1024 tokens match',
    prefixDiffers: 'prefix differs',
    standard: 'Standard',
    architecture: 'Architecture',
    debugging: 'Debugging',
    agentic: 'Agentic',
    summarize: 'Summarize',
    qa: 'Q&A',
    refactorLabel: 'Refactor',
    simpleToMini: 'Simple → mini',
    complexToPremium: 'Complex → premium',
    icEng: 'IC eng',
    powerUser: 'Power',
    ciAgent: 'CI agent',
    stopAfterTest: 'Stop after first passing test',
    cavemanResponse: 'caveman mode → ~75% fewer tokens',
    snipResponse: 'snip → compressed instructions',
    perStep: 'per step',
    steps: 'steps',
    accuracy99: '99% per step',
    accuracy95: '95% per step',
    bePrecise: 'Be precise',
    stopSignals: 'Add stop signals',
    knownContext: 'Add known context',
    lostInMiddle: 'Lost in the middle',
    recencyBias: 'Recency bias',
    middleDecay: 'Middle tokens decay',
    rawFiles: 'Feed raw files to AI',
    scriptOutput: 'Run script, feed output',
    research: '/research',
    plan: '/plan',
    implement: '/fleet',
    withTests: 'With unit tests',
    withoutTests: 'Without unit tests',
    buggyChange: 'Buggy change',
    failingTests: 'Failing tests',
    correction: 'Correction',
    succeedingTests: 'Passing tests',
    rawOutput: 'Raw output: 4,200 lines',
    trimmed: 'Trimmed: 38 lines',
    multipleCalls: '5 sequential tool calls',
    batchedCall: '1 batched call',
    cleanLayers: 'Domain → Application → Infra',
    agentMiss: 'Agent miss',
    chronicle: '/chronicle',
    updateInstructions: 'Update instructions',
  },
  tipsLayers: {
    mechanics: {
      title: 'Token Mechanics',
      subtitle: 'Understand the cost drivers behind every Copilot interaction',
    },
    prompting: {
      title: 'Prompting',
      subtitle: 'Write prompts that produce better output with fewer tokens',
    },
    context: {
      title: 'Context',
      subtitle: 'Feed the model exactly what it needs — no more, no less',
    },
    caching: {
      title: 'Caching',
      subtitle: 'Leverage prompt caching for faster, cheaper interactions',
    },
    models: {
      title: 'Models',
      subtitle: 'Match model capability to task complexity',
    },
    governance: {
      title: 'Governance',
      subtitle: 'Monitor consumption and set guardrails at the organization level',
    },
    'workflow-design': {
      title: 'Workflow Design',
      subtitle: 'Divide and conquer — chain focused steps instead of one mega-prompt',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'Token Cost Drivers',
      description: 'Input, output, and cached-read tokens are the three billing dimensions',
      details:
        'Under token-based billing, every interaction has three cost components: ' +
        'input/context tokens (what you send), output tokens (what the model generates), ' +
        'and cached-read tokens (cheaper but still metered). Input tokens include your ' +
        'prompt, system instructions, file context, and tool outputs. Output tokens are ' +
        'the model\'s response. Understanding these three dimensions is the foundation of ' +
        'cost optimization.',
      useCases: ['All Interactions', 'Budget Planning', 'Cost Analysis'],
    },
    'agentic-cost': {
      name: 'Agentic Cost Multiplier',
      description: 'A single agentic request can trigger dozens of model calls',
      details:
        'Agentic experiences (Agent Mode, Cloud Agent, CLI) iterate by design: ' +
        'plan → edit → run tools/tests → fix → repeat. The same user intent can vary ' +
        'dramatically in consumption depending on the workflow. A simple "fix this bug" ' +
        'might take 2 calls or 20+ calls depending on complexity, tool outputs, and ' +
        'error recovery loops. Worse, errors compound: even at 99% accuracy per step, ' +
        'a 50-step workflow only lands at ~60%. This is why workflow design matters ' +
        'more than prompt length.',
      useCases: ['Agent Mode', 'Cloud Agent', 'CLI Agent'],
    },
    'context-discipline': {
      name: 'Context Discipline',
      description: 'Cost optimization is mostly context discipline + workflow design',
      details:
        'The biggest cost lever isn\'t writing shorter prompts — it\'s managing what ' +
        'context flows into each model call. Every file attachment, tool output, and ' +
        'conversation history item adds input tokens. Disciplined context management ' +
        '(scoping files, trimming logs, starting fresh threads) has a much larger ' +
        'impact than wordsmithing prompts.',
      useCases: ['All Workflows', 'Cost Optimization', 'Performance'],
    },
    'quality-over-quantity': {
      name: 'Quality Over Quantity',
      description: 'Focus on high-quality context, not more instructions',
      details:
        'More instructions ≠ better output. Scoped, high-quality guidance reduces ' +
        'verbose, sprawling outputs. Instead of long preambles, give the model exactly ' +
        'the context it needs: the relevant code, the specific requirement, and clear ' +
        'constraints. Smaller scoped prompts also reduce runaway agentic sessions ' +
        'where the agent keeps iterating without converging.',
      useCases: ['Chat', 'Agent Mode', 'Prompt Files'],
    },
    'fresh-threads': {
      name: 'Fresh Threads',
      description: 'Start new conversations once decisions are shipped — avoid context rot',
      details:
        'Avoid long-lived sessions where tool outputs pile up in context. Each ' +
        'accumulated tool output adds input tokens to every subsequent call, and once ' +
        'the context window fills past ~50% models bias toward the most recent tokens ' +
        '(recency bias) and "lose" what was in the middle. Once you\'ve shipped the ' +
        'decision into a durable artifact (issue, PR description, ADR, code commit), ' +
        'start a fresh thread with a clean context window.',
      useCases: ['Chat', 'Agent Mode', 'CLI Sessions'],
    },
    'concise-instructions': {
      name: 'Minify Instructions',
      description: 'Keep .github/copilot-instructions.md short, stable, and principled',
      details:
        'Instructions load into every conversation automatically — they\'re always-on ' +
        'context. Keep copilot-instructions.md short and stable: principles, conventions, ' +
        '"don\'t do" rules. Every extra line adds input tokens to every single interaction. ' +
        'Move detailed guidance (playbooks, examples, domain rules) to Skills or Prompt ' +
        'Files where they load only when needed.',
      useCases: ['Instructions', 'Cost Optimization', 'All Interactions'],
    },
    'structure-for-reuse': {
      name: 'Structure for Reuse',
      description: 'Use Skills for heavy guidance, Prompt Files for repetitive workflows',
      details:
        'Put heavy guidance (playbooks, examples, domain rules, runbooks) into Agent ' +
        'Skills so it loads only when the user\'s prompt matches. Put repetitive ' +
        'workflows (e.g., "write unit tests," "create ADR," "generate changelog") into ' +
        'Prompt Files so users don\'t paste huge instructions every time. This moves ' +
        'context from always-on (expensive) to on-demand (efficient).',
      useCases: ['Skills', 'Prompt Files', 'Team Workflows'],
    },
    'concise-answers': {
      name: 'Ask for Less',
      description: 'Instruct for the smallest useful answer to minimize output tokens',
      details:
        'Output tokens are the most expensive dimension. Ask for the minimal useful ' +
        'response: "Give me the minimal diff + 3 bullet justification" instead of ' +
        '"explain everything." "List only breaking changes; omit background" when doing ' +
        'upgrades/migrations. Smaller outputs also mean faster responses and less noise ' +
        'to read through.',
      useCases: ['Chat', 'Code Review', 'Migrations'],
    },
    'caveman-skill': {
      name: 'Caveman Skill',
      description: 'Community skill that cuts ~75% of output tokens via ultra-compressed responses',
      details:
        'Caveman is a community Agent Skill that instructs the model to respond in compressed, ' +
        'telegraphic style — dropping articles, filler words, and boilerplate while keeping full ' +
        'technical accuracy. It can cut output tokens by ~75%. Install the skill and say ' +
        '"caveman mode" to toggle it on. Supports multiple intensity levels from lite to ultra. ' +
        'Great for experienced developers who want concise answers without noise.',
      useCases: ['Chat', 'CLI', 'Code Review'],
    },
    'snip-skill': {
      name: 'Snip Skill',
      description: 'Community skill that optimizes context by compressing instructions and reducing token usage',
      details:
        'Snip is a community Agent Skill that optimizes token usage by restructuring and ' +
        'compressing instructions automatically. It rewrites lengthy prompts and context into ' +
        'a more compact form while preserving meaning, reducing both input and output tokens. ' +
        'Install the skill to apply it automatically across your Copilot interactions. ' +
        'Especially useful for large codebases and complex multi-file workflows.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'scope-context': {
      name: 'Scope Context Intentionally',
      description: 'Prefer targeted context (one file) over "whole repo" unless truly needed',
      details:
        'Use targeted context: only the relevant file or function, not the whole repo. ' +
        '"Attach only the failing test output, not the full logs." Whole-repo context ' +
        '(#codebase) is powerful but expensive — use it only for cross-cutting changes ' +
        'that genuinely need global reasoning. For narrow questions, #file is almost ' +
        'always sufficient and much cheaper.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: 'Conditional Over Always-On',
      description: 'Prefer context that loads only when relevant to the current task',
      details:
        'Always-on context (copilot-instructions.md) loads in every conversation and ' +
        'costs tokens every time. Conditional context (Skills, path-scoped instructions) ' +
        'loads only when relevant. Move specialized guidance to Skills where the model ' +
        'decides when to load them, or use applyTo globs so instructions only apply to ' +
        'matching files.',
      useCases: ['Instructions', 'Skills', 'Path Scoping'],
    },
    'targeted-refs': {
      name: 'Use Targeted References',
      description: 'Use #file for narrow questions, #codebase only for cross-cutting changes',
      details:
        'Chat references (#file, #selection, #codebase) control exactly what context ' +
        'the model sees. Use #file for focused questions about specific code. Use ' +
        '#selection for even narrower scope. Reserve #codebase for cross-cutting changes ' +
        'where the model genuinely needs to understand the whole project. Attach only ' +
        'the failing test output, not the full test suite logs.',
      useCases: ['Chat', 'IDE', 'Code Understanding'],
    },
    'apply-to-paths': {
      name: 'Use applyTo Paths',
      description: 'Scope custom instructions to specific file patterns with applyTo globs',
      details:
        'Path-specific instructions (in .github/instructions/) support applyTo glob ' +
        'frontmatter. This means the instruction only loads when the model is working ' +
        'on matching files — e.g., applyTo: "**/*.test.ts" for testing conventions. ' +
        'This is free context when not relevant and precise context when needed.',
      useCases: ['Instructions', 'Testing Rules', 'Framework-Specific'],
    },
    'skills-mcp': {
      name: 'Leverage Skills & MCP',
      description: 'Skills load on demand — but MCP tool schemas hit every loop',
      details:
        'Skills are discovered by the model from their descriptions and load full ' +
        'guidance into context only when relevant. MCP server tool schemas, by contrast, ' +
        'are loaded as static tokens on every loop — useful, but they add up. For some ' +
        'workflows a plain CLI command can be cheaper than the equivalent MCP tool. ' +
        'Write clear, concise skill descriptions and prefer skills/CLIs over heavyweight ' +
        'MCPs when the trade-off makes sense.',
      useCases: ['Skills', 'MCP Servers', 'Custom Agents'],
    },
    'context-command': {
      name: '/context in CLI',
      description: 'Watch context accumulation in Copilot CLI; compaction triggers near capacity',
      details:
        'In Copilot CLI, use the /context command to see how much of your context window ' +
        'is consumed. As context grows, the CLI automatically compacts (summarizes) older ' +
        'conversation history near capacity. Being aware of context consumption helps you ' +
        'decide when to start a fresh thread vs. continue an existing one.',
      useCases: ['CLI', 'Long Sessions', 'Context Management'],
    },
    'reuse-context': {
      name: 'Store & Reuse Context',
      description: 'Load shared context early so subsequent questions can reference it cheaply',
      details:
        'Store and reuse context within your prompts. For instance, load a database ' +
        'schema early in the conversation so subsequent work can reuse it — ask targeted ' +
        'questions referencing that context instead of re-pasting it each time. This is ' +
        'especially effective in the CLI where sessions can be long-lived and the shared ' +
        'prefix enables prompt caching.',
      useCases: ['CLI Sessions', 'Chat', 'Schema-Heavy Work'],
    },
    'prefix-matching': {
      name: 'Prompt Prefix Caching',
      description: 'LLM caching depends on exact prefix matches — structure prompts accordingly',
      details:
        'LLM prompt caching (across providers) generally depends on exact prefix matches. ' +
        'For example, Azure OpenAI prompt caching requires prompts ≥ 1,024 tokens and the ' +
        'first 1,024 tokens identical to get cache reuse. This means stable system prompts ' +
        'and instructions at the start of your prompt are more likely to hit the cache. ' +
        'Varying preambles defeat caching.',
      useCases: ['All Interactions', 'Cost Optimization', 'Performance'],
    },
    'choose-right-model': {
      name: 'Choose the Right Model',
      description: 'Models vary by cost multiplier and capability — match to your task',
      details:
        'Different models have different cost multipliers and capability levels. Using a ' +
        'premium model for a simple task wastes tokens and money. Using a basic model for ' +
        'complex architecture wastes time and produces poor results. The key is matching ' +
        'model capability to task complexity. Check your available models and their ' +
        'relative costs.',
      useCases: ['All Interactions', 'Budget Planning', 'Task Routing'],
    },
    'high-effort-tasks': {
      name: 'Premium for Complex Work',
      description: 'Use higher-effort models for deep architecture, tricky debugging, agentic work',
      details:
        'Reserve premium/high-effort models (Claude Opus, GPT-4.1, o3) for tasks that ' +
        'genuinely need deep reasoning: complex architecture decisions, tricky multi-file ' +
        'debugging, large agentic workflows, and security-sensitive code review. These ' +
        'models are more expensive per token but save time by getting it right the first time.',
      useCases: ['Architecture', 'Debugging', 'Security Review', 'Agent Mode'],
    },
    'low-effort-tasks': {
      name: 'Mini for Simple Tasks',
      description: 'Default to efficient models for summarization, quick Q&A, small refactors',
      details:
        'Use mini/efficient models (GPT-4.1 mini, Claude Haiku, Gemini Flash) as your ' +
        'default for summarization, quick Q&A, small refactors, and boilerplate generation. ' +
        'These models are significantly cheaper per token and fast enough for simple tasks. ' +
        'The cost savings compound quickly when most of your interactions are simple.',
      useCases: ['Summarization', 'Q&A', 'Refactoring', 'Boilerplate'],
    },
    'auto-mode': {
      name: 'Use Auto Mode',
      description: 'Auto selects the best model based on your prompt — good default for most workflows',
      details:
        'When unsure which model to use, select "Auto." Auto mode analyzes your prompt ' +
        'and routes it to the most appropriate model — simple questions go to efficient ' +
        'models, complex tasks go to capable ones. This is a good default for most ' +
        'workflows and avoids both overspending on simple tasks and underpowering complex ones.',
      useCases: ['Default Workflow', 'Mixed Tasks', 'New Users'],
    },
    'monitor-usage': {
      name: 'Set User Budgets',
      description: 'Set user-level budgets with sensible defaults by persona',
      details:
        'Set user-level budgets with sensible defaults by persona: IC engineer vs power ' +
        'user vs CI agent. Start with conservative limits and tune based on observed ' +
        'consumption. Monitor heavy usage patterns — a single agentic session can consume ' +
        'more tokens than a week of chat interactions. Use the admin dashboard to identify ' +
        'outliers and adjust.',
      useCases: ['Admin', 'Budget Control', 'Team Governance'],
    },
    'chronicle-tips': {
      name: 'Chronicle Insights',
      description: 'Use /chronicle improve and /chronicle tips for workflow improvements',
      details:
        'Copilot CLI includes the /chronicle command for workflow intelligence. Use ' +
        '/chronicle improve to get suggestions for optimizing your current workflow, ' +
        'and /chronicle tips for general efficiency recommendations based on your usage ' +
        'patterns. These commands analyze your session history and provide personalized ' +
        'guidance.',
      useCases: ['CLI', 'Workflow Optimization', 'Self-Improvement'],
    },
    'compound-errors': {
      name: 'Compound Error Problem',
      description: 'Even at 99% per step, a 50-step workflow lands at only ~60%',
      details:
        'Per-step accuracy compounds multiplicatively across an agentic loop. At 99% ' +
        'reliability per step, a 50-step workflow finishes at 0.99⁵⁰ ≈ 60%. Drop to ' +
        '95% per step and a 50-step run is only ~8% likely to succeed end-to-end. This ' +
        'is why "agent gambling" — hoping low-quality output works out — stops scaling. ' +
        'Every improvement to per-step quality (better prompts, smaller scope, deterministic ' +
        'checks) multiplies across the entire workflow.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Orchestrated Workflows'],
    },
    'prompt-anatomy': {
      name: 'Prompt Anatomy',
      description: 'Be precise · add stop signals · add known context beforehand',
      details:
        'Agents iterate by design: plan → edit → run tools → fix → repeat. Without ' +
        'bounds, they keep going until they succeed (or exhaust context). Three reliable ' +
        'ingredients of an effective prompt keep them on the road: (1) Be precise — ' +
        'describe the change in plain, unambiguous terms, including the desired outcome. ' +
        '(2) Add stop signals — "stop after first passing test", "make at most 2 alternative ' +
        'solutions", "do not refactor unrelated code". (3) Add known context beforehand — ' +
        'name the relevant files, folders, or docs so the agent doesn\'t waste tokens ' +
        'searching. Combined with deterministic guardrails (tests, linters), this prevents ' +
        'runaway sessions that burn through tokens.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'context-rot': {
      name: 'Context Rot',
      description: 'Big context windows still degrade — middle tokens get lost, recent ones dominate',
      details:
        'Just because a model has a 200k window doesn\'t mean you should fill it. Two ' +
        'documented failure modes: "Lost in the Middle" — tokens placed in the middle of ' +
        'a long context are recalled less reliably than tokens at the beginning or end. ' +
        '"Recency Bias" — once the window crosses ~50% full, the model leans heavily on ' +
        'the most recent tokens. Mitigations: keep prompts short, put the most important ' +
        'instructions at the start or end, and start fresh threads before decay sets in.',
      useCases: ['Long Sessions', 'Large Codebases', 'Multi-File Edits'],
    },
    'think-in-code': {
      name: 'Think in Code',
      description: 'Prefer scripts over feeding raw files — analyze, then hand the model a summary',
      details:
        'When you need to understand 10,000 lines of logs or a large JSON dump, don\'t ' +
        'paste it all in. Write (or have the agent write) a small script that extracts ' +
        'just what matters — counts, errors, the relevant slice — and feed the agent ' +
        'the script\'s output instead. This collapses thousands of input tokens into ' +
        'dozens and keeps the model focused on the actual question. Works equally well ' +
        'for grep, jq, awk, or a 20-line Python script.',
      useCases: ['Log Analysis', 'Data Exploration', 'Large Files'],
    },
    'research-plan-implement': {
      name: 'Research → Plan → Implement',
      description: 'Chain three focused stages with the right model for each',
      details:
        'Divide a non-trivial change into three handoffs instead of one mega-prompt. ' +
        '(1) Research: a fast, broad model (e.g. Gemini 2.5 Pro) explores the codebase ' +
        'and identifies the relevant files. (2) Plan: a deep-reasoning model (e.g. Opus) ' +
        'turns that research into a precise spec. (3) Implement: an efficient model ' +
        '(e.g. GPT-5.4 / Sonnet) applies the spec to code. Each stage gets only the ' +
        'context it needs, and per-stage errors don\'t compound into one runaway loop. ' +
        'In Copilot CLI this maps to /research → /plan → /fleet style flows.',
      useCases: ['Complex Refactors', 'Cross-Cutting Changes', 'Multi-File Edits'],
    },
    'deterministic-guardrails': {
      name: 'Deterministic Guardrails',
      description: 'Unit tests, linters, and security scans stop bad changes from compounding',
      details:
        'LLMs are probabilistic — but tests, linters, and type-checkers are not. With ' +
        'unit tests in place, a buggy change produces failing tests, which the agent sees ' +
        'and corrects in the next loop. Without tests, the agent compounds bugs across ' +
        'multiple changes before anyone notices — wasted CI/CD minutes, wasted review ' +
        'cycles, wasted human time debugging. Tests + linters + secret scans are the ' +
        'cheapest way to give an agent a reliable feedback signal.',
      useCases: ['Agent Mode', 'TDD', 'CI Pipelines'],
    },
    'trim-shell-outputs': {
      name: 'Trim Shell Outputs',
      description: 'A noisy `npm install` can drown out signal — wrap commands to keep only what matters',
      details:
        'CLI tools love verbosity. A single `npm install` or `terraform plan` can ' +
        'dump thousands of lines into the agent\'s context — most of it noise. Wrap ' +
        'noisy commands with a trimmer (e.g. github.com/rtk-ai/rtk) so the agent only ' +
        'sees the relevant tail: errors, warnings, the final summary. This dramatically ' +
        'shrinks the cached input on the next loop and improves recall by reducing ' +
        '"lost in the middle" effects.',
      useCases: ['CLI Agent', 'Build Output', 'Test Runs'],
    },
    'collapse-tool-calls': {
      name: 'Collapse Tool Calls',
      description: 'Batch multiple tool invocations into one — fewer round-trips, fewer tokens',
      details:
        'Each tool call adds a full round-trip: input tokens for the request, output ' +
        'tokens for the result, plus the system prompt replayed each time. Plugins like ' +
        'jsturtevant/copilot-codeact-plugin let the agent express several tool ' +
        'invocations as one code-act block, executed together. Five small calls become ' +
        'one batched call — same outcome, far fewer tokens and faster wall-clock.',
      useCases: ['Agent Mode', 'CLI', 'Multi-Step Tasks'],
    },
    'apply-architecture': {
      name: 'Apply Good Architecture',
      description: 'DDD, hexagonal, CQRS — clean boundaries help the agent find its way',
      details:
        'A messy codebase forces the agent to load far more context to make a change ' +
        'safely. Clean architecture patterns (Domain-Driven Design, hexagonal/ports-and-' +
        'adapters, CQRS, event-driven) give the agent strong guardrails: it can find the ' +
        'right module by name, change it in isolation, and avoid touching unrelated code. ' +
        'The result is shorter sessions, smaller diffs, and fewer compounding errors — ' +
        'the same things that help humans.',
      useCases: ['New Projects', 'Refactoring', 'Team Codebases'],
    },
    'iterate-configs': {
      name: 'Treat Agent Misses as Incidents',
      description: 'When the agent gets it wrong, fix the config — not just the output',
      details:
        'A misbehaving agent is a signal, not just a one-off. Treat each significant ' +
        'miss like a small incident: what was missing — an instruction, a skill, the ' +
        'right model? Update copilot-instructions.md, the relevant skill, or your ' +
        'prompt template so the same miss doesn\'t happen twice. Run /chronicle ' +
        'regularly to surface patterns. Over time, the agent gets noticeably more ' +
        'reliable without you doing more work per task.',
      useCases: ['Team Workflows', 'CLI Power Users', 'Long-Lived Repos'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>Quality compounds.</strong> Even at 99% per step, a 50-step agentic ' +
        'workflow only lands at ~60%. At 95% per step it\'s 8%. Per-step improvements ' +
        'multiply — make every token count.',
    },
    {
      icon: '💰',
      content:
        '<strong>Context &gt; prompts for cost.</strong> Managing what context flows into each ' +
        'model call has a much larger cost impact than optimizing prompt wording. Trim files, ' +
        'start fresh threads, and use conditional context.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Match model to task.</strong> Don\'t use a premium model for simple Q&A, and ' +
        'don\'t use a mini model for complex architecture. Use Auto mode when unsure — it routes ' +
        'automatically.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Agentic loops multiply cost.</strong> A single agentic request can trigger ' +
        'dozens of model calls. Set explicit stop signals ("stop after first passing test") to ' +
        'prevent runaway token consumption.',
    },
    {
      icon: '📦',
      content:
        '<strong>Move from always-on to on-demand.</strong> Keep instructions minimal. Heavy ' +
        'guidance belongs in Skills (loaded by the model when relevant) and Prompt Files ' +
        '(invoked explicitly), not in copilot-instructions.md.',
    },
  ],
};
