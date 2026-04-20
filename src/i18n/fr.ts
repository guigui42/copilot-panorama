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
    description: 'Guide visuel interactif des outils GitHub Copilot sur trois couches : Terminal (CLI), IDE (Autocomplétion, Chat, Agent Mode, Agents tiers), et Cloud (Agent cloud, Agent de revue, Agents tiers).',
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
  },
  toolsLayers: {
    terminal: {
      title: 'Terminal',
      subtitle: 'Agent de codage IA directement dans votre ligne de commande',
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
