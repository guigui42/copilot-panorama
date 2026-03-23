import { createContext } from 'react';
import type { Locale } from './i18n';
import type { PageId } from './i18n/types';

export const LocaleContext = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({
  locale: 'en',
  setLocale: () => {},
});

export const PageContext = createContext<{ page: PageId; setPage: (p: PageId) => void }>({
  page: 'stack',
  setPage: () => {},
});
