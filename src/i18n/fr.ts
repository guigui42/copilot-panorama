import type { Translations } from './types';

export const fr: Translations = {
  locale: 'fr',
  seo: {
    title: '.github/ stack composable — Système Composable Copilot',
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
};
