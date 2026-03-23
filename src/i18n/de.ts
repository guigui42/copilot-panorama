import type { Translations } from './types';

export const de: Translations = {
  locale: 'de',
  seo: {
    title: 'Copilot Panorama — .github/ Stack',
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
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Link teilen',
    shareCopied: 'Kopiert!',
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

  /* ── Tools-Seite ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Interaktiver visueller Leitfaden zu GitHub Copilot Tools auf drei Ebenen: Terminal (CLI), IDE (Autocomplete, Chat, Agent Mode, Drittanbieter-Agenten) und Cloud (Coding Agent, Review Agent, Drittanbieter-Agenten).',
  },
  toolsUi: {
    heroTitle: 'Copilot Everywhere',
    insightsTitle: 'Wichtige Unterschiede, die die meisten Entwickler übersehen',
    insightsSubtitle: 'Architektur-Einblicke über die drei Ebenen',
    footerBuiltFor: 'Entwickelt für GitHub Copilot Nutzer',
    footerDocsLink: 'Vollständige Dokumentation zu Copilot-Funktionen',
  },
  toolsViz: {
    interactive: 'Interaktiv',
    programmatic: 'Programmatisch',
    ghostText: 'Ghost-Text',
    tabToAccept: 'Tab zum Übernehmen',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: 'Analysieren',
    edit: 'Bearbeiten',
    run: 'Ausführen',
    fix: 'Beheben',
    local: 'Lokal',
    cloud: 'Cloud',
    issueAssigned: 'Issue zugewiesen',
    agentCodes: 'Agent programmiert',
    prCreated: 'PR erstellt',
    securityChecks: 'Sicherheitsprüfungen',
    addReviewer: 'Reviewer hinzufügen',
    reviewComments: 'Review-Kommentare',
    suggestedFixes: 'Vorgeschlagene Korrekturen',
    selectAgent: 'Agent auswählen',
    askAnything: 'Frag was du willst',
    repoContext: 'Repo-Kontext',
    webSearch: 'Websuche',
  },
  toolsLayers: {
    terminal: {
      title: 'Terminal',
      subtitle: 'KI-gesteuerter Coding-Agent direkt in deiner Kommandozeile',
    },
    ide: {
      title: 'IDE',
      subtitle: 'Inline-Vorschläge, Chat, autonomes Editieren und Drittanbieter-Agenten in deinem Editor',
    },
    cloud: {
      title: 'Cloud',
      subtitle: 'Autonome Agenten auf der GitHub-Plattform — Coding, Review und Drittanbieter',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      description: 'Ein vollständiger KI-Agent in deinem Terminal — interaktive Sitzungen, Dateibearbeitung und GitHub-Integration',
      details:
        'GitHub Copilot CLI ermöglicht die Nutzung von Copilot direkt im Terminal. Starte eine ' +
        'interaktive Sitzung mit `copilot` oder übergib einen einzelnen Prompt mit `copilot -p "..."`. ' +
        'Es kann lokale Dateien bearbeiten, Shell-Befehle ausführen, mit GitHub.com interagieren (PRs erstellen, ' +
        'Issues verwalten, Workflows steuern) und iterativ mit dir zusammenarbeiten. Unterstützt Plan Mode ' +
        '(Shift+Tab) für strukturierte Implementierung, MCP-Server, Custom Agents, Skills, ' +
        'Hooks und automatische Kontextkomprimierung für unbegrenzte Sitzungen.',
      useCases: ['Issue-to-PR-Lieferung', 'Legacy-Code-Modernisierung', 'Parallele Fleet-Ausführung', 'Backlog-Triage & Planung', 'Editor-agnostische Entwicklung', 'Automatisierung'],
    },
    autocomplete: {
      name: 'Autocomplete',
      description: 'Ghost-Text-Codevorschläge, die beim Tippen inline erscheinen',
      details:
        'Copilot bietet Autocomplete-Vorschläge beim Tippen an — vollständige Funktionskörper, ' +
        'Schleifen, Bedingungen und mehr basierend auf deinem Code-Kontext. Blättere durch Alternativen mit ' +
        'Alt+] / Alt+[, übernimm wortweise mit Strg+→ oder akzeptiere vollständige Vorschläge mit Tab. ' +
        'Next Edit Suggestions (NES) sagen den Ort deiner nächsten Bearbeitung voraus und schlagen ' +
        'Vervollständigungen dafür vor. Verfügbar in VS Code, Visual Studio, JetBrains-IDEs, Azure Data ' +
        'Studio, Xcode, Vim/Neovim und Eclipse.',
      useCases: ['Code-Vervollständigung', 'Boilerplate-Generierung', 'Mustervervollständigung', 'Kommentar-zu-Code'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      description: 'Konversationelle KI-Chat-Oberfläche für Code-Fragen, Erklärungen und Generierung',
      details:
        'Copilot Chat bietet eine konversationelle Oberfläche für Coding-Fragen. Nutze ' +
        'Chat-Teilnehmer (@workspace, @github, @terminal), Slash-Befehle (/fix, /explain, ' +
        '/tests, /doc) und Chat-Variablen (#file, #selection, #web) für präzisen Kontext. ' +
        'Der @github-Teilnehmer ermöglicht Websuche, Issue-Abfragen und PR-Analyse. Unterstützt ' +
        'mehrere KI-Modelle — wechsle mitten im Gespräch über die Modellauswahl. Verfügbar in ' +
        'VS Code, Visual Studio, JetBrains, Eclipse, Xcode, GitHub.com und GitHub Mobile.',
      useCases: ['Code-Erklärung', 'Debugging', 'Test-Generierung', 'Code-Refactoring', 'Lernen'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      description: 'Autonomes lokales Coding — Copilot bestimmt Dateien, nimmt Änderungen vor, führt Befehle aus und iteriert',
      details:
        'Agent Mode lässt Copilot deinen Code in der IDE autonom bearbeiten. Er bestimmt, ' +
        'welche Dateien geändert werden, nimmt Änderungen über mehrere Dateien vor, schlägt Terminal-Befehle vor ' +
        'und führt sie aus, und iteriert zur Fehlerbehebung, bis die Aufgabe abgeschlossen ist. Unterstützt MCP-Server-' +
        'Integration, Subagenten für delegierte Teilaufgaben und Custom Agents. Nur deine Prompts ' +
        'werden abgerechnet — Folge-Tool-Aufrufe sind kostenlos. Nicht zu verwechseln mit dem Copilot Coding Agent ' +
        '(Cloud-Ebene), der auf GitHub Actions läuft.',
      useCases: ['Komplexe Aufgaben', 'Mehrstufige Implementierung', 'Fehlerbehebung', 'Build-Automatisierung'],
    },
    'third-party-agents-ide': {
      name: 'Drittanbieter-Agenten',
      description: 'Claude- und Codex-Agenten, die in VS Code mit ihren nativen SDKs laufen',
      details:
        'Drittanbieter-Agenten von Anthropic (Claude) und OpenAI (Codex) laufen direkt in VS Code ' +
        'mit dem jeweiligen nativen SDK und Agent-Harness. Wähle zwischen lokalen Sitzungen ' +
        '(in deinem Workspace) oder Cloud-Sitzungen (Remote-Umgebung). Claude unterstützt ' +
        'Slash-Befehle (/agents, /hooks, /memory, /review, /security-review), Berechtigungsmodi ' +
        '(automatisch bearbeiten, Genehmigung anfordern, planen) und persistenten Kontext über ' +
        'CLAUDE.md. Alles wird über dein Copilot-Abonnement abgerechnet — kein separates Provider-Setup nötig.',
      useCases: ['Autonomes Coding', 'Sicherheits-Review', 'Provider-spezifische Funktionen', 'Hintergrundaufgaben'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      description: 'Konversationelle KI auf GitHub.com — Fragen zu Repos, Issues, PRs und dem Web',
      details:
        'Copilot Chat auf GitHub.com ermöglicht es dir, von jeder Seite aus Fragen zu stellen — ' +
        'zu einem Repo, einem Issue, einem PR oder allgemeinen Software-Themen. Es nutzt Skills, um ' +
        'Kontext von GitHub abzurufen (Code-Suche, Commit-Verlauf, Issue-Details) und optional die ' +
        'Bing-Websuche für aktuelle Informationen. Unterstützt Multi-Modell-Auswahl, Unterthreads ' +
        'zum Verzweigen von Konversationen, Dateigenerierung mit Vorschau und Konversationsverlauf ' +
        '(bis zu 100 Threads, 28 Tage Aufbewahrung). Auch auf GitHub Mobile verfügbar.',
      useCases: ['Repo-Fragen', 'Issue-Analyse', 'PR-Verständnis', 'Websuche', 'Code-Generierung'],
    },
    'coding-agent': {
      name: 'Coding Agent',
      description: 'Autonomer Cloud-Agent — weise ein Issue zu und erhalte einen PR mit Sicherheitsprüfungen',
      details:
        'Der Copilot Coding Agent arbeitet eigenständig in einer GitHub-Actions-Umgebung. ' +
        'Weise ein Issue an @copilot zu, erwähne ihn in einem PR oder starte aus dem Chat — er bewertet ' +
        'die Aufgabe, nimmt Änderungen vor, führt Tests und Linter aus, führt eine CodeQL-Sicherheitsanalyse durch, ' +
        'prüft auf Secrets und erstellt einen Draft-PR zur Überprüfung. Unterstützt Custom Instructions, ' +
        'MCP-Server, Custom Agents, Hooks, Skills und Copilot Memory. Pusht nur auf ' +
        '`copilot/`-Branches. Verfügbar für Pro, Pro+, Business und Enterprise.',
      useCases: ['Fehlerbehebungen', 'Feature-Implementierung', 'Testabdeckung', 'Technische Schulden', 'Sicherheitskampagnen'],
    },
    'review-agent': {
      name: 'Review Agent',
      description: 'KI-Code-Reviewer mit vollständigem Projektkontext und vorgeschlagenen Korrekturen',
      details:
        'Copilot Code Review analysiert Pull Requests und gibt Feedback mit vorgeschlagenen ' +
        'Änderungen, die du mit einem Klick übernehmen kannst. Nutzt agentische Fähigkeiten für vollständiges ' +
        'Projektkontext-Gathering — es analysiert dein gesamtes Repository, um Code-Änderungen zu verstehen. ' +
        'Kann für automatische Reviews bei allen PRs konfiguriert werden. Unterstützt Custom Instructions ' +
        'über .github/copilot-instructions.md und pfadspezifische Regeln. Verfügbar auf GitHub.com, ' +
        'GitHub Mobile, VS Code, Visual Studio, Xcode und JetBrains.',
      useCases: ['Code-Qualität', 'Sicherheits-Review', 'Best Practices', 'PR-Workflow', 'Team-Governance'],
    },
    'third-party-agents-cloud': {
      name: 'Drittanbieter-Agenten',
      description: 'Anthropic Claude und OpenAI Codex als Cloud-Coding-Agenten auf GitHub',
      details:
        'Drittanbieter-Coding-Agenten arbeiten neben dem Copilot Coding Agent auf der GitHub-Plattform. ' +
        'Aktuell werden Anthropic Claude (Claude Agent SDK) und OpenAI Codex (Codex SDK) unterstützt. ' +
        'Weise Issues zu, starte Aufgaben über den Agents-Tab, erwähne @AGENT_NAME in PRs oder ' +
        'starte Sitzungen aus VS Code und GitHub Mobile. Unterliegt denselben Sicherheitsmechanismen ' +
        'wie der Copilot Coding Agent. Jede Sitzung verbraucht eine Premium-Anfrage plus ' +
        'GitHub-Actions-Minuten. Derzeit in der öffentlichen Vorschau.',
      useCases: ['Multi-Agent-Workflows', 'Agenten-Vergleich', 'Spezialisierte Aufgaben', 'Parallele Entwicklung'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Coding Agent.</strong> Agent Mode läuft lokal in deiner IDE — ' +
        'du bleibst im Loop. Der Coding Agent läuft auf GitHub Actions in der Cloud — er arbeitet ' +
        'eigenständig und erstellt einen PR, wenn er fertig ist.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Drittanbieter-Agenten gibt es in IDE und Cloud.</strong> In VS Code nutzen Claude ' +
        'und Codex ihre nativen SDKs lokal. Auf GitHub laufen sie als Cloud-Agenten ' +
        'neben dem Copilot Coding Agent.',
    },
    {
      icon: '💬',
      content:
        '<strong>Ask-Modus ist der Ausgangspunkt.</strong> Chat-Teilnehmer (@workspace), ' +
        'Slash-Befehle (/fix) und Variablen (#file) ermöglichen es dir, Fragen präzise einzugrenzen, ' +
        'bevor du für autonome Arbeit zu Agent Mode wechselst.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Cloud-Agenten haben eingebaute Sicherheit.</strong> Der Coding Agent führt CodeQL, ' +
        'Secret-Scanning und Dependency-Checks automatisch durch. Er kann nur auf ' +
        '<code>copilot/</code>-Branches pushen und erstellt immer Draft-PRs.',
    },
  ],
};
