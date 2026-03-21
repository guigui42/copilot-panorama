import { createContext, useContext } from 'react';
import type { Locale, Translations } from './types';
import { en } from './en';
import { fr } from './fr';
import { es } from './es';

export type { Locale, Translations } from './types';

export const translationsMap: Record<Locale, Translations> = { en, fr, es };

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
};

const STORAGE_KEY = 'copilot-infographic-locale';

export function getInitialLocale(): Locale {
  // Check URL parameter first (for hreflang links)
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'en' || langParam === 'fr' || langParam === 'es') return langParam;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'fr' || stored === 'es') return stored;
  const nav = navigator.language.slice(0, 2);
  if (nav === 'fr') return 'fr';
  if (nav === 'es') return 'es';
  return 'en';
}

export function persistLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.setAttribute('lang', locale);
}

/** Update document meta tags to match the current locale */
export function updateDocumentMeta(translations: Translations) {
  const { seo } = translations;
  document.title = seo.title;

  const setMeta = (attr: string, key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (el) {
      el.setAttribute('content', content);
    } else {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      el.setAttribute('content', content);
      document.head.appendChild(el);
    }
  };

  setMeta('name', 'description', seo.description);
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
}

export const I18nContext = createContext<Translations>(en);

export function useI18n(): Translations {
  return useContext(I18nContext);
}
