import type { Translations } from './types';

export const de: Translations = {
  locale: 'de',
  seo: {
    title: '.github/ Composable Stack — Copilot Composable System',
    description: 'Interaktiver visueller Leitfaden zum GitHub Copilot Composable System — entdecke die 4 Schichten: Always-On-Kontext, On-Demand-Fähigkeiten, Durchsetzung & Automatisierung und Distribution.',
  },
  ui: {
    heroTitle: 'Composable Stack',
    layerPrefix: 'SCHICHT',
    insightsTitle: 'Wie das System tatsächlich funktioniert',
    insightsSubtitle: 'Wichtige Architektur-Einblicke, die die meisten Teams übersehen',
    detailsLabel: 'Details',
    useCasesLabel: 'Anwendungsfälle',
    documentationLabel: 'Dokumentation',
    footerBuiltFor: 'Entwickelt für GitHub Copilot Nutzer',
    footerDocsLink: 'Vollständige Dokumentation zum Composable System',
  },
  viz: {
    alwaysActive: 'Immer aktiv',
    loadsAutomatically: '— wird automatisch in jede Konversation geladen',
    planning: 'Planung',
    implementation: 'Implementierung',
    review: 'Review',
    descriptionRead: 'Beschreibung aus SKILL.md-Frontmatter gelesen',
    fullSkillInjected: 'Vollständige SKILL.md wird bei Relevanz in den Kontext eingefügt',
    approveDeny: 'genehmigen / ablehnen',
    markdownToActions: '# Markdown → GitHub Actions YAML',
    pluginJson: 'plugin.json',
    marketplace: 'Marketplace',
    gitRepo: 'Git-Repo',
    localPath: 'Lokaler Pfad',
  },
  layers: {
    'always-on-context': {
      title: 'Always-On-Kontext',
      subtitle: 'Passiver Speicher, der automatisch in jede Konversation geladen wird',
    },
    'on-demand-capabilities': {
      title: 'On-Demand-Fähigkeiten',
      subtitle: 'Wird explizit vom Entwickler aufgerufen oder vom Modell ausgewählt',
    },
    'enforcement-automation': {
      title: 'Durchsetzung & Automatisierung',
      subtitle: 'Deterministische Leitplanken und CI/CD-Orchestrierung',
    },
    distribution: {
      title: 'Distribution',
      subtitle: 'Agent-Stacks teamübergreifend und über Repos hinweg paketieren und teilen',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Passiver Speicher, der automatisch auf jeden Prompt angewendet wird',
      details:
        'Instructions sind die Grundlage der Copilot-Anpassung. Sie werden ZUERST geladen ' +
        'und sind ein immer aktiver, passiver Speicher. Platziere repo-weite Konventionen in ' +
        '`.github/copilot-instructions.md` und pfadspezifische Anweisungen in ' +
        '`.github/instructions/NAME.instructions.md` (mit `applyTo`-Glob im Frontmatter). ' +
        'Diese sind beratend — sie lenken das Modell, erzwingen aber kein deterministisches ' +
        'Verhalten.',
      useCases: ['Coding-Standards', 'Framework-Regeln', 'Repo-Konventionen'],
    },
    'prompt-files': {
      name: 'Prompt Files',
      description: 'Manuell über Slash-Befehle aufgerufen',
      details:
        'Prompt Files sind wiederverwendbare Prompt-Vorlagen, die mit Slash-Befehlen aufgerufen ' +
        'werden (z.\u00A0B. `/security-review`, `/release-notes`). Sie ermöglichen es Teams, ' +
        'häufige Prompts zu standardisieren, damit jeder Entwickler konsistente, hochwertige ' +
        'Ergebnisse für wiederkehrende Aufgaben erhält.',
      useCases: ['API-Review', 'Performance-Audit', 'Onboarding-Leitfaden'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Spezialisierte Personas mit eigenen Tools und MCP-Servern',
      details:
        'Custom Agents sind spezialisierte Personas, die in Markdown mit YAML-Frontmatter ' +
        'definiert werden. Jedes Profil gibt eine `description`, eine `tools`-Liste, ' +
        'optionale `mcp-servers` und eine `model`-Präferenz an. Agenten können über die ' +
        '`handoffs`-Eigenschaft verkettet werden — z.\u00A0B. übergibt ein Planungsagent an ' +
        'einen Implementierungsagenten, der wiederum an einen Review-Agenten übergibt. ' +
        'Das LLM liest Agentenbeschreibungen, um zu entscheiden, welcher aktiviert wird.',
      useCases: ['Security-Auditor', 'Datenbank-Spezialist', 'API-Designer'],
    },
    skills: {
      name: 'Skills',
      description: 'Eigenständige Ordner mit Anweisungen, Skripten & Ressourcen — automatisch vom LLM geladen, wenn relevant',
      details:
        'Anders als andere On-Demand-Features, die vom Benutzer aufgerufen werden, werden Skills ' +
        'autonom vom LLM ausgewählt. Jeder Skill ist ein Ordner mit einer `SKILL.md`-Datei ' +
        '(Name + Beschreibung im YAML-Frontmatter, Anweisungen im Markdown-Body) plus ' +
        'optionalen Skripten und Ressourcen. Das Modell liest die Skill-Beschreibungen, um zu ' +
        'entscheiden, welche aktiviert werden — erst dann wird die vollständige `SKILL.md` in ' +
        'den Kontext eingefügt. Keine Benutzeraktion erforderlich. Projekt-Skills in ' +
        '`.github/skills/<name>/` und persönliche Skills in `~/.copilot/skills/<name>/` ablegen.',
      useCases: ['Terraform-Module', 'K8s-Manifeste', 'Observability-Stack'],
    },
    hooks: {
      name: 'Hooks',
      description: 'Deterministische Shell-Befehle an 6 Lifecycle-Events',
      details:
        'Hooks sind das EINZIGE deterministische Primitiv im Copilot-System. Sie lösen an ' +
        'sechs Lifecycle-Punkten aus: `sessionStart`, `sessionEnd`, ' +
        '`userPromptSubmitted`, `preToolUse`, `postToolUse` und `errorOccurred`. ' +
        'Der `preToolUse`-Hook kann Tool-Ausführungen genehmigen oder ablehnen, bevor sie ' +
        'stattfinden. Hooks werden in einer JSON-Datei unter `.github/hooks/` mit `version: 1` ' +
        'definiert. Anders als Instructions (die beratend sind) sind Hooks Durchsetzung.',
      useCases: ['Policy-Gates', 'Dateizugriffskontrollen', 'Audit-Logging'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Repository-Automatisierung durch KI-Coding-Agenten, die in GitHub Actions mit Leitplanken laufen',
      details:
        'Agentic Workflows sind Markdown-Dateien mit YAML-Frontmatter (Berechtigungen, ' +
        'Safe-Outputs, Trigger), die über die `gh aw`-CLI-Erweiterung zu GitHub Actions ' +
        'kompiliert werden. Automatisierung in natürlicher Sprache definieren — tägliche ' +
        'Berichte planen, Issues triagieren, CI-Fehler analysieren oder Dokumentation pflegen. ' +
        'Agenten laufen standardmäßig mit Leserechten; Schreiboperationen erfordern explizite ' +
        'Safe-Output-Genehmigung. Die Ausführung ist sandboxed mit Tool-Allowlisting ' +
        'und Netzwerkisolation. Funktioniert mit GitHub Copilot, Claude oder OpenAI Codex.',
      useCases: ['Issue-Triage', 'CI-Fehleranalyse', 'Tägliche Statusberichte'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'GitHub Actions Workflow, der die Umgebung des Coding-Agenten vorkonfiguriert',
      details:
        'Copilot Setup Steps ist ein spezieller GitHub Actions Workflow unter ' +
        '`.github/workflows/copilot-setup-steps.yml`, der ausgeführt wird, bevor der ' +
        'Coding-Agent mit der Arbeit beginnt. Verwende ihn, um Tools, Abhängigkeiten oder ' +
        'den Runner deterministisch zu installieren und zu konfigurieren — damit der Agent ' +
        'sofort bauen, testen und linten kann, ohne Trial-and-Error. Du kannst auch auf ' +
        'größere Runner upgraden, zu Windows wechseln, Git LFS aktivieren oder Umgebungsvariablen ' +
        'über die `copilot` Actions-Umgebung setzen. Der Workflow muss einen einzelnen ' +
        '`copilot-setup-steps`-Job enthalten und greift nur, wenn er auf dem Standardbranch vorhanden ist.',
      useCases: ['Abhängigkeiten vorinstallieren', 'Größere Runner', 'Umgebungsvariablen'],
    },
    plugins: {
      name: 'Plugins',
      description: 'Installierbare Pakete, die Agents, Skills, Hooks & MCP-Konfigurationen bündeln',
      details:
        'Plugins sind verteilbare Pakete, die Copilot CLI erweitern. Jedes Plugin kann ' +
        'Custom Agents, Skills, Hooks, MCP-Server-Konfigurationen und LSP-Server-Konfigurationen ' +
        'enthalten. Installiere sie aus registrierten Marketplaces (wie `copilot-plugins` ' +
        'oder `awesome-copilot`), direkt aus einem Git-Repo oder von einem lokalen Pfad. ' +
        'Erstelle deinen eigenen Marketplace, um teamspezifische Stacks zu teilen.',
      useCases: ['Projektübergreifende Wiederverwendung', 'Team-Standardisierung', 'Marketplace-Distribution'],
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Instructions werden ZUERST geladen</strong> — sie sind immer aktiver, passiver Speicher. ' +
        'Jeder Prompt sieht sie, bevor irgendetwas anderes ausgeführt wird.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skills werden bei Bedarf geladen</strong> — Copilot liest zunächst nur die <code>description</code> im ' +
        'SKILL.md-Frontmatter. Die vollständige Datei wird erst dann in den Kontext des Agenten eingefügt, wenn ' +
        'das Modell entscheidet, dass der Skill für deinen Prompt relevant ist.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hooks sind das einzige deterministische Primitiv.</strong> Instructions sind ' +
        'beratend. Hooks sind Durchsetzung — 6 Lifecycle-Events, darunter <code>preToolUse</code>, der ' +
        'Tool-Ausführungen genehmigen oder ablehnen kann, bevor sie stattfinden.',
    },
    {
      icon: '🔀',
      content:
        '<strong>Das LLM ist der Router.</strong> Es gibt keinen separaten Orchestrator — das ' +
        'Modell liest indizierte Agentenbeschreibungen und Skill-Frontmatter, um zu entscheiden, ' +
        'was aktiviert wird. Deshalb sind gute Beschreibungen so wichtig.',
    },
  ],
};
