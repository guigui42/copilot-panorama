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
};
