export type Locale = 'en' | 'fr' | 'es' | 'de' | 'ja';

export interface ComponentI18n {
  name: string;
  description: string;
  details: string;
  useCases: string[];
}

export interface LayerI18n {
  title: string;
  subtitle: string;
}

export interface InsightI18n {
  icon: string;
  content: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export type PageId = 'stack' | 'tools';

export interface Translations {
  locale: Locale;
  seo: SeoMeta;
  ui: {
    heroTitle: string;
    layerPrefix: string;
    insightsTitle: string;
    insightsSubtitle: string;
    detailsLabel: string;
    useCasesLabel: string;
    documentationLabel: string;
    footerBuiltFor: string;
    footerDocsLink: string;
    pageStack: string;
    pageTools: string;
    shareLink: string;
    shareCopied: string;
  };
  viz: {
    alwaysActive: string;
    loadsAutomatically: string;
    planning: string;
    implementation: string;
    review: string;
    descriptionRead: string;
    fullSkillInjected: string;
    approveDeny: string;

    pluginJson: string;
    marketplace: string;
    gitRepo: string;
    localPath: string;
  };
  layers: Record<string, LayerI18n>;
  components: Record<string, ComponentI18n>;
  insights: InsightI18n[];

  /* ── Tools page ── */
  toolsSeo: SeoMeta;
  toolsUi: {
    heroTitle: string;
    insightsTitle: string;
    insightsSubtitle: string;
    footerBuiltFor: string;
    footerDocsLink: string;
  };
  toolsViz: {
    interactive: string;
    programmatic: string;
    ghostText: string;
    tabToAccept: string;
    chatParticipants: string;
    slashCommands: string;
    chatVariables: string;
    analyze: string;
    edit: string;
    run: string;
    fix: string;
    local: string;
    cloud: string;
    issueAssigned: string;
    agentCodes: string;
    prCreated: string;
    securityChecks: string;
    addReviewer: string;
    reviewComments: string;
    suggestedFixes: string;
    selectAgent: string;
    askAnything: string;
    repoContext: string;
    webSearch: string;
  };
  toolsLayers: Record<string, LayerI18n>;
  toolsComponents: Record<string, ComponentI18n>;
  toolsInsights: InsightI18n[];
}
