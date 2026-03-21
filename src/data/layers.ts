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
          "`.github/copilot-instructions.md` and path-specific instructions in " +
          "`.github/instructions/NAME.instructions.md` (with `applyTo` glob frontmatter). " +
          "These are advisory — they guide the model but don't enforce behavior " +
          "deterministically.",
        useCases: ["Coding Standards", "Framework Rules", "Repo Conventions"],
        docUrl:
          "https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=vscode",
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
          "https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=vscode&search-overlay-input=copilot+custom+prompts&search-overlay-ask-ai=true#enabling-and-using-prompt-files",
      },
      {
        id: "custom-agents",
        name: "Custom Agents",
        path: ".github/agents/*.agent.md",
        icon: "🤖",
        description:
          "Specialist personas with their own tools and MCP servers",
        details:
          "Custom agents are specialist personas defined in Markdown with YAML " +
          "frontmatter. Each profile specifies a `description`, `tools` list, " +
          "optional `mcp-servers`, and a `model` preference. Agents can be chained " +
          "via the `handoffs` property — e.g., a planning agent hands off to an " +
          "implementation agent, which hands off to a review agent. The LLM reads " +
          "agent descriptions to decide which to activate.",
        useCases: ["Planning Agent", "Implementation Agent", "Review Agent"],
        docUrl:
          "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents",
      },
      {
        id: "skills",
        name: "Skills",
        path: ".github/skills/<name>/SKILL.md",
        icon: "🧩",
        description: "Self-contained folders of instructions, scripts & resources — loaded on demand",
        details:
          "Skills are folders with a `SKILL.md` file (name + description in YAML " +
          "frontmatter, instructions in Markdown body) plus optional scripts and " +
          "resources. Copilot decides when to use a skill based on its `description` " +
          "field — only then is the full `SKILL.md` injected into the agent's context. " +
          "Store project skills in `.github/skills/<name>/` and personal skills in " +
          "`~/.copilot/skills/<name>/`.",
        useCases: [
          "Repeatable Runbooks",
          "Incident Triage",
          "IaC Risk Analysis",
        ],
        docUrl:
          "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills",
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
        description: "Deterministic shell commands at 6 lifecycle events",
        details:
          "Hooks are the ONLY deterministic primitive in the Copilot system. They " +
          "fire at six lifecycle points: `sessionStart`, `sessionEnd`, " +
          "`userPromptSubmitted`, `preToolUse`, `postToolUse`, and `errorOccurred`. " +
          "The `preToolUse` hook can approve or deny tool executions before they " +
          "happen. Define hooks in a JSON file in `.github/hooks/` with `version: 1`. " +
          "Unlike instructions (which are advisory), hooks are enforcement.",
        useCases: ["Policy Gates", "File Access Controls", "Audit Logging"],
        docUrl:
          "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks",
        altDocUrl: "https://code.visualstudio.com/docs/copilot/customization/hooks",
        altDocLabel: "VS Code Hooks Guide",
      },
      {
        id: "agentic-workflows",
        name: "Agentic Workflows",
        path: ".github/workflows/ (as Markdown .md sources)",
        icon: "⚙️",
        description: "Natural language automation via the gh aw CLI extension",
        details:
          "Agentic workflows are Markdown files with YAML frontmatter (permissions, " +
          "safe-outputs, triggers) compiled to GitHub Actions via the `gh aw` CLI " +
          "extension. They run with read-only permissions by default; write " +
          "operations require explicit safe-output approval. Agents execute in " +
          "sandboxed containers with tool allowlisting and network isolation.",
        useCases: [
          "Issue Triage",
          "CI Failure Analysis",
          "Scheduled Maintenance",
        ],
        docUrl:
          "https://github.github.com/gh-aw/",
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
        path: ".github/plugin/plugin.json (or repo root)",
        icon: "📦",
        description: "Installable packages bundling agents, skills, hooks & MCP configs",
        details:
          "Plugins are distributable packages that extend Copilot CLI. Each plugin " +
          "can contain custom agents, skills, hooks, MCP server configs, and LSP " +
          "server configs. Install from registered marketplaces (like `copilot-plugins` " +
          "or `awesome-copilot`), directly from a Git repo, or from a local path. " +
          "Create your own marketplace to share team-specific stacks.",
        useCases: [
          "Reuse Across Projects",
          "Team Standardization",
          "Marketplace Distribution",
        ],
        docUrl: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing",
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
