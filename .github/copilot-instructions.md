# Copilot Instructions

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Type-check (`tsc -b`) then build with Vite
- `npm run lint` — ESLint across the project
- `npm run preview` — Preview production build locally

No test framework is configured.

## Architecture

Single-page React 19 + TypeScript infographic that visualizes GitHub Copilot's composable system as 4 layers of interactive cards. Built with Vite 8.

### Data flow

`App.tsx` is the root: it holds `locale` and `selectedComponent` state, wraps children in `I18nContext` and `LocaleContext`, and passes layer data down. Click handlers bubble up to `App` to open a `DetailPanel` modal. Theme and locale persist to `localStorage`.

### Key directories

- `src/components/` — Functional React components. `ComponentCard.tsx` renders per-component visualizations via a `switch` on `component.id`.
- `src/data/layers.ts` — Layer and component definitions. `getLayers(t)` builds the layer structure from `LAYER_DEFS`, `COMPONENT_META`, and the current translation object.
- `src/i18n/` — Custom i18n system with React Context. Three locales: `en`, `fr`, `es`. Translations are typed via `i18n/types.ts`.
- `src/hooks/` — `useTheme()` (dark/light with localStorage), `useIntersectionObserver()` (scroll-triggered animations), `useI18n()` (translation access).
- `src/styles/` — Plain CSS with GitHub Primer design tokens as CSS custom properties. `variables.css` defines the token system, `components.css` has all component styles, `animations.css` has keyframes.

## Conventions

### Styling

Plain CSS with CSS custom properties for theming — no CSS modules, Tailwind, or CSS-in-JS. Theme switching works by toggling `html[data-theme="light"|"dark"]` and redefining CSS variables. Responsive layout uses `clamp()` and media queries. Supports `prefers-reduced-motion`.

### i18n

All user-visible strings come from translation objects (`en.ts`, `fr.ts`, `es.ts`) accessed via `useI18n()`. When adding text, add keys to `i18n/types.ts` first, then provide translations in all three locale files.

### Naming

- Components: PascalCase files matching exported name (`Header.tsx` → `Header`)
- CSS classes: kebab-case (`.component-section`, `.layer-band`)
- Constants: UPPER_SNAKE_CASE (`COMPONENT_META`, `LAYER_DEFS`)
- Interfaces: PascalCase, props suffixed with `Props` (`HeaderProps`)

### TypeScript

Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`. Target is ES2023.
