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
    markdownToActions: '# Markdown → GitHub Actions YAML',
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
      name: 'Fichiers de prompts',
      description: 'Invoqués manuellement via des commandes slash',
      details:
        'Les fichiers de prompts sont des modèles réutilisables invoqués avec des ' +
        'commandes slash (ex. `/security-review`, `/release-notes`). Ils permettent ' +
        'aux équipes de standardiser les prompts courants pour que chaque développeur ' +
        'obtienne des résultats cohérents et de qualité pour les tâches récurrentes.',
      useCases: ['API Review', 'Perf Audit', 'Onboarding Guide'],
    },
    'custom-agents': {
      name: 'Agents personnalisés',
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
      name: 'Workflows agentiques',
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
      description: 'Workflow GitHub Actions qui préconfigure l\'environnement de l\'agent de codage',
      details:
        'Copilot Setup Steps est un workflow GitHub Actions spécial situé dans ' +
        '`.github/workflows/copilot-setup-steps.yml` qui s\'exécute avant que l\'agent de ' +
        'codage ne commence à travailler. Utilisez-le pour installer de manière déterministe ' +
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
    description: 'Guide visuel interactif des outils GitHub Copilot sur trois couches : Terminal (CLI), IDE (Autocomplétion, Chat, Agent Mode, Agents tiers), et Cloud (Agent de codage, Agent de revue, Agents tiers).',
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
      useCases: ['Automatisation terminal', 'Génération de code', 'Opérations Git', 'Intégration GitHub', 'Gestion de PRs'],
    },
    autocomplete: {
      name: 'Autocomplétion',
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
        'd\'outils de suivi sont gratuits. À distinguer de l\'agent de codage Copilot (couche Cloud), ' +
        'qui s\'exécute sur GitHub Actions.',
      useCases: ['Tâches complexes', 'Implémentation multi-étapes', 'Résolution d\'erreurs', 'Automatisation de builds'],
    },
    'third-party-agents-ide': {
      name: 'Agents tiers',
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
      name: 'Agent de codage',
      description: 'Agent cloud autonome — assignez une issue, obtenez une PR avec vérifications de sécurité',
      details:
        'L\'agent de codage Copilot travaille de manière indépendante dans un environnement propulsé ' +
        'par GitHub Actions. Assignez une issue à @copilot, mentionnez-le sur une PR, ou demandez ' +
        'depuis le Chat — il évalue la tâche, effectue les modifications, exécute les tests et ' +
        'linters, réalise une analyse de sécurité CodeQL, vérifie les secrets, et crée une PR ' +
        'brouillon pour revue. Supporte les instructions personnalisées, les serveurs MCP, les ' +
        'agents personnalisés, les hooks, les skills et Copilot Memory. Ne pousse que sur les ' +
        'branches `copilot/`. Disponible sur Pro, Pro+, Business, Enterprise.',
      useCases: ['Corrections de bugs', 'Implémentation de fonctionnalités', 'Couverture de tests', 'Dette technique', 'Campagnes de sécurité'],
    },
    'review-agent': {
      name: 'Agent de revue',
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
      name: 'Agents tiers',
      description: 'Anthropic Claude et OpenAI Codex comme agents de codage cloud sur GitHub',
      details:
        'Les agents de codage tiers fonctionnent aux côtés de l\'agent de codage Copilot sur la ' +
        'plateforme GitHub. Supporte actuellement Anthropic Claude (Claude Agent SDK) et OpenAI ' +
        'Codex (Codex SDK). Assignez des issues, lancez des tâches depuis l\'onglet Agents, ' +
        'mentionnez @NOM_AGENT sur les PRs, ou démarrez des sessions depuis VS Code et GitHub ' +
        'Mobile. Soumis aux mêmes protections de sécurité que l\'agent de codage Copilot. Chaque ' +
        'session consomme une requête premium plus des minutes GitHub Actions. Actuellement en ' +
        'préversion publique.',
      useCases: ['Workflows multi-agents', 'Comparaison d\'agents', 'Tâches spécialisées', 'Développement parallèle'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Agent de codage.</strong> Agent Mode s\'exécute localement dans ' +
        'votre IDE — vous restez dans la boucle. L\'agent de codage s\'exécute sur GitHub Actions ' +
        'dans le cloud — il travaille de manière indépendante et crée une PR quand il a terminé.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Les agents tiers existent dans l\'IDE et le Cloud.</strong> Dans VS Code, Claude ' +
        'et Codex utilisent leurs SDK natifs localement. Sur GitHub, ils s\'exécutent comme agents ' +
        'cloud aux côtés de l\'agent de codage Copilot.',
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
        '<strong>Les agents cloud intègrent la sécurité.</strong> L\'agent de codage exécute ' +
        'CodeQL, la détection de secrets et les vérifications de dépendances automatiquement. ' +
        'Il ne peut pousser que sur les branches <code>copilot/</code> et crée toujours des PRs brouillon.',
    },
  ],
};
