import type { Translations } from './types';

export const es: Translations = {
  locale: 'es',
  seo: {
    title: 'Copilot Panorama — .github/ Stack',
    description: 'Guía visual interactiva del sistema componible de GitHub Copilot — explora las 4 capas: Contexto siempre activo, Capacidades bajo demanda, Control y Automatización, y Distribución.',
  },
  ui: {
    heroTitle: 'stack componible',
    layerPrefix: 'CAPA',
    insightsTitle: 'Cómo funciona realmente el sistema',
    insightsSubtitle: 'Ideas clave de arquitectura que la mayoría de los equipos pasan por alto',
    detailsLabel: 'Detalles',
    useCasesLabel: 'Casos de uso',
    documentationLabel: 'Documentación',
    communityExamplesLabel: 'Explorar ejemplos de la comunidad',
    footerBuiltFor: 'Creado para usuarios de GitHub Copilot',
    footerDocsLink: 'Documentación completa sobre el sistema componible',
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Compartir enlace',
    shareCopied: '¡Copiado!',
  },
  viz: {
    alwaysActive: 'Se aplica automáticamente',
    loadsAutomatically: 'dentro de su alcance compatible',
    planning: 'Planificación',
    implementation: 'Implementación',
    review: 'Revisión',
    descriptionRead: 'Copilot lee los metadatos del skill',
    fullSkillInjected: 'El modelo carga automáticamente el skill correspondiente',
    approveDeny: 'permitir / denegar / modificar',

    pluginJson: 'plugin.json',
    agentsDir: 'agents/',
    skillsDir: 'skills/',
    hooksJson: 'hooks.json',
    mcpJson: '.mcp.json',
    lspJson: 'lsp.json',
    repositorySettings: 'Configuración MCP del repositorio',
    ideConfig: 'mcp.json (IDE)',
    vsCode: 'VS Code',
    copilotCli: 'Copilot CLI',
    copilotApp: 'Aplicación Copilot',
    marketplace: 'Marketplace',
    gitRepo: 'Repositorio Git',
    localPath: 'Ruta local',
  },
  layers: {
    'always-on-context': {
      title: 'Contexto siempre activo',
      subtitle: 'Directrices del repositorio aplicadas automáticamente dentro de su alcance compatible',
    },
    'on-demand-capabilities': {
      title: 'Capacidades bajo demanda',
      subtitle: 'Invocadas explícitamente por el desarrollador o seleccionadas por el modelo',
    },
    'enforcement-automation': {
      title: 'Control y Automatización',
      subtitle: 'Barreras deterministas y orquestación a nivel de CI/CD',
    },
    distribution: {
      title: 'Distribución',
      subtitle: 'Empaquetar y compartir stacks de agentes entre equipos y repositorios',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Directrices del repositorio que dan forma automáticamente a las respuestas de Copilot',
      details:
        'Usa `.github/copilot-instructions.md` para directrices válidas en todo el repositorio y ' +
        '`.github/instructions/NOMBRE.instructions.md` con globs `applyTo` para rutas ' +
        'coincidentes. Los agentes también pueden usar el `AGENTS.md` más cercano, mientras que ' +
        'los archivos raíz `CLAUDE.md` y `GEMINI.md` se admiten en superficies específicas. Las ' +
        'instrucciones personales y de organización proporcionan valores por defecto más amplios ' +
        'fuera de los archivos del repositorio. El soporte varía según la superficie de Copilot, ' +
        'y las instrucciones guían el comportamiento en lugar de imponerlo.',
      useCases: ['Estándares de código', 'Reglas de framework', 'Convenciones del repositorio'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Especialistas con instrucciones acotadas, herramientas y contexto aislado',
      details:
        'Define agentes de repositorio en `.github/agents/NOMBRE-AGENTE.md`. Cada agente puede ' +
        'llevar instrucciones especializadas, restricciones de herramientas y contexto MCP. Los ' +
        'agentes de organización y empresa pueden distribuirse desde repositorios `.github` o ' +
        '`.github-private`. Copilot también puede delegar trabajo puntual a subagentes con ' +
        'contexto aislado. Campos como modelos y traspasos (handoffs) varían según la superficie, ' +
        'consulta la matriz de funciones actual.',
      useCases: ['Auditor de seguridad', 'Especialista en BD', 'Diseñador de API'],
    },
    skills: {
      name: 'Skills',
      description: 'Instrucciones, scripts y recursos reutilizables, cargados automáticamente cuando son relevantes',
      details:
        'Cada skill es una carpeta que contiene `SKILL.md` más scripts y recursos opcionales. ' +
        'Copilot selecciona automáticamente un skill cuando su experiencia coincide con la tarea; ' +
        'los usuarios también pueden solicitar un skill explícitamente. Guarda los ' +
        'skills de proyecto en `.github/skills/`, `.agents/skills/` o `.claude/skills/`; los ' +
        'skills personales pueden residir en `~/.copilot/skills/` o `~/.agents/skills/`. El ' +
        'soporte varía según la superficie.',
      useCases: ['Módulos Terraform', 'Manifiestos K8s', 'Stack de observabilidad'],
    },
    mcp: {
      name: 'MCP Servers',
      description: 'Herramientas externas y datos en vivo conectados mediante Model Context Protocol',
      details:
        'Configura los servidores MCP del repositorio en la configuración del repositorio en ' +
        'GitHub para el agente en la nube de Copilot y la revisión de código de Copilot. Los ' +
        'clientes IDE usan su propia configuración `mcp.json`, mientras que la CLI y la ' +
        'aplicación Copilot exponen su propia configuración de cliente. El soporte de MCP, las ' +
        'políticas y las ubicaciones de configuración varían según la superficie, así que activa ' +
        'solo los servidores y toolsets que un flujo de trabajo necesite.',
      useCases: ['Automatización de Issues y PR', 'Pruebas de navegador', 'Datos internos'],
      docLabel: 'Configurar servidores MCP del repositorio',
      altDocLabel: 'Acerca de MCP',
    },
    hooks: {
      name: 'Hooks',
      description: 'Comandos ejecutados en puntos documentados del ciclo de vida del agente',
      details:
        'Define los hooks del repositorio en `.github/hooks/NOMBRE.json` con `version: 1`. Los ' +
        'eventos abarcan sesiones, prompts, herramientas, permisos, compactación, subagentes y ' +
        'detenciones del agente. `preToolUse` puede permitir, denegar o modificar una llamada a ' +
        'herramienta. El soporte de eventos difiere entre Copilot CLI y el agente en la nube. Los ' +
        'fallos de hooks generalmente permiten que la ejecución continúe; los errores de ' +
        '`preToolUse` fallan de forma cerrada, mientras que los tiempos de espera permanecen abiertos.',
      useCases: ['Puertas de cumplimiento', 'Control de acceso a archivos', 'Registro de auditoría'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Automatización del repositorio impulsada por agentes de codificación con IA, ejecutada en GitHub Actions con barreras de seguridad',
      details:
        'Los workflows agénticos son archivos Markdown con frontmatter YAML (permisos, ' +
        'safe-outputs, disparadores) compilados a GitHub Actions mediante la extensión CLI ' +
        '`gh aw`. Define la automatización en lenguaje natural — programa informes diarios, ' +
        'clasifica issues, analiza fallos de CI o mantén la documentación. Los agentes se ' +
        'ejecutan con permisos de solo lectura por defecto; las operaciones de escritura ' +
        'requieren aprobación explícita mediante safe-output. La ejecución está en sandbox con ' +
        'lista blanca de herramientas y aislamiento de red. Funciona con GitHub Copilot, Claude u ' +
        'OpenAI Codex.',
      useCases: ['Clasificación de issues', 'Análisis de fallos de CI', 'Informes diarios'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'Workflow de GitHub Actions que preconfigura el entorno del agente en la nube',
      details:
        'Copilot Setup Steps es un workflow especial de GitHub Actions ubicado en ' +
        '`.github/workflows/copilot-setup-steps.yml` que se ejecuta antes de que el agente en la ' +
        'nube comience a trabajar. Úsalo para instalar de forma determinista herramientas, ' +
        'dependencias, o configurar el runner — para que el agente pueda compilar, probar y ' +
        'aplicar linters de inmediato sin descubrimiento por ensayo y error. También puedes ' +
        'actualizar a runners más grandes, cambiar a Windows, habilitar Git LFS, o definir ' +
        'variables de entorno mediante el entorno de Actions `copilot`. El workflow debe contener ' +
        'un único job `copilot-setup-steps` y solo tiene efecto cuando está presente en la rama ' +
        'predeterminada.',
      useCases: ['Preinstalar dependencias', 'Runners más grandes', 'Variables de entorno'],
    },
    plugins: {
      name: 'GitHub Copilot Plugins',
      description: 'Paquetes instalables para agentes, skills, hooks, MCP e integraciones LSP',
      details:
        'Un plugin nativo de Copilot comienza con `plugin.json` y puede incluir `agents/`, ' +
        '`skills/`, `hooks.json`, `.mcp.json` y `lsp.json`. Los plugins agrupan capacidades para ' +
        'su instalación a través de clientes Copilot y marketplaces. Por separado, Agent Plugins ' +
        '1.0 define un estándar abierto multicliente para paquetes portables; complementa, sin ' +
        'reemplazar, la estructura de plugin nativa de GitHub.',
      useCases: ['Paquetes de agentes reutilizables', 'Estandarización de equipo', 'Distribución en Marketplace'],
      docLabel: 'Acerca de los plugins de Copilot',
      altDocLabel: 'Estándar Agent Plugins 1.0',
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Las instrucciones se aplican automáticamente dentro de su alcance.</strong> Las ' +
        'directrices de todo el repositorio, específicas de ruta, específicas de agente, ' +
        'personales y de organización sirven a alcances diferentes.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Los skills aportan experiencia bajo demanda.</strong> Copilot puede seleccionar ' +
        'un skill cuando sus instrucciones y recursos coinciden con la tarea actual.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Los hooks ejecutan comandos en puntos del ciclo de vida.</strong> ' +
        '<code>preToolUse</code> puede permitir, denegar o modificar una llamada a herramienta. ' +
        'Los eventos admitidos y el comportamiento ante fallos varían según la superficie.',
    },
    {
      icon: '🔀',
      content:
        '<strong>Copilot puede seleccionar las capacidades relevantes.</strong> Descripciones ' +
        'claras de agentes, skills y herramientas ayudan a Copilot a elegir la experiencia ' +
        'adecuada para una tarea.',
    },
  ],

  /* ── Página de herramientas ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Guía visual interactiva de GitHub Copilot en IDEs, aplicaciones independientes y GitHub Cloud, incluyendo Copilot CLI, el agente en la nube, revisión de código, agentes de terceros, Slack y Teams.',
  },
  toolsUi: {
    heroTitle: 'Copilot Everywhere',
    insightsTitle: 'Las distinciones clave que la mayoría de los desarrolladores pasan por alto',
    insightsSubtitle: 'Ideas de arquitectura a través de las tres capas',
    footerBuiltFor: 'Creado para usuarios de GitHub Copilot',
    footerDocsLink: 'Documentación completa sobre las funciones de Copilot',
  },
  toolsViz: {
    interactive: 'Interactivo',
    programmatic: 'Programático',
    ghostText: 'texto fantasma',
    tabToAccept: 'Tab para aceptar',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: 'Analizar',
    edit: 'Editar',
    run: 'Ejecutar',
    fix: 'Corregir',
    local: 'Local',
    cloud: 'Nube',
    issueAssigned: 'Issue asignada',
    agentCodes: 'El agente codifica',
    prCreated: 'PR creada',
    securityChecks: 'Verificaciones de seguridad',
    addReviewer: 'Añadir revisor',
    reviewComments: 'Comentarios de revisión',
    suggestedFixes: 'Correcciones sugeridas',
    selectAgent: 'Seleccionar agente',
    askAnything: 'Pregunta lo que sea',
    repoContext: 'Contexto del repositorio',
    webSearch: 'Búsqueda web',
    openSession: 'Abrir sesión',
    reviewDiff: 'Revisar el diff',
    openPr: 'Abrir PR',
    inbox: 'Bandeja de entrada',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'Workflows',
    slack: 'Slack',
    teams: 'Teams',
    sharedSession: 'Sesión de agente compartida',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'Apps independientes',
      subtitle: 'Aplicaciones de escritorio y terminal dedicadas al desarrollo agéntico',
    },
    ide: {
      title: 'IDE',
      subtitle: 'Sugerencias en línea, chat, edición autónoma y agentes de terceros en tu editor',
    },
    cloud: {
      title: 'Nube',
      subtitle: 'Agentes autónomos en la plataforma GitHub — codificación, revisión y terceros',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      path: 'Agente de terminal',
      description: 'Un agente en tu terminal para código, shell y flujos de trabajo de GitHub',
      details:
        'Inicia una sesión interactiva con `copilot` o pasa un solo prompt con `copilot -p`. La ' +
        'CLI puede editar archivos, ejecutar comandos de shell aprobados, y trabajar con issues, ' +
        'pull requests y Actions de GitHub. El modo plan acota el trabajo antes de las ' +
        'modificaciones. `/context`, `/compact` y la compactación automática gestionan sesiones ' +
        'largas. Los sandboxes locales y en la nube están en vista previa pública. La CLI admite ' +
        'instrucciones, agentes, skills, hooks, MCP, plugins y Copilot Memory en vista previa pública.',
      useCases: ['Entrega de Issue a PR', 'Modernización de código heredado', 'Ejecución paralela Fleet', 'Clasificación y planificación del backlog', 'Desarrollo agnóstico del editor', 'Automatización'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      path: 'Espacio de trabajo de escritorio para agentes',
      description: 'Espacio de trabajo de escritorio para sesiones de agentes en paralelo y automatizaciones recurrentes',
      details:
        'Ejecuta varias sesiones de agentes aisladas entre repositorios, gestiona issues y pull ' +
        'requests, y guarda automatizaciones que se ejecutan bajo demanda o según un calendario. ' +
        'Las sesiones de repositorio usan worktrees dedicados; los espacios de trabajo en la nube ' +
        'están en vista previa pública. La aplicación admite instrucciones, skills, servidores ' +
        'MCP, agentes personalizados, plugins y extensiones de canvas. La configuración ' +
        'gestionada por la empresa puede regir las acciones e integraciones admitidas.',
      useCases: ['Bandeja de entrada agéntica y triaje', 'Agentic Merge (última milla)', 'Trabajo paralelo multisesión', 'Workflows repetibles', 'Colaboración con roles adyacentes', 'Orquestación entre repositorios'],
    },
    autocomplete: {
      name: 'Sugerencias en línea',
      path: 'Sugerencias en línea del IDE',
      description: 'Sugerencias de código en texto fantasma que aparecen en línea mientras escribes',
      details:
        'Copilot propone código a partir del contexto actual del editor mientras escribes. Las ' +
        'sugerencias pueden abarcar desde una línea hasta una función completa. Next Edit ' +
        'Suggestions predice la ubicación de la próxima edición en editores compatibles. Los ' +
        'atajos de teclado y la disponibilidad de funciones varían según el IDE.',
      useCases: ['Completado de código', 'Generación de boilerplate', 'Completado de patrones', 'De comentario a código'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      path: 'Chat del IDE',
      description: 'Chat de IA conversacional para preguntas de código, explicaciones y generación',
      details:
        'Copilot Chat responde preguntas, explica código, propone cambios y ayuda a depurar. ' +
        'Añade archivos relevantes, selecciones, contexto de repositorio o herramientas ' +
        'compatibles para acotar una solicitud. Las palabras clave, comandos, modelos y el ' +
        'soporte de MCP varían según el IDE, así que usa la matriz de funciones actual para el ' +
        'editor que uses.',
      useCases: ['Explicación de código', 'Depuración', 'Generación de pruebas', 'Refactorización de código', 'Aprendizaje'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      path: 'Agent Mode del IDE',
      description: 'Codificación local autónoma — Copilot determina los archivos, realiza cambios, ejecuta comandos e itera',
      details:
        'Agent Mode permite que Copilot edite tu código de forma autónoma dentro del IDE. ' +
        'Determina qué archivos cambiar, realiza ediciones multiarchivo, propone comandos de ' +
        'terminal para aprobación, e itera frente a errores. Los IDE compatibles pueden añadir ' +
        'servidores MCP, subagentes y agentes personalizados. A diferencia del agente en la nube ' +
        'de Copilot, Agent Mode funciona dentro de tu sesión local del editor. El consumo de ' +
        'créditos de IA depende del modelo seleccionado y del trabajo realizado.',
      useCases: ['Tareas complejas', 'Implementación multietapa', 'Resolución de errores', 'Automatización de builds'],
    },
    'third-party-agents-ide': {
      name: 'Entornos de agentes de terceros',
      path: 'Entornos de agentes de terceros en VS Code',
      description: 'Entornos de Claude y Codex disponibles dentro de VS Code',
      details:
        'VS Code puede ejecutar entornos de terceros compatibles como Anthropic Claude y OpenAI ' +
        'Codex. Cada entorno mantiene su flujo de trabajo y capacidades específicas del ' +
        'proveedor dentro del editor. La disponibilidad, el lugar de ejecución, los permisos y ' +
        'la facturación pueden cambiar, así que consulta la documentación actual de entornos de ' +
        'agentes de VS Code.',
      useCases: ['Codificación autónoma', 'Revisión de seguridad', 'Funciones específicas del proveedor', 'Tareas en segundo plano'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      path: 'GitHub.com y móvil',
      description: 'IA conversacional en GitHub.com — pregunta sobre repositorios, issues, PR y la web',
      details:
        'Copilot Chat en GitHub.com te permite hacer preguntas desde cualquier página — sobre un ' +
        'repositorio, una issue, una pull request o temas generales de software. Puede usar ' +
        'contexto del repositorio y de la web, modelos seleccionados, e información de sesión de ' +
        'agente. Chat y el agente en la nube de Copilot pueden pasar contexto dentro del flujo de ' +
        'trabajo activo. GitHub Mobile ofrece acceso a las experiencias de Chat y sesión de ' +
        'agente compatibles.',
      useCases: ['Preguntas y respuestas del repositorio', 'Análisis de issues', 'Comprensión de PR', 'Búsqueda web', 'Generación de código'],
    },
    'coding-agent': {
      name: 'Copilot Cloud Agent',
      path: 'Agente en la nube de GitHub',
      description: 'Trabajo autónomo en el repositorio dentro de un entorno alojado por GitHub',
      details:
        'Delega trabajo desde issues, pull requests, Chat, o la vista Agents. Copilot investiga ' +
        'el repositorio, planifica, cambia el código en una rama, valida el resultado, y abre una ' +
        'pull request para revisión humana. Las instrucciones, MCP, agentes, hooks, skills y ' +
        'Copilot Memory (vista previa pública) pueden personalizar la sesión. El code scanning, ' +
        'el secret scanning, las verificaciones de dependencias y las reglas de firewall son ' +
        'protecciones configurables, no garantías universales.',
      useCases: ['Corrección de errores', 'Implementación de funciones', 'Cobertura de pruebas', 'Deuda técnica', 'Campañas de seguridad'],
    },
    'review-agent': {
      name: 'Copilot Code Review',
      path: 'Revisión de pull request',
      description: 'Revisor de código con IA con contexto completo del proyecto y correcciones sugeridas',
      details:
        'La revisión de código de Copilot analiza los cambios, reúne el contexto de repositorio ' +
        'relevante, y proporciona comentarios con correcciones sugeridas. Los equipos pueden ' +
        'solicitar revisiones manualmente o configurar revisiones automáticas. Se admiten ' +
        'instrucciones de repositorio, skills de agente y servidores MCP; Copilot Memory está en ' +
        'vista previa pública. La disponibilidad difiere entre GitHub y los IDE compatibles.',
      useCases: ['Calidad del código', 'Revisión de seguridad', 'Buenas prácticas', 'Flujo de trabajo de PR', 'Gobernanza de equipo'],
    },
    'third-party-agents-cloud': {
      name: 'Agentes de codificación de terceros',
      path: 'Agentes de terceros de GitHub',
      description: 'Agentes de codificación de socios que funcionan junto a Copilot en GitHub',
      details:
        'Los agentes de codificación de terceros como Anthropic Claude y OpenAI Codex pueden ' +
        'trabajar en GitHub junto al agente en la nube de Copilot. Inicia sesiones compatibles ' +
        'desde las superficies de GitHub y revisa sus cambios mediante pull requests. La función ' +
        'está en vista previa pública y usa los límites de seguridad del agente en la nube, con ' +
        'capacidades y facturación definidas por la documentación de producto actual.',
      useCases: ['Workflows multiagente', 'Comparación de agentes', 'Tareas especializadas', 'Desarrollo en paralelo'],
    },
    'slack-teams': {
      name: 'Colaboración en Slack y Teams',
      path: 'Slack\nMicrosoft Teams',
      description: 'Sesiones de agente en la nube compartidas, iniciadas desde conversaciones de equipo',
      details:
        'En vista previa pública, menciona `@GitHub` en conversaciones compatibles de Slack o ' +
        'Microsoft Teams para iniciar o dirigir una sesión de agente en la nube de Copilot. La ' +
        'integración puede usar el contexto de la conversación y continúa de forma asíncrona en ' +
        'un sandbox en la nube. Los permisos del repositorio rigen quién puede desencadenar ' +
        'cambios de código, y el contexto de la conversación puede almacenarse junto con los ' +
        'artefactos generados. Usa un mensaje directo cuando necesites un contexto más acotado.',
      useCases: ['De discusión a PR', 'Planificación colaborativa', 'Creación de issues'],
      docLabel: 'Integración con Slack',
      altDocLabel: 'Integración con Teams',
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode no es el agente en la nube de Copilot.</strong> Agent Mode funciona ' +
        'en tu sesión local del IDE; el agente en la nube funciona de forma asíncrona en un ' +
        'entorno alojado por GitHub y devuelve una pull request.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Los agentes de terceros usan superficies diferentes.</strong> VS Code expone ' +
        'entornos de agentes, mientras que GitHub aloja agentes de codificación de terceros ' +
        'junto al agente en la nube de Copilot.',
    },
    {
      icon: '💬',
      content:
        '<strong>Los controles de contexto varían según el editor.</strong> Adjunta solo los ' +
        'archivos, selecciones, contexto de repositorio y herramientas compatibles relevantes ' +
        'antes de escalar a trabajo autónomo.',
    },
    {
      icon: '🔒',
      content:
        '<strong>El trabajo en la nube necesita protecciones configuradas y revisión humana.</strong> ' +
        'Usa juntos los permisos del repositorio, las reglas de firewall, los controles de ' +
        'escaneo, las pruebas y la revisión de pull request.',
    },
  ],

  /* ── Página de consejos ── */
  tipsSeo: {
    title: 'Copilot Panorama — Consejos de eficiencia',
    description: 'Guía práctica para optimizar el uso de GitHub Copilot — gestión de tokens, diseño de prompts, acotación de contexto, selección de modelos y gobernanza.',
  },
  tipsUi: {
    heroTitle: 'Consejos de eficiencia',
    insightsTitle: 'La mentalidad de la eficiencia',
    insightsSubtitle: 'Principios clave para obtener más valor de cada token',
    footerBuiltFor: 'Creado para usuarios de GitHub Copilot',
    footerDocsLink: 'Documentación completa sobre la facturación de Copilot',
    pageTips: 'Consejos de eficiencia',
  },
  tipsViz: {
    inputTokens: 'Tokens de entrada',
    outputTokens: 'Tokens de salida',
    cachedTokens: 'Tokens en caché',
    modelCalls: 'llamadas al modelo',
    before: 'Antes',
    after: 'Después',
    expensive: 'Costoso',
    cheap: 'Económico',
    high: 'Esfuerzo alto',
    low: 'Esfuerzo bajo',
    auto: 'Auto',
    cacheHit: 'Acierto de caché',
    cacheMiss: 'Fallo de caché',
    narrow: 'Estrecho',
    broad: 'Amplio',
    verboseInstructions: 'Instrucciones largas y verbosas…',
    scopedContext: 'Contexto preciso y acotado',
    chat: 'Chat',
    shipToPr: 'Entregar en la PR',
    freshThread: 'Hilo nuevo',
    principlesBrief: 'Solo principios. Breve.',
    heavy: 'Pesado',
    skills: 'Skills',
    customAgents: 'Rol + herramientas distintos → Custom Agents',
    minimalDiff: 'Diff mínimo + 3 viñetas',
    alwaysOn: 'Siempre activo',
    costly: 'costoso',
    onDemand: 'Bajo demanda',
    efficient: 'eficiente',
    enabledTools: 'Toolsets requeridos habilitados',
    allToolsEnabled: 'Todos los toolsets habilitados',
    taskScoped: 'Acotado a esta tarea',
    loadOnce: 'Cargar el esquema una vez',
    reuseInQueries: 'Referenciar en consultas posteriores',
    tokenPrefixMatch: 'El prefijo repetido coincide',
    prefixDiffers: 'El prefijo cambió',
    standard: 'Estándar',
    simpleToMini: 'Simple → mini',
    complexToPremium: 'Complejo → premium',
    usageBaseline: 'Línea base de uso',
    alertBudget: 'Presupuesto solo con alertas',
    costCenterBudget: 'Presupuesto por centro de costo',
    perStep: 'por paso',
    steps: 'pasos',
    accuracy99: '99 %',
    accuracy95: '95 %',
    lostInMiddle: 'Perdido en el medio',
    historyAccumulates: 'El historial se acumula en cada turno',
    everyTurnAdds: 'Cada turno añade contexto',
    reprocessedInput: 'Todo el historial se reprocesa como entrada',
    middleDecay: 'Los tokens del medio se degradan',
    startStrong: '✓ Inicio: fuerte recuerdo',
    middleLost: '✗ Medio: degradado',
    endStrong: '✓ Final: fuerte recuerdo',
    rawFiles: 'Dar archivos crudos a la IA',
    scriptOutput: 'Ejecutar script, dar la salida',
    research: '/research',
    plan: 'Modo plan',
    implement: '/fleet',
    withTests: 'Con pruebas unitarias',
    withoutTests: 'Sin pruebas unitarias',
    buggyChange: 'Cambio con errores',
    silentMerge: 'Merge silencioso',
    brokenMain: 'Main rota',
    failingTests: 'Pruebas fallidas',
    correction: 'Corrección',
    succeedingTests: 'Pruebas superadas',
    rawOutput: 'Salida cruda: 4200 líneas',
    trimmed: 'Recortada: 38 líneas',
    cleanLayers: 'Dominio → Aplicación → Infraestructura',
    agentMiss: 'Error del agente',
    rootCause: 'Encontrar la causa raíz',
    durableFix: 'Codificar una corrección duradera',
    enterpriseDefault: 'Valor por defecto de empresa',
    overridableKeys: 'Claves modificables',
    teamSpecialization: 'Configuración de equipo',
  },
  tipsLayers: {
    mechanics: {
      title: 'Mecánica de tokens',
      subtitle: 'Comprende los factores de costo detrás de cada interacción con Copilot',
    },
    pitfalls: {
      title: 'Trampas',
      subtitle: 'Modos de fallo que degradan silenciosamente los resultados y consumen tokens',
    },
    prompting: {
      title: 'Prompting',
      subtitle: 'Escribe prompts que produzcan mejores resultados con menos tokens',
    },
    context: {
      title: 'Contexto',
      subtitle: 'Dale al modelo exactamente lo que necesita — ni más, ni menos',
    },
    caching: {
      title: 'Caché',
      subtitle: 'Aprovecha el prompt caching para interacciones más rápidas y económicas',
    },
    models: {
      title: 'Modelos',
      subtitle: 'Ajusta la capacidad del modelo a la complejidad de la tarea',
    },
    governance: {
      title: 'Gobernanza',
      subtitle: 'Monitorea el consumo y establece barreras a nivel de organización',
    },
    'workflow-design': {
      title: 'Diseño de workflow',
      subtitle: 'Divide y vencerás — encadena pasos acotados en lugar de un mega-prompt',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'Factores de costo de créditos de IA',
      path: 'Factores de costo',
      description: 'Los tokens de entrada, salida y en caché contribuyen de forma diferente según el modelo',
      details:
        'El consumo de créditos de IA depende del modelo seleccionado y de los tokens ' +
        'procesados. Los tokens de entrada incluyen prompts, instrucciones, contexto de archivos ' +
        'y salida de herramientas; los tokens de salida son lo que el modelo genera; las ' +
        'lecturas en caché pueden costar menos cuando se reutiliza contexto repetido. Las tarifas ' +
        'varían según el modelo, así que usa la tabla de precios vigente en lugar de suponer una ' +
        'proporción fija.',
      useCases: ['Todas las interacciones', 'Planificación de presupuesto', 'Análisis de costos'],
    },
    'agentic-cost': {
      name: 'Multiplicador de costo agéntico',
      path: 'Agentic Workflows',
      description: 'El trabajo agéntico itera entre planificación, herramientas, validación y corrección',
      details:
        'Las experiencias agénticas (Agent Mode, Cloud Agent, CLI) iteran por diseño: planificar ' +
        '→ editar → ejecutar herramientas/pruebas → corregir → repetir. El consumo varía según el ' +
        'alcance de la tarea, la elección del modelo, la salida de herramientas, los reintentos y ' +
        'las condiciones de parada. Requisitos claros y validación determinista reducen bucles innecesarios.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Agente CLI'],
    },
    'context-discipline': {
      name: 'Disciplina de contexto',
      path: 'Diseño de workflow',
      description: 'La optimización de costos es sobre todo disciplina de contexto + diseño de workflow',
      details:
        'La mayor palanca de costo no es escribir prompts más cortos — es gestionar qué ' +
        'contexto entra en cada llamada al modelo. Cada archivo adjunto, salida de herramienta y ' +
        'elemento del historial de conversación añade tokens de entrada. Una gestión disciplinada ' +
        'del contexto (acotar archivos, recortar logs, iniciar hilos nuevos) tiene un impacto ' +
        'mucho mayor que pulir los prompts.',
      useCases: ['Todos los workflows', 'Optimización de costos', 'Rendimiento'],
    },
    'quality-over-quantity': {
      name: 'Calidad antes que cantidad',
      path: 'Diseño de prompts',
      description: 'Concéntrate en contexto de alta calidad, no en más instrucciones',
      details:
        'Más instrucciones no garantizan un mejor resultado. Define la tarea y el resultado ' +
        'esperado, proporciona los archivos, logs o restricciones conocidas relevantes, indica ' +
        'cómo se validará el resultado, y da una condición de parada clara. Esta estructura ' +
        'reduce la exploración, la desviación de alcance, los reintentos y la salida innecesaria.',
      useCases: ['Chat', 'Agent Mode', 'Copilot CLI'],
    },
    'fresh-threads': {
      name: 'Hilos nuevos',
      path: 'Higiene de sesión',
      description: 'Inicia conversaciones nuevas una vez que las decisiones se entregan — evita el context rot',
      details:
        'Evita sesiones de larga duración donde las salidas de herramientas se acumulan en el ' +
        'contexto. Cada salida de herramienta acumulada puede añadir tokens de entrada a las ' +
        'llamadas posteriores y diluir el contexto relevante. Una vez que hayas entregado la ' +
        'decisión en un artefacto duradero (issue, descripción de PR, ADR, commit de código), ' +
        'inicia un hilo nuevo con una ventana de contexto limpia. En Copilot CLI, `/new` (o ' +
        '`/clear`) inicia una conversación nueva; en Chat, abre una nueva sesión de chat.',
      useCases: ['Chat', 'Agent Mode', 'Sesiones CLI'],
    },
    'concise-instructions': {
      name: 'Mantén las instrucciones enfocadas',
      path: 'Instructions',
      description: 'Prioriza las directrices estables del proyecto sobre el detalle específico de la tarea',
      details:
        'Usa las instrucciones del repositorio para el mapa del proyecto, los comandos ' +
        'validados de build/test/lint, las convenciones estables y las restricciones no ' +
        'negociables. Elimina el detalle obsoleto o específico de la tarea. Pon los playbooks de ' +
        'dominio reutilizables, ejemplos, scripts y recursos en skills para que Copilot pueda ' +
        'cargarlos cuando sean relevantes.',
      useCases: ['Instructions', 'Optimización de costos', 'Todas las interacciones'],
    },
    'structure-for-reuse': {
      name: 'Estructura para reutilizar',
      path: 'Contexto reutilizable',
      description: 'Usa skills para experiencia reutilizable y agentes para roles distintos',
      details:
        'Pon playbooks, ejemplos, reglas de dominio, scripts y runbooks en Agent Skills para que ' +
        'Copilot pueda seleccionarlos para tareas relevantes. Usa agentes personalizados cuando ' +
        'un workflow necesite un rol distinto, un límite de herramientas, o contexto aislado. ' +
        'Mantén las instrucciones amplias del repositorio centradas en directrices que se ' +
        'apliquen a través de las tareas.',
      useCases: ['Skills', 'Custom Agents', 'Workflows de equipo'],
    },
    'concise-answers': {
      name: 'Pide menos',
      path: 'Control de salida',
      description: 'Pide la respuesta útil más pequeña para minimizar los tokens de salida',
      details:
        'Pide la respuesta mínima útil: «Dame el diff mínimo + 3 viñetas de justificación» en ' +
        'lugar de «explica todo». «Lista solo los cambios que rompen compatibilidad; omite el ' +
        'contexto» al hacer actualizaciones o migraciones. Salidas más pequeñas reducen los ' +
        'tokens generados y el ruido en la revisión.',
      useCases: ['Chat', 'Revisión de código', 'Migraciones'],
    },
    'scope-context': {
      name: 'Acota el contexto intencionalmente',
      path: 'Estrategia de contexto',
      description: 'Adjunta solo los archivos, selecciones y logs que la tarea necesita',
      details:
        'Abre o adjunta los archivos relevantes y cierra las pestañas irrelevantes. Incluye el ' +
        'código seleccionado, el error o la salida de la prueba fallida en lugar de logs ' +
        'completos. Los controles de contexto y las palabras clave varían según el IDE, pero el ' +
        'principio es estable: un contexto acotado reduce la distracción y el uso de créditos de IA.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: 'Condicional en lugar de siempre activo',
      path: 'Carga condicional',
      description: 'Prefiere contexto que se carga solo cuando es relevante para la tarea actual',
      details:
        'El contexto siempre activo (copilot-instructions.md) se carga en cada conversación y ' +
        'cuesta tokens cada vez. El contexto condicional (Skills, instrucciones acotadas por ' +
        'ruta) se carga solo cuando es relevante. Mueve las directrices especializadas a Skills, ' +
        'donde el modelo decide cuándo cargarlas, o usa globs applyTo para que las instrucciones ' +
        'solo se apliquen a los archivos coincidentes.',
      useCases: ['Instructions', 'Skills', 'Acotación por ruta'],
    },
    'apply-to-paths': {
      name: 'Usa rutas applyTo',
      path: 'Acotación por ruta',
      description: 'Acota las instrucciones personalizadas a patrones de archivo específicos con globs applyTo',
      details:
        'Las instrucciones específicas de ruta (en .github/instructions/) admiten el ' +
        'frontmatter glob applyTo. Esto significa que la instrucción solo se carga cuando el ' +
        'modelo trabaja en archivos coincidentes — p. ej., applyTo: "**/*.test.ts" para ' +
        'convenciones de pruebas. Esto es contexto gratuito cuando no es relevante y contexto ' +
        'preciso cuando se necesita.',
      useCases: ['Instructions', 'Reglas de pruebas', 'Específico de framework'],
    },
    'skills-mcp': {
      name: 'Habilita solo los toolsets necesarios',
      path: 'Acotación de toolsets',
      description: 'Limita las herramientas MCP a las capacidades que requiere la tarea',
      details:
        'Grandes colecciones de herramientas MCP añaden contexto y dificultan la selección de ' +
        'herramientas. Configura solo los toolsets de MCP de GitHub y los servidores externos ' +
        'necesarios para el flujo de trabajo actual. Mantén un catálogo más amplio disponible ' +
        'para descubrimiento, pero acota las herramientas habilitadas antes de comenzar una tarea.',
      useCases: ['Servidores MCP', 'Servidor MCP de GitHub', 'Gestión de contexto'],
    },
    'context-command': {
      name: '/context en la CLI',
      path: 'Contexto de CLI',
      description: 'Vigila el contexto con /context; compacta sesiones largas con /compact en lugar de empezar de nuevo',
      details:
        'En Copilot CLI, usa `/context` para ver cuánto de tu ventana de contexto se ha ' +
        'consumido. Cuando una sesión crece mucho pero quieres seguir, ejecuta `/compact` para ' +
        'resumir el historial y reducir la ventana — opcionalmente enfocándola, p. ej. ' +
        '`/compact focus on the auth module`. Cuando cambies a un problema no relacionado, ' +
        'empieza limpio con `/new` o `/clear` en su lugar. Ser consciente del consumo de ' +
        'contexto te ayuda a decidir cuándo compactar, empezar de nuevo, o continuar.',
      useCases: ['CLI', 'Sesiones largas', 'Gestión de contexto'],
    },
    'reuse-context': {
      name: 'Almacena y reutiliza el contexto',
      path: 'Reutilización de contexto',
      description: 'Carga el contexto compartido temprano para que las preguntas siguientes lo referencien de forma económica',
      details:
        'Almacena y reutiliza el contexto dentro de tus prompts. Por ejemplo, carga un esquema ' +
        'de base de datos al principio de la conversación para que el trabajo posterior pueda ' +
        'reutilizarlo — haz preguntas específicas que lo referencien en lugar de volver a ' +
        'pegarlo cada vez. Esto es especialmente efectivo en la CLI, donde las sesiones pueden ' +
        'ser de larga duración y el prefijo compartido habilita el prompt caching.',
      useCases: ['Sesiones CLI', 'Chat', 'Trabajo con mucho esquema'],
    },
    'prefix-matching': {
      name: 'Almacenamiento en caché del prefijo del prompt',
      path: 'Prompt caching',
      description: 'El caché de LLM depende de coincidencias exactas de prefijo — estructura los prompts en consecuencia',
      details:
        'El prompt caching generalmente depende de prefijos repetidos. Las instrucciones ' +
        'estables, las definiciones de herramientas y el contexto de conversación relevante ' +
        'tienen más probabilidades de reutilizarse que los preámbulos que cambian ' +
        'constantemente. Trata esto como contexto de implementación, no como un umbral fijo de ' +
        'tokens de Copilot.',
      useCases: ['Todas las interacciones', 'Optimización de costos', 'Rendimiento'],
    },
    'choose-right-model': {
      name: 'Elige el modelo y el nivel de razonamiento',
      path: 'Selección de modelo',
      description: 'Ajusta la capacidad del modelo y el esfuerzo de razonamiento a la complejidad de la tarea',
      details:
        'La elección del modelo es una de las formas más rápidas de controlar el costo — usa ' +
        'toda la capacidad que la tarea requiera, y tan poca como sea necesario. Piensa en tres ' +
        'niveles: modelos de razonamiento para decisiones de arquitectura, depuración compleja y ' +
        'diseño de sistemas; modelos intermedios cuando el plan es claro y el agente solo tiene ' +
        'que ejecutar; modelos más ligeros para refactorización, formato, documentación y otros ' +
        'cambios rutinarios y bien acotados. Para los modelos que admiten razonamiento ' +
        'configurable, usa el esfuerzo regular por defecto y auméntalo solo para trabajo más ' +
        'difícil, porque un esfuerzo mayor consume más créditos de IA.',
      useCases: ['Todas las interacciones', 'Planificación de presupuesto', 'Enrutamiento de tareas'],
    },
    'auto-mode': {
      name: 'Usa el modo automático',
      path: 'Selección automática',
      description: 'Auto enruta cada prompt a un modelo eficiente, protege tu caché, y otorga un 10 % de descuento',
      details:
        'Cuando no estés seguro de qué modelo usar, selecciona «Auto». Un pequeño enrutador ' +
        'analiza tu prompt y lo envía al modelo que pueda manejarlo de forma más eficiente — ' +
        'reservando los modelos de razonamiento costosos para problemas genuinamente complejos. ' +
        'Auto también protege tu caché: solo cambia de modelo en límites naturales (una sesión ' +
        'nueva o después de `/compact`), nunca a mitad de tarea. En los planes de Copilot de ' +
        'pago, usar la selección automática de modelo otorga un 10 % de descuento en los costos ' +
        'de modelo en Chat, la CLI, la aplicación Copilot y el agente en la nube. Una buena ' +
        'opción por defecto para la mayoría de los workflows.',
      useCases: ['Workflow por defecto', 'Tareas mixtas', 'Usuarios nuevos'],
    },
    'monitor-usage': {
      name: 'Mide el uso base y luego fija presupuestos',
      path: 'Controles de presupuesto',
      description: 'Usa informes, alertas, centros de costo y límites de usuario a partir del uso observado',
      details:
        'Usa los informes de uso de IA, incluidos los desgloses por modelo de entradas, salidas, ' +
        'lecturas y escrituras en caché, para establecer una línea base. Cuando el historial es ' +
        'limitado, comienza con presupuestos de solo alerta y un límite de usuario universal ' +
        'permisivo. Añade presupuestos por centro de costo donde la propiedad esté delegada, ' +
        'monitorea las alertas de umbral, y ajusta los límites a partir de los patrones observados.',
      useCases: ['Admin', 'Control de presupuesto', 'Gobernanza de equipo'],
    },
    'managed-settings-tip': {
      name: 'Especializa la configuración gestionada por equipo',
      path: 'managed-settings.json\nteam-mappings.json\nteams/<name>.json',
      description: 'Mantén fijas las barreras de la empresa mientras los equipos personalizan la configuración aprobada',
      details:
        'Comienza con los valores por defecto de la empresa en `copilot/managed-settings.json`. ' +
        'Marca solo las claves que los equipos pueden cambiar con `overridable`, asigna los ' +
        'archivos de configuración a los slugs de equipo de la empresa en ' +
        '`copilot/team-mappings.json`, y luego coloca los valores aprobados bajo ' +
        '`copilot/teams/`. Los valores no definidos vuelven al valor por defecto de la empresa. ' +
        'Las claves no modificables permanecen bloqueadas, mientras que `enabledPlugins` y ' +
        '`extraKnownMarketplaces` se combinan de forma aditiva. La configuración de permiso y ' +
        'denegación de MCP puede gobernar centralmente los servidores en los clientes ' +
        'compatibles. Si un usuario pertenece a varios equipos asignados, los valores de equipo ' +
        'se combinan usando el valor menos restrictivo bajo la política de la empresa.',
      useCases: ['Equipos de plataforma', 'Pioneros de IA', 'Herramientas basadas en roles'],
      docLabel: 'Configurar ajustes específicos de equipo',
      altDocLabel: 'Referencia de configuración gestionada',
    },
    'compound-errors': {
      name: 'El problema del error compuesto',
      path: 'Matemática de la calidad',
      description: 'Las tasas de error hipotéticas por paso se componen a lo largo de workflows largos',
      details:
        'A modo de ilustración, si cada uno de 50 pasos independientes fuera fiable al 99 %, la ' +
        'tasa hipotética de extremo a extremo sería de aproximadamente 60 %; al 95 % sería de ' +
        'aproximadamente 8 %. Estos son ejemplos matemáticos, no tasas de fiabilidad medidas de ' +
        'Copilot. Alcances más pequeños y verificaciones deterministas reducen el número de ' +
        'pasos no verificados.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Workflows orquestados'],
    },
    'context-rot': {
      name: 'Degradación del contexto',
      path: 'Deterioro del contexto',
      description: 'Los historiales largos aumentan el costo y pueden diluir las decisiones relevantes',
      details:
        'Cada salida de herramienta, archivo adjunto y turno de conversación se acumula en el ' +
        'contexto. Los historiales largos aumentan el procesamiento de entrada y pueden hacer ' +
        'que las decisiones más antiguas sean más difíciles de recuperar. Mitigaciones: recorta ' +
        'las salidas de herramientas verbosas, entrega las decisiones intermedias en artefactos ' +
        'duraderos (issues, PR, ADR), e inicia hilos nuevos antes de que se instale el deterioro.',
      useCases: ['Sesiones largas', 'Agent Mode', 'Sesiones CLI'],
    },
    'lost-in-middle': {
      name: 'Perdido en el medio',
      path: 'Sesgo de posición',
      description: 'Los tokens ubicados en el medio de un contexto largo se recuerdan de forma menos fiable',
      details:
        'Investigaciones externas sobre LLM encontraron una recuperación más débil para la ' +
        'información ubicada en el medio de contextos largos. Los resultados varían según el ' +
        'modelo y no son una garantía de fiabilidad de Copilot. Mantén las instrucciones ' +
        'críticas destacadas y divide el material no relacionado en entradas acotadas.',
      useCases: ['Prompts grandes', 'Documentos largos', 'Revisiones multiarchivo'],
    },
    'think-in-code': {
      name: 'Piensa en código',
      path: 'Scripts en lugar de IA',
      description: 'Prefiere scripts a alimentar archivos crudos — analiza, y luego entrega un resumen al modelo',
      details:
        'Cuando necesites entender 10.000 líneas de logs o un gran volcado JSON, no lo pegues ' +
        'todo. Escribe (o haz que el agente escriba) un pequeño script que extraiga solo lo que ' +
        'importa — conteos, errores, la porción relevante — y entrega al agente la salida del ' +
        'script en su lugar. Esto mantiene al modelo centrado en la pregunta real. Usa grep, jq, ' +
        'awk, o un pequeño script, y agrupa operaciones deterministas independientes cuando ' +
        'puedan ejecutarse juntas de forma segura.',
      useCases: ['Análisis de logs', 'Exploración de datos', 'Archivos grandes'],
    },
    'research-plan-implement': {
      name: 'Investigar → Planificar → Implementar',
      path: 'Divide y vencerás',
      description: 'Separa el descubrimiento, el acuerdo y la ejecución; paraleliza el trabajo independiente',
      details:
        'Usa `/research` para investigación profunda documentada, el modo plan para acordar el ' +
        'alcance y la secuencia antes de las modificaciones, y la implementación solo después de ' +
        'que el plan esté claro. Usa `/fleet` cuando una solicitud pueda descomponerse en tareas ' +
        'independientes que se ejecuten en paralelo. Mantén cada etapa acotada y transmite ' +
        'hallazgos duraderos en lugar de todo un historial exploratorio.',
      useCases: ['Refactorizaciones complejas', 'Cambios transversales', 'Ediciones multiarchivo'],
    },
    'deterministic-guardrails': {
      name: 'Valida la salida de Copilot',
      path: 'Bucles guiados por pruebas',
      description: 'La revisión humana y las verificaciones deterministas siguen siendo necesarias',
      details:
        'Revisa el código generado antes de usarlo en producción. Ejecuta pruebas específicas, ' +
        'linters, verificación de tipos, code scanning, secret scanning e IP scanning donde sea ' +
        'aplicable. Estas verificaciones proporcionan retroalimentación determinista dentro de ' +
        'un bucle de agente, mientras que la revisión humana verifica la intención, el diseño, ' +
        'la seguridad, la legibilidad y la mantenibilidad.',
      useCases: ['Agent Mode', 'TDD', 'Pipelines de CI'],
    },
    'trim-shell-outputs': {
      name: 'Recorta las salidas de shell (con cuidado)',
      path: 'Higiene del shell',
      description: 'Elimina el ruido conocido de comandos verbosos — pero la compresión general a menudo resulta contraproducente',
      details:
        'Las herramientas de CLI adoran la verbosidad. Un simple `npm install` o `terraform ' +
        'plan` puede volcar miles de líneas en el contexto del agente — la mayoría ruido. ' +
        'Envolver un comando ruidoso para que el agente solo vea la parte final relevante ' +
        '(errores, advertencias, el resumen final) puede ayudar. Dos proyectos de la comunidad ' +
        'ilustran diferentes formas de compresión: **Snip** (github.com/edouard-claude/snip) ' +
        'antepone comandos de shell — `snip -- npm install` — para filtrar la salida verbosa ' +
        'preservando los errores. **Caveman** (github.com/juliusbrussee/caveman) instruye al ' +
        'modelo a responder en un estilo comprimido y telegráfico. Trata la compresión agresiva ' +
        'con escepticismo porque la información perdida puede provocar relectura y corrección. ' +
        'Prefiere un recorte estrecho y determinista (elimina solo líneas de ruido conocido, ' +
        'mantén siempre los errores y el resumen) sobre los enfoques de «reducirlo todo», y mide ' +
        'el uso real de tokens antes de adoptar una herramienta.',
      useCases: ['Agente CLI', 'Salida de build', 'Ejecución de pruebas'],
    },
    'apply-architecture': {
      name: 'Aplica buena arquitectura',
      path: 'Código apto para agentes',
      description: 'Límites y nombres claros reducen la exploración innecesaria',
      details:
        'Límites de módulo claros, nombres descriptivos, convenciones locales y pruebas ' +
        'acotadas ayudan a las personas y a los agentes a encontrar el código correcto y validar ' +
        'cambios aislados. Elige la arquitectura para el producto y el equipo, no para una ' +
        'herramienta de IA; la eficiencia del agente es un efecto secundario útil.',
      useCases: ['Proyectos nuevos', 'Refactorización', 'Bases de código de equipo'],
    },
    'iterate-configs': {
      name: 'Trata los errores del agente como incidentes',
      path: 'Errores → Incidentes',
      description: 'Cuando el agente se equivoca, corrige la configuración — no solo la salida',
      details:
        'Trata un error significativo como un pequeño incidente. Identifica la causa raíz: ' +
        'directrices de proyecto faltantes, el skill o la herramienta equivocados, validación ' +
        'débil, o un problema de entorno. Codifica una corrección duradera en instrucciones, ' +
        'skills, pruebas o configuración para que el mismo fallo sea menos probable de repetirse. ' +
        'Los comandos chronicle se cubren por separado en la capa de gobernanza.',
      useCases: ['Workflows de equipo', 'Usuarios avanzados de CLI', 'Repositorios de larga duración'],
    },
    'project-map': {
      name: 'Dale a Copilot un mapa del proyecto',
      path: 'Mapa del proyecto',
      description: 'Un AGENTS.md / copilot-instructions.md mantenido evita que el agente lea decenas de archivos',
      details:
        'Sin una vista general estructural, el agente lee un gran número de archivos solo para ' +
        'orientarse — cada uno de ellos son tokens de entrada. Un mapa bien mantenido, como un ' +
        '`AGENTS.md` o `.github/copilot-instructions.md`, le da la disposición desde el inicio: ' +
        'dónde están las cosas, cómo se relacionan los módulos, los comandos de build/test/lint, ' +
        'y las convenciones clave. El agente gasta su presupuesto en el cambio real en lugar de ' +
        'en la exploración, produciendo sesiones más cortas y diffs más pequeños.',
      useCases: ['Incorporación', 'Repositorios grandes', 'Todas las interacciones'],
    },
    'preserve-cache': {
      name: 'Preserva la caché',
      path: 'Invalidación de caché',
      description: 'No cambies de modelo, nivel de razonamiento o toolset a mitad de sesión — invalida el caché',
      details:
        'El caché reutiliza el contexto grande y repetido (prompt del sistema, contenido de ' +
        'archivos, definiciones de herramientas) a través de los turnos, y los tokens en caché ' +
        'se facturan a ~10 % de la entrada normal. Tres cosas descartan eso y refacturan todo el ' +
        'contexto como entrada nueva: cambiar de modelo a mitad de sesión (un modelo no puede ' +
        'reutilizar el caché de otro), cambiar el nivel de razonamiento / tamaño de contexto / ' +
        'herramientas habilitadas a mitad de sesión, y volver a una sesión antigua después de que ' +
        'el caché expire (24 h para modelos de OpenAI, ~1 h para la mayoría de los demás). Elige ' +
        'tu modelo y configuración antes de empezar, mantenlos fijos, y en una sesión obsoleta ' +
        'inicia una nueva o usa `/compact` para que lo que se reconstruya sea un resumen corto, ' +
        'no todo el historial.',
      useCases: ['Sesiones largas', 'CLI', 'Optimización de costos'],
    },
    'cheaper-subagents': {
      name: 'Modelos más económicos para subagentes',
      path: 'Modelos de subagentes',
      description: 'Ejecuta los subagentes en modelos más ligeros — un contexto acotado rara vez necesita un modelo premium',
      details:
        'Los subagentes se ejecutan en su propia sesión y no heredan el historial de ' +
        'conversación del agente principal. Como su contexto está acotado a una única tarea ' +
        'específica, un modelo más ligero suele bastar para hacer bien el trabajo. Asignar uno a ' +
        'un subagente tampoco afecta al caché del agente principal como lo haría un cambio de ' +
        'modelo a mitad de sesión — así que ahorras en el trabajo del subagente sin pagar una ' +
        'penalización de reconstrucción de caché en el hilo principal.',
      useCases: ['Subagentes', 'Workflows orquestados', 'Optimización de costos'],
    },
    'chronicle-insights': {
      name: 'Extrae información de sesiones con /chronicle',
      path: 'Aprender de las sesiones',
      description: 'Convierte el historial de sesiones de Copilot CLI en resúmenes e ideas de workflow',
      details:
        'Usa `/chronicle standup` para resúmenes de trabajo, `/chronicle tips` para orientación ' +
        'de uso personalizada, `/chronicle cost tips` para retroalimentación sobre el gasto de ' +
        'tokens, `/chronicle search` para buscar sesiones, y `/chronicle improve` para ' +
        'sugerencias de instrucciones acotadas al repositorio. Las ideas se basan en datos de ' +
        'sesión de Copilot CLI. Revisa los controles de almacenamiento, sincronización y ' +
        'eliminación antes de usar el historial de sesión.',
      useCases: ['CLI', 'Gobernanza de equipo', 'Mejora continua'],
    },
    'session-limits': {
      name: 'Establece límites de créditos de IA por sesión',
      path: 'Barreras de sesión',
      description: 'Limita el trabajo autónomo de CLI y SDK antes de que comience una sesión',
      details:
        'Usa `--max-ai-credits` para ejecuciones de CLI no interactivas, `/limits set ' +
        'max-ai-credits` para sesiones de CLI interactivas, o `sessionLimits.maxAiCredits` en ' +
        'el SDK de Copilot. El uso se registra después de cada llamada al modelo, por lo que el ' +
        'valor configurado es un límite flexible que una sesión puede superar ligeramente, no ' +
        'un tope estricto. Los límites de sesión acotan el trabajo desatendido o de larga ' +
        'duración y complementan los presupuestos, alertas y la aprobación humana.',
      useCases: ['Copilot CLI', 'Copilot SDK', 'Trabajo autónomo'],
    },
    'mcp-governance': {
      name: 'Gobierna el acceso a MCP',
      path: 'Gobernanza de MCP',
      description: 'Selecciona los servidores y protege la configuración en las superficies compatibles',
      details:
        'Usa registros MCP aprobados y configuraciones de permiso o denegación de la empresa ' +
        'donde estén disponibles. Protege la configuración MCP del repositorio con controles de ' +
        'revisión y documenta los propietarios, alcances y acceso a datos de los servidores. La ' +
        'aplicación difiere entre los IDE, la CLI, la aplicación Copilot y el agente en la nube, ' +
        'así que trata los registros como gobernanza y descubrimiento en lugar de un límite de ' +
        'seguridad universal.',
      useCases: ['Gobernanza empresarial', 'Herramientas aprobadas', 'Acceso a datos'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>La calidad se compone.</strong> La fiabilidad hipotética por paso cae a lo ' +
        'largo de una cadena larga, así que usa alcances más pequeños y verificaciones ' +
        'deterministas. Los porcentajes mostrados son ilustraciones, no mediciones de Copilot.',
    },
    {
      icon: '💰',
      content:
        '<strong>Mantén el contexto ligero y relevante.</strong> Recorta archivos y salida de ' +
        'herramientas, inicia hilos nuevos para trabajo no relacionado, y usa contexto acotado ' +
        'para reducir el uso de créditos de IA.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Ajusta el modelo y el esfuerzo de razonamiento a la tarea.</strong> Usa el ' +
        'esfuerzo regular por defecto, auméntalo para problemas difíciles, y usa Auto cuando ' +
        'quieras un enrutamiento basado en intención.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Los bucles agénticos multiplican el trabajo.</strong> Define una condición de ' +
        'parada clara y usa límites de sesión para tareas desatendidas o extendidas.',
    },
    {
      icon: '📦',
      content:
        '<strong>Saca las directrices especializadas de las instrucciones amplias.</strong> Usa ' +
        'Skills para experiencia reutilizable y agentes personalizados para roles, herramientas ' +
        'o contexto aislado distintos.',
    },
  ],
};
