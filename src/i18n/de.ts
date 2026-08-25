import type { Translations } from './types';

export const de: Translations = {
  locale: 'de',
  seo: {
    title: 'Copilot Panorama — Copilot-Anpassungs-Stack',
    description: 'Interaktiver visueller Leitfaden zum komponierbaren System von GitHub Copilot — erkunde die 4 Ebenen: immer aktiver Kontext, bedarfsgesteuerte Fähigkeiten, Kontrolle und Automatisierung sowie Distribution.',
  },
  ui: {
    heroTitle: 'Copilot-Anpassungs-Stack',
    layerPrefix: 'EBENE',
    insightsTitle: 'Wie das System wirklich funktioniert',
    insightsSubtitle: 'Zentrale Architekturerkenntnisse, die die meisten Teams übersehen',
    detailsLabel: 'Details',
    useCasesLabel: 'Anwendungsfälle',
    documentationLabel: 'Dokumentation',
    communityExamplesLabel: 'Community-Beispiele ansehen',
    learningHubLabel: 'Learning-Hub-Leitfaden',
    viewDetailsLabel: 'Details anzeigen',
    resourcesLabel: 'Ressourcen',
    opensNewTabLabel: 'Wird in einem neuen Tab geöffnet',
    closeDetailsLabel: 'Details schließen',
    footerBuiltFor: 'Erstellt für GitHub-Copilot-Nutzer',
    footerDocsLink: 'Vollständige Dokumentation zum komponierbaren System',
    pageStack: 'Anpassung',
    pageTools: 'Surfaces',
    shareLink: 'Link teilen',
    shareCopied: 'Kopiert!',
  },
  viz: {
    alwaysActive: 'Wird automatisch innerhalb des unterstützten Geltungsbereichs angewendet',
    loadsAutomatically: 'innerhalb des unterstützten Geltungsbereichs',
    planning: 'Planung',
    implementation: 'Umsetzung',
    review: 'Review',
    descriptionRead: 'Copilot liest die Skill-Metadaten',
    fullSkillInjected: 'Das Modell lädt automatisch den passenden Skill',
    approveDeny: 'Genehmigen / Ablehnen / Ändern',

    pluginJson: 'plugin.json',
    agentsDir: 'agents/',
    skillsDir: 'skills/',
    hooksJson: 'hooks.json',
    mcpJson: '.mcp.json',
    lspJson: 'lsp.json',
    repositorySettings: 'MCP-Einstellungen des Repositorys',
    ideConfig: 'mcp.json (IDE)',
    vsCode: 'VS Code',
    copilotCli: 'Copilot CLI',
    copilotApp: 'Copilot-App',
    marketplace: 'Marketplace',
    gitRepo: 'Git-Repository',
    localPath: 'Lokaler Pfad',
  },
  layers: {
    'always-on-context': {
      title: 'Immer aktiver Kontext',
      subtitle: 'Repository-Richtlinien, die automatisch innerhalb ihres unterstützten Geltungsbereichs angewendet werden',
    },
    'on-demand-capabilities': {
      title: 'Bedarfsgesteuerte Fähigkeiten',
      subtitle: 'Vom Entwickler explizit aufgerufen oder vom Modell ausgewählt',
    },
    'enforcement-automation': {
      title: 'Kontrolle und Automatisierung',
      subtitle: 'Deterministische Leitplanken und Orchestrierung auf CI/CD-Ebene',
    },
    distribution: {
      title: 'Distribution',
      subtitle: 'Agenten-Stacks über Teams und Repositorys hinweg bündeln und teilen',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Repository-Richtlinien, die Copilot-Antworten automatisch formen',
      details:
        'Verwende `.github/copilot-instructions.md` für repositoryweit gültige Richtlinien und ' +
        '`.github/instructions/NAME.instructions.md` mit `applyTo`-Globs für passende Pfade. ' +
        'Agenten können außerdem die nächstgelegene `AGENTS.md` heranziehen, während ' +
        'Root-Dateien wie `CLAUDE.md` und `GEMINI.md` auf bestimmten Oberflächen unterstützt ' +
        'werden. Persönliche und Organisationsanweisungen liefern breitere Standardwerte ' +
        'außerhalb von Repository-Dateien. Der Umfang der Unterstützung variiert je nach ' +
        'Copilot-Oberfläche, und Anweisungen leiten das Verhalten, statt es zu erzwingen.',
      useCases: ['Coding-Standards', 'Framework-Regeln', 'Repository-Konventionen'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Spezialisten mit geltungsbereichsbezogenen Anweisungen, Tools und isoliertem Kontext',
      details:
        'Definiere Repository-Agenten in `.github/agents/AGENT-NAME.md`. Jeder Agent kann ' +
        'spezialisierte Anweisungen, Tool-Beschränkungen und MCP-Kontext mitbringen. ' +
        'Organisations- und Enterprise-Agenten können aus `.github`- oder ' +
        '`.github-private`-Repositorys verteilt werden. Copilot kann punktuelle Aufgaben auch an ' +
        'Subagenten mit isoliertem Kontext delegieren. Felder wie Modelle und Übergaben ' +
        'variieren je nach Oberfläche — konsultiere die aktuelle Funktionsmatrix.',
      useCases: ['Sicherheitsprüfer', 'Datenbankspezialist', 'API-Designer'],
    },
    skills: {
      name: 'Skills',
      description: 'Wiederverwendbare Anweisungen, Skripte und Ressourcen, die bei Relevanz automatisch geladen werden',
      details:
        'Jeder Skill ist ein Ordner mit `SKILL.md` sowie optionalen Skripten und Ressourcen. ' +
        'Copilot wählt automatisch einen Skill aus, wenn dessen Expertise zur Aufgabe passt; ' +
        'Benutzer können einen Skill auch ausdrücklich anfordern. Speichere ' +
        'Projekt-Skills in `.github/skills/`, `.agents/skills/` oder `.claude/skills/`; ' +
        'persönliche Skills können in `~/.copilot/skills/` oder `~/.agents/skills/` liegen. Der ' +
        'Umfang der Unterstützung variiert je nach Oberfläche.',
      useCases: ['Terraform-Module', 'K8s-Manifeste', 'Observability-Stack'],
    },
    mcp: {
      name: 'MCP Servers',
      description: 'Externe Tools und Live-Daten, verbunden über das Model Context Protocol',
      details:
        'Konfiguriere Repository-MCP-Server in den Repository-Einstellungen auf GitHub für den ' +
        'Copilot-Cloud-Agenten und die Copilot-Code-Review. IDE-Clients verwenden ihre eigene ' +
        '`mcp.json`-Konfiguration, während CLI und Copilot-App jeweils ihre eigene ' +
        'Client-Konfiguration bereitstellen. MCP-Unterstützung, Richtlinien und ' +
        'Konfigurationsorte variieren je nach Oberfläche — aktiviere nur die Server und ' +
        'Toolsets, die ein Workflow tatsächlich benötigt.',
      useCases: ['Issue-/PR-Automatisierung', 'Browser-Tests', 'Interne Daten'],
      docLabel: 'Repository-MCP-Server konfigurieren',
      altDocLabel: 'Über MCP',
    },
    hooks: {
      name: 'Hooks',
      description: 'Befehle, die an dokumentierten Punkten im Lebenszyklus des Agenten ausgeführt werden',
      details:
        'Definiere Repository-Hooks in `.github/hooks/NAME.json` mit `version: 1`. Ereignisse ' +
        'umfassen Sessions, Prompts, Tools, Berechtigungen, Kompaktierung, Subagenten und das ' +
        'Beenden des Agenten. `preToolUse` kann einen Tool-Aufruf erlauben, ablehnen oder ' +
        'ändern. Die Ereignisunterstützung unterscheidet sich zwischen Copilot CLI und dem ' +
        'Cloud-Agenten. Hook-Fehler lassen die Ausführung meist weiterlaufen; Fehler bei ' +
        '`preToolUse` sind fail-closed, Timeouts sind fail-open.',
      useCases: ['Compliance-Gates', 'Dateizugriffskontrolle', 'Audit-Protokollierung'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Von KI-Coding-Agenten gesteuerte Repository-Automatisierung, ausgeführt auf GitHub Actions mit Sicherheitsleitplanken',
      details:
        'Agentic Workflows sind Markdown-Dateien mit YAML-Frontmatter (Berechtigungen, ' +
        'Safe-Outputs, Trigger), die über die CLI-Erweiterung `gh aw` zu GitHub Actions ' +
        'kompiliert werden. Definiere Automatisierung in natürlicher Sprache — plane tägliche ' +
        'Berichte, kategorisiere Issues, analysiere CI-Fehler oder pflege Dokumentation. Agenten ' +
        'laufen standardmäßig mit reinen Lesezugriffsrechten; Schreiboperationen erfordern eine ' +
        'explizite Safe-Output-Genehmigung. Die Ausführung erfolgt in einer Sandbox mit ' +
        'Tool-Whitelist und Netzwerkisolation. Funktioniert mit GitHub Copilot, Claude oder ' +
        'OpenAI Codex.',
      useCases: ['Issue-Triage', 'CI-Fehleranalyse', 'Tägliche Berichte'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'GitHub-Actions-Workflow, der die Umgebung des Cloud-Agenten vorkonfiguriert',
      details:
        'Copilot Setup Steps ist ein spezieller GitHub-Actions-Workflow unter ' +
        '`.github/workflows/copilot-setup-steps.yml`, der ausgeführt wird, bevor der ' +
        'Cloud-Agent mit der Arbeit beginnt. Nutze ihn, um Tools und Abhängigkeiten ' +
        'deterministisch zu installieren oder den Runner zu konfigurieren — damit der Agent ' +
        'sofort bauen, testen und linten kann, ohne langwieriges Ausprobieren. Du kannst auch ' +
        'auf größere Runner upgraden, zu Windows wechseln, Git LFS aktivieren oder ' +
        'Umgebungsvariablen über die Actions-Umgebung `copilot` festlegen. Der Workflow muss ' +
        'genau einen Job `copilot-setup-steps` enthalten und wirkt sich nur aus, wenn er sich ' +
        'im Standardbranch befindet.',
      useCases: ['Abhängigkeiten vorinstallieren', 'Größere Runner', 'Umgebungsvariablen'],
    },
    plugins: {
      name: 'GitHub Copilot Plugins',
      description: 'Installierbare Pakete für Agenten, Skills, Hooks, MCP und LSP-Integrationen',
      details:
        'Ein natives Copilot-Plugin beginnt mit `plugin.json` und kann `agents/`, `skills/`, ' +
        '`hooks.json`, `.mcp.json` und `lsp.json` enthalten. Plugins bündeln Fähigkeiten zur ' +
        'Installation über Copilot-Clients und Marketplaces. Separat definiert Agent Plugins ' +
        '1.0 einen offenen, clientübergreifenden Standard für portable Pakete — er ergänzt die ' +
        'native Plugin-Struktur von GitHub, ohne sie zu ersetzen.',
      useCases: ['Wiederverwendbare Agentenpakete', 'Teamweite Standardisierung', 'Marketplace-Distribution'],
      docLabel: 'Über Copilot-Plugins',
      altDocLabel: 'Agent-Plugins-1.0-Standard',
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Anweisungen gelten automatisch innerhalb ihres Geltungsbereichs.</strong> ' +
        'Repositoryweite, pfadspezifische, agentenspezifische, persönliche und ' +
        'organisationsweite Richtlinien bedienen jeweils unterschiedliche Geltungsbereiche.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skills bringen Expertise bei Bedarf ein.</strong> Copilot kann einen Skill ' +
        'auswählen, wenn dessen Anweisungen und Ressourcen zur aktuellen Aufgabe passen.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hooks führen Befehle an Punkten im Lebenszyklus aus.</strong> ' +
        '<code>preToolUse</code> kann einen Tool-Aufruf erlauben, ablehnen oder ändern. ' +
        'Unterstützte Ereignisse und Fehlerverhalten variieren je nach Oberfläche.',
    },
    {
      icon: '🔀',
      content:
        '<strong>Copilot kann relevante Fähigkeiten auswählen.</strong> Klare Beschreibungen ' +
        'von Agenten, Skills und Tools helfen Copilot, die richtige Expertise für eine Aufgabe ' +
        'zu wählen.',
    },
  ],

  /* ── Tools-Seite ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Surfaces',
    description: 'Interaktiver visueller Leitfaden zu GitHub Copilot in IDEs, eigenständigen Apps und GitHub Cloud, einschließlich Copilot CLI, Cloud-Agent, Code-Review, Drittanbieter-Agenten, Slack und Teams.',
  },
  toolsUi: {
    heroTitle: 'Copilot Surfaces',
    insightsTitle: 'Die wichtigsten Unterschiede, die die meisten Entwickler übersehen',
    insightsSubtitle: 'Architekturerkenntnisse über alle drei Ebenen hinweg',
    footerBuiltFor: 'Erstellt für GitHub-Copilot-Nutzer',
    footerDocsLink: 'Vollständige Dokumentation zu den Copilot-Funktionen',
  },
  toolsViz: {
    interactive: 'Interaktiv',
    programmatic: 'Programmatisch',
    ghostText: 'Geistertext',
    tabToAccept: 'Tab zum Übernehmen',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: 'Analysieren',
    edit: 'Bearbeiten',
    run: 'Ausführen',
    fix: 'Korrigieren',
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
    askAnything: 'Frag alles',
    repoContext: 'Repository-Kontext',
    webSearch: 'Websuche',
    openSession: 'Session öffnen',
    reviewDiff: 'Diff überprüfen',
    openPr: 'PR öffnen',
    inbox: 'Posteingang',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'Workflows',
    slack: 'Slack',
    teams: 'Teams',
    sharedSession: 'Gemeinsame Agenten-Session',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'Eigenständige Apps',
      subtitle: 'Desktop- und Terminal-Anwendungen speziell für agentenbasierte Entwicklung',
    },
    ide: {
      title: 'IDE',
      subtitle: 'Inline-Vorschläge, Chat, autonomes Bearbeiten und Drittanbieter-Agenten in deinem Editor',
    },
    cloud: {
      title: 'Cloud',
      subtitle: 'Autonome Agenten auf der GitHub-Plattform — Coding, Review und Drittanbieter',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      path: 'Terminal-Agent',
      description: 'Ein Agent in deinem Terminal für Code, Shell und GitHub-Workflows',
      details:
        'Starte eine interaktive Session mit `copilot` oder übergib einen einzelnen Prompt mit ' +
        '`copilot -p`. Die CLI kann Dateien bearbeiten, genehmigte Shell-Befehle ausführen und ' +
        'mit GitHub-Issues, Pull Requests und Actions arbeiten. Der Planmodus grenzt die Arbeit vor ' +
        'Änderungen ein. `/context`, `/compact` und automatische Kompaktierung verwalten lange ' +
        'Sessions. Lokale und Cloud-Sandboxes befinden sich in der öffentlichen Vorschau. Die ' +
        'CLI unterstützt Instructions, Agents, Skills, Hooks, MCP, Plugins und Copilot Memory ' +
        '(öffentliche Vorschau).',
      useCases: ['Von Issue zu PR', 'Modernisierung von Legacy-Code', 'Parallele Fleet-Ausführung', 'Backlog-Triage und -Planung', 'Editorunabhängige Entwicklung', 'Automatisierung'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      path: 'Desktop-Arbeitsbereich für Agenten',
      description: 'Desktop-Arbeitsbereich für parallele Agenten-Sessions und wiederkehrende Automatisierungen',
      details:
        'Führe mehrere isolierte Agenten-Sessions über Repositorys hinweg aus, verwalte Issues ' +
        'und Pull Requests und speichere Automatisierungen, die bei Bedarf oder nach Zeitplan ' +
        'laufen. Repository-Sessions verwenden dedizierte Worktrees; Cloud-Arbeitsbereiche ' +
        'befinden sich in der öffentlichen Vorschau. Die App unterstützt Instructions, Skills, ' +
        'MCP-Server, Custom Agents, Plugins und Canvas-Erweiterungen. Von Enterprises verwaltete ' +
        'Einstellungen können die unterstützten Aktionen und Integrationen steuern.',
      useCases: ['Agentischer Posteingang & Triage', 'Agentic Merge (letzte Meile)', 'Paralleles Multi-Session-Arbeiten', 'Wiederholbare Workflows', 'Zusammenarbeit mit angrenzenden Rollen', 'Repositoryübergreifende Orchestrierung'],
    },
    autocomplete: {
      name: 'Inline-Vorschläge',
      path: 'Inline-Vorschläge des IDE',
      description: 'Geistertext-Codevorschläge, die beim Tippen inline erscheinen',
      details:
        'Copilot schlägt Code basierend auf dem aktuellen Editor-Kontext beim Tippen vor. ' +
        'Vorschläge können von einer Zeile bis zu einer ganzen Funktion reichen. Next Edit ' +
        'Suggestions sagt in unterstützten Editoren die Position der nächsten Bearbeitung ' +
        'voraus. Tastenkürzel und Funktionsverfügbarkeit variieren je nach IDE.',
      useCases: ['Codevervollständigung', 'Boilerplate-Generierung', 'Musterergänzung', 'Vom Kommentar zum Code'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      path: 'Chat des IDE',
      description: 'Konversationelle KI-Chat für Codefragen, Erklärungen und Generierung',
      details:
        'Copilot Chat beantwortet Fragen, erklärt Code, schlägt Änderungen vor und hilft beim ' +
        'Debuggen. Füge relevante Dateien, Auswahlen, Repository-Kontext oder unterstützte Tools ' +
        'hinzu, um eine Anfrage einzugrenzen. Schlüsselwörter, Befehle, Modelle und ' +
        'MCP-Unterstützung variieren je nach IDE — nutze die aktuelle Funktionsmatrix für deinen ' +
        'Editor.',
      useCases: ['Code-Erklärung', 'Debugging', 'Testgenerierung', 'Code-Refactoring', 'Lernen'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      path: 'Agent Mode des IDE',
      description: 'Autonomes lokales Coding — Copilot bestimmt Dateien, nimmt Änderungen vor, führt Befehle aus und iteriert',
      details:
        'Agent Mode ermöglicht es Copilot, deinen Code innerhalb des IDE autonom zu bearbeiten. ' +
        'Es bestimmt, welche Dateien geändert werden, nimmt dateiübergreifende Bearbeitungen ' +
        'vor, schlägt Terminalbefehle zur Genehmigung vor und iteriert bei Fehlern. ' +
        'Unterstützte IDEs können MCP-Server, Subagenten und Custom Agents hinzufügen. Anders ' +
        'als der Copilot-Cloud-Agent läuft Agent Mode innerhalb deiner lokalen Editor-Session. ' +
        'Der Verbrauch von KI-Credits hängt vom gewählten Modell und der ausgeführten Arbeit ab.',
      useCases: ['Komplexe Aufgaben', 'Mehrstufige Umsetzung', 'Fehlerbehebung', 'Build-Automatisierung'],
    },
    'third-party-agents-ide': {
      name: 'Agent-Harnesses von Drittanbietern',
      path: 'Drittanbieter-Agent-Harnesses in VS Code',
      description: 'Claude- und Codex-Harnesses, verfügbar innerhalb von VS Code',
      details:
        'VS Code kann unterstützte Drittanbieter-Harnesses wie Anthropic Claude und OpenAI ' +
        'Codex ausführen. Jedes Harness behält seinen anbieterspezifischen Workflow und seine ' +
        'Fähigkeiten innerhalb des Editors bei. Verfügbarkeit, Ausführungsort, Berechtigungen ' +
        'und Abrechnung können sich ändern — konsultiere die aktuelle Dokumentation zu ' +
        'VS-Code-Agent-Harnesses.',
      useCases: ['Autonomes Coding', 'Sicherheitsreview', 'Anbieterspezifische Funktionen', 'Hintergrundaufgaben'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      path: 'GitHub.com und Mobile',
      description: 'Konversationelle KI auf GitHub.com — Fragen zu Repositorys, Issues, PRs und dem Web',
      details:
        'Copilot Chat auf GitHub.com lässt dich von jeder Seite aus Fragen stellen — zu einem ' +
        'Repository, einem Issue, einem Pull Request oder allgemeinen Software-Themen. Es kann ' +
        'Repository- und Web-Kontext, ausgewählte Modelle und Informationen zur ' +
        'Agenten-Session nutzen. Chat und der Copilot-Cloud-Agent können Kontext innerhalb des ' +
        'aktiven Workflows übergeben. GitHub Mobile bietet Zugriff auf unterstützte Chat- und ' +
        'Agenten-Session-Erlebnisse.',
      useCases: ['Repository-Q&A', 'Issue-Analyse', 'PR-Verständnis', 'Websuche', 'Codegenerierung'],
    },
    'coding-agent': {
      name: 'Copilot Cloud Agent',
      path: 'GitHubs Cloud-Agent',
      description: 'Autonome Repository-Arbeit in einer von GitHub gehosteten Umgebung',
      details:
        'Delegiere Arbeit aus Issues, Pull Requests, Chat oder der Agents-Ansicht. Copilot ' +
        'untersucht das Repository, plant, ändert Code auf einem Branch, validiert das Ergebnis ' +
        'und öffnet einen Pull Request zur menschlichen Überprüfung. Instructions, MCP, Agents, ' +
        'Hooks, Skills und Copilot Memory (öffentliche Vorschau) können die Session ' +
        'anpassen. Code-Scanning, Secret-Scanning, Abhängigkeitsprüfungen und Firewall-Regeln ' +
        'sind konfigurierbare Schutzmaßnahmen, keine universellen Garantien.',
      useCases: ['Fehlerbehebung', 'Feature-Umsetzung', 'Testabdeckung', 'Technische Schulden', 'Sicherheitskampagnen'],
    },
    'review-agent': {
      name: 'Copilot Code Review',
      path: 'Pull-Request-Review',
      description: 'KI-Code-Reviewer mit vollem Projektkontext und vorgeschlagenen Korrekturen',
      details:
        'Copilot Code Review analysiert Änderungen, sammelt relevanten Repository-Kontext und ' +
        'liefert Feedback mit vorgeschlagenen Korrekturen. Teams können Reviews manuell ' +
        'anfordern oder automatische Reviews konfigurieren. Repository-Instructions, ' +
        'Agenten-Skills und MCP-Server werden unterstützt; Copilot Memory befindet sich in der ' +
        'öffentlichen Vorschau. Die Verfügbarkeit unterscheidet sich zwischen GitHub und ' +
        'unterstützten IDEs.',
      useCases: ['Codequalität', 'Sicherheitsreview', 'Best Practices', 'PR-Workflow', 'Team-Governance'],
    },
    'third-party-agents-cloud': {
      name: 'Coding-Agenten von Drittanbietern',
      path: 'Drittanbieter-Agenten auf GitHub',
      description: 'Coding-Agenten von Partnern, die auf GitHub neben Copilot arbeiten',
      details:
        'Drittanbieter-Coding-Agenten wie Anthropic Claude und OpenAI Codex können auf GitHub ' +
        'neben dem Copilot-Cloud-Agenten arbeiten. Starte unterstützte Sessions über ' +
        'GitHub-Oberflächen und überprüfe ihre Änderungen über Pull Requests. Die Funktion ' +
        'befindet sich in der öffentlichen Vorschau, nutzt die Sicherheitsgrenzen des ' +
        'Cloud-Agenten, und Fähigkeiten sowie Abrechnung werden durch die aktuelle ' +
        'Produktdokumentation definiert.',
      useCases: ['Multi-Agent-Workflows', 'Agentenvergleich', 'Spezialisierte Aufgaben', 'Paralleles Entwickeln'],
    },
    'slack-teams': {
      name: 'Zusammenarbeit mit Slack & Teams',
      path: 'Slack\nMicrosoft Teams',
      description: 'Gemeinsame Cloud-Agenten-Sessions, gestartet aus Team-Unterhaltungen',
      details:
        'In der öffentlichen Vorschau erwähnst du `@GitHub` in unterstützten Slack- oder ' +
        'Microsoft-Teams-Unterhaltungen, um eine Copilot-Cloud-Agenten-Session zu starten oder ' +
        'zu steuern. Die Integration kann den Unterhaltungskontext nutzen und läuft asynchron ' +
        'in einer Cloud-Sandbox weiter. Repository-Berechtigungen regeln, wer Codeänderungen ' +
        'auslösen darf, und der Unterhaltungskontext kann zusammen mit erzeugten Artefakten ' +
        'gespeichert werden. Nutze eine Direktnachricht, wenn du einen stärker eingegrenzten ' +
        'Kontext benötigst.',
      useCases: ['Von der Diskussion zum PR', 'Gemeinsame Planung', 'Issue-Erstellung'],
      docLabel: 'Slack-Integration',
      altDocLabel: 'Teams-Integration',
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ist nicht der Copilot-Cloud-Agent.</strong> Agent Mode läuft in ' +
        'deiner lokalen IDE-Session; der Cloud-Agent läuft asynchron in einer von GitHub ' +
        'gehosteten Umgebung und liefert einen Pull Request zurück.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Drittanbieter-Agenten nutzen unterschiedliche Oberflächen.</strong> VS Code ' +
        'stellt Agent-Harnesses bereit, während GitHub Drittanbieter-Coding-Agenten neben dem ' +
        'Copilot-Cloud-Agenten hostet.',
    },
    {
      icon: '💬',
      content:
        '<strong>Kontextsteuerungen variieren je nach Editor.</strong> Hänge nur die relevanten ' +
        'Dateien, Auswahlen, den Repository-Kontext und unterstützte Tools an, bevor du zu ' +
        'autonomer Arbeit übergehst.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Cloud-Arbeit erfordert konfigurierte Schutzmaßnahmen und menschliche ' +
        'Überprüfung.</strong> Nutze Repository-Berechtigungen, Firewall-Regeln, ' +
        'Scan-Kontrollen, Tests und Pull-Request-Review gemeinsam.',
    },
  ],

  /* ── Tipps-Seite ── */
  tipsSeo: {
    title: 'Copilot Panorama — Effizienztipps',
    description: 'Praktischer Leitfaden zur Optimierung der Nutzung von GitHub Copilot — Token-Management, Prompt-Design, Eingrenzung des Kontexts, Modellauswahl und Governance.',
  },
  tipsUi: {
    heroTitle: 'Effizienztipps',
    insightsTitle: 'Die Effizienz-Denkweise',
    insightsSubtitle: 'Zentrale Prinzipien, um aus jedem Token mehr Wert zu ziehen',
    footerBuiltFor: 'Erstellt für GitHub-Copilot-Nutzer',
    footerDocsLink: 'Vollständige Dokumentation zur Copilot-Abrechnung',
    pageTips: 'Effizienztipps',
  },
  tipsViz: {
    inputTokens: 'Eingabe-Tokens',
    outputTokens: 'Ausgabe-Tokens',
    cachedTokens: 'Zwischengespeicherte Tokens',
    modelCalls: 'Modellaufrufe',
    before: 'Vorher',
    after: 'Nachher',
    expensive: 'Teuer',
    cheap: 'Günstig',
    high: 'Hoher Aufwand',
    low: 'Niedriger Aufwand',
    auto: 'Auto',
    cacheHit: 'Cache-Treffer',
    cacheMiss: 'Cache-Fehlschlag',
    narrow: 'Eng',
    broad: 'Breit',
    verboseInstructions: 'Lange, ausschweifende Anweisungen …',
    scopedContext: 'Präziser, eingegrenzter Kontext',
    chat: 'Chat',
    shipToPr: 'In den PR übernehmen',
    freshThread: 'Neuer Thread',
    principlesBrief: 'Nur Prinzipien. Kurz.',
    heavy: 'Umfangreich',
    skills: 'Skills',
    customAgents: 'Andere Rolle + Tools → Custom Agents',
    minimalDiff: 'Minimaler Diff + 3 Stichpunkte',
    alwaysOn: 'Immer aktiv',
    costly: 'kostspielig',
    onDemand: 'Bedarfsgesteuert',
    efficient: 'effizient',
    enabledTools: 'Nur benötigte Toolsets aktiviert',
    allToolsEnabled: 'Alle Toolsets aktiviert',
    taskScoped: 'Auf diese Aufgabe eingegrenzt',
    loadOnce: 'Schema einmal laden',
    reuseInQueries: 'In späteren Abfragen referenzieren',
    tokenPrefixMatch: 'Wiederholtes Präfix stimmt überein',
    prefixDiffers: 'Präfix geändert',
    standard: 'Standard',
    simpleToMini: 'Einfach → mini',
    complexToPremium: 'Komplex → premium',
    usageBaseline: 'Nutzungs-Baseline',
    alertBudget: 'Budget nur mit Alerts',
    costCenterBudget: 'Budget pro Kostenstelle',
    perStep: 'pro Schritt',
    steps: 'Schritte',
    accuracy99: '99 %',
    accuracy95: '95 %',
    lostInMiddle: 'Verloren in der Mitte',
    historyAccumulates: 'Verlauf wächst mit jeder Runde',
    everyTurnAdds: 'Jede Runde fügt Kontext hinzu',
    reprocessedInput: 'Gesamter Verlauf wird als Eingabe neu verarbeitet',
    middleDecay: 'Mittlere Tokens verblassen',
    startStrong: '✓ Anfang: starke Erinnerung',
    middleLost: '✗ Mitte: verblasst',
    endStrong: '✓ Ende: starke Erinnerung',
    rawFiles: 'Rohdateien der KI geben',
    scriptOutput: 'Skript ausführen, Ausgabe geben',
    research: '/research',
    plan: 'Planmodus',
    implement: '/fleet',
    withTests: 'Mit Unit-Tests',
    withoutTests: 'Ohne Unit-Tests',
    buggyChange: 'Fehlerhafte Änderung',
    silentMerge: 'Stiller Merge',
    brokenMain: 'Main kaputt',
    failingTests: 'Fehlgeschlagene Tests',
    correction: 'Korrektur',
    succeedingTests: 'Bestandene Tests',
    rawOutput: 'Rohausgabe: 4200 Zeilen',
    trimmed: 'Gekürzt: 38 Zeilen',
    cleanLayers: 'Domäne → Anwendung → Infrastruktur',
    agentMiss: 'Fehler des Agenten',
    rootCause: 'Grundursache finden',
    durableFix: 'Dauerhafte Korrektur kodifizieren',
    enterpriseDefault: 'Enterprise-Standardwert',
    overridableKeys: 'Überschreibbare Schlüssel',
    teamSpecialization: 'Teamkonfiguration',
  },
  tipsLayers: {
    mechanics: {
      title: 'Token-Mechanik',
      subtitle: 'Verstehe die Kostenfaktoren hinter jeder Copilot-Interaktion',
    },
    pitfalls: {
      title: 'Fallstricke',
      subtitle: 'Fehlermuster, die Ergebnisse unbemerkt verschlechtern und Tokens verbrauchen',
    },
    prompting: {
      title: 'Prompting',
      subtitle: 'Schreibe Prompts, die mit weniger Tokens bessere Ergebnisse liefern',
    },
    context: {
      title: 'Kontext',
      subtitle: 'Gib dem Modell genau das, was es braucht — nicht mehr und nicht weniger',
    },
    caching: {
      title: 'Caching',
      subtitle: 'Nutze Prompt-Caching für schnellere, günstigere Interaktionen',
    },
    models: {
      title: 'Modelle',
      subtitle: 'Passe die Modellfähigkeit an die Komplexität der Aufgabe an',
    },
    governance: {
      title: 'Governance',
      subtitle: 'Überwache den Verbrauch und lege organisationsweite Leitplanken fest',
    },
    'workflow-design': {
      title: 'Workflow-Design',
      subtitle: 'Teile und herrsche — verkette eingegrenzte Schritte statt eines Mega-Prompts',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'Kostentreiber für KI-Credits',
      path: 'Kostenfaktoren',
      description: 'Eingabe-, Ausgabe- und zwischengespeicherte Tokens tragen je nach Modell unterschiedlich bei',
      details:
        'Der Verbrauch von KI-Credits hängt vom gewählten Modell und den verarbeiteten Tokens ' +
        'ab. Eingabe-Tokens umfassen Prompts, Anweisungen, Dateikontext und Tool-Ausgaben; ' +
        'Ausgabe-Tokens sind das, was das Modell generiert; zwischengespeicherte Lesevorgänge ' +
        'können günstiger sein, wenn wiederholter Kontext wiederverwendet wird. Die Tarife ' +
        'variieren je nach Modell — nutze die aktuelle Preistabelle statt eines festen ' +
        'Verhältnisses.',
      useCases: ['Alle Interaktionen', 'Budgetplanung', 'Kostenanalyse'],
    },
    'agentic-cost': {
      name: 'Agentischer Kostenmultiplikator',
      path: 'Agentic Workflows',
      description: 'Agentische Arbeit iteriert zwischen Planung, Tools, Validierung und Korrektur',
      details:
        'Agentische Erlebnisse (Agent Mode, Cloud-Agent, CLI) iterieren per Design: planen → ' +
        'bearbeiten → Tools/Tests ausführen → korrigieren → wiederholen. Der Verbrauch variiert ' +
        'je nach Aufgabenumfang, Modellwahl, Tool-Ausgabe, Wiederholungen und Stoppbedingungen. ' +
        'Klare Anforderungen und deterministische Validierung reduzieren unnötige Schleifen.',
      useCases: ['Agent Mode', 'Cloud-Agent', 'CLI-Agent'],
    },
    'context-discipline': {
      name: 'Kontextdisziplin',
      path: 'Workflow-Design',
      description: 'Kostenoptimierung ist vor allem Kontextdisziplin + Workflow-Design',
      details:
        'Der größte Kostenhebel besteht nicht darin, kürzere Prompts zu schreiben — sondern zu ' +
        'steuern, welcher Kontext in jeden Modellaufruf eingeht. Jede angehängte Datei, ' +
        'Tool-Ausgabe und jedes Element der Konversationshistorie fügt Eingabe-Tokens hinzu. ' +
        'Diszipliniertes Kontextmanagement (Dateien eingrenzen, Logs kürzen, neue Threads ' +
        'starten) hat einen viel größeren Einfluss als das Feilen an Prompts.',
      useCases: ['Alle Workflows', 'Kostenoptimierung', 'Performance'],
    },
    'quality-over-quantity': {
      name: 'Qualität vor Quantität',
      path: 'Prompt-Design',
      description: 'Konzentriere dich auf hochwertigen Kontext, nicht auf mehr Anweisungen',
      details:
        'Mehr Anweisungen garantieren kein besseres Ergebnis. Definiere Aufgabe und erwartetes ' +
        'Ergebnis, liefere relevante Dateien, Logs oder bekannte Einschränkungen, zeige, wie das ' +
        'Ergebnis validiert wird, und gib eine klare Stoppbedingung an. Diese Struktur ' +
        'reduziert Exploration, Scope-Abweichung, Wiederholungen und unnötige Ausgaben.',
      useCases: ['Chat', 'Agent Mode', 'Copilot CLI'],
    },
    'fresh-threads': {
      name: 'Neue Threads',
      path: 'Session-Hygiene',
      description: 'Starte neue Unterhaltungen, sobald Entscheidungen umgesetzt sind — vermeide Context Rot',
      details:
        'Vermeide lang laufende Sessions, in denen sich Tool-Ausgaben im Kontext ansammeln. ' +
        'Jede angesammelte Tool-Ausgabe kann nachfolgenden Aufrufen Eingabe-Tokens hinzufügen ' +
        'und relevanten Kontext verwässern. Sobald du die Entscheidung in ein dauerhaftes ' +
        'Artefakt (Issue, PR-Beschreibung, ADR, Code-Commit) übertragen hast, starte einen ' +
        'neuen Thread mit einem sauberen Kontextfenster. In Copilot CLI startet `/new` (oder ' +
        '`/clear`) eine neue Unterhaltung; im Chat öffne eine neue Chat-Session.',
      useCases: ['Chat', 'Agent Mode', 'CLI-Sessions'],
    },
    'concise-instructions': {
      name: 'Anweisungen fokussiert halten',
      path: 'Instructions',
      description: 'Priorisiere stabile Projektrichtlinien gegenüber aufgabenspezifischen Details',
      details:
        'Nutze Repository-Instructions für die Projektübersicht, validierte ' +
        'Build-/Test-/Lint-Befehle, stabile Konventionen und nicht verhandelbare ' +
        'Einschränkungen. Entferne veraltete oder aufgabenspezifische Details. Lege ' +
        'wiederverwendbare Domänen-Playbooks, Beispiele, Skripte und Ressourcen in Skills, ' +
        'damit Copilot sie bei Relevanz laden kann.',
      useCases: ['Instructions', 'Kostenoptimierung', 'Alle Interaktionen'],
    },
    'structure-for-reuse': {
      name: 'Für Wiederverwendung strukturieren',
      path: 'Wiederverwendbarer Kontext',
      description: 'Nutze Skills für wiederverwendbare Expertise und Agents für unterschiedliche Rollen',
      details:
        'Lege Playbooks, Beispiele, Domänenregeln, Skripte und Runbooks in Agent Skills ab, ' +
        'damit Copilot sie für relevante Aufgaben auswählen kann. Nutze Custom Agents, wenn ein ' +
        'Workflow eine andere Rolle, eine Tool-Grenze oder isolierten Kontext benötigt. Halte ' +
        'die repositoryweiten Anweisungen auf Richtlinien fokussiert, die aufgabenübergreifend ' +
        'gelten.',
      useCases: ['Skills', 'Custom Agents', 'Team-Workflows'],
    },
    'concise-answers': {
      name: 'Weniger verlangen',
      path: 'Ausgabesteuerung',
      description: 'Bitte um die kleinste nützliche Antwort, um Ausgabe-Tokens zu minimieren',
      details:
        'Bitte um die minimale nützliche Antwort: „Gib mir den minimalen Diff + 3 ' +
        'Begründungspunkte“ statt „erkläre alles“. „Liste nur die Breaking Changes auf; lass ' +
        'den Kontext weg“ bei Updates oder Migrationen. Kleinere Ausgaben reduzieren generierte ' +
        'Tokens und Review-Rauschen.',
      useCases: ['Chat', 'Code-Review', 'Migrationen'],
    },
    'scope-context': {
      name: 'Kontext gezielt eingrenzen',
      path: 'Kontextstrategie',
      description: 'Hänge nur die Dateien, Auswahlen und Logs an, die die Aufgabe benötigt',
      details:
        'Öffne oder hänge die relevanten Dateien an und schließe irrelevante Tabs. Füge den ' +
        'ausgewählten Code, den Fehler oder die Ausgabe des fehlgeschlagenen Tests ein statt ' +
        'vollständiger Logs. Kontextsteuerungen und Schlüsselwörter variieren je nach IDE, aber ' +
        'das Prinzip bleibt gleich: eingegrenzter Kontext reduziert Ablenkung und den Verbrauch ' +
        'von KI-Credits.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: 'Bedingt statt dauerhaft aktiv',
      path: 'Bedingtes Laden',
      description: 'Bevorzuge Kontext, der nur bei Relevanz für die aktuelle Aufgabe geladen wird',
      details:
        'Immer aktiver Kontext (copilot-instructions.md) wird in jeder Unterhaltung geladen und ' +
        'kostet jedes Mal Tokens. Bedingter Kontext (Skills, pfadbezogen eingegrenzte ' +
        'Anweisungen) wird nur bei Relevanz geladen. Verschiebe spezialisierte Richtlinien in ' +
        'Skills, wo das Modell entscheidet, wann sie geladen werden, oder nutze applyTo-Globs, ' +
        'damit Anweisungen nur auf passende Dateien angewendet werden.',
      useCases: ['Instructions', 'Skills', 'Pfadeingrenzung'],
    },
    'apply-to-paths': {
      name: 'applyTo-Pfade verwenden',
      path: 'Pfadeingrenzung',
      description: 'Grenze Custom Instructions mit applyTo-Globs auf bestimmte Dateimuster ein',
      details:
        'Pfadspezifische Anweisungen (unter .github/instructions/) unterstützen das ' +
        'applyTo-Glob-Frontmatter. Das bedeutet, die Anweisung wird nur geladen, wenn das ' +
        'Modell an passenden Dateien arbeitet — z. B. applyTo: "**/*.test.ts" für ' +
        'Testkonventionen. Das ist kostenloser Kontext, wenn er irrelevant ist, und präziser ' +
        'Kontext, wenn er benötigt wird.',
      useCases: ['Instructions', 'Testregeln', 'Framework-spezifisch'],
    },
    'skills-mcp': {
      name: 'Nur benötigte Toolsets aktivieren',
      path: 'Toolset-Eingrenzung',
      description: 'Beschränke MCP-Tools auf die Fähigkeiten, die die Aufgabe tatsächlich benötigt',
      details:
        'Große Sammlungen von MCP-Tools fügen Kontext hinzu und erschweren die Tool-Auswahl. ' +
        'Konfiguriere nur die GitHub-MCP-Toolsets und externen Server, die für den aktuellen ' +
        'Workflow nötig sind. Halte einen breiteren Katalog für die Entdeckung verfügbar, aber ' +
        'grenze die aktivierten Tools ein, bevor du eine Aufgabe beginnst.',
      useCases: ['MCP-Server', 'GitHub-MCP-Server', 'Kontextverwaltung'],
    },
    'context-command': {
      name: '/context in der CLI',
      path: 'CLI-Kontext',
      description: 'Beobachte den Kontext mit /context; komprimiere lange Sessions mit /compact statt neu zu beginnen',
      details:
        'Nutze in Copilot CLI `/context`, um zu sehen, wie viel deines Kontextfensters verbraucht ' +
        'wurde. Wenn eine Session groß geworden ist, du aber weitermachen möchtest, führe ' +
        '`/compact` aus, um die Historie zusammenzufassen und das Fenster zu verkleinern — ' +
        'optional mit Fokus, z. B. `/compact focus on the auth module`. Wenn du zu einem ' +
        'unabhängigen Problem wechselst, beginne stattdessen mit `/new` oder `/clear` sauber ' +
        'neu. Sich des Kontextverbrauchs bewusst zu sein hilft dir zu entscheiden, wann du ' +
        'komprimieren, neu beginnen oder fortfahren solltest.',
      useCases: ['CLI', 'Lange Sessions', 'Kontextverwaltung'],
    },
    'reuse-context': {
      name: 'Kontext speichern und wiederverwenden',
      path: 'Kontext wiederverwenden',
      description: 'Lade geteilten Kontext früh, damit spätere Fragen ihn kostengünstig referenzieren',
      details:
        'Speichere und nutze Kontext innerhalb deiner Prompts wieder. Lade z. B. ein ' +
        'Datenbankschema früh in der Unterhaltung, damit spätere Arbeit es wiederverwenden kann ' +
        '— stelle konkrete Fragen, die darauf verweisen, statt es jedes Mal neu einzufügen. Das ' +
        'ist besonders effektiv in der CLI, wo Sessions lange laufen können und ein geteilter ' +
        'Präfix Prompt-Caching ermöglicht.',
      useCases: ['CLI-Sessions', 'Chat', 'Schemalastige Arbeit'],
    },
    'prefix-matching': {
      name: 'Prompt-Präfix-Caching',
      path: 'Prompt-Caching',
      description: 'LLM-Caching hängt von exakten Präfixübereinstimmungen ab — strukturiere Prompts entsprechend',
      details:
        'Prompt-Caching hängt in der Regel von wiederholten Präfixen ab. Stabile Anweisungen, ' +
        'Tool-Definitionen und relevanter Konversationskontext werden mit höherer ' +
        'Wahrscheinlichkeit wiederverwendet als ständig wechselnde Präambeln. Betrachte dies als ' +
        'Implementierungskontext, nicht als festen Copilot-Token-Schwellenwert.',
      useCases: ['Alle Interaktionen', 'Kostenoptimierung', 'Performance'],
    },
    'choose-right-model': {
      name: 'Modell und Reasoning-Level wählen',
      path: 'Modellauswahl',
      description: 'Passe Modellfähigkeit und Reasoning-Aufwand an die Aufgabenkomplexität an',
      details:
        'Die Modellwahl ist eine der schnellsten Möglichkeiten, die Kosten zu steuern — nutze so ' +
        'viel Fähigkeit, wie die Aufgabe erfordert, und so wenig wie nötig. Denke in drei ' +
        'Stufen: Reasoning-Modelle für Architekturentscheidungen, komplexes Debugging und ' +
        'Systemdesign; mittlere Modelle, wenn der Plan klar ist und der Agent nur ausführen ' +
        'muss; leichtere Modelle für Refactoring, Formatierung, Dokumentation und andere ' +
        'routinemäßige, gut eingegrenzte Änderungen. Nutze bei Modellen mit konfigurierbarem ' +
        'Reasoning standardmäßig den normalen Aufwand und erhöhe ihn nur bei schwierigerer ' +
        'Arbeit, da höherer Aufwand mehr KI-Credits verbraucht.',
      useCases: ['Alle Interaktionen', 'Budgetplanung', 'Aufgaben-Routing'],
    },
    'auto-mode': {
      name: 'Automodus verwenden',
      path: 'Automatische Auswahl',
      description: 'Auto leitet jeden Prompt an ein effizientes Modell weiter, schützt deinen Cache und gewährt 10 % Rabatt',
      details:
        'Wenn du unsicher bist, welches Modell du nutzen sollst, wähle „Auto“. Ein kleiner ' +
        'Router analysiert deinen Prompt und schickt ihn an das Modell, das ihn am ' +
        'effizientesten bearbeiten kann — teure Reasoning-Modelle werden für wirklich komplexe ' +
        'Probleme reserviert. Auto schützt außerdem deinen Cache: Der Modellwechsel erfolgt nur ' +
        'an natürlichen Grenzen (eine neue Session oder nach `/compact`), nie mitten in einer ' +
        'Aufgabe. In bezahlten Copilot-Plänen gewährt die Nutzung der automatischen Modellauswahl ' +
        '10 % Rabatt auf die Modellkosten in Chat, CLI, Copilot-App und Cloud-Agent. Eine gute ' +
        'Standardwahl für die meisten Workflows.',
      useCases: ['Standard-Workflow', 'Gemischte Aufgaben', 'Neue Nutzer'],
    },
    'monitor-usage': {
      name: 'Erst Nutzung messen, dann Budgets setzen',
      path: 'Budgetkontrollen',
      description: 'Nutze Berichte, Alerts, Kostenstellen und Nutzerlimits ausgehend vom beobachteten Verbrauch',
      details:
        'Nutze KI-Nutzungsberichte, einschließlich modellbezogener Aufschlüsselungen von ' +
        'Eingaben, Ausgaben, Cache-Lese- und Schreibvorgängen, um eine Baseline festzulegen. Bei ' +
        'begrenztem Verlauf beginne mit reinen Alert-Budgets und einem großzügigen ' +
        'organisationsweiten Nutzerlimit. Füge Budgets pro Kostenstelle hinzu, wo Verantwortung ' +
        'delegiert ist, überwache Schwellenwert-Alerts und passe Limits basierend auf ' +
        'beobachteten Mustern an.',
      useCases: ['Admin', 'Budgetkontrolle', 'Team-Governance'],
    },
    'managed-settings-tip': {
      name: 'Verwaltete Einstellungen pro Team spezialisieren',
      path: 'managed-settings.json\nteam-mappings.json\nteams/<name>.json',
      description: 'Halte Enterprise-Leitplanken fest, während Teams genehmigte Einstellungen anpassen',
      details:
        'Beginne mit den Enterprise-Standardwerten in `copilot/managed-settings.json`. ' +
        'Markiere nur die Schlüssel, die Teams ändern dürfen, mit `overridable`, ordne ' +
        'Konfigurationsdateien in `copilot/team-mappings.json` den Enterprise-Team-Slugs zu ' +
        'und lege die genehmigten Werte dann unter `copilot/teams/` ab. Undefinierte Werte ' +
        'fallen auf den Enterprise-Standardwert zurück. Nicht überschreibbare Schlüssel bleiben ' +
        'gesperrt, während `enabledPlugins` und `extraKnownMarketplaces` additiv ' +
        'zusammengeführt werden. MCP-Allow-/Deny-Konfiguration kann Server auf unterstützten ' +
        'Clients zentral steuern. Wenn ein Nutzer mehreren zugewiesenen Teams angehört, werden ' +
        'Teamwerte unter der Enterprise-Richtlinie mit dem am wenigsten restriktiven Wert ' +
        'zusammengeführt.',
      useCases: ['Plattformteams', 'KI-Pioniere', 'Rollenbasiertes Tooling'],
      docLabel: 'Teamspezifische Einstellungen konfigurieren',
      altDocLabel: 'Referenz für verwaltete Einstellungen',
    },
    'compound-errors': {
      name: 'Das Problem sich summierender Fehler',
      path: 'Qualitätsmathematik',
      description: 'Hypothetische Fehlerraten pro Schritt summieren sich über lange Workflows hinweg',
      details:
        'Zur Veranschaulichung: Wäre jeder von 50 unabhängigen Schritten zu 99 % zuverlässig, ' +
        'läge die hypothetische Ende-zu-Ende-Rate bei etwa 60 %; bei 95 % wären es etwa 8 %. ' +
        'Dies sind mathematische Beispiele, keine gemessenen Copilot-Zuverlässigkeitsraten. ' +
        'Kleinere Geltungsbereiche und deterministische Prüfungen reduzieren die Zahl der ' +
        'ungeprüften Schritte.',
      useCases: ['Agent Mode', 'Cloud-Agent', 'Orchestrierte Workflows'],
    },
    'context-rot': {
      name: 'Kontextverfall',
      path: 'Kontextverfall',
      description: 'Lange Historien erhöhen die Kosten und können relevante Entscheidungen verwässern',
      details:
        'Jede Tool-Ausgabe, jeder Anhang und jede Konversationsrunde sammelt sich im Kontext an. ' +
        'Lange Historien erhöhen die Eingabeverarbeitung und können ältere Entscheidungen ' +
        'schwerer auffindbar machen. Gegenmaßnahmen: kürze ausschweifende Tool-Ausgaben, ' +
        'übertrage Zwischenentscheidungen in dauerhafte Artefakte (Issues, PRs, ADRs) und ' +
        'starte neue Threads, bevor sich Verfall einstellt.',
      useCases: ['Lange Sessions', 'Agent Mode', 'CLI-Sessions'],
    },
    'lost-in-middle': {
      name: 'Verloren in der Mitte',
      path: 'Positionsverzerrung',
      description: 'Tokens in der Mitte eines langen Kontexts werden weniger zuverlässig erinnert',
      details:
        'Externe LLM-Forschung fand eine schwächere Abrufbarkeit für Informationen in der Mitte ' +
        'langer Kontexte. Die Ergebnisse variieren je nach Modell und sind keine ' +
        'Zuverlässigkeitsgarantie von Copilot. Halte kritische Anweisungen hervorgehoben und ' +
        'teile nicht zusammenhängendes Material in eingegrenzte Einträge auf.',
      useCases: ['Große Prompts', 'Lange Dokumente', 'Dateiübergreifende Reviews'],
    },
    'think-in-code': {
      name: 'In Code denken',
      path: 'Skripte statt KI',
      description: 'Bevorzuge Skripte gegenüber dem Einspeisen von Rohdateien — analysiere, dann liefere dem Modell eine Zusammenfassung',
      details:
        'Wenn du 10.000 Zeilen Logs oder einen großen JSON-Dump verstehen musst, füge nicht ' +
        'alles ein. Schreibe (oder lass den Agenten schreiben) ein kleines Skript, das nur das ' +
        'Wesentliche extrahiert — Zählungen, Fehler, den relevanten Ausschnitt — und liefere dem ' +
        'Agenten stattdessen die Skriptausgabe. So bleibt das Modell auf die eigentliche Frage ' +
        'fokussiert. Nutze grep, jq, awk oder ein kleines Skript und bündle unabhängige ' +
        'deterministische Operationen, wenn sie sicher zusammen ausgeführt werden können.',
      useCases: ['Log-Analyse', 'Datenexploration', 'Große Dateien'],
    },
    'research-plan-implement': {
      name: 'Recherche → Plan → Umsetzung',
      path: 'Teile und herrsche',
      description: 'Trenne Recherche, Übereinkunft und Umsetzung; parallelisiere unabhängige Arbeit',
      details:
        'Nutze `/research` für dokumentierte Tiefenrecherche, den Planmodus, um vor Änderungen ' +
        'Übereinstimmung über Umfang und Reihenfolge zu erzielen, und Implementierung erst, ' +
        'nachdem der Plan klar ist. Nutze `/fleet`, wenn sich eine Anfrage in unabhängige ' +
        'Aufgaben zerlegen lässt, die parallel laufen. Halte jede Stufe eingegrenzt und übergib ' +
        'dauerhafte Erkenntnisse statt der gesamten Explorationshistorie.',
      useCases: ['Komplexe Refactorings', 'Bereichsübergreifende Änderungen', 'Dateiübergreifende Bearbeitungen'],
    },
    'deterministic-guardrails': {
      name: 'Copilot-Ausgabe validieren',
      path: 'Testgetriebene Schleifen',
      description: 'Menschliche Überprüfung und deterministische Prüfungen bleiben notwendig',
      details:
        'Überprüfe generierten Code, bevor du ihn in Produktion nutzt. Führe gezielte Tests, ' +
        'Linter, Typprüfungen, Code-Scanning, Secret-Scanning und, wo zutreffend, IP-Scanning ' +
        'aus. Diese Prüfungen liefern deterministisches Feedback innerhalb einer ' +
        'Agenten-Schleife, während die menschliche Überprüfung Absicht, Design, Sicherheit, ' +
        'Lesbarkeit und Wartbarkeit verifiziert.',
      useCases: ['Agent Mode', 'TDD', 'CI-Pipelines'],
    },
    'trim-shell-outputs': {
      name: 'Shell-Ausgaben (vorsichtig) kürzen',
      path: 'Shell-Hygiene',
      description: 'Entferne bekanntes Rauschen ausschweifender Befehle — allgemeine Kompression ist aber oft kontraproduktiv',
      details:
        'CLI-Tools lieben Ausschweifigkeit. Ein einfaches `npm install` oder `terraform plan` ' +
        'kann Tausende Zeilen in den Kontext des Agenten kippen — der meiste davon Rauschen. Es ' +
        'kann helfen, einen rauschintensiven Befehl so einzupacken, dass der Agent nur den ' +
        'relevanten Endteil sieht (Fehler, Warnungen, die abschließende Zusammenfassung). Zwei ' +
        'Community-Projekte veranschaulichen unterschiedliche Formen der Kompression: **Snip** ' +
        '(github.com/edouard-claude/snip) stellt Shell-Befehlen etwas voran — ' +
        '`snip -- npm install` — um ausschweifende Ausgaben herauszufiltern und dabei Fehler ' +
        'zu erhalten. **Caveman** (github.com/juliusbrussee/caveman) weist das Modell an, in ' +
        'einem komprimierten, telegrammartigen Stil zu antworten. Begegne aggressiver ' +
        'Kompression mit Skepsis, da verlorene Informationen zu erneutem Nachlesen und ' +
        'Korrekturen führen können. Bevorzuge ein schmales, deterministisches Kürzen (entferne ' +
        'nur bekannte Rauschzeilen, behalte Fehler und Zusammenfassung immer bei) gegenüber ' +
        '„alles reduzieren“-Ansätzen und miss den tatsächlichen Token-Verbrauch, bevor du ein ' +
        'Tool einführst.',
      useCases: ['CLI-Agent', 'Build-Ausgabe', 'Testausführung'],
    },
    'apply-architecture': {
      name: 'Gute Architektur anwenden',
      path: 'Agentenfreundlicher Code',
      description: 'Klare Grenzen und Namen reduzieren unnötige Exploration',
      details:
        'Klare Modulgrenzen, aussagekräftige Namen, lokale Konventionen und eingegrenzte Tests ' +
        'helfen Menschen wie Agenten gleichermaßen, den richtigen Code zu finden und isolierte ' +
        'Änderungen zu validieren. Wähle die Architektur für das Produkt und das Team, nicht ' +
        'für ein KI-Tool; die Effizienz des Agenten ist ein nützlicher Nebeneffekt.',
      useCases: ['Neue Projekte', 'Refactoring', 'Team-Codebasen'],
    },
    'iterate-configs': {
      name: 'Fehler des Agenten als Vorfälle behandeln',
      path: 'Fehler → Vorfälle',
      description: 'Wenn der Agent einen Fehler macht, korrigiere die Konfiguration — nicht nur die Ausgabe',
      details:
        'Behandle einen bedeutsamen Fehler wie einen kleinen Vorfall. Identifiziere die ' +
        'Grundursache: fehlende Projektrichtlinien, den falschen Skill oder das falsche Tool, ' +
        'schwache Validierung oder ein Umgebungsproblem. Kodifiziere eine dauerhafte Korrektur ' +
        'in Instructions, Skills, Tests oder Konfiguration, damit derselbe Fehler seltener ' +
        'wieder auftritt. Chronicle-Befehle werden separat in der Governance-Ebene behandelt.',
      useCases: ['Team-Workflows', 'CLI-Poweruser', 'Langlebige Repositorys'],
    },
    'project-map': {
      name: 'Copilot eine Projektkarte geben',
      path: 'Projektübersicht',
      description: 'Eine gepflegte AGENTS.md / copilot-instructions.md verhindert, dass der Agent Dutzende Dateien liest',
      details:
        'Ohne eine strukturierte Übersicht liest der Agent eine große Anzahl von Dateien nur ' +
        'zur Orientierung — jede davon sind Eingabe-Tokens. Eine gut gepflegte Übersicht wie ' +
        'eine `AGENTS.md` oder `.github/copilot-instructions.md` liefert von Anfang an die ' +
        'Struktur: wo sich Dinge befinden, wie Module zusammenhängen, ' +
        'Build-/Test-/Lint-Befehle und wichtige Konventionen. Der Agent verwendet sein Budget ' +
        'für die eigentliche Änderung statt für Exploration, was zu kürzeren Sessions und ' +
        'kleineren Diffs führt.',
      useCases: ['Onboarding', 'Große Repositorys', 'Alle Interaktionen'],
    },
    'preserve-cache': {
      name: 'Den Cache erhalten',
      path: 'Cache-Invalidierung',
      description: 'Wechsle Modell, Reasoning-Level oder Toolset nicht mitten in der Session — das invalidiert den Cache',
      details:
        'Der Cache nutzt großen, wiederholten Kontext (System-Prompt, Dateiinhalte, ' +
        'Tool-Definitionen) über Runden hinweg wieder, und zwischengespeicherte Tokens werden ' +
        'mit ~10 % der normalen Eingabekosten abgerechnet. Drei Dinge werfen das über den Haufen ' +
        'und rechnen den gesamten Kontext neu als Eingabe ab: Modellwechsel mitten in der ' +
        'Session (ein Modell kann den Cache eines anderen nicht wiederverwenden), Änderung von ' +
        'Reasoning-Level/Kontextgröße/aktivierten Tools mitten in der Session, sowie die ' +
        'Rückkehr zu einer alten Session, nachdem der Cache abgelaufen ist (24 Stunden bei ' +
        'OpenAI-Modellen, ~1 Stunde bei den meisten anderen). Wähle dein Modell und deine ' +
        'Einstellungen vor dem Start, halte sie fest, und starte bei einer veralteten Session ' +
        'neu oder nutze `/compact`, damit das, was neu aufgebaut wird, eine kurze ' +
        'Zusammenfassung ist — nicht die gesamte Historie.',
      useCases: ['Lange Sessions', 'CLI', 'Kostenoptimierung'],
    },
    'cheaper-subagents': {
      name: 'Günstigere Modelle für Subagenten',
      path: 'Modelle für Subagenten',
      description: 'Führe Subagenten mit leichteren Modellen aus — eingegrenzter Kontext benötigt selten ein Premium-Modell',
      details:
        'Subagenten laufen in ihrer eigenen Session und erben nicht die Konversationshistorie ' +
        'des Hauptagenten. Da ihr Kontext auf eine einzelne, spezifische Aufgabe eingegrenzt ' +
        'ist, reicht oft ein leichteres Modell, um die Arbeit gut zu erledigen. Einem ' +
        'Subagenten eines zuzuweisen beeinflusst auch nicht den Cache des Hauptagenten, wie es ' +
        'ein Modellwechsel mitten in der Session tun würde — so sparst du bei der Arbeit des ' +
        'Subagenten, ohne im Hauptthread eine Cache-Neuaufbau-Strafe zu zahlen.',
      useCases: ['Subagenten', 'Orchestrierte Workflows', 'Kostenoptimierung'],
    },
    'chronicle-insights': {
      name: 'Sitzungen mit /chronicle auswerten',
      path: 'Aus Sessions lernen',
      description: 'Verwandle die Session-Historie von Copilot CLI in Zusammenfassungen und Workflow-Erkenntnisse',
      details:
        'Nutze `/chronicle standup` für Arbeitszusammenfassungen, `/chronicle tips` für ' +
        'personalisierte Nutzungshinweise, `/chronicle cost tips` für Feedback zum ' +
        'Token-Verbrauch, `/chronicle search` zum Durchsuchen von Sessions und ' +
        '`/chronicle improve` für Vorschläge zu repositorybezogenen Anweisungen. Die ' +
        'Erkenntnisse basieren auf Copilot-CLI-Sessiondaten. Überprüfe Kontrollen zu Speicherung, ' +
        'Synchronisation und Löschung, bevor du die Session-Historie nutzt.',
      useCases: ['CLI', 'Team-Governance', 'Kontinuierliche Verbesserung'],
    },
    'session-limits': {
      name: 'KI-Credit-Sitzungslimits festlegen',
      path: 'Session-Leitplanken',
      description: 'Begrenze autonome CLI- und SDK-Arbeit, bevor eine Session beginnt',
      details:
        'Nutze `--max-ai-credits` für nicht-interaktive CLI-Läufe, `/limits set ' +
        'max-ai-credits` für interaktive CLI-Sessions oder `sessionLimits.maxAiCredits` im ' +
        'Copilot-SDK. Der Verbrauch wird erst nach jedem Modellaufruf erfasst, daher ist der ' +
        'konfigurierte Wert eine weiche Obergrenze, die eine Session leicht überschreiten kann, ' +
        'kein harter Stopp. Session-Limits grenzen unbeaufsichtigte oder lang laufende Arbeit ' +
        'ein und ergänzen Budgets, Alerts und menschliche Genehmigung.',
      useCases: ['Copilot CLI', 'Copilot SDK', 'Autonome Arbeit'],
    },
    'mcp-governance': {
      name: 'MCP-Zugriff steuern',
      path: 'MCP-Governance',
      description: 'Wähle Server sorgfältig aus und schütze die Konfiguration auf unterstützten Oberflächen',
      details:
        'Nutze genehmigte MCP-Registrys und Enterprise-Allow-/Deny-Konfigurationen, wo ' +
        'verfügbar. Schütze die Repository-MCP-Konfiguration mit Review-Kontrollen und ' +
        'dokumentiere Serverbesitzer, Geltungsbereiche und Datenzugriff. Die Durchsetzung ' +
        'unterscheidet sich zwischen IDEs, CLI, Copilot-App und Cloud-Agent — behandle ' +
        'Registrys daher als Governance und Entdeckungsmechanismus, nicht als universelle ' +
        'Sicherheitsgrenze.',
      useCases: ['Enterprise-Governance', 'Genehmigte Tools', 'Datenzugriff'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>Qualität summiert sich.</strong> Die hypothetische Zuverlässigkeit pro Schritt ' +
        'sinkt über eine lange Kette hinweg, nutze daher kleinere Geltungsbereiche und ' +
        'deterministische Prüfungen. Die gezeigten Prozentsätze sind Beispiele, keine Copilot-' +
        'Messwerte.',
    },
    {
      icon: '💰',
      content:
        '<strong>Halte den Kontext schlank und relevant.</strong> Kürze Dateien und ' +
        'Tool-Ausgaben, starte für nicht zusammenhängende Arbeit neue Threads und nutze ' +
        'eingegrenzten Kontext, um den Verbrauch von KI-Credits zu senken.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Passe Modell und Reasoning-Aufwand an die Aufgabe an.</strong> Nutze ' +
        'standardmäßig den normalen Aufwand, erhöhe ihn für schwierige Probleme und nutze Auto, ' +
        'wenn du absichtsbasiertes Routing möchtest.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Agentische Schleifen vervielfachen die Arbeit.</strong> Definiere eine klare ' +
        'Stoppbedingung und nutze Session-Limits für unbeaufsichtigte oder lang laufende ' +
        'Aufgaben.',
    },
    {
      icon: '📦',
      content:
        '<strong>Trenne spezialisierte Richtlinien von breiten Anweisungen.</strong> Nutze ' +
        'Skills für wiederverwendbare Expertise und Custom Agents für unterschiedliche Rollen, ' +
        'Tools oder isolierten Kontext.',
    },
  ],
};
