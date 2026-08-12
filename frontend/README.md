# Cloud Academy frontend

The frontend is a React 19, TypeScript, Vite, and Tailwind CSS application.

## Architecture

```text
src/
  features/      Domain modules with pages, components, data, services, and types
  layouts/       Shared application shells
  shared/        Cross-feature navigation and theme UI
  lib/           Shared utilities
  styles/        Global tokens and styles
```

Course and quiz seed data lives in `features/*/data`. At runtime, typed repositories initialise browser local storage from that seed data. Both instructor management and student experiences use the same repositories, so local edits are reflected across the app.

## Local development

From the repository root, run:

```bash
npm install
npm run dev
```

The demo users are defined in `src/features/auth/data/users.ts`. This is a browser-only prototype: data is scoped to a browser profile and is not shared or secured by a backend.

## Quality checks

```bash
npm run lint
npm run test
npm run build
```
