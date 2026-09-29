# Parking System — Frontend

Web app for the smart parking platform with a 3D lot view (OJT project). The backend is in [parking-system-be](https://github.com/FA26-OJT-SmartParking/parking-system-be).

Development happens on the `develop` branch. `main` only receives tested sprint releases.

## Tech stack

| Part | Technology |
|---|---|
| Framework | Next.js 16 (App Router) with React 19 and TypeScript |
| Styling | Tailwind CSS 4 |
| 3D | Three.js |
| Real-time | SignalR client (`@microsoft/signalr`) |
| Tests | Jest, ESLint, `tsc` type check |

## Requirements

- Node.js 20.9 or newer (CI uses Node 24)
- The backend running through Docker Compose, with the camera simulator: `docker compose --profile sim up` in `parking-system-be/deploy`

## Run

```
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The sample page draws 10 slots (A-01 to A-10) in 3D and recolors them as the backend pushes `slotStatusChanged` events through the gateway (green: available, red: occupied, gray: no data yet).

## Configuration

| Variable | Meaning | Default |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Backend gateway URL. Bundled into the browser code, so never put secrets here. | `http://localhost:8088` |

## Scripts

| Command | What |
|---|---|
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check without emitting files |
| `npm test` | Jest |

## Layout

| Path | Content |
|---|---|
| `src/app/` | Routes and layout |
| `src/components/parking/` | 3D lot and the sample dashboard |
| `src/hooks/` | `useSlotStatuses`: SignalR connection and latest slot statuses |
| `src/lib/` | Configuration and small helpers with tests |

## Team workflow

Branches, commits and pull requests follow the mentor's guide: `main`, `develop`, `features/Implementation_<UserStory>`, `features/Design_<UserStory>` (Figma), `hotfix/Bug_<UserStory>`, `release/sprint_x`. Commits are in English, one change per commit; pull requests go to `develop` using the template in `.github/`. Details: `docs/workflow.md` in the backend repository.

## Team

To be added.
