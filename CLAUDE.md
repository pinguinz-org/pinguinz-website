# pinguinz-website

## Role
WEB FE — pinguinz 공식 웹사이트 (정적 SPA)

## Stack
- React 19 + TypeScript 5.8 + Vite
- React Router v7 (HashRouter — GitHub Pages 호환)
- react-i18next (한국어 기본 + 영어)
- CSS custom properties (pinguinz design tokens)
- pnpm

## Structure
```
src/
├── components/     ← Header, Footer, ThemeToggle, LanguageToggle
├── pages/          ← Landing, Download, Docs
├── styles/         ← tokens.css, global.css, themes/
├── assets/         ← Images, icons
└── i18n/           ← config.ts, locales/{ko,en}/
```

## Design System
- Tokens: `src/styles/tokens.css` (SSOT: pinguinz-docs)
- Dark theme: Aurora Night (`data-theme="dark"`)
- Light theme: Arctic White (`data-theme="light"`)

## Commands
- `pnpm dev` — 개발 서버
- `pnpm build` — 프로덕션 빌드
- `pnpm deploy` — GitHub Pages 배포

## Coordination
- 작업 전/후 `pinguinz-docs/docs/coordination/board.md` 확인
- 보고 형식: `[WEB → PM]`
