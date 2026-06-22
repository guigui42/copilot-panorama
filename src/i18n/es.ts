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
    description: 'Guía visual interactiva de las herramientas de GitHub Copilot en tres capas: IDE (Autocompletado, Chat, Agent Mode, Agentes de terceros), Apps independientes (CLI, Copilot App) y Nube (Agente cloud, Agente de revisión, Agentes de terceros).',
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
    openSession: 'Abrir sesión',
    reviewDiff: 'Revisar diff',
    openPr: 'Abrir PR',
    inbox: 'Bandeja de entrada',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'Workflows',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'Apps independientes',
      subtitle: 'Aplicaciones de escritorio y terminal dedicadas al desarrollo agéntico',
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
    'copilot-app': {
      name: 'GitHub Copilot App',
      description: 'App de escritorio nativa para desarrollo agéntico — Inbox, Agentic Merge, sesiones paralelas y Workflows',
      details:
        'La aplicación GitHub Copilot es una aplicación de escritorio independiente (macOS, Windows, Linux) que ofrece ' +
        'a desarrolladores y roles adyacentes (PMs, diseñadores, QA) una experiencia GitHub-first para dirigir, ' +
        'monitorear, revisar y enviar trabajo impulsado por agentes. El Inbox agéntico muestra issues, PRs y sesiones ' +
        'en todos tus repos. Agentic Merge maneja la "última milla" — resolviendo comentarios de revisión, arreglando ' +
        'CI fallidos y gestionando conflictos de merge en tu nombre. Cada sesión se ejecuta en un worktree git aislado ' +
        'para verdadero desarrollo paralelo. Los Workflows permiten guardar prompts y ejecutarlos bajo demanda o ' +
        'programados, convirtiendo tareas recurrentes en patrones de automatización reutilizables. Actualmente en vista previa técnica.',
      useCases: ['Inbox agéntico y triaje', 'Agentic Merge (última milla)', 'Trabajo paralelo multi-sesión', 'Workflows repetibles', 'Colaboración roles adyacentes', 'Orquestación multi-repo'],
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
    title: 'Copilot Panorama — Consejos de eficiencia',
    description: 'Guía práctica para optimizar el uso de GitHub Copilot — gestión de tokens, diseño de prompts, alcance de contexto, selección de modelos y gobernanza.',
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
    perStep: 'por paso',
    steps: 'pasos',
    accuracy99: '99%',
    accuracy95: '95%',
    bePrecise: 'Sé preciso',
    stopSignals: 'Añade señales de parada',
    knownContext: 'Añade contexto conocido',
    lostInMiddle: 'Perdido en el medio',
    recencyBias: 'Sesgo de recencia',
    middleDecay: 'Los tokens del medio se degradan',
    startStrong: '✓ Inicio: buen recuerdo',
    middleLost: '✗ Medio: degradado',
    endStrong: '✓ Final: buen recuerdo',
    rawFiles: 'Pasar archivos en bruto a la IA',
    scriptOutput: 'Ejecutar script, pasar la salida',
    research: '/research',
    plan: '/plan',
    implement: '/fleet',
    withTests: 'Con tests unitarios',
    withoutTests: 'Sin tests unitarios',
    buggyChange: 'Cambio con bugs',
    silentMerge: 'Merge silencioso',
    brokenMain: 'Main rota',
    failingTests: 'Tests fallando',
    correction: 'Corrección',
    succeedingTests: 'Tests pasando',
    rawOutput: 'Salida cruda: 4.200 líneas',
    trimmed: 'Recortada: 38 líneas',
    multipleCalls: '5 llamadas secuenciales',
    batchedCall: '1 llamada agrupada',
    cleanLayers: 'Dominio → Aplicación → Infra',
    agentMiss: 'Fallo del agente',
    chronicle: '/chronicle',
    updateInstructions: 'Actualizar instrucciones',
  },
  tipsLayers: {
    mechanics: {
      title: 'Mecánica de tokens',
      subtitle: 'Entender los factores de coste detrás de cada interacción con Copilot',
    },
    pitfalls: {
      title: 'Trampas',
      subtitle: 'Modos de fallo que degradan silenciosamente la salida y consumen tokens',
    },
    prompting: {
      title: 'Prompting',
      subtitle: 'Escribir prompts que produzcan mejores resultados con menos tokens',
    },
    context: {
      title: 'Contexto',
      subtitle: 'Alimentar al modelo con exactamente lo que necesita — ni más, ni menos',
    },
    'workflow-design': {
      title: 'Diseño de workflow',
      subtitle: 'Estructurar el trabajo para que cada paso sea fiable y reproducible',
    },
    caching: {
      title: 'Caché',
      subtitle: 'Aprovechar el caché de prompts para interacciones más rápidas y económicas',
    },
    models: {
      title: 'Modelos',
      subtitle: 'Ajustar la capacidad del modelo a la complejidad de la tarea',
    },
    governance: {
      title: 'Gobernanza',
      subtitle: 'Supervisar el consumo y establecer límites a nivel de organización',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'Factores de coste de tokens',
      description: 'Los tokens de entrada, salida y lectura en caché son las tres dimensiones de facturación',
      details:
        'Con la facturación basada en tokens, cada interacción tiene tres componentes de coste: ' +
        'tokens de entrada/contexto (lo que envías), tokens de salida (lo que el modelo genera) ' +
        'y tokens de lectura en caché (más baratos pero igualmente medidos). Los tokens de entrada ' +
        'incluyen tu prompt, instrucciones del sistema, contexto de archivos y salidas de herramientas. ' +
        'Los tokens de salida son la respuesta del modelo. Los tokens de lectura en caché son la ' +
        'dimensión más barata — normalmente se facturan a ~10% del precio normal de entrada — ' +
        'por eso preservar el caché entre turnos importa. Comprender estas tres dimensiones es la ' +
        'base de la optimización de costes.',
      useCases: ['Todas las interacciones', 'Planificación de presupuesto', 'Análisis de costes'],
    },
    'agentic-cost': {
      name: 'Multiplicador de coste agéntico',
      description: 'Una sola solicitud agéntica puede desencadenar decenas de llamadas al modelo',
      details:
        'Las experiencias agénticas (Agent Mode, Cloud Agent, CLI) iteran por diseño: ' +
        'planificar → editar → ejecutar herramientas/tests → corregir → repetir. La misma ' +
        'intención del usuario puede variar drásticamente en consumo según el workflow. Un ' +
        'simple « corrige este bug » puede requerir 2 o más de 20 llamadas dependiendo de la ' +
        'complejidad, las salidas de herramientas y los bucles de recuperación de errores. ' +
        'Peor: los errores se acumulan — incluso al 99% por paso, un workflow de 50 pasos ' +
        'solo llega al ~60%. Por eso el diseño del workflow importa más que la longitud del prompt.',
      useCases: ['Agent Mode', 'Cloud Agent', 'CLI Agent'],
    },
    'context-discipline': {
      name: 'Disciplina de contexto',
      description: 'La optimización de costes es principalmente disciplina de contexto + diseño de workflow',
      details:
        'La mayor palanca de coste no es escribir prompts más cortos — es gestionar qué contexto ' +
        'alimenta cada llamada al modelo. Cada archivo adjunto, salida de herramienta y elemento ' +
        'del historial de conversación añade tokens de entrada. La gestión disciplinada del contexto ' +
        '(acotar archivos, recortar logs, iniciar nuevos hilos) tiene un impacto mucho mayor que ' +
        'reformular prompts.',
      useCases: ['Todos los workflows', 'Optimización de costes', 'Rendimiento'],
    },
    'quality-over-quantity': {
      name: 'Calidad sobre cantidad',
      description: 'Centrarse en contexto de alta calidad, no en más instrucciones',
      details:
        'Más instrucciones ≠ mejor salida. Una guía enfocada y de alta calidad reduce las salidas ' +
        'verbosas y dispersas. En lugar de largos preámbulos, dale al modelo exactamente el contexto ' +
        'que necesita: el código relevante, el requisito específico y restricciones claras. Los ' +
        'prompts más acotados también reducen las sesiones agénticas descontroladas donde el agente ' +
        'sigue iterando sin converger.',
      useCases: ['Chat', 'Agent Mode', 'Archivos de prompt'],
    },
    'fresh-threads': {
      name: 'Nuevos hilos de conversación',
      description: 'Inicia nuevas conversaciones cuando una decisión se ha entregado — evita la degradación del contexto',
      details:
        'Evita sesiones prolongadas donde las salidas de herramientas se acumulan en el contexto. ' +
        'Cada salida acumulada añade tokens de entrada a cada llamada posterior, y una vez que ' +
        'la ventana supera el ~50% de llenado, el modelo se inclina hacia los tokens más ' +
        'recientes (sesgo de recencia) y «pierde» los del medio. Una vez la decisión está ' +
        'integrada en un artefacto duradero (issue, PR, ADR, commit), inicia un nuevo hilo con ' +
        'contexto limpio. En Copilot CLI, `/new` (o `/clear`) inicia una conversación nueva; ' +
        'en Chat, abre una nueva sesión de chat.',
      useCases: ['Chat', 'Agent Mode', 'Sesiones CLI'],
    },
    'concise-instructions': {
      name: 'Minificar instrucciones',
      description: 'Mantener .github/copilot-instructions.md corto, estable y basado en principios',
      details:
        'Las instrucciones se cargan en cada conversación automáticamente — son contexto ' +
        'permanente. Mantén copilot-instructions.md corto y estable: principios, convenciones, ' +
        'reglas de « no hacer ». Cada línea extra añade tokens de entrada a cada interacción. ' +
        'Mueve las guías detalladas (playbooks, ejemplos, reglas de dominio) a Skills o archivos ' +
        'de prompt donde solo se cargan cuando es necesario.',
      useCases: ['Instrucciones', 'Optimización de costes', 'Todas las interacciones'],
    },
    'structure-for-reuse': {
      name: 'Estructurar para la reutilización',
      description: 'Usar Skills para guías pesadas, archivos de prompt para workflows repetitivos',
      details:
        'Coloca las guías pesadas (playbooks, ejemplos, reglas de dominio, runbooks) en Agent ' +
        'Skills para que solo se carguen cuando el prompt del usuario coincida. Coloca los ' +
        'workflows repetitivos (ej.: « escribir tests unitarios », « crear un ADR », « generar ' +
        'un changelog ») en archivos de prompt para que los usuarios no peguen instrucciones ' +
        'enormes cada vez. Esto mueve el contexto de permanente (costoso) a bajo demanda (eficiente).',
      useCases: ['Skills', 'Archivos de prompt', 'Workflows de equipo'],
    },
    'concise-answers': {
      name: 'Pedir menos',
      description: 'Solicitar la respuesta útil más pequeña para minimizar los tokens de salida',
      details:
        'Los tokens de salida son la dimensión más costosa. Pide la respuesta mínima útil: ' +
        '« Dame el diff mínimo + 3 puntos de justificación » en lugar de « explica todo ». ' +
        '« Listar solo cambios que rompen compatibilidad; omitir contexto » al hacer ' +
        'actualizaciones/migraciones. Salidas más pequeñas también significan respuestas más ' +
        'rápidas y menos ruido que leer.',
      useCases: ['Chat', 'Revisión de código', 'Migraciones'],
    },
    'scope-context': {
      name: 'Acotar el contexto intencionalmente',
      description: 'Usa #file o #selection para preguntas específicas, #codebase solo para cambios transversales',
      details:
        'Las referencias de chat (#file, #selection, #codebase) controlan exactamente lo ' +
        'que ve el modelo — y lo que pagas. Usa #file para preguntas específicas sobre un ' +
        'archivo concreto, #selection para un alcance aún más estrecho (solo las líneas ' +
        'resaltadas). Reserva #codebase para cambios transversales donde el modelo ' +
        'realmente necesita razonar sobre todo el proyecto. Lo mismo aplica a la salida ' +
        'de herramientas: adjunta solo la salida del test fallido, no los logs completos. ' +
        'El contexto específico es más barato, más rápido y suele producir mejores ' +
        'respuestas porque el modelo no se distrae con código irrelevante.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: 'Condicional en lugar de permanente',
      description: 'Preferir contexto que se carga solo cuando es relevante para la tarea actual',
      details:
        'El contexto permanente (copilot-instructions.md) se carga en cada conversación y cuesta ' +
        'tokens cada vez. El contexto condicional (Skills, instrucciones con alcance de ruta) solo ' +
        'se carga cuando es relevante. Mueve las guías especializadas a Skills donde el modelo ' +
        'decide cuándo cargarlas, o usa globs applyTo para que las instrucciones solo se apliquen ' +
        'a archivos coincidentes.',
      useCases: ['Instrucciones', 'Skills', 'Alcance por ruta'],
    },
    'apply-to-paths': {
      name: 'Usar rutas applyTo',
      description: 'Limitar instrucciones personalizadas a patrones de archivos específicos con globs applyTo',
      details:
        'Las instrucciones específicas de ruta (en .github/instructions/) soportan frontmatter ' +
        'glob applyTo. Esto significa que la instrucción solo se carga cuando el modelo trabaja ' +
        'en archivos coincidentes — ej.: applyTo: "**/*.test.ts" para convenciones de testing. ' +
        'Es contexto gratuito cuando no es relevante y contexto preciso cuando es necesario.',
      useCases: ['Instrucciones', 'Reglas de testing', 'Específico del framework'],
    },
    'skills-mcp': {
      name: 'Aprovechar Skills & MCP',
      description: 'Los Skills se cargan bajo demanda — pero los esquemas MCP cuestan en cada bucle',
      details:
        'Los Skills son descubiertos por el modelo según sus descripciones y cargan la guía ' +
        'completa en el contexto solo cuando es relevante. Los esquemas de herramientas de los ' +
        'servidores MCP, en cambio, se cargan como tokens estáticos en cada bucle — útiles, ' +
        'pero se acumulan. Para ciertos workflows, un simple comando CLI puede costar menos que ' +
        'la herramienta MCP equivalente. Escribe descripciones de skills claras y prefiere ' +
        'Skills/CLI a MCP pesados cuando el compromiso lo justifique.',
      useCases: ['Skills', 'Servidores MCP', 'Agentes personalizados'],
    },
    'context-command': {
      name: '/context in CLI',
      description: 'Vigila el contexto con /context; compacta sesiones largas con /compact en lugar de empezar de cero',
      details:
        'En Copilot CLI, usa `/context` para ver cuánto de tu ventana de contexto está consumido. ' +
        'Cuando una sesión crece mucho pero quieres continuar, ejecuta `/compact` para resumir ' +
        'el historial y reducir la ventana — opcionalmente con foco, por ejemplo `/compact focus on ' +
        'the auth module`. Cuando cambies a un problema no relacionado, empieza limpio con `/new` ' +
        'o `/clear`. Ser consciente del consumo de contexto te ayuda a decidir cuándo compactar, ' +
        'empezar de cero o continuar.',
      useCases: ['CLI', 'Sesiones largas', 'Gestión de contexto'],
    },
    'reuse-context': {
      name: 'Almacenar y reutilizar contexto',
      description: 'Cargar contexto compartido temprano para que las preguntas posteriores puedan referenciarlo de forma económica',
      details:
        'Almacena y reutiliza contexto dentro de tus prompts. Por ejemplo, carga un esquema de ' +
        'base de datos temprano en la conversación para que el trabajo posterior pueda reutilizarlo ' +
        '— haz preguntas específicas referenciando ese contexto en lugar de volver a pegarlo cada ' +
        'vez. Esto es especialmente efectivo en el CLI donde las sesiones pueden ser prolongadas y ' +
        'el prefijo compartido habilita el caché de prompts.',
      useCases: ['Sesiones CLI', 'Chat', 'Trabajo con esquemas'],
    },
    'prefix-matching': {
      name: 'Caché de prefijo de prompt',
      description: 'El caché de LLM depende de coincidencias exactas de prefijo — estructura tus prompts en consecuencia',
      details:
        'El caché de prompt de LLM (entre proveedores) generalmente depende de coincidencias ' +
        'exactas de prefijo. Por ejemplo, el caché de prompt de Azure OpenAI requiere prompts ' +
        '≥ 1.024 tokens y que los primeros 1.024 tokens sean idénticos para reutilizar el caché. ' +
        'Esto significa que los prompts de sistema e instrucciones estables al inicio de tu prompt ' +
        'tienen más probabilidad de acertar en el caché. Variar los preámbulos anula el caché.',
      useCases: ['Todas las interacciones', 'Optimización de costes', 'Rendimiento'],
    },
    'choose-right-model': {
      name: 'Elegir el modelo adecuado',
      description: 'Ajusta la capacidad a la tarea: modelos de razonamiento, intermedios o más ligeros',
      details:
        'La elección del modelo es una de las formas más rápidas de controlar el coste — usa tanta ' +
        'capacidad como requiera la tarea, y tan poca como sea necesario. Piensa en tres niveles: ' +
        'modelos de razonamiento para decisiones de arquitectura, depuración compleja y diseño de ' +
        'sistemas; modelos intermedios cuando el plan está claro y el agente solo necesita ejecutar; ' +
        'modelos más ligeros para refactorización, formateo, documentación y otros cambios rutinarios ' +
        'bien acotados. Usar por defecto el modelo más capaz para todo aumenta el consumo de tokens ' +
        'sin mejorar resultados — y abusar de modelos de razonamiento puede incluso reducir la calidad ' +
        'por sobrepensar la tarea.',
      useCases: ['Todas las interacciones', 'Planificación de presupuesto', 'Enrutamiento de tareas'],
    },
    'high-effort-tasks': {
      name: 'Premium para trabajo complejo',
      description: 'Usar modelos de alto esfuerzo para arquitectura profunda, depuración compleja, trabajo agéntico',
      details:
        'Reserva los modelos premium/de alto esfuerzo (Claude Opus, GPT-4.1, o3) para tareas que ' +
        'genuinamente necesiten razonamiento profundo: decisiones arquitectónicas complejas, ' +
        'depuración multi-archivo difícil, grandes workflows agénticos y revisión de código ' +
        'sensible a la seguridad. Estos modelos son más caros por token pero ahorran tiempo al ' +
        'acertar a la primera.',
      useCases: ['Arquitectura', 'Depuración', 'Revisión de seguridad', 'Agent Mode'],
    },
    'low-effort-tasks': {
      name: 'Mini para tareas simples',
      description: 'Usar por defecto modelos eficientes para resúmenes, Q&A rápido, pequeños refactors',
      details:
        'Usa modelos mini/eficientes (GPT-4.1 mini, Claude Haiku, Gemini Flash) como tu opción ' +
        'predeterminada para resúmenes, Q&A rápido, pequeños refactors y generación de código ' +
        'estándar. Estos modelos son significativamente más baratos por token y suficientemente ' +
        'rápidos para tareas simples. El ahorro se acumula rápidamente cuando la mayoría de tus ' +
        'interacciones son simples.',
      useCases: ['Resúmenes', 'Q&A', 'Refactoring', 'Código estándar'],
    },
    'auto-mode': {
      name: 'Usar modo Auto',
      description: 'Auto enruta cada prompt a un modelo eficiente, protege tu caché y obtiene un 10% de descuento',
      details:
        'Cuando no sepas qué modelo usar, selecciona « Auto ». Un pequeño router analiza tu prompt ' +
        'y lo envía al modelo que puede resolverlo de la forma más eficiente — reservando los modelos ' +
        'de razonamiento caros para problemas realmente complejos. Auto también protege tu caché: solo ' +
        'cambia de modelo en límites naturales (una sesión nueva o después de `/compact`), nunca a mitad ' +
        'de tarea. En planes Copilot de pago, usar selección automática de modelo obtiene un 10% de ' +
        'descuento en costes de modelo en Chat, CLI y el agente cloud. Un buen valor predeterminado ' +
        'para la mayoría de workflows.',
      useCases: ['Workflow predeterminado', 'Tareas mixtas', 'Nuevos usuarios'],
    },
    'monitor-usage': {
      name: 'Definir presupuestos de usuario',
      description: 'Definir presupuestos por usuario con valores predeterminados adecuados por persona',
      details:
        'Define presupuestos por usuario con valores predeterminados adecuados por persona: ' +
        'ingeniero IC vs usuario avanzado vs agente CI. Comienza con límites conservadores y ' +
        'ajusta según el consumo observado. Monitoriza patrones de alto consumo — una sola sesión ' +
        'agéntica puede consumir más tokens que una semana de interacciones de chat. Usa el panel ' +
        'de administración para identificar valores atípicos y ajustar.',
      useCases: ['Admin', 'Control de presupuesto', 'Gobernanza de equipo'],
    },
    'compound-errors': {
      name: 'Errores que se acumulan',
      description: 'Incluso al 99% por paso, un workflow de 50 pasos solo llega al ~60%',
      details:
        'La fiabilidad por paso se multiplica a lo largo de un bucle agéntico. Al 99% por ' +
        'paso, un workflow de 50 pasos termina en 0,99⁵⁰ ≈ 60%. Bájalo al 95% y el mismo ' +
        'workflow solo tiene ~8% de probabilidad de éxito de principio a fin. Por eso la ' +
        '«apuesta agéntica» — esperar que una salida de baja calidad acabe funcionando — ' +
        'no escala. Cada mejora en la calidad por paso (mejores prompts, menor alcance, ' +
        'verificaciones deterministas) se multiplica a lo largo de todo el workflow.',
      useCases: ['Agent Mode', 'Cloud Agent', 'Workflows orquestados'],
    },
    'prompt-anatomy': {
      name: 'Anatomía del prompt',
      description: 'Sé preciso · añade señales de parada · añade contexto conocido',
      details:
        'Los agentes iteran por diseño: planificar → editar → ejecutar herramientas → corregir → ' +
        'repetir. Sin límites, seguirán hasta tener éxito (o agotar el contexto). Tres ingredientes ' +
        'fiables de un prompt efectivo los mantienen en la carretera: (1) Sé preciso — describe el ' +
        'cambio en términos claros y sin ambigüedad, incluyendo el resultado esperado. ' +
        '(2) Añade señales de parada — «detente tras el primer test exitoso», «propón como máximo ' +
        '2 alternativas», «no refactorices código no relacionado». (3) Añade el contexto conocido ' +
        'por adelantado — nombra los archivos, carpetas o docs relevantes para que el agente no ' +
        'gaste tokens buscando. Combinado con barreras deterministas (tests, linters), esto evita ' +
        'sesiones descontroladas.',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'context-rot': {
      name: 'Degradación del contexto',
      description: 'Las sesiones largas se degradan — las salidas acumuladas envenenan cada llamada posterior',
      details:
        'Cada salida de herramienta, archivo adjunto y turno de conversación se acumula en ' +
        'el contexto. Al pasar del ~50% de llenado, ocurren dos cosas: los costes de entrada ' +
        'se disparan (cada llamada posterior reenvía todo el historial) y el modelo se apoya ' +
        'fuertemente en los tokens más recientes (sesgo de recencia), perdiendo las decisiones ' +
        'tomadas antes. Mitigaciones: recortar salidas verbosas, transferir decisiones ' +
        'intermedias a artefactos duraderos (issues, PRs, ADRs), e iniciar hilos nuevos antes ' +
        'de que la degradación se instale.',
      useCases: ['Sesiones largas', 'Agent Mode', 'Sesiones CLI'],
    },
    'lost-in-middle': {
      name: 'Perdido en el medio',
      description: 'Los tokens en el medio de un contexto largo se recuerdan peor',
      details:
        'Un modo de fallo documentado: cuando el contexto es largo, los modelos recuerdan ' +
        'fielmente los tokens del principio y del final, pero se degradan en los del medio. ' +
        'Incluso con una ventana de 200k, enterrar una instrucción crítica en la línea 4.000 ' +
        'de 8.000 la vuelve efectivamente invisible. Mitigaciones: prompts cortos, instrucciones ' +
        'críticas al principio o al final, y dividir los inputs largos en bloques focalizados ' +
        'en vez de un solo mega-documento.',
      useCases: ['Prompts grandes', 'Documentos largos', 'Revisiones multi-archivo'],
    },
    'think-in-code': {
      name: 'Pensar en código',
      description: 'Prefiere scripts antes que pasar archivos en bruto',
      details:
        'Cuando necesites entender 10.000 líneas de logs o un JSON enorme, no lo pegues ' +
        'todo. Escribe (o pide al agente que escriba) un pequeño script que extraiga solo ' +
        'lo importante — recuentos, errores, el fragmento relevante — y pásale al agente la ' +
        'salida del script. Esto colapsa miles de tokens de entrada en docenas y mantiene ' +
        'al modelo enfocado en la pregunta real. Funciona igual con grep, jq, awk o un ' +
        'script Python de 20 líneas.',
      useCases: ['Análisis de logs', 'Exploración de datos', 'Archivos grandes'],
    },
    'research-plan-implement': {
      name: 'Investigar → Planificar → Implementar',
      description: 'Encadena tres etapas enfocadas con el modelo adecuado para cada una',
      details:
        'Divide un cambio no trivial en tres relevos en lugar de un mega-prompt. ' +
        '(1) Investigar: un modelo rápido y amplio (Gemini 2.5 Pro) explora el código e ' +
        'identifica los archivos relevantes. (2) Planificar: un modelo de razonamiento ' +
        'profundo (Opus) convierte esa investigación en una especificación precisa. ' +
        '(3) Implementar: un modelo eficiente (GPT-5.4 / Sonnet) aplica la spec al código. ' +
        'Cada etapa recibe solo el contexto necesario, y los errores por etapa no se ' +
        'acumulan en un bucle descontrolado. En Copilot CLI esto se mapea a `/research` → ' +
        '`/plan` → implementar; planifica siempre con un modelo de razonamiento fuerte, ' +
        'luego implementa con uno más barato, iniciando una sesión nueva entre fases para ' +
        'no arrastrar contexto innecesario.',
      useCases: ['Refactors complejos', 'Cambios transversales', 'Edición multi-archivo'],
    },
    'deterministic-guardrails': {
      name: 'Barreras deterministas',
      description: 'Tests unitarios, linters y escaneos evitan que los malos cambios se acumulen',
      details:
        'Los LLM son probabilísticos — pero los tests, linters y type-checkers no. Con ' +
        'tests en su sitio, un cambio con bugs produce tests que fallan, que el agente ve ' +
        'y corrige en el siguiente bucle. Sin tests, el agente acumula bugs en varios ' +
        'cambios antes de que nadie se dé cuenta — minutos de CI perdidos, ciclos de ' +
        'revisión perdidos, debug humano perdido. Tests + linters + escaneo de secretos ' +
        'es la forma más barata de dar al agente una señal de retorno fiable.',
      useCases: ['Agent Mode', 'TDD', 'Pipelines CI'],
    },
    'trim-shell-outputs': {
      name: 'Recortar salidas de shell (con cuidado)',
      description: 'Elimina ruido conocido de comandos verbosos — pero la compresión indiscriminada suele salir mal',
      details:
        'Las CLI adoran ser verbosas. Un solo `npm install` o `terraform plan` puede ' +
        'volcar miles de líneas al contexto del agente — la mayoría ruido. Envolver un ' +
        'comando ruidoso para que el agente solo vea la cola relevante (errores, warnings, ' +
        'el resumen final) puede ayudar. Dos Agent Skills comunitarios hacen esto: **Snip** ' +
        '(github.com/edouard-claude/snip) prefija comandos shell — `snip -- npm install` — ' +
        'para filtrar la salida verbosa preservando errores. **Caveman** ' +
        '(github.com/juliusbrussee/caveman) instruye al modelo a responder en estilo ' +
        'comprimido y telegráfico. ⚠️ Pero trata la compresión agresiva con escepticismo: ' +
        'las evals de practitioners (incluyendo tests internos de Copilot de compresión de ' +
        'contexto estilo RTK / "Headroom") fueron neutras en el mejor caso y a menudo ' +
        'aumentaron el uso total de tokens. La compresión elimina información que el agente ' +
        'necesita después, lo que provoca una relectura — terminando por costar más tokens ' +
        'y latencia, no menos. Prefiere recortes estrechos y deterministas (elimina solo ' +
        'líneas de ruido conocido, conserva siempre errores y el resumen) frente a enfoques ' +
        'indiscriminados de "reducir todo", y mide el uso real de tokens antes de adoptar ' +
        'una herramienta — si suena demasiado bueno para ser verdad, normalmente lo es.',
      useCases: ['Agente CLI', 'Salida de build', 'Test runs'],
    },
    'collapse-tool-calls': {
      name: 'Agrupar llamadas de herramientas',
      description: 'Múltiples invocaciones en una — menos ida y vuelta, menos tokens',
      details:
        'Cada llamada de herramienta añade un round-trip completo: tokens de entrada para ' +
        'la petición, tokens de salida para el resultado, más el prompt del sistema que se ' +
        'reproduce cada vez. Plugins como jsturtevant/copilot-codeact-plugin permiten al ' +
        'agente expresar varias invocaciones en un único bloque «code-act» ejecutado de ' +
        'una vez. Cinco llamadas pequeñas se convierten en una agrupada — mismo resultado, ' +
        'muchos menos tokens y más rápido.',
      useCases: ['Agent Mode', 'CLI', 'Tareas multi-paso'],
    },
    'apply-architecture': {
      name: 'Aplicar buena arquitectura',
      description: 'DDD, hexagonal, CQRS — fronteras claras ayudan al agente a orientarse',
      details:
        'Una base de código desordenada obliga al agente a cargar mucho más contexto para ' +
        'hacer un cambio seguro. Los patrones de arquitectura limpia (DDD, hexagonal/ports-' +
        'and-adapters, CQRS, event-driven) le dan al agente buenas barreras: encuentra el ' +
        'módulo correcto por nombre, lo cambia aislado, evita tocar código no relacionado. ' +
        'El resultado: sesiones más cortas, diffs más pequeños, menos errores acumulados — ' +
        'las mismas cosas que ayudan a los humanos.',
      useCases: ['Proyectos nuevos', 'Refactorización', 'Bases de código de equipo'],
    },
    'iterate-configs': {
      name: 'Tratar los fallos del agente como incidentes',
      description: 'Cuando el agente se equivoca, arregla la config — no solo la salida',
      details:
        'Un agente que se desvía es una señal, no solo un incidente aislado. Trata cada ' +
        'fallo significativo como un pequeño incidente: ¿qué faltaba — una instrucción, un ' +
        'skill, el modelo adecuado? Actualiza copilot-instructions.md, el skill relevante ' +
        'o tu plantilla de prompt para que el mismo fallo no vuelva a ocurrir. El CLI ' +
        'de Copilot incluye dos comandos para esto: `/chronicle improve` analiza tu ' +
        'sesión actual y sugiere mejoras de workflow; `/chronicle tips` saca a la luz ' +
        'patrones de tu historial. Ejecútalos regularmente — con el tiempo, el agente ' +
        'se vuelve notablemente más fiable sin más trabajo por tarea.',
      useCases: ['Workflows de equipo', 'Usuarios avanzados de CLI', 'Repos a largo plazo'],
    },
    'project-map': {
      name: 'Dale a Copilot un mapa del proyecto',
      description: 'Un AGENTS.md / copilot-instructions.md mantenido evita que el agente lea decenas de archivos',
      details:
        'Sin una visión estructural, el agente lee grandes cantidades de archivos solo para ' +
        'orientarse — y cada uno son tokens de entrada. Un mapa bien mantenido, como un ' +
        '`AGENTS.md` o `.github/copilot-instructions.md`, le da la estructura desde el inicio: ' +
        'dónde vive cada cosa, cómo se relacionan los módulos, comandos de build/test/lint y ' +
        'convenciones clave. El agente gasta su presupuesto en el cambio real en lugar de en ' +
        'exploración, produciendo sesiones más cortas y diffs más pequeños.',
      useCases: ['Onboarding', 'Repos grandes', 'Todas las interacciones'],
    },
    'preserve-cache': {
      name: 'Preservar el caché',
      description: 'No cambies modelo, nivel de razonamiento ni toolset a mitad de sesión — invalida el caché',
      details:
        'El caché reutiliza el contexto grande y repetido (prompt del sistema, contenido de archivos, ' +
        'definiciones de herramientas) entre turnos, y los tokens cacheados se facturan a ~10% de ' +
        'la entrada normal. Tres cosas lo descartan y vuelven a facturar el contexto completo como ' +
        'entrada nueva: cambiar de modelo a mitad de sesión (un modelo no puede reutilizar el caché ' +
        'de otro), cambiar nivel de razonamiento / tamaño de contexto / herramientas habilitadas a ' +
        'mitad de sesión, y volver a una sesión antigua después de que expire el caché (24h para ' +
        'modelos OpenAI, ~1h para la mayoría de los demás). Elige modelo y ajustes antes de empezar, ' +
        'mantenlos fijos y, en una sesión caducada, empieza de nuevo o usa `/compact` para que se ' +
        'reconstruya un resumen corto, no todo el historial.',
      useCases: ['Sesiones largas', 'CLI', 'Optimización de costes'],
    },
    'cheaper-subagents': {
      name: 'Modelos más baratos para subagentes',
      description: 'Ejecuta subagentes con modelos más ligeros — el contexto acotado rara vez necesita un modelo premium',
      details:
        'Los subagentes se ejecutan en su propia sesión y no heredan el historial de conversación ' +
        'del agente principal. Como su contexto está limitado a una tarea enfocada, un modelo más ' +
        'ligero suele bastar para hacer bien el trabajo. Asignar uno a un subagente tampoco toca ' +
        'el caché del agente principal como lo haría un cambio de modelo a mitad de sesión — así ' +
        'ahorras en el trabajo del subagente sin pagar una penalización de reconstrucción de caché ' +
        'en el hilo principal.',
      useCases: ['Subagentes', 'Workflows orquestados', 'Optimización de costes'],
    },
    'chronicle-insights': {
      name: 'Minar sesiones con /chronicle',
      description: 'Usa /chronicle tips y /chronicle cost-tips para convertir el historial de sesiones en ahorro',
      details:
        'Tu historial de sesiones es una fuente gratuita de insights de eficiencia. En Copilot CLI, ' +
        '`/chronicle tips` analiza sesiones recientes y muestra formas de usar Copilot con más ' +
        'eficiencia, mientras `/chronicle cost-tips` profundiza en tus patrones de uso de tokens y ' +
        'en dónde se van los créditos. Cuando detecte un patrón recurrente — una herramienta que se ' +
        'usa demasiado, un prompt que se malinterpreta una y otra vez — codifica esa observación ' +
        'directamente en `copilot-instructions.md` para que un insight puntual se convierta en guía ' +
        'permanente para cada sesión futura.',
      useCases: ['CLI', 'Gobernanza de equipo', 'Mejora continua'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>La calidad se acumula.</strong> Incluso al 99% por paso, un workflow ' +
        'agéntico de 50 pasos solo llega al ~60%. Al 95% por paso es el 8%. Las mejoras ' +
        'por paso se multiplican — haz que cada token cuente.',
    },
    {
      icon: '💰',
      content:
        '<strong>Contexto &gt; prompts para el coste.</strong> Gestionar qué contexto alimenta ' +
        'cada llamada al modelo tiene un impacto mucho mayor que optimizar la redacción del ' +
        'prompt. Recorta archivos, inicia nuevos hilos, usa contexto condicional.',
    },
    {
      icon: '🎯',
      content:
        '<strong>Ajustar el modelo a la tarea.</strong> No uses un modelo premium para un simple ' +
        'Q&A, ni un modelo mini para arquitectura compleja. Usa Auto en caso de duda — enruta ' +
        'automáticamente.',
    },
    {
      icon: '🔄',
      content:
        '<strong>Los bucles agénticos multiplican el coste.</strong> Una sola solicitud agéntica ' +
        'puede desencadenar decenas de llamadas. Añade señales de parada explícitas ' +
        '(«detenerse tras el primer test exitoso») para evitar el consumo descontrolado.',
    },
    {
      icon: '📦',
      content:
        '<strong>De permanente a bajo demanda.</strong> Mantén las instrucciones mínimas. Las ' +
        'guías pesadas pertenecen a Skills (cargadas por el modelo cuando es relevante) y a ' +
        'archivos de prompt (invocados explícitamente), no a copilot-instructions.md.',
    },
  ],
};
