# AGENTS.md

Guidance for coding agents working in this repository.

## Project Overview

Element Plus is a Vue 3 UI component library written in TypeScript. This repo is a pnpm workspace monorepo.

## Repository Map

- `packages/components`: individual Element Plus components.
  - Component source usually lives in `src/`.
  - Tests live in `__tests__/`.
  - Style entry files live in `style/`.
- `packages/theme-chalk`: component SCSS and theme output.
- `packages/hooks`, `packages/utils`, `packages/constants`, `packages/directives`, `packages/locale`: shared runtime packages.
- `packages/element-plus`: package entry and bundle surface.
- `docs`: VitePress documentation site.
- `play`: local playground used for manual component testing.
- `internal`: build, metadata, lint, and workspace tooling.
- `dist`: generated output. Do not edit generated files by hand unless the task explicitly requires it.

## Common Commands

- Install dependencies: `pnpm install`
- Start playground: `pnpm dev`
- Start docs site: `pnpm docs:dev`
- Run all tests: `pnpm test`
- Run a focused test file: `pnpm test packages/components/<component>/__tests__/<file>.test.tsx`
- Run lint: `pnpm lint`
- Fix lint issues: `pnpm lint:fix`
- Run type checks: `pnpm typecheck`
- Build package output: `pnpm build`
- Build theme only: `pnpm build:theme`
- Build docs: `pnpm docs:build`
- Format repo: `pnpm format`

## Development Notes

- Prefer existing component patterns over new abstractions. Look at nearby components before changing structure.
- Keep changes scoped to the requested behavior. Avoid unrelated refactors and formatting churn.
- For component changes, check whether related props, emitted events, exposed types, styles, tests, and docs need updates.
- Use the workspace packages and existing aliases such as `@element-plus/*` instead of introducing new local paths casually.
- Avoid adding dependencies unless the task clearly needs them and the existing toolchain cannot cover it.
- Use `play/src/App.vue` for quick manual repros, but keep playground-only edits out of final changes unless requested.

## Tests

- Tests use Vitest and Vue Test Utils.
- Put component tests under `packages/components/<component>/__tests__/`.
- Prefer focused regression tests for bug fixes.
- Update snapshots only when the rendered output change is intentional.
- When touching shared utilities, hooks, or cross-component behavior, run the relevant focused tests plus a broader check when practical.

## Documentation And API

- Public API changes should include matching docs updates under `docs`.
- When documenting a new API, always add a version tag using the existing docs style, unless the user explicitly asks otherwise. Fetch the latest Element Plus version from the newest GitHub Release tag, strip any leading `v`, then calculate the version tag from that version: increment the patch version for non-breaking changes; increment the minor version and reset the patch version to zero for breaking changes. For example, from `2.10.0`, use `2.10.1` for a non-breaking change and `2.11.0` for a breaking change.
- Keep prop, event, slot, and expose typings in sync with implementation behavior.
- Locale-facing text should go through the existing locale package patterns.

## Git And Review Hygiene

- Do not commit, push, or open pull requests unless explicitly asked.
- Do not revert user changes or unrelated work in the tree.
- If a commit is requested, use the existing conventional commit flow; `pnpm cz` is available.
- Before committing, ensure formatting, lint, typecheck, and test all pass.
- Before finishing, report the commands you ran and any checks you could not run.
