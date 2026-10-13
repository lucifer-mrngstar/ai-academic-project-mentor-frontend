# ProjectMentor AI — Frontend

Frontend starter for the Infosys **AI Academic Project Mentor** team project.

## Current scope

- Responsive landing page for the demo
- Student onboarding and skill-selection UI
- Project idea submission UI (2–3 sentence idea)
- Motion-powered, restrained UI animation
- Mock/local-only form states so the frontend can be developed before backend APIs are ready

**Important:** Forms are currently demo-only. They do not save to a database or call an AI model yet. Connect them after the backend team shares the Swagger/OpenAPI contract.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Motion for React
- Lucide React icons
- React Router installed for future routes

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## Git collaboration

1. Create a **public** repository on GitHub named `ai-academic-project-mentor-frontend`.
2. Do **not** initialize the GitHub repo with another README if you are pushing this starter as-is.
3. Extract this project folder, open a terminal inside it, then run:

```bash
git init
git add .
git commit -m "feat: add Milestone 1 frontend starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-academic-project-mentor-frontend.git
git push -u origin main
```

4. Share the repository link with the team. For the public repo, anyone can view and clone it; to push directly, teammates need write access. Add teammates in **Settings → Collaborators** or use pull requests from their own forks.
5. Agree on branch names and avoid everyone editing the same files at once. Suggested branches: `feat/onboarding`, `feat/project-submission`, `feat/api-integration`.

## Suggested team split

- Frontend owner: landing page, shared design system, integration coordination
- Teammate: onboarding and skill assessment improvements
- Teammate: project idea submission and API integration
- Teammate: AI/backend endpoints and OpenAPI contract
- Teammate: database/auth or testing/documentation (confirm the real team allocation together)

## Integration checklist

- [ ] Get the actual OpenAPI/Swagger document from the backend team
- [ ] Confirm API base URL, authentication, request/response schemas, and error formats
- [ ] Add environment variables to `.env.local` (never commit secrets)
- [ ] Replace local demo form handlers with API service functions
- [ ] Add loading, success, empty, and error states
- [ ] Test student and faculty access separately if role-based authentication is required

## UI library policy

This starter uses a custom design built on React, Tailwind CSS, Motion, and Lucide. Before copying in components from shadcn/ui, Aceternity UI, Magic UI, Kokonut UI, React Bits, or other repositories, verify current framework compatibility, dependencies, component-specific licensing, and attribution requirements.

## Security

- Never commit API keys, tokens, passwords, private `.env` files, or real student data.
- `.env*` files are ignored by Git; `.env.example` contains only a blank placeholder.
- A public repository makes its source code visible to everyone. Keep secrets and sensitive information out of it.
