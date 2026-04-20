import type { Translations } from './types';

export const es: Translations = {
  locale: 'es',
  seo: {
    title: 'Copilot Panorama — .github/ Stack',
    description: 'Guía visual interactiva del sistema composable de GitHub Copilot — explora las 4 capas: Contexto Permanente, Capacidades Bajo Demanda, Control & Automatización, y Distribución.',
  },
  ui: {
    heroTitle: 'stack composable',
    layerPrefix: 'CAPA',
    insightsTitle: 'Cómo funciona realmente el sistema',
    insightsSubtitle: 'Claves arquitectónicas que la mayoría de equipos pasa por alto',
    detailsLabel: 'Detalles',
    useCasesLabel: 'Casos de uso',
    documentationLabel: 'Documentación',
    footerBuiltFor: 'Creado para usuarios de GitHub Copilot',
    footerDocsLink: 'Documentación completa del sistema composable',
    pageStack: '.github/ Stack',
    pageTools: 'Copilot Everywhere',
    shareLink: 'Compartir enlace',
    shareCopied: '¡Copiado!',
  },
  viz: {
    alwaysActive: 'Siempre activo',
    loadsAutomatically: '— se carga en cada conversación automáticamente',
    planning: 'Planificación',
    implementation: 'Implementación',
    review: 'Revisión',
    descriptionRead: 'description leída del frontmatter de SKILL.md',
    fullSkillInjected: 'SKILL.md completo inyectado en el contexto si es relevante',
    approveDeny: 'aprobar / denegar',

    pluginJson: 'plugin.json',
    marketplace: 'Marketplace',
    gitRepo: 'Repositorio Git',
    localPath: 'Ruta local',
  },
  layers: {
    'always-on-context': {
      title: 'Contexto permanente',
      subtitle: 'Memoria pasiva cargada en cada conversación automáticamente',
    },
    'on-demand-capabilities': {
      title: 'Capacidades bajo demanda',
      subtitle: 'Invocadas explícitamente por el desarrollador o seleccionadas por el modelo',
    },
    'enforcement-automation': {
      title: 'Control & Automatización',
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
      description: 'Memoria pasiva que se aplica automáticamente a cada prompt',
      details:
        'Las instrucciones son la base de la personalización de Copilot. Se cargan ' +
        'PRIMERO y son memoria pasiva permanente. Coloca las convenciones globales en ' +
        '`.github/copilot-instructions.md` e instrucciones específicas por ruta en ' +
        '`.github/instructions/NOMBRE.instructions.md` (con frontmatter `applyTo`). ' +
        'Son orientativas — guían al modelo pero no imponen comportamiento de forma ' +
        'determinista.',
      useCases: ['Estándares de código', 'Reglas de framework', 'Convenciones del repo'],
    },
    'prompt-files': {
      name: 'Prompt Files',
      description: 'Invocados manualmente mediante comandos slash',
      details:
        'Los archivos de prompts son plantillas reutilizables invocadas con comandos ' +
        'slash (ej. `/security-review`, `/release-notes`). Permiten a los equipos ' +
        'estandarizar prompts comunes para que cada desarrollador obtenga resultados ' +
        'consistentes y de alta calidad en tareas recurrentes.',
      useCases: ['API Review', 'Perf Audit', 'Onboarding Guide'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'Personas especializadas con sus propias herramientas y servidores MCP',
      details:
        'Los agentes personalizados son personas especializadas definidas en Markdown ' +
        'con frontmatter YAML. Cada perfil especifica una `description`, lista de ' +
        '`tools`, `mcp-servers` opcionales y preferencia de `model`. Los agentes ' +
        'pueden encadenarse mediante la propiedad `handoffs` — ej. un agente de ' +
        'planificación pasa a uno de implementación, que pasa a uno de revisión. ' +
        'El LLM lee las descripciones para decidir qué agente activar.',
      useCases: ['Auditor de seguridad', 'Especialista en BD', 'Diseñador de API'],
    },
    skills: {
      name: 'Skills',
      description: 'Carpetas autónomas de instrucciones, scripts y recursos — cargadas automáticamente por el LLM cuando es relevante',
      details:
        'A diferencia de otras funciones bajo demanda invocadas por el usuario, los skills ' +
        'son seleccionados autónomamente por el LLM. Cada skill es una carpeta con un ' +
        'archivo `SKILL.md` (nombre + descripción en frontmatter YAML, instrucciones en ' +
        'Markdown) más scripts y recursos opcionales. El modelo lee las descripciones para ' +
        'decidir cuáles activar — solo entonces se inyecta el `SKILL.md` completo en el ' +
        'contexto. No requiere acción del usuario. Almacena skills de proyecto en ' +
        '`.github/skills/<nombre>/` y personales en `~/.copilot/skills/<nombre>/`.',
      useCases: ['Módulos Terraform', 'Manifiestos K8s', 'Stack de observabilidad'],
    },
    hooks: {
      name: 'Hooks',
      description: 'Comandos shell deterministas en 6 eventos del ciclo de vida',
      details:
        'Los hooks son la ÚNICA primitiva determinista del sistema Copilot. Se disparan ' +
        'en seis puntos del ciclo de vida: `sessionStart`, `sessionEnd`, ' +
        '`userPromptSubmitted`, `preToolUse`, `postToolUse` y `errorOccurred`. ' +
        'El hook `preToolUse` puede aprobar o denegar ejecuciones de herramientas ' +
        'antes de que ocurran. Define hooks en un archivo JSON en `.github/hooks/` ' +
        'con `version: 1`. A diferencia de las instrucciones (orientativas), los hooks ' +
        'son coercitivos.',
      useCases: ['Puertas de conformidad', 'Control de acceso a archivos', 'Registro de auditoría'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'Automatización de repositorios con agentes IA, ejecutados en GitHub Actions con protecciones',
      details:
        'Los workflows agénticos son archivos Markdown con frontmatter YAML (permisos, ' +
        'safe-outputs, triggers) compilados a GitHub Actions mediante la extensión CLI ' +
        '`gh aw`. Define automatización en lenguaje natural — programa reportes diarios, ' +
        'clasifica issues, analiza fallos CI o mantén la documentación. Se ejecutan con ' +
        'permisos de solo lectura por defecto; las escrituras requieren aprobación ' +
        'explícita vía safe-output. Ejecución en sandbox con filtrado de herramientas ' +
        'y aislamiento de red. Compatible con GitHub Copilot, Claude u OpenAI Codex.',
      useCases: ['Triaje de issues', 'Análisis de fallos CI', 'Reportes diarios'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'Workflow de GitHub Actions que preconfigura el entorno del agente cloud',
      details:
        'Copilot Setup Steps es un workflow especial de GitHub Actions ubicado en ' +
        '`.github/workflows/copilot-setup-steps.yml` que se ejecuta antes de que el agente ' +
        'cloud comience a trabajar. Úsalo para instalar de forma determinista ' +
        'herramientas, dependencias o configurar el runner — para que el agente pueda ' +
        'compilar, probar y ejecutar linters de inmediato sin prueba y error. También puedes ' +
        'escalar a runners más potentes, cambiar a Windows, habilitar Git LFS o definir ' +
        'variables de entorno mediante el entorno de Actions `copilot`. El workflow debe ' +
        'contener un único job `copilot-setup-steps` y solo surte efecto cuando está presente ' +
        'en la rama por defecto.',
      useCases: ['Preinstalar dependencias', 'Runners más potentes', 'Variables de entorno'],
    },
    plugins: {
      name: 'Plugins',
      description: 'Paquetes instalables que agrupan agentes, skills, hooks y configs MCP',
      details:
        'Los plugins son paquetes distribuibles que extienden Copilot CLI. Cada plugin ' +
        'puede contener agentes, skills, hooks, configs de servidores MCP y configs de ' +
        'servidores LSP. Instala desde marketplaces registrados (como `copilot-plugins` ' +
        'o `awesome-copilot`), directamente desde un repositorio Git o desde una ruta ' +
        'local. Crea tu propio marketplace para compartir stacks específicos de equipo.',
      useCases: ['Reutilización entre proyectos', 'Estandarización de equipo', 'Distribución marketplace'],
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Las instrucciones se cargan PRIMERO</strong> — son memoria pasiva permanente. ' +
        'Cada prompt las ve antes de que se active cualquier otra cosa.',
    },
    {
      icon: '🧩',
      content:
        '<strong>Los skills se cargan bajo demanda</strong> — Copilot lee solo la ' +
        '<code>description</code> del frontmatter de SKILL.md. El archivo completo se inyecta ' +
        'en el contexto solo cuando el modelo decide que el skill es relevante para tu prompt.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Los hooks son la única primitiva determinista.</strong> Las instrucciones ' +
        'son orientativas. Los hooks son coercitivos — 6 eventos incluyendo <code>preToolUse</code> ' +
        'que puede aprobar o denegar ejecuciones de herramientas.',
    },
    {
      icon: '🔀',
      content:
        '<strong>El LLM es el enrutador.</strong> No hay un orquestador separado — el ' +
        'modelo lee las descripciones de agentes y el frontmatter de skills para decidir ' +
        'qué activar. Por eso escribir buenas descripciones es fundamental.',
    },
  ],

  /* ── Tools page ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'Guía visual interactiva de las herramientas de GitHub Copilot en tres capas: Terminal (CLI), IDE (Autocompletado, Chat, Agent Mode, Agentes de terceros) y Nube (Agente cloud, Agente de revisión, Agentes de terceros).',
  },
  toolsUi: {
    heroTitle: 'Copilot Everywhere',
    insightsTitle: 'Distinciones clave que la mayoría de desarrolladores pasa por alto',
    insightsSubtitle: 'Claves arquitectónicas a través de las tres capas',
    footerBuiltFor: 'Creado para usuarios de GitHub Copilot',
    footerDocsLink: 'Documentación completa de las funciones de Copilot',
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
    issueAssigned: 'Issue asignado',
    agentCodes: 'El agente codifica',
    prCreated: 'PR creado',
    securityChecks: 'Comprobaciones de seguridad',
    addReviewer: 'Añadir revisor',
    reviewComments: 'Comentarios de revisión',
    suggestedFixes: 'Correcciones sugeridas',
    selectAgent: 'Seleccionar agente',
    askAnything: 'Pregunta lo que sea',
    repoContext: 'Contexto del repositorio',
    webSearch: 'Búsqueda web',
  },
  toolsLayers: {
    terminal: {
      title: 'Terminal',
      subtitle: 'Agente de codificación con IA directamente en tu línea de comandos',
    },
    ide: {
      title: 'IDE',
      subtitle: 'Sugerencias inline, chat, edición autónoma y agentes de terceros en tu editor',
    },
    cloud: {
      title: 'Nube',
      subtitle: 'Agentes autónomos en la plataforma GitHub — codificación, revisión y terceros',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      description: 'Un agente IA completo en tu terminal — sesiones interactivas, edición de archivos e integración con GitHub',
      details:
        'GitHub Copilot CLI te permite usar Copilot directamente desde tu terminal. Inicia una ' +
        'sesión interactiva con `copilot` o pasa un prompt con `copilot -p "..."`. ' +
        'Puede editar archivos locales, ejecutar comandos shell, interactuar con GitHub.com ' +
        '(crear PRs, issues, gestionar workflows) y trabajar de forma iterativa contigo. ' +
        'Soporta Plan Mode (Shift+Tab) para implementación estructurada, servidores MCP, ' +
        'agentes personalizados, skills, hooks y compactación automática de contexto para ' +
        'sesiones infinitas.',
      useCases: ['Entrega Issue-to-PR', 'Modernización de código legacy', 'Ejecución paralela Fleet', 'Triaje y planificación del backlog', 'Desarrollo agnóstico de editor', 'Automatización'],
    },
    autocomplete: {
      name: 'Autocomplete',
      description: 'Sugerencias de código como texto fantasma que aparecen inline mientras escribes',
      details:
        'Copilot ofrece sugerencias de autocompletado mientras escribes — cuerpos de funciones ' +
        'completos, bucles, condicionales y más según el contexto de tu código. Navega entre ' +
        'alternativas con Alt+] / Alt+[, acepta palabra por palabra con Ctrl+→ o acepta la ' +
        'sugerencia completa con Tab. Next Edit Suggestions (NES) predicen la ubicación de tu ' +
        'próxima edición y sugieren completados para ella. Disponible en VS Code, Visual Studio, ' +
        'JetBrains IDEs, Azure Data Studio, Xcode, Vim/Neovim y Eclipse.',
      useCases: ['Completado de código', 'Generación de boilerplate', 'Completado de patrones', 'Comentario a código'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      description: 'Chat conversacional con IA para preguntas, explicaciones y generación de código',
      details:
        'Copilot Chat ofrece una interfaz conversacional para preguntas sobre código. Usa ' +
        'participantes de chat (@workspace, @github, @terminal), comandos slash (/fix, /explain, ' +
        '/tests, /doc) y variables de chat (#file, #selection, #web) para un contexto preciso. ' +
        'El participante @github permite búsqueda web, consulta de issues y análisis de PRs. ' +
        'Soporta múltiples modelos de IA — cambia en cualquier momento con el selector de modelo. ' +
        'Disponible en VS Code, Visual Studio, JetBrains, Eclipse, Xcode, GitHub.com y GitHub Mobile.',
      useCases: ['Explicación de código', 'Depuración', 'Generación de tests', 'Refactorización', 'Aprendizaje'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      description: 'Codificación autónoma local — Copilot determina archivos, realiza ediciones, ejecuta comandos e itera',
      details:
        'Agent Mode permite a Copilot editar tu código de forma autónoma dentro del IDE. ' +
        'Determina qué archivos cambiar, realiza ediciones multi-archivo, sugiere y ejecuta ' +
        'comandos de terminal e itera para corregir errores hasta completar la tarea. Soporta ' +
        'integración con servidores MCP, subagentes para subtareas delegadas y agentes ' +
        'personalizados. Solo se facturan tus prompts — las llamadas a herramientas de ' +
        'seguimiento son gratuitas. Distinto del agente cloud (capa Nube), que se ' +
        'ejecuta en GitHub Actions.',
      useCases: ['Tareas complejas', 'Implementación multi-paso', 'Resolución de errores', 'Automatización de builds'],
    },
    'third-party-agents-ide': {
      name: '3rd-Party Agents',
      description: 'Agentes Claude y Codex ejecutándose en VS Code con sus SDKs nativos',
      details:
        'Los agentes de terceros de Anthropic (Claude) y OpenAI (Codex) se ejecutan directamente ' +
        'en VS Code usando el SDK nativo y el entorno de agente de cada proveedor. Elige entre ' +
        'sesiones locales (en tu workspace) o sesiones en la nube (entorno remoto). Claude soporta ' +
        'comandos slash (/agents, /hooks, /memory, /review, /security-review), modos de permisos ' +
        '(editar automáticamente, solicitar aprobación, planificar) y contexto persistente vía ' +
        'CLAUDE.md. Todo se factura a través de tu suscripción a Copilot — sin configuración ' +
        'separada del proveedor.',
      useCases: ['Codificación autónoma', 'Revisión de seguridad', 'Funciones específicas del proveedor', 'Tareas en segundo plano'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      description: 'IA conversacional en GitHub.com — pregunta sobre repositorios, issues, PRs y la web',
      details:
        'Copilot Chat en GitHub.com te permite hacer preguntas desde cualquier página — sobre un ' +
        'repositorio, un issue, un PR o temas generales de software. Utiliza skills para obtener ' +
        'contexto de GitHub (búsqueda de código, historial de commits, detalles de issues) y ' +
        'opcionalmente la búsqueda web de Bing para información actualizada. Soporta selección ' +
        'multi-modelo, subconversaciones para ramificar discusiones, generación de archivos con ' +
        'vista previa e historial de conversaciones (hasta 100 hilos, retención de 28 días). ' +
        'También disponible en GitHub Mobile.',
      useCases: ['Preguntas sobre repos', 'Análisis de issues', 'Comprensión de PRs', 'Búsqueda web', 'Generación de código'],
    },
    'coding-agent': {
      name: 'Cloud Agent',
      description: 'Agente autónomo en la nube — asigna un issue y obtén un PR con comprobaciones de seguridad',
      details:
        'El agente cloud de Copilot trabaja de forma independiente en un entorno ' +
        'basado en GitHub Actions. Asigna un issue a @copilot, menciónalo en un PR o pregunta ' +
        'desde Chat — evalúa la tarea, realiza cambios, ejecuta tests y linters, realiza ' +
        'análisis de seguridad con CodeQL, comprueba secretos y crea un PR borrador para ' +
        'revisión. Soporta instrucciones personalizadas, servidores MCP, agentes personalizados, ' +
        'hooks, skills y Copilot Memory. Solo hace push a ramas `copilot/`. Disponible en ' +
        'Pro, Pro+, Business y Enterprise.',
      useCases: ['Corrección de bugs', 'Implementación de funcionalidades', 'Cobertura de tests', 'Deuda técnica', 'Campañas de seguridad'],
    },
    'review-agent': {
      name: 'Review Agent',
      description: 'Revisor de código con IA con contexto completo del proyecto y correcciones sugeridas',
      details:
        'La revisión de código de Copilot analiza pull requests y proporciona comentarios con ' +
        'cambios sugeridos que puedes aplicar con un clic. Usa capacidades agénticas para ' +
        'recopilar contexto completo del proyecto — analiza todo tu repositorio para comprender ' +
        'los cambios de código. Puede configurarse para revisar automáticamente todos los PRs. ' +
        'Soporta instrucciones personalizadas vía .github/copilot-instructions.md y reglas ' +
        'específicas por ruta. Disponible en GitHub.com, GitHub Mobile, VS Code, Visual Studio, ' +
        'Xcode y JetBrains.',
      useCases: ['Calidad de código', 'Revisión de seguridad', 'Buenas prácticas', 'Flujo de PRs', 'Gobernanza de equipo'],
    },
    'third-party-agents-cloud': {
      name: '3rd-Party Agents',
      description: 'Anthropic Claude y OpenAI Codex como agentes de codificación en la nube en GitHub',
      details:
        'Los agentes de codificación de terceros trabajan junto al agente cloud de ' +
        'Copilot en la plataforma GitHub. Actualmente soporta Anthropic Claude (Claude Agent SDK) ' +
        'y OpenAI Codex (Codex SDK). Asigna issues, inicia tareas desde la pestaña Agents, ' +
        'menciona @NOMBRE_AGENTE en PRs o inicia sesiones desde VS Code y GitHub Mobile. Sujeto ' +
        'a las mismas protecciones de seguridad que el agente cloud de Copilot. Cada ' +
        'sesión consume una solicitud premium más minutos de GitHub Actions. Actualmente en ' +
        'vista previa pública.',
      useCases: ['Flujos multi-agente', 'Comparación de agentes', 'Tareas especializadas', 'Desarrollo en paralelo'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Agente cloud.</strong> Agent Mode se ejecuta localmente ' +
        'en tu IDE — tú mantienes el control. El agente cloud se ejecuta en GitHub ' +
        'Actions en la nube — trabaja de forma independiente y crea un PR cuando termina.',
    },
    {
      icon: '🧠',
      content:
        '<strong>Los agentes de terceros existen tanto en IDE como en la Nube.</strong> En VS Code, ' +
        'Claude y Codex usan sus SDKs nativos localmente. En GitHub, se ejecutan como agentes ' +
        'en la nube junto al agente cloud de Copilot.',
    },
    {
      icon: '💬',
      content:
        '<strong>El modo Ask es el punto de partida.</strong> Los participantes de chat (@workspace), ' +
        'comandos slash (/fix) y variables (#file) te permiten acotar tus preguntas con precisión ' +
        'antes de escalar a Agent Mode para trabajo autónomo.',
    },
    {
      icon: '🔒',
      content:
        '<strong>Los agentes en la nube tienen seguridad integrada.</strong> El agente ' +
        'cloud ejecuta CodeQL, escaneo de secretos y comprobaciones de dependencias ' +
        'automáticamente. Solo puede hacer push a ramas <code>copilot/</code> y siempre ' +
        'crea PRs borrador.',
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
    verboseInstructions: 'Instrucciones largas y detalladas…',
    scopedContext: 'Contexto preciso y acotado',
    chat: 'Chat',
    shipToPr: 'Enviar al PR',
    freshThread: 'Hilo nuevo',
    principlesBrief: 'Solo principios. Breve.',
    heavy: 'Pesado',
    skills: 'Skills',
    repetitive: 'Repetitivo',
    promptFiles: 'Archivos Prompt',
    minimalDiff: 'Diff mínimo + 3 puntos',
    alwaysOn: 'Siempre activo',
    costly: 'costoso',
    onDemand: 'Bajo demanda',
    efficient: 'eficiente',
    modelReads: 'El modelo lee',
    descriptionLabel: 'la descripción',
    loadsIfRelevant: 'Carga el skill completo si es relevante',
    loadOnce: 'Cargar el esquema una vez',
    reuseInQueries: 'Reutilizar en consultas posteriores',
    tokenPrefixMatch: '≥1024 tokens coinciden',
    prefixDiffers: 'prefijo diferente',
    standard: 'Estándar',
    architecture: 'Arquitectura',
    debugging: 'Depuración',
    agentic: 'Agéntico',
    summarize: 'Resumir',
    qa: 'Preguntas',
    refactorLabel: 'Refactoring',
    simpleToMini: 'Simple → mini',
    complexToPremium: 'Complejo → premium',
    icEng: 'Ing. IC',
    powerUser: 'Power user',
    ciAgent: 'Agente CI',
    stopAfterTest: 'Parar tras el primer test exitoso',
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
