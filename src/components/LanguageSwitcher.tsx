import React from 'react';
import { LOCALE_LABELS } from '../i18n';
import type { Locale } from '../i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

const LOCALES = Object.keys(LOCALE_LABELS) as Locale[];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ locale, onChange }) => (
  <div className="lang-switcher" role="radiogroup" aria-label="Language">
    {LOCALES.map((loc) => (
      <button
        key={loc}
        className={`lang-btn ${loc === locale ? 'lang-btn--active' : ''}`}
        role="radio"
        aria-checked={loc === locale}
        onClick={() => onChange(loc)}
      >
        {LOCALE_LABELS[loc]}
      </button>
    ))}
  </div>
);

export default LanguageSwitcher;
