export type Locale = 'en' | 'fr' | 'es' | 'de';

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
    markdownToActions: string;
    pluginJson: string;
    marketplace: string;
    gitRepo: string;
    localPath: string;
  };
  layers: Record<string, LayerI18n>;
  components: Record<string, ComponentI18n>;
  insights: InsightI18n[];
}
