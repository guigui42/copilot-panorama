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

export const I18nContext = createContext<Translations>(en);

export function useI18n(): Translations {
  return useContext(I18nContext);
}
