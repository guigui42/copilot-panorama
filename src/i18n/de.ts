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
      description: 'GitHub Actions Workflow, der die Umgebung des Cloud-Agenten vorkonfiguriert',
      details:
        'Copilot Setup Steps ist ein spezieller GitHub Actions Workflow unter ' +
        '`.github/workflows/copilot-setup-steps.yml`, der ausgeführt wird, bevor der ' +
        'Cloud-Agent mit der Arbeit beginnt. Verwende ihn, um Tools, Abhängigkeiten oder ' +
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
    description: 'Interaktiver visueller Leitfaden zu GitHub Copilot Tools auf drei Ebenen: Terminal (CLI), IDE (Autocomplete, Chat, Agent Mode, Drittanbieter-Agenten) und Cloud (Cloud Agent, Review Agent, Drittanbieter-Agenten).',
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
        'werden abgerechnet — Folge-Tool-Aufrufe sind kostenlos. Nicht zu verwechseln mit dem Copilot Cloud Agent ' +
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
      name: 'Cloud Agent',
      description: 'Autonomer Cloud-Agent — weise ein Issue zu und erhalte einen PR mit Sicherheitsprüfungen',
      details:
        'Der Copilot Cloud Agent arbeitet eigenständig in einer GitHub-Actions-Umgebung. ' +
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
        'Drittanbieter-Coding-Agenten arbeiten neben dem Copilot Cloud Agent auf der GitHub-Plattform. ' +
        'Aktuell werden Anthropic Claude (Claude Agent SDK) und OpenAI Codex (Codex SDK) unterstützt. ' +
        'Weise Issues zu, starte Aufgaben über den Agents-Tab, erwähne @AGENT_NAME in PRs oder ' +
        'starte Sitzungen aus VS Code und GitHub Mobile. Unterliegt denselben Sicherheitsmechanismen ' +
        'wie der Copilot Cloud Agent. Jede Sitzung verbraucht eine Premium-Anfrage plus ' +
        'GitHub-Actions-Minuten. Derzeit in der öffentlichen Vorschau.',
      useCases: ['Multi-Agent-Workflows', 'Agenten-Vergleich', 'Spezialisierte Aufgaben', 'Parallele Entwicklung'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Cloud Agent.</strong> Agent Mode läuft lokal in deiner IDE — ' +
        'du bleibst im Loop. Der Cloud Agent läuft auf GitHub Actions in der Cloud — er arbeitet ' +
        'eigenständig und erstellt einen PR, wenn er fertig ist.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Drittanbieter-Agenten gibt es in IDE und Cloud.</strong> In VS Code nutzen Claude ' +
        'und Codex ihre nativen SDKs lokal. Auf GitHub laufen sie als Cloud-Agenten ' +
        'neben dem Copilot Cloud Agent.',
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
        '<strong>Cloud-Agenten haben eingebaute Sicherheit.</strong> Der Cloud Agent führt CodeQL, ' +
        'Secret-Scanning und Dependency-Checks automatisch durch. Er kann nur auf ' +
        '<code>copilot/</code>-Branches pushen und erstellt immer Draft-PRs.',
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
    verboseInstructions: 'Lange ausführliche Anweisungen…',
    scopedContext: 'Gezielter, präziser Kontext',
    chat: 'Chat',
    shipToPr: 'In PR übertragen',
    freshThread: 'Neuer Thread',
    principlesBrief: 'Nur Prinzipien. Kurz.',
    heavy: 'Schwer',
    skills: 'Skills',
    repetitive: 'Wiederholend',
    promptFiles: 'Prompt-Dateien',
    minimalDiff: 'Minimaler Diff + 3 Punkte',
    alwaysOn: 'Immer aktiv',
    costly: 'kostspielig',
    onDemand: 'Auf Abruf',
    efficient: 'effizient',
    modelReads: 'Modell liest',
    descriptionLabel: 'Beschreibung',
    loadsIfRelevant: 'Lädt vollständigen Skill wenn relevant',
    loadOnce: 'Schema einmal laden',
    reuseInQueries: 'In nachfolgenden Abfragen wiederverwenden',
    tokenPrefixMatch: '≥1024 Token übereinstimmend',
    prefixDiffers: 'Präfix unterschiedlich',
    standard: 'Standard',
    architecture: 'Architektur',
    debugging: 'Debugging',
    agentic: 'Agentisch',
    summarize: 'Zusammenfassen',
    qa: 'Q&A',
    refactorLabel: 'Refactoring',
    simpleToMini: 'Einfach → mini',
    complexToPremium: 'Komplex → premium',
    icEng: 'IC-Ing.',
    powerUser: 'Power-User',
    ciAgent: 'CI-Agent',
    stopAfterTest: 'Nach erstem bestandenem Test stoppen',
    cavemanResponse: 'caveman mode → ~75% weniger Tokens',
    snipResponse: 'snip → komprimierte Anweisungen',
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
        'error recovery loops. This is why workflow design matters more than prompt length.',
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
    guardrails: {
      name: 'Set Guardrails',
      description: 'Agentic flows iterate until goal is met — set explicit bounds',
      details:
        'Agents iterate by design: plan → edit → run tools → fix → repeat. Without ' +
        'bounds, an agent will keep going until it succeeds (or exhausts context). ' +
        'Add declarative instructions like: "Make at most 2 alternative solutions; ' +
        'stop after first passing test." or "If the first approach fails, explain why ' +
        'and stop." This prevents runaway sessions that burn through tokens.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Custom Agents'],
    },
    'fresh-threads': {
      name: 'Fresh Threads',
      description: 'Start new conversations once decisions are shipped to durable artifacts',
      details:
        'Avoid long-lived sessions where tool outputs pile up in context. Each ' +
        'accumulated tool output adds input tokens to every subsequent call. Once ' +
        'you\'ve shipped the decision into a durable artifact (issue, PR description, ' +
        'ADR, code commit), start a fresh thread. The new thread starts with a clean ' +
        'context window and doesn\'t pay for stale conversation history.',
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
      description: 'Skills and MCP tools load on demand — let the model discover them',
      details:
        'Skills and MCP server tools are discovered by the model based on descriptions. ' +
        'They load into context only when relevant to the current prompt. This is much ' +
        'more token-efficient than pasting the same guidance into every conversation. ' +
        'Write clear, concise skill descriptions so the model can accurately decide ' +
        'when to activate them.',
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
  },
  tipsInsights: [
    {
      icon: '💰',
      content:
        '<strong>Context > Prompts for cost.</strong> Managing what context flows into each ' +
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
        'dozens of model calls. Set explicit bounds ("stop after first passing test") to ' +
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
