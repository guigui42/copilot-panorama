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
    communityExamplesLabel: 'Browse community examples',
    footerBuiltFor: 'Built for GitHub Copilot users',
    footerDocsLink: 'Full docs on the composable system',
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Share link',
    shareCopied: 'Copied!',
  },
  viz: {
    alwaysActive: 'Applies automatically',
    loadsAutomatically: 'within its supported scope',
    planning: 'Planning',
    implementation: 'Implementation',
    review: 'Review',
    descriptionRead: 'Copilot reads skill metadata',
    fullSkillInjected: 'The model automatically loads a matching skill',
    approveDeny: 'allow / deny / modify',

    pluginJson: 'plugin.json',
    agentsDir: 'agents/',
    skillsDir: 'skills/',
    hooksJson: 'hooks.json',
    mcpJson: '.mcp.json',
    lspJson: 'lsp.json',
    repositorySettings: 'Repository MCP settings',
    ideConfig: 'IDE mcp.json',
    vsCode: 'VS Code',
    copilotCli: 'Copilot CLI',
    copilotApp: 'Copilot app',
    marketplace: 'Marketplace',
    gitRepo: 'Git Repo',
    localPath: 'Local Path',
  },
  layers: {
    'always-on-context': {
      title: 'Always-On Context',
      subtitle: 'Repository guidance applied automatically within its supported scope',
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
      description: 'Repository guidance that automatically shapes Copilot responses',
      details:
        'Use `.github/copilot-instructions.md` for repository-wide guidance and ' +
        '`.github/instructions/NAME.instructions.md` with `applyTo` globs for matching paths. ' +
        'Agents can also use the nearest `AGENTS.md`, while root `CLAUDE.md` and `GEMINI.md` ' +
        'are supported on specific surfaces. Personal and organization instructions provide ' +
        'broader defaults outside repository files. Support varies by Copilot surface, and ' +
        'instructions guide behavior rather than enforce it.',
      useCases: ['Coding Standards', 'Framework Rules', 'Repo Conventions'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Specialists with focused instructions, tools, and isolated context',
      details:
        'Define repository agents in `.github/agents/AGENT-NAME.md`. Each agent can carry ' +
        'specialized instructions, tool restrictions, and MCP context. Organization and ' +
        'enterprise agents can be distributed from `.github` or `.github-private` repositories. ' +
        'Copilot can also delegate focused work to subagents with isolated context. Fields such ' +
        'as models and handoffs vary by surface, so check the current feature matrix.',
      useCases: ['Security Auditor', 'Database Specialist', 'API Designer'],
    },
    skills: {
      name: 'Skills',
      description: 'Reusable instructions, scripts, and resources automatically loaded when relevant',
      details:
        'Each skill is a folder containing `SKILL.md` plus optional scripts and resources. ' +
        'Copilot automatically selects a skill when its expertise matches the task; users can ' +
        'also request a skill explicitly. Store project skills ' +
        'under `.github/skills/`, `.agents/skills/`, or `.claude/skills/`; personal skills can ' +
        'live under `~/.copilot/skills/` or `~/.agents/skills/`. Surface support varies.',
      useCases: ['Terraform Modules', 'K8s Manifests', 'Observability Stack'],
    },
    mcp: {
      name: 'MCP Servers',
      description: 'External tools and live data connected through Model Context Protocol',
      details:
        'Configure repository MCP servers in repository settings on GitHub for Copilot cloud ' +
        'agent and Copilot code review. IDE clients use their own `mcp.json` configuration, ' +
        'while CLI and the Copilot app expose client settings. MCP support, policies, and ' +
        'configuration locations vary by surface, so enable only the servers and toolsets a ' +
        'workflow needs.',
      useCases: ['Issue & PR Automation', 'Browser Testing', 'Internal Data'],
      docLabel: 'Configure repository MCP servers',
      altDocLabel: 'About MCP',
    },
    hooks: {
      name: 'Hooks',
      description: 'Commands executed at documented agent lifecycle points',
      details:
        'Define repository hooks in `.github/hooks/NAME.json` with `version: 1`. Events span ' +
        'sessions, prompts, tools, permissions, compaction, subagents, and agent stops. ' +
        '`preToolUse` can allow, deny, or modify a tool call. Event support differs between ' +
        'Copilot CLI and cloud agent. Hook failures generally continue execution; `preToolUse` ' +
        'errors fail closed, while timeouts remain fail open.',
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
      name: 'GitHub Copilot Plugins',
      description: 'Installable packages for agents, skills, hooks, MCP, and LSP integrations',
      details:
        'A native Copilot plugin starts with `plugin.json` and can include `agents/`, ' +
        '`skills/`, `hooks.json`, `.mcp.json`, and `lsp.json`. Plugins bundle capabilities ' +
        'for installation through Copilot clients and marketplaces. Separately, Agent Plugins ' +
        '1.0 defines a cross-client open standard for portable packages; it complements, but ' +
        'does not replace, GitHub\'s native plugin structure.',
      useCases: ['Reusable Agent Packs', 'Team Standardization', 'Marketplace Distribution'],
      docLabel: 'About Copilot plugins',
      altDocLabel: 'Agent Plugins 1.0 standard',
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Instructions apply automatically within their scope.</strong> Repository-wide, ' +
        'path-specific, agent-specific, personal, and organization guidance serve different boundaries.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skills provide on-demand expertise.</strong> Copilot can select a skill when its ' +
        'instructions and resources match the current task.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hooks execute commands at lifecycle points.</strong> <code>preToolUse</code> can ' +
        'allow, deny, or modify a tool call. Supported events and failure behavior vary by surface.',
    },
    {
      icon: '🔀',
      content:
        '<strong>Copilot can select relevant capabilities.</strong> Clear agent, skill, and tool ' +
        'descriptions help Copilot choose the right expertise for a task.',
    },
  ],

  /* ── Tools page ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Interactive visual guide to GitHub Copilot across IDEs, standalone apps, and GitHub Cloud, including Copilot CLI, cloud agent, code review, third-party agents, Slack, and Teams.',
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
    chatParticipants: 'Relevant files',
    slashCommands: 'Current selection',
    chatVariables: 'Supported tools',
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
    slack: 'Slack',
    teams: 'Teams',
    sharedSession: 'Shared agent session',
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
      path: 'Terminal agent',
      description: 'An agent in your terminal for code, shell, and GitHub workflows',
      details:
        'Start an interactive session with `copilot` or pass one prompt with `copilot -p`. ' +
        'The CLI can edit files, run approved shell commands, and work with GitHub issues, ' +
        'pull requests, and Actions. Plan mode scopes work before edits. `/context`, `/compact`, ' +
        'and automatic compaction manage long sessions. Local and cloud sandboxes are in public ' +
        'preview. The CLI supports instructions, agents, skills, hooks, MCP, plugins, and ' +
        'Copilot Memory in public preview.',
      useCases: ['Issue-to-PR Delivery', 'Legacy Code Modernization', 'Parallel Fleet Execution', 'Backlog Triage & Planning', 'Editor-Agnostic Development', 'Automation'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      path: 'Desktop agent workspace',
      description: 'Desktop workspace for parallel agent sessions and recurring automations',
      details:
        'Run multiple isolated agent sessions across repositories, manage issues and pull requests, ' +
        'and save automations that run on demand or on a schedule. Repository sessions use dedicated ' +
        'worktrees; cloud workspaces are in public preview. The app supports instructions, skills, MCP ' +
        'servers, custom agents, plugins, and canvas extensions. Enterprise-managed settings can govern ' +
        'supported actions and integrations.',
      useCases: ['Agentic Inbox & Triage', 'Agentic Merge (Last-Mile)', 'Parallel Multi-Session Work', 'Repeatable Workflows', 'Dev-Adjacent Collaboration', 'Cross-Repo Orchestration'],
    },
    autocomplete: {
      name: 'Inline Suggestions',
      path: 'IDE inline suggestions',
      description: 'Ghost-text code suggestions that appear inline as you type',
      details:
        'Copilot proposes code from the current editor context as you type. Suggestions can range ' +
        'from a line to a complete function. Next Edit Suggestions predict the next edit location ' +
        'on supported editors. Keyboard shortcuts and feature availability vary by IDE.',
      useCases: ['Code Completion', 'Boilerplate Generation', 'Pattern Completion', 'Comment-to-Code'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      path: 'IDE chat',
      description: 'Conversational AI chat for code questions, explanations, and generation',
      details:
        'Copilot Chat answers questions, explains code, proposes changes, and helps debug. Add ' +
        'relevant files, selections, repository context, or supported tools to focus a request. ' +
        'Keywords, commands, models, and MCP support vary by IDE, so use the current feature matrix ' +
        'for the editor you run.',
      useCases: ['Code Explanation', 'Debugging', 'Test Generation', 'Code Refactoring', 'Learning'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      path: 'IDE agent mode',
      description: 'Autonomous local coding — Copilot determines files, makes edits, runs commands, and iterates',
      details:
        'Agent Mode lets Copilot autonomously edit your code within the IDE. It determines ' +
        'which files to change, makes multi-file edits, proposes terminal commands for approval, ' +
        'and iterates against errors. Supported IDEs can add MCP servers, subagents, and custom ' +
        'agents. Unlike Copilot cloud agent, agent mode works inside your local editor session. ' +
        'AI-credit consumption depends on the selected model and the work performed.',
      useCases: ['Complex Tasks', 'Multi-Step Implementation', 'Error Resolution', 'Build Automation'],
    },
    'third-party-agents-ide': {
      name: 'Third-Party Agent Harnesses',
      path: 'VS Code agent harnesses',
      description: 'Claude and Codex harnesses available inside VS Code',
      details:
        'VS Code can run supported third-party harnesses such as Anthropic Claude and OpenAI ' +
        'Codex. Each harness keeps its provider-specific workflow and capabilities inside the ' +
        'editor. Availability, execution location, permissions, and billing can change, so use ' +
        'the current VS Code agent-harness documentation.',
      useCases: ['Autonomous Coding', 'Security Review', 'Provider-Specific Features', 'Background Tasks'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      path: 'GitHub.com & Mobile',
      description: 'Conversational AI on GitHub.com — ask about repos, issues, PRs, and the web',
      details:
        'Copilot Chat on GitHub.com lets you ask questions from any page — about a repo, ' +
        'an issue, a pull request, or general software topics. It can use repository and web ' +
        'context, selected models, and agent-session information. Chat and Copilot cloud agent ' +
        'can pass context within the active workflow. GitHub Mobile provides access to supported ' +
        'Chat and agent-session experiences.',
      useCases: ['Repo Q&A', 'Issue Analysis', 'PR Understanding', 'Web Search', 'Code Generation'],
    },
    'coding-agent': {
      name: 'Copilot Cloud Agent',
      path: 'GitHub cloud agent',
      description: 'Autonomous repository work in a GitHub-hosted environment',
      details:
        'Delegate work from issues, pull requests, Chat, or the Agents view. Copilot researches ' +
        'the repository, plans, changes code on a branch, validates the result, and opens a pull ' +
        'request for human review. Instructions, MCP, agents, hooks, skills, and Copilot Memory ' +
        '(public preview) can customize the session. Code scanning, secret scanning, dependency ' +
        'checks, and firewall rules are configurable protections, not universal guarantees.',
      useCases: ['Bug Fixes', 'Feature Implementation', 'Test Coverage', 'Technical Debt', 'Security Campaigns'],
    },
    'review-agent': {
      name: 'Copilot Code Review',
      path: 'Pull request review',
      description: 'AI code reviewer with full project context and suggested fixes',
      details:
        'Copilot code review analyzes changes, gathers relevant repository context, and provides ' +
        'comments with suggested fixes. Teams can request reviews manually or configure automatic ' +
        'reviews. Repository instructions, agent skills, and MCP servers are supported; Copilot ' +
        'Memory is in public preview. Availability differs across GitHub and supported IDEs.',
      useCases: ['Code Quality', 'Security Review', 'Best Practices', 'PR Workflow', 'Team Governance'],
    },
    'third-party-agents-cloud': {
      name: 'Third-Party Coding Agents',
      path: 'GitHub third-party agents',
      description: 'Partner coding agents that run alongside Copilot on GitHub',
      details:
        'Third-party coding agents such as Anthropic Claude and OpenAI Codex can work on GitHub ' +
        'alongside Copilot cloud agent. Start supported sessions from GitHub surfaces and review ' +
        'their changes through pull requests. The feature is in public preview and uses cloud-agent ' +
        'security boundaries, with capabilities and billing defined by current product documentation.',
      useCases: ['Multi-Agent Workflows', 'Agent Comparison', 'Specialized Tasks', 'Parallel Development'],
    },
    'slack-teams': {
      name: 'Slack & Teams Collaboration',
      path: 'Slack & Microsoft Teams',
      description: 'Shared cloud-agent sessions started from team conversations',
      details:
        'In public preview, mention `@GitHub` in supported Slack or Microsoft Teams conversations ' +
        'to start or steer a Copilot cloud-agent session. The integration can use conversation ' +
        'context and continues asynchronously in a cloud sandbox. Repository permissions govern ' +
        'who can trigger code changes, and conversation context can be stored with generated ' +
        'artifacts. Use a direct message when you need narrower context.',
      useCases: ['Discussion-to-PR', 'Collaborative Planning', 'Issue Creation'],
      docLabel: 'Slack integration',
      altDocLabel: 'Teams integration',
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent mode is not Copilot cloud agent.</strong> Agent mode works in your local ' +
        'IDE session; cloud agent works asynchronously in a GitHub-hosted environment and returns a pull request.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Third-party agents use different surfaces.</strong> VS Code exposes agent ' +
        'harnesses, while GitHub hosts third-party coding agents alongside Copilot cloud agent.',
    },
    {
      icon: '💬',
      content:
        '<strong>Context controls vary by editor.</strong> Attach only relevant files, selections, ' +
        'repository context, and supported tools before escalating to autonomous work.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Cloud work needs configured protections and human review.</strong> Use repository ' +
        'permissions, firewall rules, scanning controls, tests, and pull-request review together.',
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
    footerDocsLink: 'Optimize AI usage',
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
    customAgents: 'Distinct role + tools → Custom Agents',
    minimalDiff: 'Minimal diff + 3 bullets',
    alwaysOn: 'Always-on',
    costly: 'costly',
    onDemand: 'On-demand',
    efficient: 'efficient',
    enabledTools: 'Required toolsets enabled',
    allToolsEnabled: 'Every toolset enabled',
    taskScoped: 'Scoped to this task',
    loadOnce: 'Load schema once',
    reuseInQueries: 'Reference in subsequent queries',
    tokenPrefixMatch: 'Repeated prefix matches',
    prefixDiffers: 'Prefix changed',
    standard: 'Standard',
    simpleToMini: 'Simple → mini',
    complexToPremium: 'Complex → premium',
    usageBaseline: 'Baseline usage',
    alertBudget: 'Alert-only budget',
    costCenterBudget: 'Cost-center budget',
    perStep: 'per step',
    steps: 'steps',
    accuracy99: '99%',
    accuracy95: '95%',
    lostInMiddle: 'Lost in the middle',
    historyAccumulates: 'History accumulates every turn',
    everyTurnAdds: 'Each turn adds to context',
    reprocessedInput: 'Full history reprocessed as input',
    middleDecay: 'Middle tokens decay',
    startStrong: '✓ Start: strong recall',
    middleLost: '✗ Middle: degraded',
    endStrong: '✓ End: strong recall',
    rawFiles: 'Feed raw files to AI',
    scriptOutput: 'Run script, feed output',
    research: '/research',
    plan: 'Plan mode',
    implement: '/fleet',
    withTests: 'With unit tests',
    withoutTests: 'Without unit tests',
    buggyChange: 'Buggy change',
    silentMerge: 'Silent merge',
    brokenMain: 'Broken main',
    failingTests: 'Failing tests',
    correction: 'Correction',
    succeedingTests: 'Passing tests',
    rawOutput: 'Raw output: 4,200 lines',
    trimmed: 'Trimmed: 38 lines',
    cleanLayers: 'Domain → Application → Infra',
    agentMiss: 'Agent miss',
    rootCause: 'Find root cause',
    durableFix: 'Encode durable fix',
    enterpriseDefault: 'Enterprise default',
    overridableKeys: 'Overridable keys',
    teamSpecialization: 'Team settings',
  },
  tipsLayers: {
    mechanics: {
      title: 'Token Mechanics',
      subtitle: 'Understand the cost drivers behind every Copilot interaction',
    },
    pitfalls: {
      title: 'Pitfalls',
      subtitle: 'Failure modes that quietly degrade output and burn tokens',
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
      name: 'AI Credit Cost Drivers',
      description: 'Input, output, and cached tokens contribute differently by model',
      details:
        'AI-credit usage depends on the selected model and the tokens processed. Input tokens ' +
        'include prompts, instructions, file context, and tool output; output tokens are what ' +
        'the model generates; cached reads can cost less when repeated context is reused. Rates ' +
        'vary by model, so use the live pricing table instead of assuming one fixed ratio.',
      useCases: ['All Interactions', 'Budget Planning', 'Cost Analysis'],
    },
    'agentic-cost': {
      name: 'Agentic Cost Multiplier',
      description: 'Agentic work iterates across planning, tools, validation, and correction',
      details:
        'Agentic experiences (agent mode, Copilot cloud agent, CLI) iterate by design: ' +
        'plan → edit → run tools/tests → fix → repeat. Consumption varies with task scope, ' +
        'model choice, tool output, retries, and stopping conditions. Clear requirements and ' +
        'deterministic validation reduce unnecessary loops.',
      useCases: ['Agent Mode', 'Copilot Cloud Agent', 'CLI Agent'],
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
        'More instructions do not guarantee better output. Define the task and expected outcome, ' +
        'provide the relevant files, logs, or known constraints, state how the result will be ' +
        'validated, and give a clear stopping condition. This structure reduces exploration, ' +
        'scope drift, retries, and unnecessary output.',
      useCases: ['Chat', 'Agent Mode', 'Copilot CLI'],
    },
    'fresh-threads': {
      name: 'Fresh Threads',
      description: 'Start new conversations once decisions are shipped — avoid context rot',
      details:
        'Avoid long-lived sessions where tool outputs pile up in context. Each ' +
        'accumulated tool output can add input tokens to subsequent calls and dilute relevant ' +
        'context. Once you\'ve shipped the ' +
        'decision into a durable artifact (issue, PR description, ADR, code commit), ' +
        'start a fresh thread with a clean context window. In Copilot CLI, `/new` (or ' +
        '`/clear`) starts a fresh conversation; in Chat, open a new chat session.',
      useCases: ['Chat', 'Agent Mode', 'CLI Sessions'],
    },
    'concise-instructions': {
      name: 'Keep Instructions Focused',
      description: 'Prioritize stable project guidance over task-specific detail',
      details:
        'Use repository instructions for the project map, validated build/test/lint commands, ' +
        'stable conventions, and non-negotiable constraints. Remove obsolete or task-specific ' +
        'detail. Put reusable domain playbooks, examples, scripts, and resources in skills so ' +
        'Copilot can load them when relevant.',
      useCases: ['Instructions', 'Cost Optimization', 'All Interactions'],
    },
    'structure-for-reuse': {
      name: 'Structure for Reuse',
      description: 'Use skills for reusable expertise and agents for distinct roles',
      details:
        'Put playbooks, examples, domain rules, scripts, and runbooks into Agent Skills so ' +
        'Copilot can select them for relevant tasks. Use custom agents when a workflow needs a ' +
        'distinct role, tool boundary, or isolated context. Keep broad repository instructions ' +
        'focused on guidance that applies across tasks.',
      useCases: ['Skills', 'Custom Agents', 'Team Workflows'],
    },
    'concise-answers': {
      name: 'Ask for Less',
      description: 'Instruct for the smallest useful answer to minimize output tokens',
      details:
        'Ask for the minimal useful response: "Give me the minimal diff + 3 bullet justification" instead of ' +
        '"explain everything." "List only breaking changes; omit background" when doing ' +
        'upgrades or migrations. Smaller outputs reduce generated tokens and review noise.',
      useCases: ['Chat', 'Code Review', 'Migrations'],
    },
    'scope-context': {
      name: 'Scope Context Intentionally',
      description: 'Attach only the files, selections, and logs the task needs',
      details:
        'Open or attach relevant files and close irrelevant tabs. Include the selected code, ' +
        'error, or failing test output instead of full logs. Context controls and keywords vary ' +
        'by IDE, but the principle is stable: targeted context reduces distraction and AI-credit use.',
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
      name: 'Enable Only Needed Toolsets',
      description: 'Limit MCP tools to the capabilities required for the task',
      details:
        'Large MCP tool collections add context and make tool selection harder. Configure only ' +
        'the GitHub MCP toolsets and external servers needed for the current workflow. Keep a ' +
        'broader catalog available for discovery, but scope enabled tools before starting a task.',
      useCases: ['MCP Servers', 'GitHub MCP Server', 'Context Management'],
    },
    'context-command': {
      name: '/context in CLI',
      description: 'Watch context with /context; compact long sessions with /compact instead of starting over',
      details:
        'In Copilot CLI, use `/context` to see how much of your context window is consumed. ' +
        'When a session grows large but you want to keep going, run `/compact` to summarize ' +
        'the history and shrink the window — optionally focus it, e.g. `/compact focus on ' +
        'the auth module`. When you switch to an unrelated problem, start clean with `/new` ' +
        'or `/clear` instead. Being aware of context consumption helps you decide when to ' +
        'compact, start fresh, or continue.',
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
        'Prompt caching generally depends on repeated prefixes. Stable instructions, tool ' +
        'definitions, and relevant conversation context are more likely to be reused than ' +
        'constantly changing preambles. Treat this as implementation background, not a fixed ' +
        'Copilot token threshold.',
      useCases: ['All Interactions', 'Cost Optimization', 'Performance'],
    },
    'choose-right-model': {
      name: 'Choose Model & Reasoning Level',
      description: 'Match model capability and reasoning effort to task complexity',
      details:
        'Model choice is one of the fastest ways to control cost — use as much capability as ' +
        'the task requires, and as little as necessary. Think in three tiers: reasoning models ' +
        'for architecture decisions, complex debugging, and system design; mid-tier models ' +
        'when the plan is clear and the agent just needs to execute; lighter models for ' +
        'refactoring, formatting, docs, and other routine, well-scoped changes. For models that ' +
        'support configurable reasoning, use regular effort by default and raise it only for ' +
        'harder work because higher effort consumes more AI credits.',
      useCases: ['All Interactions', 'Budget Planning', 'Task Routing'],
    },
    'auto-mode': {
      name: 'Use Auto Mode',
      description: 'Auto routes each prompt to an efficient model, protects your cache, and earns a 10% discount',
      details:
        'When unsure which model to use, select "Auto." A small router analyzes your prompt ' +
        'and sends it to the model that can handle it most efficiently — reserving expensive ' +
        'reasoning models for genuinely complex problems. Auto also protects your cache: it ' +
        'only changes models at natural boundaries (a new session or after `/compact`), never ' +
        'mid-task. On paid Copilot plans, using auto model selection earns a 10% discount on ' +
        'model costs in Chat, CLI, the Copilot app, and cloud agent. A good default for most workflows.',
      useCases: ['Default Workflow', 'Mixed Tasks', 'New Users'],
    },
    'monitor-usage': {
      name: 'Baseline Usage, Then Set Budgets',
      description: 'Use reports, alerts, cost centers, and user limits from observed usage',
      details:
        'Use AI usage reports, including per-model input, output, cache-read, and cache-write ' +
        'breakdowns, to establish a baseline. When history is limited, begin with alert-only ' +
        'budgets and a permissive universal user limit. Add cost-center budgets where ownership ' +
        'is delegated, monitor threshold alerts, and right-size limits from observed patterns.',
      useCases: ['Admin', 'Budget Control', 'Team Governance'],
    },
    'managed-settings-tip': {
      name: 'Specialize Managed Settings by Team',
      description: 'Keep enterprise guardrails fixed while teams customize approved settings',
      details:
        'Start with enterprise defaults in `copilot/managed-settings.json`. Mark only the ' +
        'keys teams may change with `overridable`, map settings files to enterprise team ' +
        'slugs in `copilot/team-mappings.json`, then place approved values under ' +
        '`copilot/teams/`. Unset values fall back to the enterprise default. Non-overridable ' +
        'keys remain locked, while `enabledPlugins` and `extraKnownMarketplaces` combine ' +
        'additively. MCP allow and deny settings can centrally govern servers on supported ' +
        'clients. If a user belongs to multiple mapped teams, team values combine using the ' +
        'least restrictive value beneath the enterprise policy.',
      useCases: ['Platform Teams', 'AI Pioneers', 'Role-Based Tooling'],
      docLabel: 'Configure team-specific settings',
      altDocLabel: 'Managed settings reference',
    },
    'compound-errors': {
      name: 'Compound Error Problem',
      description: 'Hypothetical per-step error rates compound across long workflows',
      details:
        'As an illustration, if each of 50 independent steps were 99% reliable, the hypothetical ' +
        'end-to-end rate would be about 60%; at 95% it would be about 8%. These are mathematical ' +
        'examples, not measured Copilot reliability rates. Smaller scopes and deterministic checks ' +
        'reduce the number of unverified steps.',
      useCases: ['Agent Mode', 'Copilot Cloud Agent', 'Orchestrated Workflows'],
    },
    'context-rot': {
      name: 'Context Rot',
      description: 'Long histories increase cost and can dilute relevant decisions',
      details:
        'Each tool output, file attachment, and conversation turn pile up in the context. ' +
        'Long histories increase input processing and can make older decisions harder to recover. ' +
        'Mitigations: trim verbose tool outputs, ship intermediate decisions into durable ' +
        'artifacts (issues, PRs, ADRs), and start fresh threads before decay sets in.',
      useCases: ['Long Sessions', 'Agent Mode', 'CLI Sessions'],
    },
    'lost-in-middle': {
      name: 'Lost in the Middle',
      description: 'Tokens placed in the middle of a long context are recalled less reliably',
      details:
        'External LLM research found weaker retrieval for information placed in the middle of ' +
        'long contexts. Results vary by model and are not a Copilot reliability guarantee. Keep ' +
        'critical instructions prominent and split unrelated material into focused inputs.',
      useCases: ['Large Prompts', 'Long Documents', 'Multi-File Reviews'],
    },
    'think-in-code': {
      name: 'Think in Code',
      description: 'Prefer scripts over feeding raw files — analyze, then hand the model a summary',
      details:
        'When you need to understand 10,000 lines of logs or a large JSON dump, don\'t ' +
        'paste it all in. Write (or have the agent write) a small script that extracts ' +
        'just what matters — counts, errors, the relevant slice — and feed the agent ' +
        'the script\'s output instead. This keeps the model focused on the actual question. ' +
        'Use grep, jq, awk, or a small script, and batch independent deterministic operations ' +
        'when they can safely run together.',
      useCases: ['Log Analysis', 'Data Exploration', 'Large Files'],
    },
    'research-plan-implement': {
      name: 'Research → Plan → Implement',
      description: 'Separate discovery, agreement, and execution; parallelize independent work',
      details:
        'Use `/research` for documented deep research, plan mode to agree scope and sequence ' +
        'before edits, and implementation only after the plan is clear. Use `/fleet` when a ' +
        'request can be decomposed into independent tasks that run in parallel. Keep each stage ' +
        'focused and pass forward durable findings instead of an entire exploratory history.',
      useCases: ['Complex Refactors', 'Cross-Cutting Changes', 'Multi-File Edits'],
    },
    'deterministic-guardrails': {
      name: 'Validate Copilot Output',
      description: 'Human review and deterministic checks remain required',
      details:
        'Review generated code before production use. Run targeted tests, linters, type checking, ' +
        'code scanning, secret scanning, and IP scanning where applicable. These checks provide ' +
        'deterministic feedback inside an agent loop, while human review verifies intent, design, ' +
        'security, readability, and maintainability.',
      useCases: ['Agent Mode', 'TDD', 'CI Pipelines'],
    },
    'trim-shell-outputs': {
      name: 'Trim Shell Outputs (Carefully)',
      description: 'Drop known noise from verbose commands — but blanket compression often backfires',
      details:
        'CLI tools love verbosity. A single `npm install` or `terraform plan` can dump ' +
        'thousands of lines into the agent\'s context — most of it noise. Wrapping a noisy ' +
        'command so the agent sees only the relevant tail (errors, warnings, the final ' +
        'summary) can help. Two community projects illustrate different forms of compression: **Snip** ' +
        '(github.com/edouard-claude/snip) prefixes shell commands — `snip -- npm install` — ' +
        'to filter verbose output while preserving errors. **Caveman** ' +
        '(github.com/juliusbrussee/caveman) instructs the model to respond in a compressed, ' +
        'telegraphic style. Treat aggressive compression with skepticism because lost information ' +
        'can trigger re-reading and correction. Prefer narrow, deterministic ' +
        'trimming (drop only known-noise lines, always keep errors and the summary) over ' +
        'blanket "shrink everything" approaches, and measure real token usage before adopting a tool.',
      useCases: ['CLI Agent', 'Build Output', 'Test Runs'],
    },
    'apply-architecture': {
      name: 'Apply Good Architecture',
      description: 'Clear boundaries and names reduce unnecessary exploration',
      details:
        'Clear module boundaries, descriptive names, local conventions, and focused tests help ' +
        'people and agents find the right code and validate isolated changes. Choose architecture ' +
        'for the product and team, not for an AI tool; agent efficiency is a useful side effect.',
      useCases: ['New Projects', 'Refactoring', 'Team Codebases'],
    },
    'iterate-configs': {
      name: 'Treat Agent Misses as Incidents',
      description: 'When the agent gets it wrong, fix the config — not just the output',
      details:
        'Treat a significant miss as a small incident. Identify the root cause: missing project ' +
        'guidance, the wrong skill or tool, weak validation, or an environment problem. Encode a ' +
        'durable fix in instructions, skills, tests, or setup so the same failure is less likely ' +
        'to repeat. Chronicle commands are covered separately in the governance layer.',
      useCases: ['Team Workflows', 'CLI Power Users', 'Long-Lived Repos'],
    },
    'project-map': {
      name: 'Give Copilot a Project Map',
      description: 'A maintained AGENTS.md / copilot-instructions.md saves the agent from reading dozens of files',
      details:
        'Without a structural overview, the agent reads large numbers of files just to ' +
        'orient itself — every one of them input tokens. A well-maintained map, such as an ' +
        '`AGENTS.md` or `.github/copilot-instructions.md`, gives it the layout up front: ' +
        'where things live, how modules relate, build/test/lint commands, and key ' +
        'conventions. The agent spends its budget on the actual change instead of ' +
        'exploration, producing shorter sessions and smaller diffs.',
      useCases: ['Onboarding', 'Large Repos', 'All Interactions'],
    },
    'preserve-cache': {
      name: 'Preserve the Cache',
      description: 'Don\'t switch model, reasoning level, or toolset mid-session — it invalidates the cache',
      details:
        'Caching reuses the large, repeated context (system prompt, file contents, tool ' +
        'definitions) across turns, and cached tokens are billed at ~10% of normal input. ' +
        'Three things throw that away and re-bill the full context as fresh input: switching ' +
        'models mid-session (a model can\'t reuse another\'s cache), changing the reasoning ' +
        'level / context size / enabled tools mid-session, and returning to an old session ' +
        'after the cache expires (24h for OpenAI models, ~1h for most others). Pick your ' +
        'model and settings before you start, keep them fixed, and on a stale session start ' +
        'new or `/compact` so what rebuilds is a short summary, not the whole history.',
      useCases: ['Long Sessions', 'CLI', 'Cost Optimization'],
    },
    'cheaper-subagents': {
      name: 'Cheaper Models for Subagents',
      description: 'Run subagents on lighter models — scoped context rarely needs a premium model',
      details:
        'Subagents run in their own session and don\'t inherit the main agent\'s conversation ' +
        'history. Because their context is scoped to a single focused task, a lighter model ' +
        'is usually enough to do the job well. Assigning one to a subagent also doesn\'t touch ' +
        'the main agent\'s cache the way a mid-session model switch would — so you save on the ' +
        'subagent work without paying a cache-rebuild penalty on the main thread.',
      useCases: ['Subagents', 'Orchestrated Workflows', 'Cost Optimization'],
    },
    'chronicle-insights': {
      name: 'Mine Sessions with /chronicle',
      description: 'Turn Copilot CLI session history into summaries and workflow insights',
      details:
        'Use `/chronicle standup` for work summaries, `/chronicle tips` for personalized usage ' +
        'guidance, `/chronicle cost tips` for token-spend feedback, `/chronicle search` for ' +
        'session lookup, and `/chronicle improve` for repository-scoped instruction suggestions. ' +
        'Insights are grounded in Copilot CLI session data. Review the storage, sync, and deletion ' +
        'controls before using session history.',
      useCases: ['CLI', 'Team Governance', 'Continuous Improvement'],
    },
    'session-limits': {
      name: 'Set AI Credit Session Limits',
      description: 'Cap autonomous CLI and SDK work before a session starts',
      details:
        'Use `--max-ai-credits` for non-interactive Copilot CLI runs, `/limits set ' +
        'max-ai-credits` for interactive CLI sessions, or `sessionLimits.maxAiCredits` in the ' +
        'Copilot SDK. Usage is recorded after each model call, so the configured amount is a ' +
        'soft cap that a session can slightly overshoot, not a hard stop. Session limits bound ' +
        'unattended or long-running work and complement budgets, alerts, and human approval.',
      useCases: ['Copilot CLI', 'Copilot SDK', 'Autonomous Work'],
    },
    'mcp-governance': {
      name: 'Govern MCP Access',
      description: 'Curate servers and protect configuration across supported surfaces',
      details:
        'Use approved MCP registries and enterprise allow or deny settings where supported. ' +
        'Protect repository MCP configuration with review controls and document server owners, ' +
        'scopes, and data access. Enforcement differs across IDEs, CLI, the Copilot app, and ' +
        'cloud agent, so treat registries as governance and discovery rather than a universal ' +
        'security boundary.',
      useCases: ['Enterprise Governance', 'Approved Tooling', 'Data Access'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>Quality compounds.</strong> Hypothetical per-step reliability drops across a ' +
        'long chain, so use smaller scopes and deterministic checks. The percentages shown are illustrations, not Copilot measurements.',
    },
    {
      icon: '💰',
      content:
        '<strong>Keep context lean and relevant.</strong> Trim files and tool output, start fresh ' +
        'threads for unrelated work, and use scoped context to reduce AI-credit use.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Match model and reasoning effort to the task.</strong> Use regular effort by ' +
        'default, raise it for hard problems, and use Auto when you want intent-based routing.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Agentic loops multiply work.</strong> Define a clear stopping condition and use ' +
        'session limits for unattended or extended tasks.',
    },
    {
      icon: '📦',
      content:
        '<strong>Move specialized guidance out of broad instructions.</strong> Use Skills for ' +
        'reusable expertise and custom agents for distinct roles, tools, or isolated context.',
    },
  ],
};
