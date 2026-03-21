export interface Component {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
  details: string;
  useCases: string[];
  docUrl: string;
  flowTo?: string[];
}

export interface Layer {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  components: Component[];
}

export const layers: Layer[] = [
  // ── Layer 1 — Always-On Context ──────────────────────────────────
  {
    id: "always-on-context",
    number: 1,
    title: "Always-On Context",
    subtitle: "Passive memory loaded into every conversation automatically",
    color: "#58a6ff",
    components: [
      {
        id: "instructions",
        name: "Instructions",
        path: ".github/copilot-instructions.md + .github/instructions/*.instructions.md",
        icon: "🧠",
        description: "Passive memory that automatically applies to every prompt",
        details:
          "Instructions are the foundation of Copilot customization. They load FIRST " +
          "and are always-on passive memory. Place repo-wide conventions in " +
          "`.github/copilot-instructions.md` and scoped instructions in " +
          "`.github/instructions/*.instructions.md`. These are advisory — they guide " +
          "the model but don't enforce behavior deterministically.",
        useCases: ["Coding Standards", "Framework Rules", "Repo Conventions"],
        docUrl:
          "https://docs.github.com/en/copilot/customizing-copilot/adding-repository-instructions-for-github-copilot",
      },
    ],
  },

  // ── Layer 2 — On-Demand Capabilities ─────────────────────────────
  {
    id: "on-demand-capabilities",
    number: 2,
    title: "On-Demand Capabilities",
    subtitle: "Invoked explicitly by the developer or selected by the model",
    color: "#3fb950",
    components: [
      {
        id: "prompt-files",
        name: "Prompt Files",
        path: ".github/prompts/*.prompt.md",
        icon: "📋",
        description: "Manually invoked via slash commands",
        details:
          "Prompt files are reusable prompt templates invoked with slash commands " +
          "(e.g., `/security-review`, `/release-notes`). They let teams standardize " +
          "common prompts so every developer gets consistent, high-quality outputs " +
          "for recurring tasks.",
        useCases: ["/security-review", "/release-notes", "/changelog"],
        docUrl:
          "https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompt-files",
      },
      {
        id: "custom-agents",
        name: "Custom Agents",
        path: ".github/agents/*.agent.md",
        icon: "🤖",
        description:
          "Specialist personas with their own tools and MCP servers",
        details:
          "Custom agents are specialist personas defined in Markdown. Each agent can " +
          "have its own set of MCP servers and tools. Agents can be chained via " +
          "handoffs — e.g., a planning agent hands off to an implementation agent, " +
          "which hands off to a review agent. The LLM reads agent descriptions to " +
          "decide which to activate — writing good descriptions matters.",
        useCases: ["Planning Agent", "Implementation Agent", "Review Agent"],
        docUrl:
          "https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-in-vs-code/using-custom-agents",
      },
      {
        id: "skills",
        name: "Skills",
        path: ".github/skills/<name>/SKILL.md",
        icon: "🧩",
        description: "Self-contained folded logic — progressively loaded",
        details:
          "Skills are self-contained folders with instructions, scripts, and " +
          "references. They are INDEXED but not loaded — Copilot reads the " +
          "description first and only injects full instructions when relevant to " +
          "the prompt. This progressive loading is key: write clear, specific " +
          "descriptions in SKILL.md frontmatter so the model can match skills to " +
          "user intent.",
        useCases: [
          "Repeatable Runbooks",
          "Incident Triage",
          "IaC Risk Analysis",
        ],
        docUrl:
          "https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-in-vs-code/using-copilot-skills",
      },
    ],
  },

  // ── Layer 3 — Enforcement & Automation ───────────────────────────
  {
    id: "enforcement-automation",
    number: 3,
    title: "Enforcement & Automation",
    subtitle: "Deterministic guardrails and CI/CD-level orchestration",
    color: "#d29922",
    components: [
      {
        id: "hooks",
        name: "Hooks",
        path: ".github/hooks/*.json",
        icon: "🔒",
        description: "Deterministic shell commands at lifecycle events",
        details:
          "Hooks are the ONLY deterministic primitive in the Copilot system. They " +
          "fire at every lifecycle point — preToolUse, postToolUse, errorOccurred, " +
          "and more. The preToolUse hook can approve or deny tool executions before " +
          "they happen. Unlike instructions (which are advisory), hooks are " +
          "enforcement. Use them for policy gates, file access controls, and audit " +
          "logging.",
        useCases: ["Policy Gates", "File Access Controls", "Audit Logging"],
        docUrl:
          "https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-in-vs-code/using-copilot-hooks",
      },
      {
        id: "agentic-workflows",
        name: "Agentic Workflows",
        path: ".github/workflows/ (as Markdown .md sources)",
        icon: "⚙️",
        description: "Natural language automation compiled to GitHub Actions",
        details:
          "Agentic workflows are written as Markdown and compiled to GitHub Actions " +
          "YAML via `gh aw`. They run with read-only permissions by default. This " +
          "brings natural language automation to CI/CD — describe what you want in " +
          "plain English, and it becomes a GitHub Action.",
        useCases: [
          "Issue Triage",
          "CI Failure Analysis",
          "Scheduled Maintenance",
        ],
        docUrl:
          "https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent",
      },
    ],
  },

  // ── Layer 4 — Distribution ───────────────────────────────────────
  {
    id: "distribution",
    number: 4,
    title: "Distribution",
    subtitle: "Package and share agent stacks across teams and repos",
    color: "#bc8cff",
    components: [
      {
        id: "plugins",
        name: "Plugins",
        path: "Bundling agents + skills + commands",
        icon: "📦",
        description: "Decentralized packaging for sharing agent stacks",
        details:
          "Plugins bundle agents, skills, and commands into distributable packages. " +
          "They enable decentralized packaging — host on your own repo or list in " +
          "the marketplace. This is how platform engineering teams share " +
          "team-specific agent stacks across repositories.",
        useCases: [
          "Share Team Agent Stacks",
          "List in Marketplace",
          "Cross-Repo Distribution",
        ],
        docUrl: "https://docs.github.com/en/copilot/concepts/agents",
      },
    ],
  },
];

export function getComponentById(id: string): Component | undefined {
  for (const layer of layers) {
    const comp = layer.components.find((c) => c.id === id);
    if (comp) return comp;
  }
  return undefined;
}
