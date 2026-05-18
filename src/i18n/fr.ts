import type { Translations } from './types';

export const fr: Translations = {
  locale: 'fr',
  seo: {
    title: 'Copilot Panorama — .github/ Stack',
    description: 'Guide visuel interactif du système composable GitHub Copilot — explorez les 4 couches : Contexte Permanent, Capacités à la Demande, Contrôle & Automatisation, et Distribution.',
  },
  ui: {
    heroTitle: 'stack composable',
    layerPrefix: 'COUCHE',
    insightsTitle: 'Comment le système fonctionne réellement',
    insightsSubtitle: 'Les points d\'architecture clés que la plupart des équipes ignorent',
    detailsLabel: 'Détails',
    useCasesLabel: 'Cas d\'usage',
    documentationLabel: 'Documentation',
    footerBuiltFor: 'Conçu pour les utilisateurs de GitHub Copilot',
    footerDocsLink: 'Documentation complète du système composable',
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Partager le lien',
    shareCopied: 'Copié !',
  },
  viz: {
    alwaysActive: 'Toujours actif',
    loadsAutomatically: '— chargé dans chaque conversation automatiquement',
    planning: 'Planification',
    implementation: 'Implémentation',
    review: 'Revue',
    descriptionRead: 'description lue depuis le frontmatter SKILL.md',
    fullSkillInjected: 'SKILL.md complet injecté dans le contexte si pertinent',
    approveDeny: 'approuver / refuser',

    pluginJson: 'plugin.json',
    marketplace: 'Marketplace',
    gitRepo: 'Dépôt Git',
    localPath: 'Chemin local',
  },
  layers: {
    'always-on-context': {
      title: 'Contexte permanent',
      subtitle: 'Mémoire passive chargée dans chaque conversation automatiquement',
    },
    'on-demand-capabilities': {
      title: 'Capacités à la demande',
      subtitle: 'Invoquées explicitement par le développeur ou sélectionnées par le modèle',
    },
    'enforcement-automation': {
      title: 'Contrôle & Automatisation',
      subtitle: 'Garde-fous déterministes et orchestration CI/CD',
    },
    distribution: {
      title: 'Distribution',
      subtitle: 'Empaqueter et partager des stacks d\'agents entre équipes et dépôts',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Mémoire passive appliquée automatiquement à chaque prompt',
      details:
        'Les instructions sont le fondement de la personnalisation de Copilot. Elles se ' +
        'chargent EN PREMIER et constituent une mémoire passive permanente. Placez les ' +
        'conventions globales dans `.github/copilot-instructions.md` et les instructions ' +
        'spécifiques dans `.github/instructions/NOM.instructions.md` (avec le frontmatter ' +
        '`applyTo`). Elles sont consultatives — elles guident le modèle mais n\'imposent ' +
        'pas un comportement de façon déterministe.',
      useCases: ['Standards de code', 'Règles de framework', 'Conventions du dépôt'],
    },
    'prompt-files': {
      name: 'Prompt Files',
      description: 'Invoqués manuellement via des commandes slash',
      details:
        'Les fichiers de prompts sont des modèles réutilisables invoqués avec des ' +
        'commandes slash (ex. `/security-review`, `/release-notes`). Ils permettent ' +
        'aux équipes de standardiser les prompts courants pour que chaque développeur ' +
        'obtienne des résultats cohérents et de qualité pour les tâches récurrentes.',
      useCases: ['API Review', 'Perf Audit', 'Onboarding Guide'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Personas spécialisés avec leurs propres outils et serveurs MCP',
      details:
        'Les agents personnalisés sont des personas spécialisés définis en Markdown avec ' +
        'un frontmatter YAML. Chaque profil spécifie une `description`, une liste ' +
        'd\'`tools`, des `mcp-servers` optionnels et une préférence de `model`. Les ' +
        'agents peuvent être chaînés via la propriété `handoffs` — ex. un agent de ' +
        'planification passe la main à un agent d\'implémentation, puis à un agent de ' +
        'revue. Le LLM lit les descriptions pour décider quel agent activer.',
      useCases: ['Auditeur sécurité', 'Spécialiste BDD', 'Concepteur d\'API'],
    },
    skills: {
      name: 'Skills',
      description: 'Dossiers autonomes d\'instructions, scripts et ressources — chargés automatiquement par le LLM quand pertinent',
      details:
        'Contrairement aux autres fonctionnalités à la demande invoquées par l\'utilisateur, ' +
        'les skills sont sélectionnés de façon autonome par le LLM. Chaque skill est un ' +
        'dossier avec un fichier `SKILL.md` (nom + description en frontmatter YAML, ' +
        'instructions en Markdown) et des scripts/ressources optionnels. Le modèle lit ' +
        'les descriptions pour décider lesquels activer — le `SKILL.md` complet n\'est ' +
        'injecté dans le contexte qu\'à ce moment-là. Aucune action utilisateur requise. ' +
        'Stockez les skills projet dans `.github/skills/<nom>/` et les skills personnels ' +
        'dans `~/.copilot/skills/<nom>/`.',
      useCases: ['Modules Terraform', 'Manifestes K8s', 'Stack d\'observabilité'],
    },
    hooks: {
      name: 'Hooks',
      description: 'Commandes shell déterministes sur 6 événements du cycle de vie',
      details:
        'Les hooks sont la SEULE primitive déterministe du système Copilot. Ils se ' +
        'déclenchent à six points du cycle de vie : `sessionStart`, `sessionEnd`, ' +
        '`userPromptSubmitted`, `preToolUse`, `postToolUse` et `errorOccurred`. ' +
        'Le hook `preToolUse` peut approuver ou refuser l\'exécution d\'outils avant ' +
        'qu\'elle n\'ait lieu. Définissez les hooks dans un fichier JSON dans ' +
        '`.github/hooks/` avec `version: 1`. Contrairement aux instructions ' +
        '(qui sont consultatives), les hooks sont coercitifs.',
      useCases: ['Portes de conformité', 'Contrôle d\'accès fichiers', 'Journalisation d\'audit'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Automatisation de dépôts par des agents IA, exécutés dans GitHub Actions avec des garde-fous',
      details:
        'Les workflows agentiques sont des fichiers Markdown avec frontmatter YAML ' +
        '(permissions, safe-outputs, déclencheurs) compilés en GitHub Actions via ' +
        'l\'extension CLI `gh aw`. Définissez l\'automatisation en langage naturel — ' +
        'planifiez des rapports quotidiens, triez les issues, analysez les échecs CI ' +
        'ou maintenez la documentation. Les agents s\'exécutent en lecture seule par ' +
        'défaut ; les écritures nécessitent une approbation explicite via safe-output. ' +
        'Exécution sandboxée avec filtrage d\'outils et isolation réseau. Compatible ' +
        'avec GitHub Copilot, Claude ou OpenAI Codex.',
      useCases: ['Triage d\'issues', 'Analyse d\'échecs CI', 'Rapports quotidiens'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'Workflow GitHub Actions qui préconfigure l\'environnement de l\'agent cloud',
      details:
        'Copilot Setup Steps est un workflow GitHub Actions spécial situé dans ' +
        '`.github/workflows/copilot-setup-steps.yml` qui s\'exécute avant que l\'agent ' +
        'cloud ne commence à travailler. Utilisez-le pour installer de manière déterministe ' +
        'des outils, des dépendances ou configurer le runner — afin que l\'agent puisse ' +
        'immédiatement compiler, tester et linter sans tâtonnement. Vous pouvez aussi passer ' +
        'à des runners plus puissants, basculer sous Windows, activer Git LFS ou définir des ' +
        'variables d\'environnement via l\'environnement Actions `copilot`. Le workflow doit ' +
        'contenir un unique job `copilot-setup-steps` et ne prend effet que s\'il est présent ' +
        'sur la branche par défaut.',
      useCases: ['Préinstaller les dépendances', 'Runners plus puissants', 'Variables d\'environnement'],
    },
    plugins: {
      name: 'Plugins',
      description: 'Paquets installables regroupant agents, skills, hooks et configs MCP',
      details:
        'Les plugins sont des paquets distribuables qui étendent Copilot CLI. Chaque ' +
        'plugin peut contenir des agents, skills, hooks, configs de serveurs MCP et ' +
        'configs de serveurs LSP. Installez depuis des marketplaces enregistrées ' +
        '(comme `copilot-plugins` ou `awesome-copilot`), directement depuis un dépôt ' +
        'Git ou depuis un chemin local. Créez votre propre marketplace pour partager ' +
        'des stacks spécifiques à votre équipe.',
      useCases: ['Réutilisation inter-projets', 'Standardisation d\'équipe', 'Distribution marketplace'],
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Les instructions se chargent EN PREMIER</strong> — c\'est une mémoire ' +
        'passive permanente. Chaque prompt les voit avant que quoi que ce soit d\'autre ne se déclenche.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Les skills sont chargés à la demande</strong> — Copilot lit uniquement la ' +
        '<code>description</code> du frontmatter SKILL.md. Le fichier complet n\'est injecté ' +
        'dans le contexte que lorsque le modèle juge le skill pertinent pour votre prompt.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Les hooks sont la seule primitive déterministe.</strong> Les instructions ' +
        'sont consultatives. Les hooks sont coercitifs — 6 événements dont <code>preToolUse</code> ' +
        'qui peut approuver ou refuser l\'exécution d\'outils.',
    },
    {
      icon: '🔀',
      content:
        '<strong>Le LLM est le routeur.</strong> Il n\'y a pas d\'orchestrateur séparé — le ' +
        'modèle lit les descriptions des agents et le frontmatter des skills pour décider ' +
        'quoi activer. C\'est pourquoi écrire de bonnes descriptions est essentiel.',
    },
  ],

  /* ── Page Outils ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Guide visuel interactif des outils GitHub Copilot sur trois couches : Apps autonomes (CLI, Copilot App), IDE (Autocomplétion, Chat, Agent Mode, Agents tiers), et Cloud (Agent cloud, Agent de revue, Agents tiers).',
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
    askAnything: 'Demandez n\'importe quoi',
    repoContext: 'Contexte du dépôt',
    webSearch: 'Recherche web',
    openSession: 'Ouvrir session',
    reviewDiff: 'Revoir le diff',
    openPr: 'Ouvrir PR',
    inbox: 'Boîte de réception',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'Workflows',
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
      description: 'Un agent IA complet dans votre terminal — sessions interactives, édition de fichiers et intégration GitHub',
      details:
        'GitHub Copilot CLI vous permet d\'utiliser Copilot directement depuis votre terminal. ' +
        'Lancez une session interactive avec `copilot` ou passez un prompt unique avec ' +
        '`copilot -p "..."`. Il peut éditer des fichiers locaux, exécuter des commandes shell, ' +
        'interagir avec GitHub.com (créer des PRs, issues, gérer les workflows), et travailler ' +
        'de manière itérative avec vous. Supporte le Plan Mode (Shift+Tab) pour une implémentation ' +
        'structurée, les serveurs MCP, les agents personnalisés, les skills, les hooks, et la ' +
        'compaction automatique du contexte pour des sessions infinies.',
      useCases: ['Livraison Issue-to-PR', 'Modernisation de code legacy', 'Exécution parallèle Fleet', 'Tri & planification du backlog', 'Développement agnostique d\'éditeur', 'Automatisation'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      description: 'Application bureau native pour le développement agentique — Inbox, Agentic Merge, sessions parallèles et Workflows',
      details:
        'L\'application GitHub Copilot est une application bureau autonome (macOS, Windows, Linux) qui offre ' +
        'aux développeurs et rôles adjacents (PMs, designers, QA) une expérience GitHub-first pour diriger, ' +
        'surveiller, réviser et livrer du travail piloté par agents. L\'Inbox agentique affiche les issues, PRs ' +
        'et sessions à travers tous vos dépôts. Agentic Merge gère le « dernier kilomètre » — résoudre les ' +
        'commentaires de revue, corriger les CI en échec et gérer les conflits de merge à votre place. ' +
        'Chaque session s\'exécute dans un worktree git isolé pour un vrai développement parallèle. Les Workflows ' +
        'permettent de sauvegarder des prompts et de les exécuter à la demande ou selon un calendrier, ' +
        'transformant les tâches récurrentes en patterns d\'automatisation réutilisables. Actuellement en aperçu technique.',
      useCases: ['Inbox agentique & triage', 'Agentic Merge (dernier kilomètre)', 'Travail parallèle multi-sessions', 'Workflows répétables', 'Collaboration rôles adjacents', 'Orchestration multi-dépôts'],
    },
    autocomplete: {
      name: 'Autocomplete',
      description: 'Suggestions de code en texte fantôme qui apparaissent inline pendant la saisie',
      details:
        'Copilot propose des suggestions de type autocomplétion pendant que vous tapez — corps ' +
        'de fonctions complets, boucles, conditions et plus encore selon le contexte de votre code. ' +
        'Parcourez les alternatives avec Alt+] / Alt+[, acceptez mot par mot avec Ctrl+→, ou ' +
        'acceptez la suggestion complète avec Tab. Next Edit Suggestions (NES) prédit ' +
        'l\'emplacement de votre prochaine modification et suggère des complétions pour celle-ci. ' +
        'Disponible dans VS Code, Visual Studio, les IDE JetBrains, Azure Data Studio, Xcode, ' +
        'Vim/Neovim et Eclipse.',
      useCases: ['Complétion de code', 'Génération de boilerplate', 'Complétion de patterns', 'Commentaire vers code'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      description: 'Chat IA conversationnel pour les questions, explications et génération de code',
      details:
        'Copilot Chat fournit une interface conversationnelle pour poser des questions sur le code. ' +
        'Utilisez les participants de chat (@workspace, @github, @terminal), les commandes slash ' +
        '(/fix, /explain, /tests, /doc) et les variables de chat (#file, #selection, #web) pour ' +
        'un contexte précis. Le participant @github permet la recherche web, la consultation ' +
        'd\'issues et l\'analyse de PRs. Supporte plusieurs modèles d\'IA — changez en cours de ' +
        'conversation via le sélecteur de modèle. Disponible dans VS Code, Visual Studio, ' +
        'JetBrains, Eclipse, Xcode, GitHub.com et GitHub Mobile.',
      useCases: ['Explication de code', 'Débogage', 'Génération de tests', 'Refactoring', 'Apprentissage'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      description: 'Codage local autonome — Copilot détermine les fichiers, effectue les modifications, exécute les commandes et itère',
      details:
        'Agent Mode permet à Copilot de modifier votre code de manière autonome dans l\'IDE. Il ' +
        'détermine quels fichiers modifier, effectue des éditions multi-fichiers, suggère et exécute ' +
        'des commandes terminal, et itère pour corriger les erreurs jusqu\'à ce que la tâche soit ' +
        'terminée. Supporte l\'intégration de serveurs MCP, les sous-agents pour les sous-tâches ' +
        'déléguées, et les agents personnalisés. Seuls vos prompts sont facturés — les appels ' +
        'd\'outils de suivi sont gratuits. À distinguer de l\'agent cloud Copilot (couche Cloud), ' +
        'qui s\'exécute sur GitHub Actions.',
      useCases: ['Tâches complexes', 'Implémentation multi-étapes', 'Résolution d\'erreurs', 'Automatisation de builds'],
    },
    'third-party-agents-ide': {
      name: '3rd-Party Agents',
      description: 'Agents Claude et Codex fonctionnant dans VS Code avec leurs SDK natifs',
      details:
        'Les agents tiers d\'Anthropic (Claude) et d\'OpenAI (Codex) s\'exécutent directement dans ' +
        'VS Code en utilisant le SDK natif et le harnais d\'agent de chaque fournisseur. Choisissez ' +
        'entre des sessions locales (dans votre workspace) ou des sessions cloud (environnement ' +
        'distant). Claude supporte les commandes slash (/agents, /hooks, /memory, /review, ' +
        '/security-review), les modes de permission (éditer automatiquement, demander approbation, ' +
        'planifier), et le contexte persistant via CLAUDE.md. Le tout facturé via votre abonnement ' +
        'Copilot — aucune configuration de fournisseur séparée.',
      useCases: ['Codage autonome', 'Revue de sécurité', 'Fonctionnalités spécifiques au fournisseur', 'Tâches en arrière-plan'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      description: 'IA conversationnelle sur GitHub.com — posez des questions sur les dépôts, issues, PRs et le web',
      details:
        'Copilot Chat sur GitHub.com vous permet de poser des questions depuis n\'importe quelle page — ' +
        'sur un dépôt, une issue, une PR ou des sujets logiciels généraux. Il utilise des skills pour ' +
        'récupérer du contexte depuis GitHub (recherche de code, historique des commits, détails des issues) ' +
        'et optionnellement la recherche web Bing pour des informations à jour. Supporte la sélection ' +
        'multi-modèles, les sous-conversations pour ramifier les discussions, la génération de fichiers ' +
        'avec aperçu, et l\'historique des conversations (jusqu\'à 100 fils, rétention de 28 jours). ' +
        'Également disponible sur GitHub Mobile.',
      useCases: ['Q&R sur les dépôts', 'Analyse d\'issues', 'Compréhension des PRs', 'Recherche web', 'Génération de code'],
    },
    'coding-agent': {
      name: 'Cloud Agent',
      description: 'Agent cloud autonome — assignez une issue, obtenez une PR avec vérifications de sécurité',
      details:
        'L\'agent cloud Copilot travaille de manière indépendante dans un environnement propulsé ' +
        'par GitHub Actions. Assignez une issue à @copilot, mentionnez-le sur une PR, ou demandez ' +
        'depuis le Chat — il évalue la tâche, effectue les modifications, exécute les tests et ' +
        'linters, réalise une analyse de sécurité CodeQL, vérifie les secrets, et crée une PR ' +
        'brouillon pour revue. Supporte les instructions personnalisées, les serveurs MCP, les ' +
        'agents personnalisés, les hooks, les skills et Copilot Memory. Ne pousse que sur les ' +
        'branches `copilot/`. Disponible sur Pro, Pro+, Business, Enterprise.',
      useCases: ['Corrections de bugs', 'Implémentation de fonctionnalités', 'Couverture de tests', 'Dette technique', 'Campagnes de sécurité'],
    },
    'review-agent': {
      name: 'Review Agent',
      description: 'Reviewer de code IA avec contexte projet complet et corrections suggérées',
      details:
        'La revue de code Copilot analyse les pull requests et fournit des retours avec des ' +
        'suggestions de modifications applicables en un clic. Utilise des capacités agentiques ' +
        'pour collecter le contexte complet du projet — il analyse l\'ensemble de votre dépôt pour ' +
        'comprendre les changements de code. Peut être configuré pour des revues automatiques sur ' +
        'toutes les PRs. Supporte les instructions personnalisées via .github/copilot-instructions.md ' +
        'et les règles par chemin. Disponible sur GitHub.com, GitHub Mobile, VS Code, Visual Studio, ' +
        'Xcode et JetBrains.',
      useCases: ['Qualité du code', 'Revue de sécurité', 'Bonnes pratiques', 'Workflow de PRs', 'Gouvernance d\'équipe'],
    },
    'third-party-agents-cloud': {
      name: '3rd-Party Agents',
      description: 'Anthropic Claude et OpenAI Codex comme agents de codage cloud sur GitHub',
      details:
        'Les agents de codage tiers fonctionnent aux côtés de l\'agent cloud Copilot sur la ' +
        'plateforme GitHub. Supporte actuellement Anthropic Claude (Claude Agent SDK) et OpenAI ' +
        'Codex (Codex SDK). Assignez des issues, lancez des tâches depuis l\'onglet Agents, ' +
        'mentionnez @NOM_AGENT sur les PRs, ou démarrez des sessions depuis VS Code et GitHub ' +
        'Mobile. Soumis aux mêmes protections de sécurité que l\'agent cloud Copilot. Chaque ' +
        'session consomme une requête premium plus des minutes GitHub Actions. Actuellement en ' +
        'préversion publique.',
      useCases: ['Workflows multi-agents', 'Comparaison d\'agents', 'Tâches spécialisées', 'Développement parallèle'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Agent cloud.</strong> Agent Mode s\'exécute localement dans ' +
        'votre IDE — vous restez dans la boucle. L\'agent cloud s\'exécute sur GitHub Actions ' +
        'dans le cloud — il travaille de manière indépendante et crée une PR quand il a terminé.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Les agents tiers existent dans l\'IDE et le Cloud.</strong> Dans VS Code, Claude ' +
        'et Codex utilisent leurs SDK natifs localement. Sur GitHub, ils s\'exécutent comme agents ' +
        'cloud aux côtés de l\'agent cloud Copilot.',
    },
    {
      icon: '💬',
      content:
        '<strong>Le mode Ask est le point de départ.</strong> Les participants de chat (@workspace), ' +
        'les commandes slash (/fix) et les variables (#file) vous permettent de cadrer précisément ' +
        'vos questions avant de passer à Agent Mode pour un travail autonome.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Les agents cloud intègrent la sécurité.</strong> L\'agent cloud exécute ' +
        'CodeQL, la détection de secrets et les vérifications de dépendances automatiquement. ' +
        'Il ne peut pousser que sur les branches <code>copilot/</code> et crée toujours des PRs brouillon.',
    },
  ],

  /* ── Tips page ── */
  tipsSeo: {
    title: 'Copilot Panorama — Conseils d\'efficacité',
    description: 'Guide pratique pour optimiser l\'utilisation de GitHub Copilot — gestion des tokens, conception de prompts, cadrage du contexte, sélection de modèles et gouvernance.',
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
    verboseInstructions: 'Instructions longues et verbeuses…',
    scopedContext: 'Contexte précis et ciblé',
    chat: 'Chat',
    shipToPr: 'Livrer dans la PR',
    freshThread: 'Nouveau fil',
    principlesBrief: 'Principes seulement. Bref.',
    heavy: 'Lourd',
    skills: 'Skills',
    repetitive: 'Répétitif',
    promptFiles: 'Fichiers Prompt',
    minimalDiff: 'Diff minimal + 3 points',
    alwaysOn: 'Toujours actif',
    costly: 'coûteux',
    onDemand: 'À la demande',
    efficient: 'efficace',
    modelReads: 'Le modèle lit',
    descriptionLabel: 'la description',
    loadsIfRelevant: 'Charge le skill complet si pertinent',
    loadOnce: 'Charger le schéma une fois',
    reuseInQueries: 'Réutiliser dans les requêtes suivantes',
    tokenPrefixMatch: '≥1024 tokens identiques',
    prefixDiffers: 'préfixe différent',
    standard: 'Standard',
    architecture: 'Architecture',
    debugging: 'Débogage',
    agentic: 'Agentique',
    summarize: 'Résumer',
    qa: 'Q&R',
    refactorLabel: 'Refactoring',
    simpleToMini: 'Simple → mini',
    complexToPremium: 'Complexe → premium',
    icEng: 'Ingénieur IC',
    powerUser: 'Power user',
    ciAgent: 'Agent CI',
    stopAfterTest: 'Arrêter après le premier test réussi',
    cavemanResponse: 'caveman mode → ~75% tokens en moins',
    snipResponse: 'snip → instructions compressées',
    perStep: 'par étape',
    steps: 'étapes',
    accuracy99: '99% par étape',
    accuracy95: '95% par étape',
    bePrecise: 'Être précis',
    stopSignals: 'Ajouter des signaux d\'arrêt',
    knownContext: 'Ajouter le contexte connu',
    lostInMiddle: 'Perdu au milieu',
    recencyBias: 'Biais de récence',
    middleDecay: 'Les tokens du milieu se dégradent',
    rawFiles: 'Donner les fichiers bruts à l\'IA',
    scriptOutput: 'Exécuter un script, donner la sortie',
    research: '/research',
    plan: '/plan',
    implement: '/fleet',
    withTests: 'Avec tests unitaires',
    withoutTests: 'Sans tests unitaires',
    buggyChange: 'Changement bogué',
    failingTests: 'Tests en échec',
    correction: 'Correction',
    succeedingTests: 'Tests qui réussissent',
    rawOutput: 'Sortie brute : 4 200 lignes',
    trimmed: 'Réduit : 38 lignes',
    multipleCalls: '5 appels d\'outils séquentiels',
    batchedCall: '1 appel groupé',
    cleanLayers: 'Domaine → Application → Infra',
    agentMiss: 'Erreur de l\'agent',
    chronicle: '/chronicle',
    updateInstructions: 'Mettre à jour les instructions',
  },
  tipsLayers: {
    mechanics: {
      title: 'Mécanique des tokens',
      subtitle: 'Comprendre les facteurs de coût derrière chaque interaction Copilot',
    },
    prompting: {
      title: 'Prompting',
      subtitle: 'Écrire des prompts qui produisent de meilleurs résultats avec moins de tokens',
    },
    context: {
      title: 'Contexte',
      subtitle: 'Fournir au modèle exactement ce dont il a besoin — ni plus, ni moins',
    },
    'workflow-design': {
      title: 'Conception de workflow',
      subtitle: 'Structurer le travail pour que chaque étape soit fiable et reproductible',
    },
    caching: {
      title: 'Cache',
      subtitle: 'Tirer parti du cache de prompts pour des interactions plus rapides et moins coûteuses',
    },
    models: {
      title: 'Modèles',
      subtitle: 'Adapter la capacité du modèle à la complexité de la tâche',
    },
    governance: {
      title: 'Gouvernance',
      subtitle: 'Surveiller la consommation et définir des garde-fous au niveau de l\'organisation',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'Facteurs de coût des tokens',
      description: 'Les tokens d\'entrée, de sortie et de lecture en cache sont les trois dimensions de facturation',
      details:
        'Avec la facturation par token, chaque interaction comporte trois composants de coût : ' +
        'les tokens d\'entrée/contexte (ce que vous envoyez), les tokens de sortie (ce que le ' +
        'modèle génère) et les tokens de lecture en cache (moins chers mais toujours mesurés). ' +
        'Les tokens d\'entrée incluent votre prompt, les instructions système, le contexte de ' +
        'fichier et les sorties d\'outils. Les tokens de sortie sont la réponse du modèle. ' +
        'Comprendre ces trois dimensions est la base de l\'optimisation des coûts.',
      useCases: ['Toutes les interactions', 'Planification budgétaire', 'Analyse des coûts'],
    },
    'agentic-cost': {
      name: 'Multiplicateur de coût agentique',
      description: 'Une seule requête agentique peut déclencher des dizaines d\'appels au modèle',
      details:
        'Les expériences agentiques (Agent Mode, Cloud Agent, CLI) itèrent par conception : ' +
        'planifier → éditer → exécuter des outils/tests → corriger → répéter. La même intention ' +
        'utilisateur peut varier considérablement en consommation selon le workflow. Un simple ' +
        '« corrige ce bug » peut nécessiter 2 ou plus de 20 appels selon la complexité, les ' +
        'sorties d\'outils et les boucles de récupération d\'erreurs. Pire, les erreurs se ' +
        'cumulent : même à 99% par étape, un workflow de 50 étapes ne réussit qu\'à ~60%. ' +
        'C\'est pourquoi la conception du workflow compte plus que la longueur du prompt.',
      useCases: ['Agent Mode', 'Cloud Agent', 'CLI Agent'],
    },
    'context-discipline': {
      name: 'Discipline de contexte',
      description: 'L\'optimisation des coûts repose principalement sur la discipline de contexte et la conception du workflow',
      details:
        'Le plus grand levier de coût n\'est pas d\'écrire des prompts plus courts — c\'est de ' +
        'gérer quel contexte alimente chaque appel au modèle. Chaque fichier joint, sortie ' +
        'd\'outil et élément d\'historique de conversation ajoute des tokens d\'entrée. Une ' +
        'gestion disciplinée du contexte (cadrer les fichiers, réduire les logs, démarrer de ' +
        'nouveaux fils) a un impact bien plus important que la reformulation des prompts.',
      useCases: ['Tous les workflows', 'Optimisation des coûts', 'Performance'],
    },
    'quality-over-quantity': {
      name: 'Qualité plutôt que quantité',
      description: 'Se concentrer sur un contexte de haute qualité, pas sur plus d\'instructions',
      details:
        'Plus d\'instructions ≠ meilleure sortie. Un guidage ciblé et de haute qualité réduit ' +
        'les sorties verbeuses et dispersées. Au lieu de longues introductions, donnez au modèle ' +
        'exactement le contexte nécessaire : le code pertinent, l\'exigence spécifique et des ' +
        'contraintes claires. Des prompts plus ciblés réduisent aussi les sessions agentiques ' +
        'incontrôlées où l\'agent continue d\'itérer sans converger.',
      useCases: ['Chat', 'Agent Mode', 'Fichiers de prompt'],
    },
    guardrails: {
      name: 'Définir des garde-fous',
      description: 'Les flux agentiques itèrent jusqu\'à atteindre l\'objectif — ajoutez des signaux d\'arrêt',
      details:
        'Les agents itèrent par conception : planifier → éditer → exécuter des outils → ' +
        'corriger → répéter. Sans limites, un agent continuera jusqu\'à réussir (ou épuiser ' +
        'le contexte). Ajoutez des signaux d\'arrêt explicites : « S\'arrêter au premier test ' +
        'réussi. » « Proposer au plus 2 solutions alternatives. » « Si la première approche ' +
        'échoue, expliquer pourquoi et s\'arrêter. » Combinés à des garde-fous déterministes ' +
        '(tests, linters), cela empêche les sessions incontrôlées.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Agents personnalisés'],
    },
    'fresh-threads': {
      name: 'Nouveaux fils de discussion',
      description: 'Démarrer de nouvelles conversations dès qu\'une décision est livrée — éviter la dégradation du contexte',
      details:
        'Évitez les sessions longues où les sorties d\'outils s\'accumulent dans le contexte. ' +
        'Chaque sortie accumulée ajoute des tokens d\'entrée à chaque appel suivant, et ' +
        'une fois la fenêtre remplie à plus de ~50% le modèle privilégie les tokens les plus ' +
        'récents (biais de récence) et « perd » ceux du milieu. Dès qu\'une décision est ' +
        'intégrée dans un artefact durable (issue, PR, ADR, commit), démarrez un nouveau ' +
        'fil avec un contexte propre.',
      useCases: ['Chat', 'Agent Mode', 'Sessions CLI'],
    },
    'concise-instructions': {
      name: 'Minifier les instructions',
      description: 'Garder .github/copilot-instructions.md court, stable et basé sur des principes',
      details:
        'Les instructions se chargent dans chaque conversation automatiquement — c\'est du ' +
        'contexte permanent. Gardez copilot-instructions.md court et stable : principes, ' +
        'conventions, règles « ne pas faire ». Chaque ligne supplémentaire ajoute des tokens ' +
        'd\'entrée à chaque interaction. Déplacez les guidages détaillés (playbooks, exemples, ' +
        'règles de domaine) vers les Skills ou les fichiers de prompt où ils ne se chargent ' +
        'que lorsque nécessaire.',
      useCases: ['Instructions', 'Optimisation des coûts', 'Toutes les interactions'],
    },
    'structure-for-reuse': {
      name: 'Structurer pour la réutilisation',
      description: 'Utiliser les Skills pour les guidages lourds, les fichiers de prompt pour les workflows répétitifs',
      details:
        'Placez les guidages lourds (playbooks, exemples, règles de domaine, runbooks) dans ' +
        'les Agent Skills pour qu\'ils ne se chargent que lorsque le prompt de l\'utilisateur ' +
        'correspond. Placez les workflows répétitifs (ex. : « écrire des tests unitaires », ' +
        '« créer un ADR », « générer un changelog ») dans les fichiers de prompt pour que les ' +
        'utilisateurs ne collent pas d\'énormes instructions à chaque fois. Cela fait passer ' +
        'le contexte de permanent (coûteux) à à la demande (efficace).',
      useCases: ['Skills', 'Fichiers de prompt', 'Workflows d\'équipe'],
    },
    'concise-answers': {
      name: 'Demander moins',
      description: 'Demander la plus petite réponse utile pour minimiser les tokens de sortie',
      details:
        'Les tokens de sortie sont la dimension la plus coûteuse. Demandez la réponse minimale ' +
        'utile : « Donne-moi le diff minimal + 3 points de justification » au lieu de ' +
        '« explique tout ». « Lister uniquement les changements cassants ; omettre le contexte » ' +
        'lors des mises à jour/migrations. Des sorties plus petites signifient aussi des réponses ' +
        'plus rapides et moins de bruit à lire.',
      useCases: ['Chat', 'Revue de code', 'Migrations'],
    },
    'caveman-skill': {
      name: 'Skill Caveman',
      description: 'Skill communautaire qui réduit ~75% des tokens de sortie via des réponses ultra-compressées',
      details:
        'Caveman est un Agent Skill communautaire qui instruit le modèle à répondre dans un style ' +
        'compressé et télégraphique — supprimant les articles, mots de remplissage et le boilerplate ' +
        'tout en conservant la précision technique. Il peut réduire les tokens de sortie d\'environ 75%. ' +
        'Installez le skill et dites « caveman mode » pour l\'activer. Supporte plusieurs niveaux ' +
        'd\'intensité de lite à ultra. Idéal pour les développeurs expérimentés qui veulent des ' +
        'réponses concises sans bruit.',
      useCases: ['Chat', 'CLI', 'Revue de code'],
    },
    'snip-skill': {
      name: 'Skill Snip',
      description: 'Skill communautaire qui optimise le contexte en compressant les instructions et réduisant les tokens',
      details:
        'Snip est un Agent Skill communautaire qui optimise l\'utilisation des tokens en restructurant ' +
        'et compressant automatiquement les instructions. Il réécrit les prompts longs et le contexte ' +
        'sous une forme plus compacte tout en préservant le sens, réduisant les tokens d\'entrée et de ' +
        'sortie. Installez le skill pour l\'appliquer automatiquement à vos interactions Copilot. ' +
        'Particulièrement utile pour les grandes bases de code et les workflows multi-fichiers complexes.',
      useCases: ['Chat', 'Mode Agent', 'CLI'],
    },
    'scope-context': {
      name: 'Cadrer le contexte intentionnellement',
      description: 'Préférer un contexte ciblé (un fichier) plutôt que « tout le dépôt » sauf si vraiment nécessaire',
      details:
        'Utilisez un contexte ciblé : uniquement le fichier ou la fonction pertinente, pas tout ' +
        'le dépôt. « Joindre uniquement la sortie du test échoué, pas les logs complets. » Le ' +
        'contexte de tout le dépôt (#codebase) est puissant mais coûteux — ne l\'utilisez que ' +
        'pour les changements transversaux qui nécessitent vraiment un raisonnement global. Pour ' +
        'les questions ciblées, #file est presque toujours suffisant et bien moins cher.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: 'Conditionnel plutôt que permanent',
      description: 'Préférer le contexte qui se charge uniquement lorsqu\'il est pertinent pour la tâche en cours',
      details:
        'Le contexte permanent (copilot-instructions.md) se charge dans chaque conversation et ' +
        'coûte des tokens à chaque fois. Le contexte conditionnel (Skills, instructions avec ' +
        'portée de chemin) ne se charge que lorsqu\'il est pertinent. Déplacez les guidages ' +
        'spécialisés vers les Skills où le modèle décide quand les charger, ou utilisez les ' +
        'globs applyTo pour que les instructions ne s\'appliquent qu\'aux fichiers correspondants.',
      useCases: ['Instructions', 'Skills', 'Portée par chemin'],
    },
    'targeted-refs': {
      name: 'Utiliser des références ciblées',
      description: 'Utiliser #file pour les questions ciblées, #codebase uniquement pour les changements transversaux',
      details:
        'Les références de chat (#file, #selection, #codebase) contrôlent exactement le contexte ' +
        'que le modèle voit. Utilisez #file pour des questions ciblées sur du code spécifique. ' +
        'Utilisez #selection pour un scope encore plus étroit. Réservez #codebase aux changements ' +
        'transversaux où le modèle a vraiment besoin de comprendre tout le projet. Joignez ' +
        'uniquement la sortie du test échoué, pas les logs de toute la suite de tests.',
      useCases: ['Chat', 'IDE', 'Compréhension du code'],
    },
    'apply-to-paths': {
      name: 'Utiliser les chemins applyTo',
      description: 'Limiter les instructions personnalisées à des patterns de fichiers spécifiques avec les globs applyTo',
      details:
        'Les instructions spécifiques à un chemin (dans .github/instructions/) supportent le ' +
        'frontmatter glob applyTo. Cela signifie que l\'instruction ne se charge que lorsque le ' +
        'modèle travaille sur des fichiers correspondants — ex. : applyTo: "**/*.test.ts" pour ' +
        'les conventions de test. C\'est du contexte gratuit quand non pertinent et du contexte ' +
        'précis quand nécessaire.',
      useCases: ['Instructions', 'Règles de test', 'Spécifique au framework'],
    },
    'skills-mcp': {
      name: 'Exploiter Skills & MCP',
      description: 'Les Skills se chargent à la demande — mais les schémas MCP coûtent à chaque boucle',
      details:
        'Les Skills sont découverts par le modèle d\'après leurs descriptions et chargent le ' +
        'guidage complet dans le contexte uniquement quand c\'est pertinent. Les schémas ' +
        'd\'outils des serveurs MCP, en revanche, sont chargés comme tokens statiques à ' +
        'chaque boucle — utiles, mais cela s\'accumule. Pour certains workflows, une simple ' +
        'commande CLI peut coûter moins cher que l\'outil MCP équivalent. Écrivez des ' +
        'descriptions de skills claires et préférez Skills/CLI aux MCP lourds quand le ' +
        'compromis est favorable.',
      useCases: ['Skills', 'Serveurs MCP', 'Agents personnalisés'],
    },
    'context-command': {
      name: '/context dans le CLI',
      description: 'Surveiller l\'accumulation de contexte dans Copilot CLI ; la compaction se déclenche à l\'approche de la capacité',
      details:
        'Dans Copilot CLI, utilisez la commande /context pour voir combien de votre fenêtre de ' +
        'contexte est consommée. À mesure que le contexte grandit, le CLI compacte (résume) ' +
        'automatiquement l\'historique de conversation le plus ancien à l\'approche de la capacité. ' +
        'Être conscient de la consommation de contexte vous aide à décider quand démarrer un ' +
        'nouveau fil ou continuer un existant.',
      useCases: ['CLI', 'Sessions longues', 'Gestion du contexte'],
    },
    'reuse-context': {
      name: 'Stocker et réutiliser le contexte',
      description: 'Charger le contexte partagé tôt pour que les questions suivantes puissent le référencer à moindre coût',
      details:
        'Stockez et réutilisez le contexte dans vos prompts. Par exemple, chargez un schéma de ' +
        'base de données tôt dans la conversation pour que le travail suivant puisse le réutiliser ' +
        '— posez des questions ciblées référençant ce contexte au lieu de le recoller à chaque ' +
        'fois. C\'est particulièrement efficace dans le CLI où les sessions peuvent être longues ' +
        'et le préfixe partagé active le cache de prompts.',
      useCases: ['Sessions CLI', 'Chat', 'Travail orienté schéma'],
    },
    'prefix-matching': {
      name: 'Cache de préfixe de prompt',
      description: 'Le cache LLM dépend de correspondances exactes de préfixe — structurez vos prompts en conséquence',
      details:
        'Le cache de prompt LLM (tous fournisseurs confondus) dépend généralement de ' +
        'correspondances exactes de préfixe. Par exemple, le cache de prompt Azure OpenAI ' +
        'nécessite des prompts ≥ 1 024 tokens et que les 1 024 premiers tokens soient identiques ' +
        'pour réutiliser le cache. Cela signifie que des prompts système et instructions stables ' +
        'au début de votre prompt ont plus de chances de toucher le cache. Varier les préambules ' +
        'annule le cache.',
      useCases: ['Toutes les interactions', 'Optimisation des coûts', 'Performance'],
    },
    'choose-right-model': {
      name: 'Choisir le bon modèle',
      description: 'Les modèles varient en multiplicateur de coût et en capacité — adapter à votre tâche',
      details:
        'Les différents modèles ont des multiplicateurs de coût et des niveaux de capacité ' +
        'différents. Utiliser un modèle premium pour une tâche simple gaspille des tokens et ' +
        'de l\'argent. Utiliser un modèle basique pour une architecture complexe gaspille du ' +
        'temps et produit de mauvais résultats. La clé est d\'adapter la capacité du modèle à ' +
        'la complexité de la tâche. Vérifiez vos modèles disponibles et leurs coûts relatifs.',
      useCases: ['Toutes les interactions', 'Planification budgétaire', 'Routage des tâches'],
    },
    'high-effort-tasks': {
      name: 'Premium pour le travail complexe',
      description: 'Utiliser des modèles à effort élevé pour l\'architecture profonde, le débogage complexe, le travail agentique',
      details:
        'Réservez les modèles premium/à effort élevé (Claude Opus, GPT-4.1, o3) aux tâches qui ' +
        'nécessitent vraiment un raisonnement profond : décisions architecturales complexes, ' +
        'débogage multi-fichiers délicat, grands workflows agentiques et revue de code sensible ' +
        'à la sécurité. Ces modèles sont plus chers par token mais font gagner du temps en ' +
        'trouvant la bonne réponse du premier coup.',
      useCases: ['Architecture', 'Débogage', 'Revue de sécurité', 'Agent Mode'],
    },
    'low-effort-tasks': {
      name: 'Mini pour les tâches simples',
      description: 'Utiliser par défaut des modèles efficaces pour la synthèse, les Q&A rapides, les petits refactorings',
      details:
        'Utilisez des modèles mini/efficaces (GPT-4.1 mini, Claude Haiku, Gemini Flash) par ' +
        'défaut pour la synthèse, les Q&A rapides, les petits refactorings et la génération de ' +
        'code standard. Ces modèles sont significativement moins chers par token et assez rapides ' +
        'pour les tâches simples. Les économies s\'accumulent rapidement quand la plupart de vos ' +
        'interactions sont simples.',
      useCases: ['Synthèse', 'Q&A', 'Refactoring', 'Code standard'],
    },
    'auto-mode': {
      name: 'Utiliser le mode Auto',
      description: 'Auto sélectionne le meilleur modèle en fonction de votre prompt — bon défaut pour la plupart des workflows',
      details:
        'Quand vous ne savez pas quel modèle utiliser, sélectionnez « Auto ». Le mode Auto ' +
        'analyse votre prompt et le route vers le modèle le plus approprié — les questions ' +
        'simples vont aux modèles efficaces, les tâches complexes aux modèles puissants. C\'est ' +
        'un bon défaut pour la plupart des workflows et évite à la fois les dépenses excessives ' +
        'sur les tâches simples et le sous-dimensionnement des tâches complexes.',
      useCases: ['Workflow par défaut', 'Tâches mixtes', 'Nouveaux utilisateurs'],
    },
    'monitor-usage': {
      name: 'Définir des budgets utilisateur',
      description: 'Définir des budgets par utilisateur avec des défauts adaptés par persona',
      details:
        'Définissez des budgets par utilisateur avec des défauts adaptés par persona : ingénieur ' +
        'IC vs utilisateur avancé vs agent CI. Commencez avec des limites prudentes et ajustez en ' +
        'fonction de la consommation observée. Surveillez les schémas de forte consommation — une ' +
        'seule session agentique peut consommer plus de tokens qu\'une semaine d\'interactions chat. ' +
        'Utilisez le tableau de bord administrateur pour identifier les valeurs aberrantes et ajuster.',
      useCases: ['Admin', 'Contrôle budgétaire', 'Gouvernance d\'équipe'],
    },
    'chronicle-tips': {
      name: 'Insights Chronicle',
      description: 'Utiliser /chronicle improve et /chronicle tips pour améliorer les workflows',
      details:
        'Copilot CLI inclut la commande /chronicle pour l\'intelligence de workflow. Utilisez ' +
        '/chronicle improve pour obtenir des suggestions d\'optimisation de votre workflow actuel, ' +
        'et /chronicle tips pour des recommandations générales d\'efficacité basées sur vos ' +
        'schémas d\'utilisation. Ces commandes analysent votre historique de session et fournissent ' +
        'des conseils personnalisés.',
      useCases: ['CLI', 'Optimisation du workflow', 'Auto-amélioration'],
    },
    'compound-errors': {
      name: 'Erreurs qui s\'accumulent',
      description: 'Même à 99% par étape, un workflow de 50 étapes ne réussit qu\'à ~60%',
      details:
        'La fiabilité par étape se multiplie tout au long d\'une boucle agentique. À 99% par ' +
        'étape, un workflow de 50 étapes finit à 0,99⁵⁰ ≈ 60%. Tombez à 95% et ce même workflow ' +
        'n\'a que ~8% de chances de réussir de bout en bout. C\'est pourquoi le « pari agentique » ' +
        '— espérer qu\'une sortie de faible qualité s\'arrange — ne passe pas à l\'échelle. ' +
        'Chaque amélioration par étape (meilleurs prompts, portée réduite, vérifications ' +
        'déterministes) se multiplie sur tout le workflow.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Workflows orchestrés'],
    },
    'prompt-anatomy': {
      name: 'Anatomie du prompt',
      description: 'Soyez précis · ajoutez des signaux d\'arrêt · ajoutez le contexte connu',
      details:
        'Trois ingrédients fiables d\'un prompt efficace : (1) Être précis — décrivez le ' +
        'changement en termes simples et sans ambiguïté, avec le résultat attendu. (2) Ajouter ' +
        'des signaux d\'arrêt — « s\'arrêter au premier test réussi », « ne pas refactoriser ' +
        'le code non lié ». (3) Ajouter le contexte connu en amont — nommez les fichiers, ' +
        'dossiers ou docs pertinents pour que l\'agent ne perde pas de tokens à chercher. ' +
        'Le prompt est le volant ; ces trois ingrédients gardent l\'agent sur la route.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'context-rot': {
      name: 'Dégradation du contexte',
      description: 'Les grandes fenêtres de contexte se dégradent — le milieu se perd, la fin domine',
      details:
        'Un modèle avec une fenêtre de 200k ne veut pas dire qu\'il faut la remplir. Deux ' +
        'modes d\'échec documentés : « Lost in the Middle » — les tokens placés au milieu ' +
        'd\'un long contexte sont moins bien restitués que ceux au début ou à la fin. ' +
        '« Biais de récence » — au-delà de ~50% de remplissage, le modèle s\'appuie ' +
        'fortement sur les tokens les plus récents. Mitigations : prompts courts, ' +
        'instructions importantes au début ou à la fin, et nouveaux fils avant que la ' +
        'dégradation ne s\'installe.',
      useCases: ['Longues sessions', 'Gros codebases', 'Édition multi-fichiers'],
    },
    'think-in-code': {
      name: 'Penser en code',
      description: 'Préférer des scripts plutôt que de donner les fichiers bruts',
      details:
        'Pour comprendre 10 000 lignes de logs ou un gros JSON, ne collez pas tout. ' +
        'Écrivez (ou demandez à l\'agent d\'écrire) un petit script qui extrait juste ' +
        'l\'essentiel — comptes, erreurs, la tranche utile — et donnez la sortie du script ' +
        'à l\'agent. Cela transforme des milliers de tokens d\'entrée en dizaines et garde ' +
        'le modèle concentré sur la vraie question. Marche aussi bien avec grep, jq, awk ' +
        'ou un script Python de 20 lignes.',
      useCases: ['Analyse de logs', 'Exploration de données', 'Gros fichiers'],
    },
    'research-plan-implement': {
      name: 'Recherche → Plan → Implémentation',
      description: 'Trois étapes ciblées avec le bon modèle pour chacune',
      details:
        'Découpez un changement non trivial en trois passages au lieu d\'un méga-prompt. ' +
        '(1) Recherche : un modèle rapide et large (Gemini 2.5 Pro) explore le code et ' +
        'identifie les fichiers pertinents. (2) Plan : un modèle de raisonnement profond ' +
        '(Opus) transforme cette recherche en spécification précise. (3) Implémentation : ' +
        'un modèle efficace (GPT-5.4 / Sonnet) applique la spec au code. Chaque étape ' +
        'reçoit juste le contexte nécessaire, et les erreurs par étape ne s\'accumulent ' +
        'pas en une boucle incontrôlée. Dans Copilot CLI, cela correspond à /research → ' +
        '/plan → /fleet.',
      useCases: ['Refactors complexes', 'Changements transverses', 'Éditions multi-fichiers'],
    },
    'deterministic-guardrails': {
      name: 'Garde-fous déterministes',
      description: 'Tests unitaires, linters et scans empêchent les mauvais changements de s\'accumuler',
      details:
        'Les LLM sont probabilistes — mais les tests, linters et type-checkers ne le sont ' +
        'pas. Avec des tests en place, un changement bogué produit des tests en échec que ' +
        'l\'agent voit et corrige à la boucle suivante. Sans tests, l\'agent empile les ' +
        'bugs sur plusieurs changements avant que quelqu\'un ne s\'en aperçoive — minutes ' +
        'CI gâchées, revues gâchées, debug humain. Tests + linters + scans de secrets sont ' +
        'le moyen le moins cher de donner à l\'agent un retour fiable.',
      useCases: ['Agent Mode', 'TDD', 'Pipelines CI'],
    },
    'trim-shell-outputs': {
      name: 'Réduire les sorties shell',
      description: 'Un `npm install` bruyant noie le signal — encapsulez pour ne garder que l\'essentiel',
      details:
        'Les CLI adorent être verbeux. Un seul `npm install` ou `terraform plan` peut ' +
        'déverser des milliers de lignes dans le contexte de l\'agent — la plupart du ' +
        'bruit. Encapsulez les commandes bruyantes avec un trimmer (ex. github.com/rtk-ai/rtk) ' +
        'pour que l\'agent ne voie que la fin pertinente : erreurs, warnings, résumé final. ' +
        'Cela réduit énormément l\'entrée en cache à la boucle suivante et améliore le ' +
        'rappel en limitant le « lost in the middle ».',
      useCases: ['Agent CLI', 'Sortie de build', 'Tests'],
    },
    'collapse-tool-calls': {
      name: 'Regrouper les appels d\'outils',
      description: 'Plusieurs invocations en une seule — moins d\'aller-retours, moins de tokens',
      details:
        'Chaque appel d\'outil ajoute un aller-retour complet : tokens d\'entrée pour la ' +
        'requête, tokens de sortie pour le résultat, plus le prompt système rejoué à ' +
        'chaque fois. Des plugins comme jsturtevant/copilot-codeact-plugin permettent à ' +
        'l\'agent d\'exprimer plusieurs invocations en un bloc « code-act » exécuté ' +
        'd\'un coup. Cinq petits appels deviennent un appel groupé — même résultat, ' +
        'bien moins de tokens et plus rapide.',
      useCases: ['Agent Mode', 'CLI', 'Tâches multi-étapes'],
    },
    'apply-architecture': {
      name: 'Appliquer une bonne architecture',
      description: 'DDD, hexagonale, CQRS — des frontières propres aident l\'agent à s\'y retrouver',
      details:
        'Un code en désordre force l\'agent à charger bien plus de contexte pour faire ' +
        'un changement sûr. Les patterns d\'architecture propre (DDD, hexagonal/ports-' +
        'and-adapters, CQRS, événementiel) donnent à l\'agent de solides garde-fous : il ' +
        'trouve le bon module par son nom, le change en isolation, évite de toucher au ' +
        'code non lié. Résultat : sessions plus courtes, diffs plus petites, moins ' +
        'd\'erreurs cumulées — les mêmes choses qui aident les humains.',
      useCases: ['Nouveaux projets', 'Refactoring', 'Codebases d\'équipe'],
    },
    'iterate-configs': {
      name: 'Traiter les erreurs de l\'agent comme des incidents',
      description: 'Quand l\'agent se trompe, corrigez la config — pas juste la sortie',
      details:
        'Un agent qui dérive est un signal, pas un simple incident isolé. Traitez chaque ' +
        'erreur significative comme un petit incident : qu\'est-ce qui manquait — une ' +
        'instruction, un skill, le bon modèle ? Mettez à jour copilot-instructions.md, ' +
        'le skill concerné ou votre template de prompt pour que la même erreur ne se ' +
        'reproduise pas. Lancez /chronicle régulièrement pour faire émerger les motifs. ' +
        'Avec le temps, l\'agent devient nettement plus fiable sans plus de travail ' +
        'par tâche.',
      useCases: ['Workflows d\'équipe', 'Utilisateurs avancés CLI', 'Repos long terme'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>La qualité se cumule.</strong> Même à 99% par étape, un workflow ' +
        'agentique de 50 étapes ne réussit qu\'à ~60%. À 95% par étape c\'est 8%. Les ' +
        'gains par étape se multiplient — faites compter chaque token.',
    },
    {
      icon: '💰',
      content:
        '<strong>Le contexte &gt; les prompts pour le coût.</strong> Gérer le contexte qui ' +
        'alimente chaque appel au modèle a un impact bien plus grand que la formulation des ' +
        'prompts. Réduisez les fichiers, démarrez de nouveaux fils, utilisez le contexte ' +
        'conditionnel.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Adapter le modèle à la tâche.</strong> N\'utilisez pas un modèle premium pour ' +
        'un simple Q&A, ni un modèle mini pour de l\'architecture complexe. Le mode Auto route ' +
        'automatiquement en cas de doute.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Les boucles agentiques multiplient le coût.</strong> Une seule requête ' +
        'agentique peut déclencher des dizaines d\'appels. Ajoutez des signaux d\'arrêt ' +
        'explicites (« arrêter au premier test réussi ») pour éviter la consommation ' +
        'incontrôlée.',
    },
    {
      icon: '📦',
      content:
        '<strong>Passer du permanent à la demande.</strong> Gardez les instructions minimales. ' +
        'Le guidage lourd appartient aux Skills (chargés par le modèle quand pertinent) et aux ' +
        'fichiers de prompt (invoqués explicitement), pas dans copilot-instructions.md.',
    },
  ],
};
