# pinguinz-website · Claude 작업 지침

> **작업 시작 전 반드시 읽어라:**
> 1. 역할 정의 → `/Users/sim/Documents/github/pinguinz/pinguinz-docs/agents/WEB-website.md`
> 2. 코딩 규칙 → `/Users/sim/Documents/github/pinguinz/pinguinz-docs/docs/engineering/react-guidelines.md`

---

## 핵심 규칙 (항상 적용)

- **새 코드 품질에 집중한다.** 기존 코드의 문제는 건드리지 않고 기술부채로 별도 등록한다. (E 원칙)
- **충돌 시 스펙이 우선.** 해결 불가 시 board에 `[CONFLICT]` 태그로 PM 에스컬레이션. (D 원칙)
- **작업 전후로 board.md 확인** → `/Users/sim/Documents/github/pinguinz/pinguinz-docs/docs/coordination/board.md`
- 보고 형식: `[T-MMDD-NNN][WEB → PM]`
- **웹사이트=해요체** (PD 결정 2026-03-15). 반말 사용 금지
- 브랜드 톤 임의 변경 금지 — PM을 통해 PD 판단 요청
- **현재 작업**: board.md Inbox/Doing 섹션 참조

> **상세 참조 (필요 시)**
> - 리뷰 기준: `/Users/sim/Documents/github/pinguinz/pinguinz-docs/docs/engineering/code-review-guidelines.md`
> - 공통 운영 원칙 (전체): `/Users/sim/.claude/playbook/`

## Tech Stack

- React 19 + TypeScript 5.8 + Vite
- React Router v7 (HashRouter — GitHub Pages)
- react-i18next (한국어 기본 + 영어)
- CSS custom properties (pinguinz design tokens)
- pnpm

## Commands

- `pnpm dev` — 개발 서버
- `pnpm build` — 프로덕션 빌드
- `pnpm deploy` — GitHub Pages 배포

## Git 컨벤션

Conventional Commits. Scope: `landing`, `download`, `docs`, `releases`, `about`, `i18n`, `layout`
