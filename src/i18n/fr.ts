import type { Translations } from './types';

export const fr: Translations = {
  locale: 'fr',
  seo: {
    title: 'Copilot Panorama — .github/ Stack',
    description: 'Guide visuel interactif du système composable GitHub Copilot — explorez les 4 couches : Contexte permanent, Capacités à la demande, Contrôle & Automatisation, et Distribution.',
  },
  ui: {
    heroTitle: 'stack composable',
    layerPrefix: 'COUCHE',
    insightsTitle: 'Comment le système fonctionne réellement',
    insightsSubtitle: 'Les points d\'architecture clés que la plupart des équipes ignorent',
    detailsLabel: 'Détails',
    useCasesLabel: 'Cas d\'usage',
    documentationLabel: 'Documentation',
    communityExamplesLabel: 'Voir des exemples de la communauté',
    footerBuiltFor: 'Conçu pour les utilisateurs de GitHub Copilot',
    footerDocsLink: 'Documentation complète sur le système composable',
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Partager le lien',
    shareCopied: 'Copié !',
  },
  viz: {
    alwaysActive: 'S\'applique automatiquement',
    loadsAutomatically: 'dans son périmètre pris en charge',
    planning: 'Planification',
    implementation: 'Implémentation',
    review: 'Revue',
    descriptionRead: 'les métadonnées du skill identifient l\'expertise pertinente',
    fullSkillInjected: 'Les instructions et ressources se chargent quand le skill est sélectionné',
    approveDeny: 'autoriser / refuser / modifier',

    pluginJson: 'plugin.json',
    agentsDir: 'agents/',
    skillsDir: 'skills/',
    hooksJson: 'hooks.json',
    mcpJson: '.mcp.json',
    lspJson: 'lsp.json',
    repositorySettings: 'Paramètres MCP du dépôt',
    ideConfig: 'mcp.json (IDE)',
    vsCode: 'VS Code',
    copilotCli: 'Copilot CLI',
    copilotApp: 'Application Copilot',
    marketplace: 'Marketplace',
    gitRepo: 'Dépôt Git',
    localPath: 'Chemin local',
  },
  layers: {
    'always-on-context': {
      title: 'Contexte permanent',
      subtitle: 'Directives du dépôt appliquées automatiquement dans leur périmètre pris en charge',
    },
    'on-demand-capabilities': {
      title: 'Capacités à la demande',
      subtitle: 'Invoquées explicitement par le développeur ou sélectionnées par le modèle',
    },
    'enforcement-automation': {
      title: 'Contrôle & Automatisation',
      subtitle: 'Garde-fous déterministes et orchestration au niveau CI/CD',
    },
    distribution: {
      title: 'Distribution',
      subtitle: 'Empaqueter et partager des stacks d\'agents entre équipes et dépôts',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Directives du dépôt qui façonnent automatiquement les réponses de Copilot',
      details:
        'Utilisez `.github/copilot-instructions.md` pour des directives valables sur tout le dépôt ' +
        'et `.github/instructions/NOM.instructions.md` avec des globs `applyTo` pour les chemins ' +
        'correspondants. Les agents peuvent aussi utiliser le `AGENTS.md` le plus proche, tandis ' +
        'que les fichiers racine `CLAUDE.md` et `GEMINI.md` sont pris en charge sur certaines ' +
        'surfaces. Les instructions personnelles et d\'organisation fournissent des valeurs par ' +
        'défaut plus larges en dehors des fichiers du dépôt. La prise en charge varie selon la ' +
        'surface Copilot, et les instructions guident le comportement sans l\'imposer.',
      useCases: ['Standards de code', 'Règles de framework', 'Conventions du dépôt'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Spécialistes avec des instructions ciblées, des outils et un contexte isolé',
      details:
        'Définissez des agents de dépôt dans `.github/agents/NOM-AGENT.md`. Chaque agent peut ' +
        'porter des instructions spécialisées, des restrictions d\'outils et du contexte MCP. Les ' +
        'agents d\'organisation et d\'entreprise peuvent être distribués depuis les dépôts `.github` ' +
        'ou `.github-private`. Copilot peut aussi déléguer un travail ciblé à des sous-agents avec ' +
        'un contexte isolé. Des champs comme les modèles et les transferts (handoffs) varient selon ' +
        'la surface, vérifiez la matrice de fonctionnalités actuelle.',
      useCases: ['Auditeur sécurité', 'Spécialiste BDD', 'Concepteur d\'API'],
    },
    skills: {
      name: 'Skills',
      description: 'Instructions, scripts et ressources réutilisables, chargés quand pertinent',
      details:
        'Chaque skill est un dossier contenant `SKILL.md` ainsi que des scripts et ressources ' +
        'optionnels. Copilot sélectionne un skill quand son expertise correspond à la tâche. ' +
        'Stockez les skills de projet dans `.github/skills/`, `.agents/skills/` ou `.claude/skills/` ; ' +
        'les skills personnels peuvent résider dans `~/.copilot/skills/` ou `~/.agents/skills/`. La ' +
        'prise en charge varie selon la surface.',
      useCases: ['Modules Terraform', 'Manifestes K8s', 'Stack d\'observabilité'],
    },
    mcp: {
      name: 'MCP Servers',
      description: 'Outils externes et données en direct connectés via le Model Context Protocol',
      details:
        'Configurez les serveurs MCP du dépôt dans les paramètres du dépôt sur GitHub pour ' +
        'l\'agent cloud Copilot et la revue de code Copilot. Les clients IDE utilisent leur propre ' +
        'configuration `mcp.json`, tandis que le CLI et l\'application Copilot exposent leurs ' +
        'propres paramètres client. La prise en charge MCP, les politiques et les emplacements de ' +
        'configuration varient selon la surface, activez donc uniquement les serveurs et toolsets ' +
        'dont un workflow a besoin.',
      useCases: ['Automatisation Issue & PR', 'Tests navigateur', 'Données internes'],
      docLabel: 'Configurer les serveurs MCP du dépôt',
      altDocLabel: 'À propos de MCP',
    },
    hooks: {
      name: 'Hooks',
      description: 'Commandes exécutées à des points documentés du cycle de vie de l\'agent',
      details:
        'Définissez les hooks du dépôt dans `.github/hooks/NOM.json` avec `version: 1`. Les ' +
        'événements couvrent les sessions, prompts, outils, permissions, la compaction, les ' +
        'sous-agents et les arrêts d\'agent. `preToolUse` peut autoriser, refuser ou modifier un ' +
        'appel d\'outil. La prise en charge des événements diffère entre Copilot CLI et l\'agent ' +
        'cloud. Les échecs de hook laissent généralement l\'exécution se poursuivre ; les erreurs ' +
        'de `preToolUse` échouent de façon fermée, tandis que les timeouts restent ouverts.',
      useCases: ['Portes de conformité', 'Contrôle d\'accès fichiers', 'Journalisation d\'audit'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Automatisation de dépôt propulsée par des agents de codage IA, exécutée dans GitHub Actions avec des garde-fous',
      details:
        'Les workflows agentiques sont des fichiers Markdown avec frontmatter YAML ' +
        '(permissions, safe-outputs, déclencheurs) compilés en GitHub Actions via l\'extension ' +
        'CLI `gh aw`. Définissez l\'automatisation en langage naturel — planifiez des rapports ' +
        'quotidiens, triez les issues, analysez les échecs de CI ou maintenez la documentation. ' +
        'Les agents s\'exécutent en lecture seule par défaut ; les opérations d\'écriture ' +
        'nécessitent une approbation explicite via safe-output. L\'exécution est sandboxée avec ' +
        'liste blanche d\'outils et isolation réseau. Fonctionne avec GitHub Copilot, Claude ou ' +
        'OpenAI Codex.',
      useCases: ['Triage d\'issues', 'Analyse d\'échecs CI', 'Rapports quotidiens'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'Workflow GitHub Actions qui préconfigure l\'environnement de l\'agent cloud',
      details:
        'Copilot Setup Steps est un workflow GitHub Actions spécial situé dans ' +
        '`.github/workflows/copilot-setup-steps.yml` qui s\'exécute avant que l\'agent cloud ne ' +
        'commence à travailler. Utilisez-le pour installer de manière déterministe des outils, ' +
        'des dépendances, ou configurer le runner — afin que l\'agent puisse immédiatement ' +
        'compiler, tester et linter sans découverte par tâtonnement. Vous pouvez aussi passer à ' +
        'des runners plus puissants, basculer sous Windows, activer Git LFS, ou définir des ' +
        'variables d\'environnement via l\'environnement Actions `copilot`. Le workflow doit ' +
        'contenir un unique job `copilot-setup-steps` et ne prend effet que s\'il est présent sur ' +
        'la branche par défaut.',
      useCases: ['Préinstaller les dépendances', 'Runners plus puissants', 'Variables d\'environnement'],
    },
    plugins: {
      name: 'GitHub Copilot Plugins',
      description: 'Paquets installables pour agents, skills, hooks, MCP et intégrations LSP',
      details:
        'Un plugin Copilot natif démarre avec `plugin.json` et peut inclure `agents/`, `skills/`, ' +
        '`hooks.json`, `.mcp.json` et `lsp.json`. Les plugins regroupent des capacités pour ' +
        'l\'installation via les clients Copilot et les marketplaces. Séparément, Agent Plugins ' +
        '1.0 définit un standard ouvert multi-client pour des paquets portables ; il complète, ' +
        'sans la remplacer, la structure de plugin native de GitHub.',
      useCases: ['Packs d\'agents réutilisables', 'Standardisation d\'équipe', 'Distribution Marketplace'],
      docLabel: 'À propos des plugins Copilot',
      altDocLabel: 'Standard Agent Plugins 1.0',
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Les instructions s\'appliquent automatiquement dans leur périmètre.</strong> ' +
        'Les directives à l\'échelle du dépôt, spécifiques à un chemin, à un agent, personnelles ' +
        'et d\'organisation servent des périmètres différents.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Les skills apportent une expertise à la demande.</strong> Copilot peut ' +
        'sélectionner un skill quand ses instructions et ressources correspondent à la tâche en cours.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Les hooks exécutent des commandes à des points du cycle de vie.</strong> ' +
        '<code>preToolUse</code> peut autoriser, refuser ou modifier un appel d\'outil. Les ' +
        'événements pris en charge et le comportement en cas d\'échec varient selon la surface.',
    },
    {
      icon: '🔀',
      content:
        '<strong>Copilot peut sélectionner les capacités pertinentes.</strong> Des descriptions ' +
        'claires d\'agents, de skills et d\'outils aident Copilot à choisir la bonne expertise ' +
        'pour une tâche.',
    },
  ],

  /* ── Page Outils ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Guide visuel interactif de GitHub Copilot à travers les IDE, les applications autonomes et le Cloud GitHub, incluant Copilot CLI, l\'agent cloud, la revue de code, les agents tiers, Slack et Teams.',
  },
  toolsUi: {
    heroTitle: 'Copilot Everywhere',
    insightsTitle: 'Les distinctions clés que la plupart des développeurs ignorent',
    insightsSubtitle: 'Points d\'architecture à travers les trois couches',
    footerBuiltFor: 'Conçu pour les utilisateurs de GitHub Copilot',
    footerDocsLink: 'Documentation complète sur les fonctionnalités Copilot',
  },
  toolsViz: {
    interactive: 'Interactif',
    programmatic: 'Programmatique',
    ghostText: 'texte fantôme',
    tabToAccept: 'Tab pour accepter',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: 'Analyser',
    edit: 'Éditer',
    run: 'Exécuter',
    fix: 'Corriger',
    local: 'Local',
    cloud: 'Cloud',
    issueAssigned: 'Issue assignée',
    agentCodes: 'L\'agent code',
    prCreated: 'PR créée',
    securityChecks: 'Vérifications de sécurité',
    addReviewer: 'Ajouter un reviewer',
    reviewComments: 'Commentaires de revue',
    suggestedFixes: 'Corrections suggérées',
    selectAgent: 'Sélectionner un agent',
    askAnything: 'Posez n\'importe quelle question',
    repoContext: 'Contexte du dépôt',
    webSearch: 'Recherche web',
    openSession: 'Ouvrir la session',
    reviewDiff: 'Revoir le diff',
    openPr: 'Ouvrir la PR',
    inbox: 'Boîte de réception',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'Workflows',
    slack: 'Slack',
    teams: 'Teams',
    sharedSession: 'Session d\'agent partagée',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'Apps autonomes',
      subtitle: 'Applications bureau et terminal dédiées au développement agentique',
    },
    ide: {
      title: 'IDE',
      subtitle: 'Suggestions inline, chat, édition autonome et agents tiers dans votre éditeur',
    },
    cloud: {
      title: 'Cloud',
      subtitle: 'Agents autonomes sur la plateforme GitHub — codage, revue et agents tiers',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      path: 'Agent de terminal',
      description: 'Un agent dans votre terminal pour le code, le shell et les workflows GitHub',
      details:
        'Démarrez une session interactive avec `copilot` ou passez un prompt unique avec ' +
        '`copilot -p`. Le CLI peut éditer des fichiers, exécuter des commandes shell approuvées, ' +
        'et travailler avec les issues, pull requests et Actions GitHub. Le mode plan cadre le ' +
        'travail avant les modifications. `/context`, `/compact` et la compaction automatique ' +
        'gèrent les sessions longues. Les sandboxes locaux et cloud sont en préversion publique. ' +
        'Le CLI prend en charge les instructions, agents, skills, hooks, MCP, plugins et Copilot ' +
        'Memory en préversion publique.',
      useCases: ['Livraison Issue-to-PR', 'Modernisation de code legacy', 'Exécution parallèle Fleet', 'Tri & planification du backlog', 'Développement agnostique d\'éditeur', 'Automatisation'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      path: 'Espace de travail bureau pour agents',
      description: 'Espace de travail bureau pour des sessions d\'agents parallèles et des automatisations récurrentes',
      details:
        'Exécutez plusieurs sessions d\'agents isolées à travers les dépôts, gérez les issues et ' +
        'pull requests, et enregistrez des automatisations qui s\'exécutent à la demande ou selon ' +
        'un calendrier. Les sessions de dépôt utilisent des worktrees dédiés ; les espaces de ' +
        'travail cloud sont en préversion publique. L\'application prend en charge les ' +
        'instructions, skills, serveurs MCP, agents personnalisés, plugins et extensions canvas. ' +
        'Les paramètres gérés par l\'entreprise peuvent encadrer les actions et intégrations prises en charge.',
      useCases: ['Inbox agentique & triage', 'Agentic Merge (dernier kilomètre)', 'Travail parallèle multi-sessions', 'Workflows répétables', 'Collaboration rôles adjacents', 'Orchestration multi-dépôts'],
    },
    autocomplete: {
      name: 'Suggestions en ligne',
      path: 'Suggestions inline de l\'IDE',
      description: 'Suggestions de code en texte fantôme qui apparaissent inline pendant la saisie',
      details:
        'Copilot propose du code à partir du contexte de l\'éditeur pendant que vous tapez. Les ' +
        'suggestions peuvent aller d\'une ligne à une fonction complète. Next Edit Suggestions ' +
        'prédit l\'emplacement de la prochaine modification sur les éditeurs pris en charge. Les ' +
        'raccourcis clavier et la disponibilité des fonctionnalités varient selon l\'IDE.',
      useCases: ['Complétion de code', 'Génération de boilerplate', 'Complétion de patterns', 'Commentaire vers code'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      path: 'Chat de l\'IDE',
      description: 'Chat IA conversationnel pour les questions, explications et génération de code',
      details:
        'Copilot Chat répond aux questions, explique le code, propose des modifications et aide ' +
        'au débogage. Ajoutez les fichiers, sélections, contexte de dépôt ou outils pris en ' +
        'charge pertinents pour cadrer une demande. Les mots-clés, commandes, modèles et la prise ' +
        'en charge MCP varient selon l\'IDE, utilisez donc la matrice de fonctionnalités actuelle ' +
        'pour l\'éditeur que vous utilisez.',
      useCases: ['Explication de code', 'Débogage', 'Génération de tests', 'Refactoring de code', 'Apprentissage'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      path: 'Agent Mode de l\'IDE',
      description: 'Codage local autonome — Copilot détermine les fichiers, effectue les modifications, exécute les commandes et itère',
      details:
        'Agent Mode permet à Copilot de modifier votre code de manière autonome dans l\'IDE. Il ' +
        'détermine quels fichiers modifier, effectue des éditions multi-fichiers, propose des ' +
        'commandes terminal pour approbation, et itère face aux erreurs. Les IDE pris en charge ' +
        'peuvent ajouter des serveurs MCP, des sous-agents et des agents personnalisés. ' +
        'Contrairement à l\'agent cloud Copilot, Agent Mode fonctionne dans votre session ' +
        'd\'éditeur locale. La consommation de crédits IA dépend du modèle sélectionné et du ' +
        'travail effectué.',
      useCases: ['Tâches complexes', 'Implémentation multi-étapes', 'Résolution d\'erreurs', 'Automatisation de builds'],
    },
    'third-party-agents-ide': {
      name: 'Harnais d\'agents tiers',
      path: 'Harnais d\'agents tiers VS Code',
      description: 'Harnais Claude et Codex disponibles dans VS Code',
      details:
        'VS Code peut exécuter des harnais tiers pris en charge tels qu\'Anthropic Claude et ' +
        'OpenAI Codex. Chaque harnais conserve son workflow et ses capacités propres au ' +
        'fournisseur au sein de l\'éditeur. La disponibilité, le lieu d\'exécution, les ' +
        'permissions et la facturation peuvent évoluer, consultez donc la documentation actuelle ' +
        'des harnais d\'agents VS Code.',
      useCases: ['Codage autonome', 'Revue de sécurité', 'Fonctionnalités spécifiques au fournisseur', 'Tâches en arrière-plan'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      path: 'GitHub.com et mobile',
      description: 'IA conversationnelle sur GitHub.com — posez des questions sur les dépôts, issues, PR et le web',
      details:
        'Copilot Chat sur GitHub.com vous permet de poser des questions depuis n\'importe quelle ' +
        'page — sur un dépôt, une issue, une pull request ou des sujets logiciels généraux. Il ' +
        'peut utiliser le contexte du dépôt et du web, les modèles sélectionnés, et les ' +
        'informations de session d\'agent. Chat et l\'agent cloud Copilot peuvent transmettre du ' +
        'contexte au sein du workflow actif. GitHub Mobile donne accès aux expériences de Chat et ' +
        'de session d\'agent prises en charge.',
      useCases: ['Q&R sur les dépôts', 'Analyse d\'issues', 'Compréhension des PR', 'Recherche web', 'Génération de code'],
    },
    'coding-agent': {
      name: 'Copilot Cloud Agent',
      path: 'Agent cloud GitHub',
      description: 'Travail autonome sur le dépôt dans un environnement hébergé par GitHub',
      details:
        'Déléguez du travail depuis des issues, pull requests, Chat ou la vue Agents. Copilot ' +
        'analyse le dépôt, planifie, modifie le code sur une branche, valide le résultat, et ' +
        'ouvre une pull request pour revue humaine. Les instructions, MCP, agents, hooks, skills ' +
        'et Copilot Memory (préversion publique) peuvent personnaliser la session. Le code ' +
        'scanning, le secret scanning, les vérifications de dépendances et les règles de ' +
        'pare-feu sont des protections configurables, pas des garanties universelles.',
      useCases: ['Corrections de bugs', 'Implémentation de fonctionnalités', 'Couverture de tests', 'Dette technique', 'Campagnes de sécurité'],
    },
    'review-agent': {
      name: 'Copilot Code Review',
      path: 'Revue de pull request',
      description: 'Reviewer de code IA avec contexte projet complet et corrections suggérées',
      details:
        'La revue de code Copilot analyse les modifications, rassemble le contexte de dépôt ' +
        'pertinent, et fournit des commentaires avec des corrections suggérées. Les équipes ' +
        'peuvent demander des revues manuellement ou configurer des revues automatiques. Les ' +
        'instructions de dépôt, les skills d\'agent et les serveurs MCP sont pris en charge ; ' +
        'Copilot Memory est en préversion publique. La disponibilité diffère entre GitHub et les ' +
        'IDE pris en charge.',
      useCases: ['Qualité du code', 'Revue de sécurité', 'Bonnes pratiques', 'Workflow de PR', 'Gouvernance d\'équipe'],
    },
    'third-party-agents-cloud': {
      name: 'Agents de codage tiers',
      path: 'Agents tiers GitHub',
      description: 'Agents de codage partenaires qui fonctionnent aux côtés de Copilot sur GitHub',
      details:
        'Les agents de codage tiers tels qu\'Anthropic Claude et OpenAI Codex peuvent travailler ' +
        'sur GitHub aux côtés de l\'agent cloud Copilot. Démarrez des sessions prises en charge ' +
        'depuis les surfaces GitHub et revoyez leurs modifications via des pull requests. La ' +
        'fonctionnalité est en préversion publique et utilise les limites de sécurité de l\'agent ' +
        'cloud, avec des capacités et une facturation définies par la documentation produit ' +
        'actuelle.',
      useCases: ['Workflows multi-agents', 'Comparaison d\'agents', 'Tâches spécialisées', 'Développement parallèle'],
    },
    'slack-teams': {
      name: 'Collaboration Slack et Teams',
      path: 'Slack\nMicrosoft Teams',
      description: 'Sessions d\'agent cloud partagées, démarrées depuis des conversations d\'équipe',
      details:
        'En préversion publique, mentionnez `@GitHub` dans les conversations Slack ou Microsoft ' +
        'Teams prises en charge pour démarrer ou piloter une session d\'agent cloud Copilot. ' +
        'L\'intégration peut utiliser le contexte de conversation et continue de façon ' +
        'asynchrone dans un sandbox cloud. Les permissions du dépôt régissent qui peut déclencher ' +
        'des modifications de code, et le contexte de conversation peut être stocké avec les ' +
        'artefacts générés. Utilisez un message direct quand vous avez besoin d\'un contexte plus étroit.',
      useCases: ['Discussion vers PR', 'Planification collaborative', 'Création d\'issues'],
      docLabel: 'Intégration Slack',
      altDocLabel: 'Intégration Teams',
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode n\'est pas l\'agent cloud Copilot.</strong> Agent Mode fonctionne dans ' +
        'votre session IDE locale ; l\'agent cloud fonctionne de façon asynchrone dans un ' +
        'environnement hébergé par GitHub et retourne une pull request.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Les agents tiers utilisent des surfaces différentes.</strong> VS Code expose ' +
        'des harnais d\'agents, tandis que GitHub héberge des agents de codage tiers aux côtés de ' +
        'l\'agent cloud Copilot.',
    },
    {
      icon: '💬',
      content:
        '<strong>Les contrôles de contexte varient selon l\'éditeur.</strong> N\'attachez que les ' +
        'fichiers, sélections, contexte de dépôt et outils pris en charge pertinents avant de ' +
        'passer à un travail autonome.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Le travail cloud nécessite des protections configurées et une revue humaine.</strong> ' +
        'Utilisez ensemble les permissions du dépôt, les règles de pare-feu, les contrôles de ' +
        'scanning, les tests et la revue de pull request.',
    },
  ],

  /* ── Page Conseils ── */
  tipsSeo: {
    title: 'Copilot Panorama — Conseils d\'efficacité',
    description: 'Guide pratique pour optimiser l\'utilisation de GitHub Copilot — gestion des tokens, conception de prompts, cadrage du contexte, sélection de modèles et gouvernance.',
  },
  tipsUi: {
    heroTitle: 'Conseils d\'efficacité',
    insightsTitle: 'L\'état d\'esprit de l\'efficacité',
    insightsSubtitle: 'Principes clés pour tirer plus de valeur de chaque token',
    footerBuiltFor: 'Conçu pour les utilisateurs de GitHub Copilot',
    footerDocsLink: 'Documentation complète sur la facturation Copilot',
    pageTips: 'Conseils d\'efficacité',
  },
  tipsViz: {
    inputTokens: 'Tokens d\'entrée',
    outputTokens: 'Tokens de sortie',
    cachedTokens: 'Tokens en cache',
    modelCalls: 'appels modèle',
    before: 'Avant',
    after: 'Après',
    expensive: 'Coûteux',
    cheap: 'Économique',
    high: 'Effort élevé',
    low: 'Effort faible',
    auto: 'Auto',
    cacheHit: 'Cache atteint',
    cacheMiss: 'Cache manqué',
    narrow: 'Étroit',
    broad: 'Large',
    verboseInstructions: 'Instructions longues et verbeuses…',
    scopedContext: 'Contexte précis et ciblé',
    chat: 'Chat',
    shipToPr: 'Livrer dans la PR',
    freshThread: 'Nouveau fil',
    principlesBrief: 'Principes seulement. Bref.',
    heavy: 'Lourd',
    skills: 'Skills',
    customAgents: 'Rôle + outils distincts → Custom Agents',
    minimalDiff: 'Diff minimal + 3 puces',
    alwaysOn: 'Toujours actif',
    costly: 'coûteux',
    onDemand: 'À la demande',
    efficient: 'efficace',
    enabledTools: 'Toolsets requis activés',
    allToolsEnabled: 'Tous les toolsets activés',
    taskScoped: 'Cadré pour cette tâche',
    loadOnce: 'Charger le schéma une fois',
    reuseInQueries: 'Référencer dans les requêtes suivantes',
    tokenPrefixMatch: 'Préfixe répété correspond',
    prefixDiffers: 'Préfixe modifié',
    standard: 'Standard',
    simpleToMini: 'Simple → mini',
    complexToPremium: 'Complexe → premium',
    usageBaseline: 'Référence d\'usage',
    alertBudget: 'Budget alerte seule',
    costCenterBudget: 'Budget par centre de coût',
    perStep: 'par étape',
    steps: 'étapes',
    accuracy99: '99 %',
    accuracy95: '95 %',
    lostInMiddle: 'Perdu au milieu',
    historyAccumulates: 'L\'historique s\'accumule à chaque tour',
    everyTurnAdds: 'Chaque tour ajoute du contexte',
    reprocessedInput: 'Tout l\'historique retraité en entrée',
    middleDecay: 'Les tokens du milieu se dégradent',
    startStrong: '✓ Début : forte mémorisation',
    middleLost: '✗ Milieu : dégradé',
    endStrong: '✓ Fin : forte mémorisation',
    rawFiles: 'Donner les fichiers bruts à l\'IA',
    scriptOutput: 'Exécuter un script, donner la sortie',
    research: '/research',
    plan: 'Mode plan',
    implement: '/fleet',
    withTests: 'Avec tests unitaires',
    withoutTests: 'Sans tests unitaires',
    buggyChange: 'Changement buggé',
    silentMerge: 'Merge silencieux',
    brokenMain: 'Main cassée',
    failingTests: 'Tests en échec',
    correction: 'Correction',
    succeedingTests: 'Tests réussis',
    rawOutput: 'Sortie brute : 4 200 lignes',
    trimmed: 'Réduite : 38 lignes',
    cleanLayers: 'Domaine → Application → Infra',
    agentMiss: 'Erreur de l\'agent',
    rootCause: 'Trouver la cause racine',
    durableFix: 'Encoder une correction durable',
    enterpriseDefault: 'Défaut entreprise',
    overridableKeys: 'Clés surchargeables',
    teamSpecialization: 'Paramètres d\'équipe',
  },
  tipsLayers: {
    mechanics: {
      title: 'Mécaniques des tokens',
      subtitle: 'Comprendre les facteurs de coût derrière chaque interaction Copilot',
    },
    pitfalls: {
      title: 'Pièges',
      subtitle: 'Modes de défaillance qui dégradent discrètement les résultats et brûlent des tokens',
    },
    prompting: {
      title: 'Prompting',
      subtitle: 'Rédiger des prompts qui produisent de meilleurs résultats avec moins de tokens',
    },
    context: {
      title: 'Contexte',
      subtitle: 'Fournir au modèle exactement ce dont il a besoin — ni plus, ni moins',
    },
    caching: {
      title: 'Mise en cache',
      subtitle: 'Tirer parti du prompt caching pour des interactions plus rapides et moins coûteuses',
    },
    models: {
      title: 'Modèles',
      subtitle: 'Adapter la capacité du modèle à la complexité de la tâche',
    },
    governance: {
      title: 'Gouvernance',
      subtitle: 'Surveiller la consommation et définir des garde-fous au niveau de l\'organisation',
    },
    'workflow-design': {
      title: 'Conception du workflow',
      subtitle: 'Diviser pour régner — enchaîner des étapes ciblées plutôt qu\'un méga-prompt',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'Facteurs de coût des crédits IA',
      path: 'Facteurs de coût',
      description: 'Les tokens d\'entrée, de sortie et en cache contribuent différemment selon le modèle',
      details:
        'La consommation de crédits IA dépend du modèle sélectionné et des tokens traités. Les ' +
        'tokens d\'entrée incluent les prompts, instructions, contexte de fichiers et sorties ' +
        'd\'outils ; les tokens de sortie sont ce que le modèle génère ; les lectures en cache ' +
        'peuvent coûter moins cher quand le contexte répété est réutilisé. Les tarifs varient ' +
        'selon le modèle, utilisez donc la grille tarifaire à jour plutôt que de supposer un ' +
        'ratio fixe unique.',
      useCases: ['Toutes interactions', 'Planification budgétaire', 'Analyse des coûts'],
    },
    'agentic-cost': {
      name: 'Multiplicateur de coût agentique',
      path: 'Agentic Workflows',
      description: 'Le travail agentique itère entre planification, outils, validation et correction',
      details:
        'Les expériences agentiques (Agent Mode, Cloud Agent, CLI) itèrent par conception : ' +
        'planifier → éditer → exécuter outils/tests → corriger → répéter. La consommation varie ' +
        'selon le périmètre de la tâche, le choix du modèle, la sortie des outils, les tentatives ' +
        'et les conditions d\'arrêt. Des exigences claires et une validation déterministe ' +
        'réduisent les boucles inutiles.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Agent CLI'],
    },
    'context-discipline': {
      name: 'Discipline de contexte',
      path: 'Conception du workflow',
      description: 'L\'optimisation des coûts, c\'est surtout de la discipline de contexte + de la conception de workflow',
      details:
        'Le plus gros levier de coût n\'est pas d\'écrire des prompts plus courts — c\'est de ' +
        'gérer le contexte qui entre dans chaque appel modèle. Chaque pièce jointe, sortie ' +
        'd\'outil et élément d\'historique de conversation ajoute des tokens d\'entrée. Une ' +
        'gestion disciplinée du contexte (cadrer les fichiers, réduire les logs, démarrer des ' +
        'fils neufs) a un impact bien plus important que de peaufiner les prompts.',
      useCases: ['Tous workflows', 'Optimisation des coûts', 'Performance'],
    },
    'quality-over-quantity': {
      name: 'La qualité plutôt que la quantité',
      path: 'Conception de prompts',
      description: 'Se concentrer sur un contexte de haute qualité, pas plus d\'instructions',
      details:
        'Plus d\'instructions ne garantit pas un meilleur résultat. Définissez la tâche et le ' +
        'résultat attendu, fournissez les fichiers, logs ou contraintes connues pertinents, ' +
        'indiquez comment le résultat sera validé, et donnez une condition d\'arrêt claire. Cette ' +
        'structure réduit l\'exploration, la dérive de périmètre, les tentatives et les sorties inutiles.',
      useCases: ['Chat', 'Agent Mode', 'Copilot CLI'],
    },
    'fresh-threads': {
      name: 'Des fils de discussion neufs',
      path: 'Hygiène de session',
      description: 'Démarrer de nouvelles conversations une fois les décisions livrées — éviter le context rot',
      details:
        'Évitez les sessions longue durée où les sorties d\'outils s\'accumulent dans le ' +
        'contexte. Chaque sortie d\'outil accumulée peut ajouter des tokens d\'entrée aux appels ' +
        'suivants et diluer le contexte pertinent. Une fois que vous avez livré la décision dans ' +
        'un artefact durable (issue, description de PR, ADR, commit de code), démarrez un fil ' +
        'neuf avec une fenêtre de contexte propre. Dans Copilot CLI, `/new` (ou `/clear`) démarre ' +
        'une conversation neuve ; dans Chat, ouvrez une nouvelle session de chat.',
      useCases: ['Chat', 'Agent Mode', 'Sessions CLI'],
    },
    'concise-instructions': {
      name: 'Garder des instructions ciblées',
      path: 'Instructions',
      description: 'Prioriser les directives stables du projet plutôt que le détail spécifique à la tâche',
      details:
        'Utilisez les instructions de dépôt pour la carte du projet, les commandes de ' +
        'build/test/lint validées, les conventions stables et les contraintes non négociables. ' +
        'Retirez le détail obsolète ou spécifique à une tâche. Placez les playbooks de domaine ' +
        'réutilisables, exemples, scripts et ressources dans des skills pour que Copilot puisse ' +
        'les charger quand pertinent.',
      useCases: ['Instructions', 'Optimisation des coûts', 'Toutes interactions'],
    },
    'structure-for-reuse': {
      name: 'Structurer pour la réutilisation',
      path: 'Contexte réutilisable',
      description: 'Utiliser les skills pour l\'expertise réutilisable et les agents pour les rôles distincts',
      details:
        'Placez playbooks, exemples, règles de domaine, scripts et runbooks dans des Agent ' +
        'Skills pour que Copilot puisse les sélectionner pour les tâches pertinentes. Utilisez ' +
        'des agents personnalisés quand un workflow a besoin d\'un rôle distinct, d\'une limite ' +
        'd\'outils ou d\'un contexte isolé. Gardez les instructions de dépôt larges concentrées ' +
        'sur des directives qui s\'appliquent à travers les tâches.',
      useCases: ['Skills', 'Custom Agents', 'Workflows d\'équipe'],
    },
    'concise-answers': {
      name: 'Demander moins',
      path: 'Contrôle de la sortie',
      description: 'Demander la plus petite réponse utile pour minimiser les tokens de sortie',
      details:
        'Demandez la réponse minimale utile : « Donne-moi le diff minimal + 3 puces de ' +
        'justification » plutôt que « explique tout ». « Liste uniquement les changements ' +
        'cassants ; omets le contexte » pour les montées de version ou migrations. Des sorties ' +
        'plus petites réduisent les tokens générés et le bruit en revue.',
      useCases: ['Chat', 'Revue de code', 'Migrations'],
    },
    'scope-context': {
      name: 'Cadrer le contexte intentionnellement',
      path: 'Stratégie de contexte',
      description: 'N\'attacher que les fichiers, sélections et logs dont la tâche a besoin',
      details:
        'Ouvrez ou attachez les fichiers pertinents et fermez les onglets non pertinents. ' +
        'Incluez le code sélectionné, l\'erreur, ou la sortie du test en échec plutôt que les ' +
        'logs complets. Les contrôles de contexte et mots-clés varient selon l\'IDE, mais le ' +
        'principe est stable : un contexte ciblé réduit la distraction et la consommation de crédits IA.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: 'Conditionnel plutôt que permanent',
      path: 'Chargement conditionnel',
      description: 'Préférer un contexte qui se charge seulement quand pertinent pour la tâche en cours',
      details:
        'Le contexte toujours actif (copilot-instructions.md) se charge dans chaque ' +
        'conversation et coûte des tokens à chaque fois. Le contexte conditionnel (Skills, ' +
        'instructions cadrées par chemin) ne se charge que si pertinent. Déplacez les directives ' +
        'spécialisées vers des Skills où le modèle décide quand les charger, ou utilisez des ' +
        'globs applyTo pour que les instructions ne s\'appliquent qu\'aux fichiers correspondants.',
      useCases: ['Instructions', 'Skills', 'Cadrage par chemin'],
    },
    'apply-to-paths': {
      name: 'Utiliser des chemins applyTo',
      path: 'Cadrage par chemin',
      description: 'Cadrer les instructions personnalisées à des motifs de fichiers spécifiques avec des globs applyTo',
      details:
        'Les instructions spécifiques à un chemin (dans .github/instructions/) prennent en ' +
        'charge le frontmatter glob applyTo. Cela signifie que l\'instruction ne se charge que ' +
        'lorsque le modèle travaille sur des fichiers correspondants — ex. applyTo: "**/*.test.ts" ' +
        'pour les conventions de test. C\'est du contexte gratuit quand ce n\'est pas pertinent et ' +
        'du contexte précis quand nécessaire.',
      useCases: ['Instructions', 'Règles de test', 'Spécifique au framework'],
    },
    'skills-mcp': {
      name: 'Activer uniquement les toolsets nécessaires',
      path: 'Cadrage des toolsets',
      description: 'Limiter les outils MCP aux capacités requises pour la tâche',
      details:
        'De grandes collections d\'outils MCP ajoutent du contexte et compliquent la sélection ' +
        'd\'outils. Configurez uniquement les toolsets MCP GitHub et les serveurs externes ' +
        'nécessaires au workflow en cours. Gardez un catalogue plus large disponible pour la ' +
        'découverte, mais cadrez les outils activés avant de démarrer une tâche.',
      useCases: ['Serveurs MCP', 'Serveur MCP GitHub', 'Gestion du contexte'],
    },
    'context-command': {
      name: '/context dans la CLI',
      path: 'Contexte CLI',
      description: 'Surveiller le contexte avec /context ; compacter les sessions longues avec /compact plutôt que repartir de zéro',
      details:
        'Dans Copilot CLI, utilisez `/context` pour voir quelle part de votre fenêtre de contexte ' +
        'est consommée. Quand une session grossit mais que vous voulez continuer, lancez ' +
        '`/compact` pour résumer l\'historique et réduire la fenêtre — en la ciblant ' +
        'éventuellement, ex. `/compact focus on the auth module`. Quand vous passez à un ' +
        'problème sans rapport, repartez propre avec `/new` ou `/clear`. Être conscient de la ' +
        'consommation de contexte vous aide à décider quand compacter, repartir de zéro, ou continuer.',
      useCases: ['CLI', 'Sessions longues', 'Gestion du contexte'],
    },
    'reuse-context': {
      name: 'Stocker et réutiliser le contexte',
      path: 'Réutilisation du contexte',
      description: 'Charger le contexte partagé tôt pour que les questions suivantes puissent le référencer à moindre coût',
      details:
        'Stockez et réutilisez le contexte dans vos prompts. Par exemple, chargez un schéma de ' +
        'base de données tôt dans la conversation pour que le travail suivant puisse le ' +
        'réutiliser — posez des questions ciblées qui y font référence au lieu de le recoller à ' +
        'chaque fois. C\'est particulièrement efficace dans le CLI où les sessions peuvent durer ' +
        'longtemps et où le préfixe partagé permet le prompt caching.',
      useCases: ['Sessions CLI', 'Chat', 'Travail à schéma lourd'],
    },
    'prefix-matching': {
      name: 'Mise en cache du préfixe de prompt',
      path: 'Prompt caching',
      description: 'La mise en cache LLM dépend de correspondances exactes de préfixe — structurez les prompts en conséquence',
      details:
        'Le prompt caching dépend généralement de préfixes répétés. Des instructions stables, des ' +
        'définitions d\'outils et un contexte de conversation pertinent sont plus susceptibles ' +
        'd\'être réutilisés que des préambules qui changent constamment. Traitez cela comme du ' +
        'contexte d\'implémentation, pas comme un seuil de tokens Copilot fixe.',
      useCases: ['Toutes interactions', 'Optimisation des coûts', 'Performance'],
    },
    'choose-right-model': {
      name: 'Choisir le modèle et le niveau de raisonnement',
      path: 'Sélection de modèle',
      description: 'Adapter la capacité du modèle et l\'effort de raisonnement à la complexité de la tâche',
      details:
        'Le choix du modèle est l\'un des moyens les plus rapides de contrôler le coût — utilisez ' +
        'autant de capacité que la tâche l\'exige, et aussi peu que nécessaire. Pensez en trois ' +
        'niveaux : modèles de raisonnement pour les décisions d\'architecture, le débogage ' +
        'complexe et la conception système ; modèles intermédiaires quand le plan est clair et ' +
        'que l\'agent n\'a qu\'à exécuter ; modèles plus légers pour le refactoring, le ' +
        'formatage, la documentation et autres changements courants et bien cadrés. Pour les ' +
        'modèles qui prennent en charge un raisonnement configurable, utilisez l\'effort standard ' +
        'par défaut et augmentez-le seulement pour un travail plus difficile car un effort plus ' +
        'élevé consomme plus de crédits IA.',
      useCases: ['Toutes interactions', 'Planification budgétaire', 'Routage des tâches'],
    },
    'auto-mode': {
      name: 'Utiliser le mode automatique',
      path: 'Sélection auto',
      description: 'Auto route chaque prompt vers un modèle efficace, protège votre cache, et donne 10 % de remise',
      details:
        'En cas d\'incertitude sur le modèle à utiliser, sélectionnez « Auto ». Un petit routeur ' +
        'analyse votre prompt et l\'envoie au modèle capable de le traiter le plus efficacement — ' +
        'réservant les modèles de raisonnement coûteux aux problèmes réellement complexes. Auto ' +
        'protège aussi votre cache : il ne change de modèle qu\'aux frontières naturelles (une ' +
        'nouvelle session ou après `/compact`), jamais en plein milieu d\'une tâche. Sur les ' +
        'plans Copilot payants, l\'utilisation de la sélection automatique de modèle donne 10 % ' +
        'de remise sur les coûts de modèle dans Chat, le CLI, l\'application Copilot et l\'agent ' +
        'cloud. Un bon choix par défaut pour la plupart des workflows.',
      useCases: ['Workflow par défaut', 'Tâches mixtes', 'Nouveaux utilisateurs'],
    },
    'monitor-usage': {
      name: 'Mesurer l\'usage, puis définir des budgets',
      path: 'Contrôles budgétaires',
      description: 'Utiliser rapports, alertes, centres de coûts et limites utilisateur à partir de l\'usage observé',
      details:
        'Utilisez les rapports d\'usage IA, y compris les répartitions par modèle des entrées, ' +
        'sorties, lectures et écritures en cache, pour établir une référence. Quand l\'historique ' +
        'est limité, commencez par des budgets d\'alerte seule et une limite utilisateur ' +
        'universelle permissive. Ajoutez des budgets par centre de coûts là où la propriété est ' +
        'déléguée, surveillez les alertes de seuil, et ajustez les limites à partir des ' +
        'tendances observées.',
      useCases: ['Admin', 'Contrôle budgétaire', 'Gouvernance d\'équipe'],
    },
    'managed-settings-tip': {
      name: 'Spécialiser les paramètres gérés par équipe',
      path: 'managed-settings.json\nteam-mappings.json\nteams/<name>.json',
      description: 'Garder les garde-fous entreprise fixes tandis que les équipes personnalisent les paramètres approuvés',
      details:
        'Commencez avec les valeurs par défaut entreprise dans `copilot/managed-settings.json`. ' +
        'Marquez uniquement les clés que les équipes peuvent modifier avec `overridable`, ' +
        'associez les fichiers de paramètres aux slugs d\'équipe entreprise dans ' +
        '`copilot/team-mappings.json`, puis placez les valeurs approuvées sous `copilot/teams/`. ' +
        'Les valeurs non définies reviennent au défaut entreprise. Les clés non surchargeables ' +
        'restent verrouillées, tandis que `enabledPlugins` et `extraKnownMarketplaces` se ' +
        'combinent de façon additive. Les paramètres d\'autorisation et de refus MCP peuvent ' +
        'gouverner centralement les serveurs sur les clients pris en charge. Si un utilisateur ' +
        'appartient à plusieurs équipes mappées, les valeurs d\'équipe se combinent en utilisant ' +
        'la valeur la moins restrictive sous la politique entreprise.',
      useCases: ['Équipes plateforme', 'Pionniers IA', 'Outillage par rôle'],
      docLabel: 'Configurer des paramètres spécifiques à une équipe',
      altDocLabel: 'Référence des paramètres gérés',
    },
    'compound-errors': {
      name: 'Le problème des erreurs cumulées',
      path: 'Mathématiques de la qualité',
      description: 'Des taux d\'erreur hypothétiques par étape se composent sur des workflows longs',
      details:
        'À titre d\'illustration, si chacune de 50 étapes indépendantes était fiable à 99 %, le ' +
        'taux hypothétique de bout en bout serait d\'environ 60 % ; à 95 %, il serait d\'environ ' +
        '8 %. Ce sont des exemples mathématiques, pas des taux de fiabilité Copilot mesurés. Des ' +
        'périmètres plus petits et des vérifications déterministes réduisent le nombre d\'étapes ' +
        'non vérifiées.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Workflows orchestrés'],
    },
    'context-rot': {
      name: 'Dégradation du contexte',
      path: 'Décomposition du contexte',
      description: 'De longs historiques augmentent le coût et peuvent diluer les décisions pertinentes',
      details:
        'Chaque sortie d\'outil, pièce jointe et tour de conversation s\'accumule dans le ' +
        'contexte. De longs historiques augmentent le traitement d\'entrée et peuvent rendre les ' +
        'décisions plus anciennes plus difficiles à retrouver. Mitigations : réduire les sorties ' +
        'd\'outils verbeuses, livrer les décisions intermédiaires dans des artefacts durables ' +
        '(issues, PR, ADR), et démarrer des fils neufs avant que la dégradation ne s\'installe.',
      useCases: ['Sessions longues', 'Agent Mode', 'Sessions CLI'],
    },
    'lost-in-middle': {
      name: 'Perdu au milieu',
      path: 'Biais de position',
      description: 'Les tokens placés au milieu d\'un long contexte sont rappelés de façon moins fiable',
      details:
        'Des recherches externes sur les LLM ont trouvé une récupération plus faible pour les ' +
        'informations placées au milieu de longs contextes. Les résultats varient selon le ' +
        'modèle et ne constituent pas une garantie de fiabilité Copilot. Gardez les instructions ' +
        'critiques bien en vue et divisez le matériel non lié en entrées ciblées.',
      useCases: ['Prompts volumineux', 'Documents longs', 'Revues multi-fichiers'],
    },
    'think-in-code': {
      name: 'Penser en code',
      path: 'Scripts plutôt que l\'IA',
      description: 'Préférer les scripts à l\'envoi de fichiers bruts — analyser, puis donner un résumé au modèle',
      details:
        'Quand vous devez comprendre 10 000 lignes de logs ou un gros dump JSON, ne collez pas ' +
        'tout. Écrivez (ou faites écrire par l\'agent) un petit script qui extrait uniquement ce ' +
        'qui compte — comptages, erreurs, la tranche pertinente — et donnez à l\'agent la sortie ' +
        'du script à la place. Cela garde le modèle concentré sur la vraie question. Utilisez ' +
        'grep, jq, awk, ou un petit script, et regroupez les opérations déterministes ' +
        'indépendantes quand elles peuvent s\'exécuter ensemble en sécurité.',
      useCases: ['Analyse de logs', 'Exploration de données', 'Fichiers volumineux'],
    },
    'research-plan-implement': {
      name: 'Recherche → Plan → Mise en œuvre',
      path: 'Diviser pour régner',
      description: 'Séparer découverte, accord et exécution ; paralléliser le travail indépendant',
      details:
        'Utilisez `/research` pour une recherche approfondie documentée, le mode plan pour ' +
        'convenir du périmètre et de la séquence avant les modifications, et l\'implémentation ' +
        'seulement une fois le plan clair. Utilisez `/fleet` quand une demande peut se décomposer ' +
        'en tâches indépendantes exécutées en parallèle. Gardez chaque étape ciblée et transmettez ' +
        'des constats durables plutôt qu\'un historique exploratoire complet.',
      useCases: ['Refactorings complexes', 'Changements transversaux', 'Éditions multi-fichiers'],
    },
    'deterministic-guardrails': {
      name: 'Valider la sortie de Copilot',
      path: 'Boucles pilotées par les tests',
      description: 'La revue humaine et les vérifications déterministes restent nécessaires',
      details:
        'Passez en revue le code généré avant de le mettre en production. Exécutez des tests ' +
        'ciblés, des linters, du typage, du code scanning, du secret scanning et du IP scanning ' +
        'là où applicable. Ces vérifications fournissent un retour déterministe au sein d\'une ' +
        'boucle d\'agent, tandis que la revue humaine vérifie l\'intention, la conception, la ' +
        'sécurité, la lisibilité et la maintenabilité.',
      useCases: ['Agent Mode', 'TDD', 'Pipelines CI'],
    },
    'trim-shell-outputs': {
      name: 'Réduire les sorties shell (avec prudence)',
      path: 'Hygiène du shell',
      description: 'Éliminer le bruit connu des commandes verbeuses — mais la compression généralisée se retourne souvent contre vous',
      details:
        'Les outils CLI adorent la verbosité. Un simple `npm install` ou `terraform plan` peut ' +
        'déverser des milliers de lignes dans le contexte de l\'agent — la plupart du bruit. ' +
        'Envelopper une commande bruyante pour que l\'agent ne voie que la fin pertinente ' +
        '(erreurs, avertissements, le résumé final) peut aider. Deux projets communautaires ' +
        'illustrent différentes formes de compression : **Snip** (github.com/edouard-claude/snip) ' +
        'préfixe les commandes shell — `snip -- npm install` — pour filtrer la sortie verbeuse ' +
        'tout en préservant les erreurs. **Caveman** (github.com/juliusbrussee/caveman) demande ' +
        'au modèle de répondre dans un style compressé et télégraphique. Traitez la compression ' +
        'agressive avec scepticisme car une information perdue peut déclencher une relecture et ' +
        'une correction. Préférez une réduction étroite et déterministe (n\'éliminer que les ' +
        'lignes connues comme du bruit, toujours garder les erreurs et le résumé) aux approches ' +
        '« tout réduire », et mesurez l\'usage réel de tokens avant d\'adopter un outil.',
      useCases: ['Agent CLI', 'Sortie de build', 'Exécution de tests'],
    },
    'apply-architecture': {
      name: 'Appliquer une bonne architecture',
      path: 'Code adapté aux agents',
      description: 'Des limites et des noms clairs réduisent l\'exploration inutile',
      details:
        'Des limites de module claires, des noms descriptifs, des conventions locales et des ' +
        'tests ciblés aident les humains et les agents à trouver le bon code et à valider des ' +
        'changements isolés. Choisissez l\'architecture pour le produit et l\'équipe, pas pour un ' +
        'outil IA ; l\'efficacité de l\'agent est un effet secondaire utile.',
      useCases: ['Nouveaux projets', 'Refactoring', 'Bases de code d\'équipe'],
    },
    'iterate-configs': {
      name: 'Traiter les erreurs de l\'agent comme des incidents',
      path: 'Erreurs → Incidents',
      description: 'Quand l\'agent se trompe, corrigez la configuration — pas seulement la sortie',
      details:
        'Traitez une erreur significative comme un petit incident. Identifiez la cause racine : ' +
        'directive de projet manquante, mauvais skill ou outil, validation faible, ou problème ' +
        'd\'environnement. Encodez une correction durable dans les instructions, skills, tests ou ' +
        'la configuration pour que le même échec soit moins susceptible de se reproduire. Les ' +
        'commandes chronicle sont couvertes séparément dans la couche gouvernance.',
      useCases: ['Workflows d\'équipe', 'Power users CLI', 'Dépôts de longue durée'],
    },
    'project-map': {
      name: 'Donner à Copilot une carte du projet',
      path: 'Carte du projet',
      description: 'Un AGENTS.md / copilot-instructions.md maintenu évite à l\'agent de lire des dizaines de fichiers',
      details:
        'Sans vue d\'ensemble structurelle, l\'agent lit un grand nombre de fichiers juste pour ' +
        's\'orienter — chacun d\'eux coûtant des tokens d\'entrée. Une carte bien maintenue, ' +
        'comme un `AGENTS.md` ou `.github/copilot-instructions.md`, lui donne la disposition dès ' +
        'le départ : où se trouvent les choses, comment les modules se relient, les commandes de ' +
        'build/test/lint, et les conventions clés. L\'agent dépense son budget sur le changement ' +
        'réel plutôt que sur l\'exploration, produisant des sessions plus courtes et des diffs ' +
        'plus petits.',
      useCases: ['Onboarding', 'Grands dépôts', 'Toutes interactions'],
    },
    'preserve-cache': {
      name: 'Préserver le cache',
      path: 'Invalidation du cache',
      description: 'Ne pas changer de modèle, de niveau de raisonnement ou de toolset en cours de session — cela invalide le cache',
      details:
        'La mise en cache réutilise le contexte large et répété (prompt système, contenu de ' +
        'fichiers, définitions d\'outils) à travers les tours, et les tokens en cache sont ' +
        'facturés à ~10 % de l\'entrée normale. Trois choses jettent cela et refacturent le ' +
        'contexte complet comme entrée neuve : changer de modèle en cours de session (un modèle ' +
        'ne peut pas réutiliser le cache d\'un autre), changer le niveau de raisonnement / la ' +
        'taille du contexte / les outils activés en cours de session, et revenir à une ancienne ' +
        'session après expiration du cache (24 h pour les modèles OpenAI, ~1 h pour la plupart ' +
        'des autres). Choisissez votre modèle et vos paramètres avant de démarrer, gardez-les ' +
        'fixes, et sur une session périmée démarrez-en une nouvelle ou faites `/compact` pour que ' +
        'ce qui se reconstruit soit un court résumé, pas tout l\'historique.',
      useCases: ['Sessions longues', 'CLI', 'Optimisation des coûts'],
    },
    'cheaper-subagents': {
      name: 'Des modèles moins coûteux pour les sous-agents',
      path: 'Modèles de sous-agents',
      description: 'Exécuter les sous-agents sur des modèles plus légers — un contexte cadré nécessite rarement un modèle premium',
      details:
        'Les sous-agents s\'exécutent dans leur propre session et n\'héritent pas de ' +
        'l\'historique de conversation de l\'agent principal. Comme leur contexte est cadré sur ' +
        'une seule tâche ciblée, un modèle plus léger suffit généralement à bien faire le travail. ' +
        'En assigner un à un sous-agent ne touche pas non plus le cache de l\'agent principal ' +
        'comme le ferait un changement de modèle en cours de session — vous économisez donc sur ' +
        'le travail du sous-agent sans payer de pénalité de reconstruction de cache sur le fil ' +
        'principal.',
      useCases: ['Sous-agents', 'Workflows orchestrés', 'Optimisation des coûts'],
    },
    'chronicle-insights': {
      name: 'Exploiter les sessions avec /chronicle',
      path: 'Apprendre des sessions',
      description: 'Transformer l\'historique de session Copilot CLI en résumés et enseignements de workflow',
      details:
        'Utilisez `/chronicle standup` pour des résumés de travail, `/chronicle tips` pour des ' +
        'conseils d\'usage personnalisés, `/chronicle cost tips` pour un retour sur la dépense de ' +
        'tokens, `/chronicle search` pour retrouver des sessions, et `/chronicle improve` pour ' +
        'des suggestions d\'instructions cadrées au dépôt. Les enseignements s\'appuient sur les ' +
        'données de session Copilot CLI. Passez en revue les contrôles de stockage, de ' +
        'synchronisation et de suppression avant d\'utiliser l\'historique de session.',
      useCases: ['CLI', 'Gouvernance d\'équipe', 'Amélioration continue'],
    },
    'session-limits': {
      name: 'Définir des limites de crédits IA par session',
      path: 'Garde-fous de session',
      description: 'Plafonner le travail autonome du CLI et du SDK avant qu\'une session ne démarre',
      details:
        'Utilisez `--max-ai-credits` pour les exécutions CLI non interactives, `/limits set ' +
        'max-ai-credits` pour les sessions CLI interactives, ou `sessionLimits.maxAiCredits` ' +
        'dans le SDK Copilot. L\'usage est enregistré après chaque appel au modèle : la valeur ' +
        'configurée est donc un plafond souple qu\'une session peut légèrement dépasser, pas un ' +
        'arrêt strict. Les limites de session encadrent le travail sans surveillance ou de ' +
        'longue durée et complètent les budgets, alertes et l\'approbation humaine.',
      useCases: ['Copilot CLI', 'Copilot SDK', 'Travail autonome'],
    },
    'mcp-governance': {
      name: 'Gouverner l\'accès MCP',
      path: 'Gouvernance MCP',
      description: 'Sélectionner les serveurs et protéger la configuration sur les surfaces prises en charge',
      details:
        'Utilisez des registres MCP approuvés et des paramètres d\'autorisation ou de refus ' +
        'entreprise là où pris en charge. Protégez la configuration MCP du dépôt avec des ' +
        'contrôles de revue et documentez les propriétaires, périmètres et accès aux données des ' +
        'serveurs. L\'application diffère selon les IDE, le CLI, l\'application Copilot et ' +
        'l\'agent cloud, traitez donc les registres comme de la gouvernance et de la découverte ' +
        'plutôt que comme une limite de sécurité universelle.',
      useCases: ['Gouvernance entreprise', 'Outillage approuvé', 'Accès aux données'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>La qualité se compose.</strong> La fiabilité hypothétique par étape chute sur ' +
        'une longue chaîne, utilisez donc des périmètres plus petits et des vérifications ' +
        'déterministes. Les pourcentages montrés sont des illustrations, pas des mesures Copilot.',
    },
    {
      icon: '💰',
      content:
        '<strong>Gardez un contexte allégé et pertinent.</strong> Réduisez les fichiers et les ' +
        'sorties d\'outils, démarrez des fils neufs pour un travail sans rapport, et utilisez un ' +
        'contexte cadré pour réduire la consommation de crédits IA.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Adaptez le modèle et l\'effort de raisonnement à la tâche.</strong> Utilisez ' +
        'l\'effort standard par défaut, augmentez-le pour les problèmes difficiles, et utilisez ' +
        'Auto quand vous voulez un routage basé sur l\'intention.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Les boucles agentiques multiplient le travail.</strong> Définissez une ' +
        'condition d\'arrêt claire et utilisez des limites de session pour les tâches sans ' +
        'surveillance ou étendues.',
    },
    {
      icon: '📦',
      content:
        '<strong>Sortez les directives spécialisées des instructions larges.</strong> Utilisez ' +
        'les Skills pour l\'expertise réutilisable et les agents personnalisés pour les rôles, ' +
        'outils ou contexte isolé distincts.',
    },
  ],
};
